<template>
    <el-dialog :model-value="dialogFormVisible" :before-close="beforeClose" title="备注" width="1200"
        class="dialog-format">
        <el-form-item label="备注">
            <el-input v-model="data_remark" placeholder="请输入......" @click="showDropdown = true" @input="filterData" />
            <ul v-if="showDropdown">
                <li v-for="item in filteredData" :key="item" @click="selectItem(item)">{{ item }}</li>
            </ul>
        </el-form-item>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancel()">取消</el-button>
                <el-button type="primary" @click="handleConfirm()">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, reactive } from 'vue';
import { EI } from "EIX/ei";
import { ER } from "ERX/Er";
const erFormHelper: ER.FormHelper = new ER.FormHelper();
const props = defineProps({
    dialogFormVisible: Boolean,
    formData: Object,
})
const formInline = reactive({
    ORDER_NO: '',
    HEAT_NO: '',
    NOW_ROW:''
})
watch(() => props, (newValue) => {
    console.log('111', newValue);
    // 当 formData 变化时更新 formInline
    formInline.ORDER_NO = newValue.formData!.ORDER_NO;
    formInline.HEAT_NO = newValue.formData!.HEAT_NO;
    formInline.NOW_ROW = newValue.formData!.NOW_ROW;
    data_remark.value = newValue.formData!.REMARK;
    data.values = newValue.formData!.datalist;
    filteredData.value = newValue.formData!.datalist;
}, { deep: true });
const emits = defineEmits(["handleClose"])
const beforeClose = () => {
    emits("handleClose");
}
const handleConfirm = async () => {
    const inInfo = new EI.EIInfo();


    inInfo.addBlock(erFormHelper.buildEiBlock([{
        FACTORY_DIV: 'S2N',
        PROC_DIV: 'U11',
        TABLE_NAME_1: 'QMTS0RXYS2N',
        ORDER_NO: formInline.ORDER_NO,
        HEAT_NO: formInline.HEAT_NO,
        NOW_ROW: formInline.NOW_ROW,
        REMARK: data_remark.value
    }]), 'PARA')

    console.log('iuhgbhjkolp[]', inInfo)
    const outInfo = await erFormHelper.callService('qmts0r_pro1', inInfo, false, true, true);

    if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('操作成功！');
    }
    data_remark.value = '';
    emits("handleClose");
}
const handleCancel = () => {
    data_remark.value = '';
    emits("handleClose");
}
const data_remark = ref('');
const data = [''];
const filteredData = ref(['']);
const filterData = () => {
    filteredData.value = data.filter(item => item.toLowerCase().includes(data_remark.value.toLowerCase()));
    showDropdown.value = true;
};
const showDropdown = ref(false);
const selectItem = (item: any) => {
    data_remark.value = item;
    showDropdown.value = false;
}
</script>

<style lang="scss" scoped></style>

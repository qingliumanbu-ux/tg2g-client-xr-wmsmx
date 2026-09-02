/* eslint-disable no-use-before-define */
import {
    defineComponent,
    onMounted,
    ref,
    reactive,
    computed,
    nextTick,
    toRaw,
    Ref,
} from "vue";
import { EI, EIManager } from "EIX/ei";
import { ER } from "ERX/Er";
import { SiUtils } from "ERX/SiUtils";
import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";
import { Console } from "console";

export default defineComponent({
    name: '',
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid,
    },
    setup: () => {
        // 获取画面的分区信息及设置画面初始化service
        const efFormInfo = ref<{ [key: string]: any }>({});
        let formPartition: string;
        let formName_Now: string;
        const initializeService = 'wm00_form_get';

        // 变量定义
        let formName = 'WMSMBBRY';
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const layout = ref();
        const gridview = ref();
        const callService_f2 = ref();
        const callService_f3 = ref();
        const callService_f4 = ref();
        const ifview = ref<boolean>(false);


        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区
            formName_Now = efFormInfo.value.formName;
            formName_Now = formName_Now.substring(0, formName_Now.length - 3)
            console.log('formName_Now', formName_Now);
            layout.value = 'LayoutGroupQuery_' + String(formName_Now).substring(4);
            gridview.value = 'GridView_' + String(formName_Now).substring(4);
            callService_f2.value = String(formName_Now).toLowerCase() + '_inq';
            callService_f3.value = String(formName_Now).toLowerCase() + '_f3';
            callService_f4.value = String(formName_Now).toLowerCase() + '_f4';
            console.log(layout, gridview, String(formName_Now), callService_f2);
            initializePage();
        };
        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(
                formPartition,
                formName,
                '',
                initializeService
            );

            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    // 获取画面上的主要控件信息
                });
            } else {
                erFormHelper.messageError(
                    'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
                );
            }
        };

        onMounted(() => {

        });

        const F2_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();

            inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock(layout.value));
            console.log(inInfo.getBlock(0).data)
            const outInfo = await erFormHelper.callService(callService_f2.value, inInfo, true, true);
            console.log('uytgfdsz', outInfo)
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess();
                erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, gridview.value);

                return true;

            } else {
                return false;
            }
        };


        return {
            erFormHelper,
            initializeFlag,
            F2_DO, ifview,
            layout,
            gridview, efFormReady
        };
    }
});

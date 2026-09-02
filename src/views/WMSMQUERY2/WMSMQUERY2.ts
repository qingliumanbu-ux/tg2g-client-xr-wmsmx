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
import EFCallForm from 'EFX/EFCallForm';

import { useRoute } from "vue-router";
import { Console } from "console";

export default defineComponent({
    name: 'WMSMQUERY2',
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid, EFCallForm,
    },
    setup: () => {
        // 获取画面的分区信息及设置画面初始化service
        console.log('开始');
        const efFormInfo = ref<{ [key: string]: any }>({});

        let formPartition: string;

        let formName_Now: string;
        const initializeService = ''; //画面布局配置获取


        // 变量定义
        const formName = 'WMSMQUERY2';
        const keyStr = '';
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const layout = ref();
        const gridview = ref(); //主表
        const gridview1 = ref(); //子表
        const mainviewName = ref('');
        const subviewName = ref('');
        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区
            formName_Now = efFormInfo.value.formName; // 当前画面名
            formName_Now = formName_Now.substring(0, formName_Now.length - 3)
            layout.value = 'LayoutGroupQuery_' + String(formName_Now).substring(4);
            gridview.value = 'GridView_' + String(formName_Now).substring(4) + '01';
            gridview1.value = 'GridView_' + String(formName_Now).substring(4) + '02';
            console.log('dfghyuiop', layout, gridview, gridview1, String(formName_Now), efFormInfo);

            if (efFormInfo.value.formParams?.MainviewName)
                mainviewName.value = efFormInfo.value.formParams['MainviewName'];

            if (efFormInfo.value.formParams?.SubviewName)
                subviewName.value = efFormInfo.value.formParams['SubviewName'];

            initializePage();
        };


        console.log('subviewName', subviewName);
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
            //initializePage();
        });
        // 查询主表明细信息
        const queryMainGrid = async () => {
            //清空grid数据
            console.log('F2查询开始');
            erFormHelper.clearGridData(gridview.value);
            const inInfo = new EI.EIInfo();
            //获取查询条件dt
            const Query = erFormHelper.getAllControlValueAsEiBlock(layout.value);
            inInfo.addBlock(Query);
            console.log('inInfo', inInfo);
            const service_name = String(formName_Now).toLowerCase().toString() + '_inq';
            const outInfo = await erFormHelper.callService(service_name, inInfo, true,false, true);
            console.log(outInfo.getBlock(0).data.length);
            if (outInfo.sys.status >= 0) {
                // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
                erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridview.value);
            } else {
                erFormHelper.messageError(outInfo.sys.msg);
            }
        };
        // 查询子表明细信息
        const queryDetailInfo = async (currentRowInfo: any) => {
            //

            const eiInfo4 = new EI.EIInfo();
            const eiBlock4 = new EI.EiBlock();
            // eiInfo4.addBlock(ErUtils.buildEiBlock(currentRowInfo));
            eiInfo4.addBlock(eiBlock4);
            eiBlock4.pushData({ ...currentRowInfo }, true);
            console.log('eiInfo4', eiInfo4);
            console.log('currentRowInfo', currentRowInfo);
            const service_name = String(formName_Now).toLowerCase().toString() + '_inq1';
            const outInfo4 = await erFormHelper.callService(service_name, eiInfo4, true,false, true);
            if (outInfo4.sys.status < 0) {
                erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
            } else {
                erFormHelper.mergeEiBlockToGrid(outInfo4.getBlock(0), gridview1.value);
            }
        };

        // 主表焦点行事件-查询子表明细信息
        const GridView1FocusChanged = async (e: any) => {
            if (e) {
                if (e.data && e.rowChanged) {
                    if (e.data) {
                        const currentRow = erFormHelper.getGridCurrentRow(gridview.value, true, true);
                        console.log('currentRow', currentRow);
                        queryDetailInfo(currentRow);
                    }
                }
            }
        };
        const F2_DO = async (e: any) => {
            queryMainGrid();
        };
        const F3_DO = async (e: any) => {
            EFCallForm('WMSM12BS2N', {});
        };

        return {
            erFormHelper,
            initializeFlag,
            F2_DO,
            layout,
            gridview,
            gridview1,
            GridView1FocusChanged,
            mainviewName,
            subviewName, efFormReady, F3_DO
        };
    }
});

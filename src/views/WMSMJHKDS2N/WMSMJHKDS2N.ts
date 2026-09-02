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
    watch,
} from "vue";
import { EI, EIManager } from "EIX/ei";
import { ER } from "ERX/Er";
import { SiUtils } from "ERX/SiUtils";
import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";

import { useRoute } from "vue-router";
import { Console } from "console";

export default defineComponent({
    name: 'WMSMJHKDS2N',
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
        const initializeService = 'wm00_form_get';

        // 变量定义
        const formName = 'WMSMJHKDS2N';
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const gridToolbar: Ref<any[]> = ref([]);
        const showFlag1 = ref(0);
        const showFlag2 = ref(0);
        const showFlag3 = ref(0);

        let gridView1!: any;
        let gridView2!: any;
        const i_factory_div = ref('');
        const i_mat_shape_flag = ref('');
        const i_default = ref('');
        const i_formName = ref('');


        // 自定义工具栏按钮功能
        const InitialToolbar = () => {
            // gridToolbar.value = erFormHelper.getGridToolbar([
            //   { name: 'excel', visible: true }
            //   // { name: 'addrow', visible: false },
            //   // { name: 'copyrow', visible: false },
            //   // { name: 'delete', visible: false },
            //   // { name: 'save', visible: false },
            //   // { name: 'cancel', visible: false }
            // ]);
        };
        const erGrid1Ready = () => {
            //不可编辑

            gridView1 = erFormHelper.getGrid("GridView1");

            erFormHelper.setGridEditable("GridView1", false);

        }


        // 初始化画面配置
        const InitPage = async () => {

        };
        const efFormReady = (e: any) => {

            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区


            initializePage();
        };
        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(
                formPartition,
                formName,
                '',
                initializeService,

            );
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;
                //初始化工具栏
                InitialToolbar();

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    // 获取画面上的主要控件信息

                    InitPage();
                });
            } else {
                erFormHelper.messageError(
                    'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
                );
            }
        };

        // F2查询
        const Query = async () => {
            const inInfo = new EI.EIInfo();
            inInfo.blocks.clear;

            console.log(inInfo);
            const outInfo = await erFormHelper.callService('wmsmjhkd_inq', inInfo, false, true);
            console.log(outInfo);
            erFormHelper.mergeDataToLayoutOrGrid(outInfo.getBlock(0), true, 'GridView1');
            erFormHelper.autoBestFit('GridView1');

        };



        onMounted(() => {

        });


        const grid1ToolbarVisible = (flag: boolean, config: string) => {

            erFormHelper.setGridEditable(config, flag);

            erFormHelper.setGridToolbarVisible(config, { 'copyrow': flag });
            erFormHelper.setGridToolbarVisible(config, { 'addrow': flag });

            //erFormHelper.setGridToolbarVisible(config, { 'delete': flag });



        };

        const F2_DO = async (e: any) => {
            Query();
        };
        const F3_DO = async (e: any) => {

            erFormHelper.stopGridEditing('GridView1', async () => {
                const inInfo = new EI.EIInfo();

                inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView1'));


                const outInfo = await erFormHelper.callService('wmsmjhkd_pro', inInfo, true, true, true);
                if (outInfo.sys.status >= 0) {
                    erFormHelper.messageSuccess('操作成功');

                    erFormHelper.setGridEditable('GridView1', false);

                    Query();
                    return true;
                } else {
                    // erFormHelper.messageError('操作失败');
                    return false;
                }
            })



        };
        const F3_PRE_DO = async (e: any) => {

            //erFormHelper.setGridColumnEditable('GridView1', true, ...['BACK_N_1', 'BACK_N_2', 'BACK_C1'])
            erFormHelper.setGridEditable('GridView1', true);
            erFormHelper.setGridColumnEditable('GridView1', false, ...['CODE_DESC_1_CONTENT'])
        };
        const F3_CANCEL = async (e: any) => {
            erFormHelper.setGridEditable('GridView1', false);

            Query();
        };


        return {
            erFormHelper,
            initializeFlag,
            gridToolbar,
            showFlag1,
            showFlag2,
            showFlag3,
            F2_DO,
            F3_DO,
            F3_PRE_DO,
            F3_CANCEL,

            efFormReady, erGrid1Ready
        };
    }
});

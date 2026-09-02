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
    name: 'WMSMDBSX',
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
        const formName = 'MMSM33DBSXS2N';
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
        const erGrid2Ready = () => {
            //不可编辑

            gridView2 = erFormHelper.getGrid("GridView2");

            erFormHelper.setGridEditable("GridView2", false);
           
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
            inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter'));
            console.log(inInfo);
            const outInfo = await erFormHelper.callService('mmsm33dbsx_inq', inInfo, false, true);
            console.log(outInfo);
            erFormHelper.mergeDataToLayoutOrGrid(outInfo.getBlock(0), true, 'GridView1');
            erFormHelper.mergeDataToLayoutOrGrid(outInfo.getBlock(1), true, 'GridView2');
            erFormHelper.autoBestFit('GridView1');
            erFormHelper.autoBestFit('GridView2');
        };
        const gridFocusChanged = async (e: any) => {
            console.log(e);
           
        };


        onMounted(() => {

        });


       

        const F2_DO = async (e: any) => {
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
            
            efFormReady, erGrid1Ready, erGrid2Ready, gridFocusChanged
        };
    }
});

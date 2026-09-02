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
    name: 'WMSMSMA4',
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
        const formName = 'WMSMSMA4P1';
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const gridToolbar: Ref<any[]> = ref([]);
        const showFlag1 = ref(0);
        const showFlag2 = ref(0);
        const showFlag3 = ref(0);

        let gridView1!: any;
        let gridView3!: any;
        const i_factory_div = ref('');
        const i_mat_shape_flag = ref('');
        const i_default = ref('');
        const i_formName = ref('');

        // if (formParams.formParams?.FACTORY_DIV)
        //   i_factory_div.value = formParams.formParams['FACTORY_DIV'];
        // if (formParams.formParams?.MAT_SHAPE_FLAG)
        //   i_mat_shape_flag.value = formParams.formParams['MAT_SHAPE_FLAG'];
        // if (formParams.formParams?.DEFAULT) i_default.value = formParams.formParams['DEFAULT'];
        // if (formParams.formName) {
        //   i_formName.value = formParams.formName;
        // }

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

        // 初始化画面配置
        const InitPage = async () => {
            // 设置查询条件 库区
            erFormHelper.setControlValue('layoutControlGroup2', 'STOCK_NO', i_default.value);
            erFormHelper.setGridColumnEditable('gridView1', false);
            erFormHelper.setGridColumnEditable('gridView3', false);
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
                { FACTORY_DIV: i_factory_div.value, MAT_SHAPE_FLAG: i_mat_shape_flag.value }
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
            // 获取分页信息
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(
                erFormHelper.getAllControlValueAsEiBlock('layoutControlGroup2', {
                    MAT_LINE_TYPE: 'SM',
                    MAT_KIND: 'SM'
                })
            );
            // if (inInfo.getBlock(0).data[0]['STOCK_NO']?.toString().trim() === '') {
            //   erFormHelper.messageWarning('请输入库区号');
            //   return false;
            // }
            const mat_no = inInfo.getBlock(0).data[0]['MAT_NO']?.toString().trim();
            if (mat_no !== '' && mat_no !== undefined) {
                let temp_mat_no = '';
                const mat_no_array = mat_no.split(' ');
                for (let i = 0; i < mat_no_array.length; i++) {
                    temp_mat_no += `${mat_no_array[i].toString()}','`;
                }
                // 去除最后一个材料的逗号
                temp_mat_no = temp_mat_no.substring(0, temp_mat_no.length - 3);
                inInfo.getBlock(0).data[0]['MAT_NO'] = `'${temp_mat_no}'`;
            }
            const outInfo = await erFormHelper.callService('wmsmsma4_inq', inInfo, false, true, true);
            if (outInfo.sys.status >= 0) {
                erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView1');
                return true;
            } else {
                return false;
            }
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
            efFormReady
        };
    }
});

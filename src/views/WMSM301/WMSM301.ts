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
import ErPopFree from 'ERX/ErPopFree';
import { Console } from "console";
import eBFR from "EBFR/eBFR";

export default defineComponent({
    name: '',
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid, ErPopFree
    },
    setup: () => {
        // 获取画面的分区信息及设置画面初始化service
        const efFormInfo = ref<{ [key: string]: any }>({});
        let formPartition: string;
        let formName_Now: string;
        const initializeService = 'wm00_form_get';

        // 变量定义
        let formName = 'WMSM301';
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
        const F1_DO = async (e: any) => {
            //console.log('fghjkl;', formName_Now)

            erFormHelper.clearGridData('GridView1');
            if (erFormHelper.getAllControlValueAsEiBlock('Layout1').data[0].HEAT_NO?.toString().trim() === '') {
                erFormHelper.messageWarning('熔炼号不能为空。');
                return false;
            }

            let sqlstr = `select *  from tmmsm01 t where 1=1 and heat_no ='${erFormHelper.getAllControlValueAsEiBlock('Layout1').data[0].HEAT_NO?.toString()}' `;
            const out = await erFormHelper.querySql('', sqlstr);
            erFormHelper.mergeDataToLayoutOrGrid(out, true, 'GridView1');
            console.log('前台dblink', '2', erFormHelper.getAllControlValueAsEiBlock('Layout1').data[0].HEAT_NO, out);



        };
        const F2_DO = async (e: any) => {
            if (!await erFormHelper.checkGridInput('Layout3')) {
                erFormHelper.messageWarning('调拨去向不能为空！');
                return false;
            }
            const inInfo = new EI.EIInfo();

            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView1',
                { C_DELIVERY_FAC: erFormHelper.getAllControlValueAsEiBlock('Layout3').data[0].C_DELIVERY_STOCK?.toString(), C_DELIVERY_STOCK: erFormHelper.getAllControlValueAsEiBlock('Layout3').data[0].C_DELIVERY_STOCK?.toString() }, true));
            console.log('dfghjkl;', inInfo)
            const outInfo = await erFormHelper.callService('wmsm301', inInfo, true, true);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess();
                //erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, gridview.value);

                return true;

            } else {
                return false;
            }


        };
        const F3_DO = async (e: any) => {

            erFormHelper.clearGridData('GridView2');
            if (erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].HEAT_NO?.toString().trim() === '') {
                erFormHelper.messageWarning('熔炼号不能为空。');
                return false;
            }

            let sqlstr = `select *  from Hmmsm01 t where 1=1 and heat_no ='${erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].HEAT_NO?.toString()}' `;
            if (erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].C_DELIVERY_FAC?.toString().trim() !== '') {
                sqlstr += ` AND C_DELIVERY_FAC='${erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].C_DELIVERY_FAC?.toString()}' `;
            }
            if (erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].C_DELIVERY_STOCK?.toString().trim() !== '') {
                sqlstr += ` AND C_DELIVERY_STOCK='${erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].C_DELIVERY_STOCK?.toString()}' `;
            }
            const out = await erFormHelper.querySql('', sqlstr);
            erFormHelper.mergeDataToLayoutOrGrid(out, true, 'GridView2');
            console.log('前台dblink', '2', erFormHelper.getAllControlValueAsEiBlock('Layout2').data[0].HEAT_NO, out);

        };

        const F4_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();

            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView2', {}, true));
            console.log('dfghjkl;', inInfo)
            const outInfo = await erFormHelper.callService('wmsm302', inInfo, true, true);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess();
                //erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, gridview.value);

                return true;

            } else {
                return false;
            }
        };



        return {
            erFormHelper,
            initializeFlag,
            F1_DO, F2_DO, F3_DO, F4_DO, ifview,
            layout,
            gridview, efFormReady
        };
    }
});

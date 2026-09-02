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
import ErPopFree from "ERX/ErPopFree";
import ErPopQuery from "ERX/ErPopQuery";
import ErPopWindow from "ERX/ErPopWindow";
import { Console } from "console";
import eBFR from "EBFR/eBFR";
import WMSM33CPOP from "../WMSM33CPOP/WMSM33CPOP.vue";
import xrEfDialog from "EFX/xrEfDialog";

export default defineComponent({
    name: "",
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid,
        ErPopFree,
        ErPopQuery,
        WMSM33CPOP,
        xrEfDialog,
    },
    setup: () => {
        // 获取画面的分区信息及设置画面初始化service
        const efFormInfo = ref<{ [key: string]: any }>({});
        let formPartition: string;
        let formName_Now: string;
        const initializeService = "wm00_form_get";

        // 变量定义
        let formName = "WMSM33CS2N";
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const layout = ref();
        const gridview = ref();
        let popFreeEdit: ER.PopFreeHelper;
        let popFreeEdit_F4: ER.PopFreeHelper;
        let popFreeEdit_F5: ER.PopFreeHelper;

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
                "",
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
                    "ErFormHelper initialize faild, error msg is [" +
                    initialResult.msg +
                    "]!"
                );
            }
        };

        onMounted(() => {
            let xxx = new Date();

            console.log(
                "kjbv",
                new Date().getUTCFullYear().toString().substring(2, 4)
            );
        });
        const GridView1FocusChanged = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCurrentRowAsBlock("GridView1"));
            const outInfo = await erFormHelper.callService(
                "wmsm33c_inq1",
                inInfo,
                true,
                true
            );
            console.log('iuytfdz', outInfo)
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("查询成功");
                erFormHelper.mergeDataToLayoutOrGrid(
                    outInfo.getBlock("MAT"),
                    true,
                    "GridView2"
                );
                erFormHelper.mergeDataToLayoutOrGrid(
                    outInfo.getBlock("ELM"),
                    true,
                    "GridView3"
                );
                 erFormHelper.mergeDataToLayoutOrGrid(
                    outInfo.getBlock("STA"),
                    true,
                    "GridView4"
                );
                 erFormHelper.mergeDataToLayoutOrGrid(
                    outInfo.getBlock("TL"),
                    true,
                    "GridView5"
                );
                return true;
            } else {
                return false;
            }
        };
        const dialogFormName = ref("WMSM33CPOP"); // 读配置表获取画面名
        const parentInfo = ref([]) as any;
        const dialogVisible = ref<boolean>(false);
        const openXrEfDialog = () => {
            dialogVisible.value = true; //弹窗设置为显示
        };
        const xrEfDialogClose = () => {
            dialogVisible.value = false;
        };
        const getChildInfo = (info: any) => {
            if (info.close) {
                dialogVisible.value = false; // 关闭弹框
                xrEfDialogClose();
                popFreeEdit.CloseDialog();
                F1_DO(1);
            }
        };
        const popCreateClick = (e: any) => {
            if (e.dataModel["HEAT_NO"]) {
                let v_heat_no = e.dataModel["HEAT_NO"];
                if (v_heat_no.length != 8) {
                    erFormHelper.messageWarning("请确保炉号8位！");
                    return false;
                }
                if (
                    v_heat_no.substring(0, 2) != "NC" &&
                    v_heat_no.substring(0, 2) != "NS"
                ) {
                    erFormHelper.messageWarning(
                        "请确保炉号规则,NC/NS+年号后两位+大炉号顺序号！"
                    );
                    return false;
                }
                if (
                    v_heat_no.substring(2, 4) !=
                    new Date().getUTCFullYear().toString().substring(2, 4)
                ) {
                    console.log("kjbv", new Date());
                    erFormHelper.messageWarning(
                        "请确保炉号规则,NC/NS+年号后两位+大炉号顺序号！"
                    );
                    return false;
                }
            }

            const eiblock = new EI.EiBlock();
            let v_data = {};
            let v_NUM = e.dataModel["MAT_NUM"];
            let v_heat_no = e.dataModel["HEAT_NO"];
            parentInfo.value.length = 0;
            function get_strand_no(cc_no: string): string {
                let strand_no = 'Z';


                if (cc_no === 'C0')
                    strand_no = 'Z';
                else if (cc_no === 'C1')
                    strand_no = 'A';
                else if (cc_no === 'C2')
                    strand_no = 'B';
                else if (cc_no === 'C3')
                    strand_no = 'C';
                else
                    strand_no = 'E';

                return strand_no
            }
            for (let i = 0; i < v_NUM; i++) {
                v_data = {
                    MAT_NO: v_heat_no + (i + 1).toString().padStart(2, "0"),
                    HEAT_NO: v_heat_no,
                    ST_NO: e.dataModel["ST_NO"],
                    C_DIV: e.dataModel["C_DIV"],
                    UNIT_CODE: e.dataModel["UNIT_CODE"],
                    PRODUCT_FLAG: e.dataModel["PRODUCT_FLAG"],
                    MAT_THICK: e.dataModel["MAT_THICK"],
                    MAT_WIDTH: e.dataModel["MAT_WIDTH"],
                    MAT_LEN: e.dataModel["MAT_LEN"],
                    MAT_WT: e.dataModel["MAT_WT"],
                    SG_SIGN: e.dataModel["SG_SIGN"],
                    SLAB_NO: v_heat_no + e.dataModel["ST_NO"] + get_strand_no(e.dataModel["UNIT_CODE"]) + (i + 1).toString().padStart(2, "0") + '001',
                };

                parentInfo.value.push(v_data);
            }

            openXrEfDialog();
        };

        const popOkClick_F4 = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1", { ST_NO_1: e.dataModel["ST_NO"] }));
            console.log('uhygfdcx', inInfo)
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f4",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        }

        const popOkClick_F5 = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1", { HEAT_NO_1: e.dataModel["HEAT_NO"] }));
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f5",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        }

        const popOkClick_F8 = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1", { ST_NO_1: e.dataModel["ST_NO"] }));
            console.log('uhygfdcx', inInfo)
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f8",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        }

        const popOkClick_F9 = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1", { HEAT_NO_1: e.dataModel["HEAT_NO"] }));
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f9",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        }

        const F1_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock("Layout1"));
            const outInfo = await erFormHelper.callService(
                "wmsm33c_inq",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("查询成功");
                erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, "GridView1");
                return true;
            } else {
                return false;
            }
        };
        const F2_DO = async (e: any) => {
            popFreeEdit = new ER.PopFreeHelper(
                formPartition,
                "WMSM33CS2N",
                "Layout2"
            );

            popFreeEdit.CloseDialogWhenOkClick = false;
            ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popCreateClick);
        };
        const F2_PRE_DO = async (e: any) => { };
        const F2_CANCEL = async (e: any) => { };
        const F3_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCurrentRowAsBlock("GridView1"));
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f3",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                  F1_DO(1);
                return true;
            } else {
                return false;
            }
        };
        const F3_PRE_DO = async (e: any) => { };
        const F3_CANCEL = async (e: any) => { };
        const F4_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1"));
            console.log('uhygfdcx', inInfo)
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f4",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        };
        const F4_PRE_DO = async (e: any) => {


        };
        const F4_CANCEL = async (e: any) => { };
        const F5_DO = async (e: any) => {
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1"))

            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一个炉次");
                return false;
            }

            popFreeEdit_F5 = new ER.PopFreeHelper(
                formPartition,
                "WMSM33CS2N",
                "Layout4"
            );


            ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit_F5, popOkClick_F5);
        };
        const F5_PRE_DO = async (e: any) => { };
        const F5_CANCEL = async (e: any) => { };
        const F6_DO = async (e: any) => {
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridModifyRowsAsBlock("GridView3"));
            console.log('uhygfdcx', inInfo)
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f6",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        };
        const F6_PRE_DO = async (e: any) => { };
        const F6_CANCEL = async (e: any) => { };
        const F7_DO = async (e: any) => { 
             const inInfo = new EI.EIInfo();
             inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1"))
            console.log('uhygfdcx', inInfo)
             if (inInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一个炉次");
                return false;
            }
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f7",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
        };
        const F7_PRE_DO = async (e: any) => { };
        const F7_CANCEL = async (e: any) => { };
        const F8_DO = async (e: any) => {
             const inInfo = new EI.EIInfo();
            inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1"));
             if (inInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一个炉次");
                return false;
            }
            console.log('uhygfdcx', inInfo)
            const outInfo = await erFormHelper.callService(
                "wmsm33c_f8",
                inInfo,
                true,
                true
            );
            console.log(inInfo, outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess("处理成功");
                F1_DO(1);
                return true;
            } else {
                return false;
            }
         };
        const F8_PRE_DO = async (e: any) => { };
        const F8_CANCEL = async (e: any) => { };
        const F9_DO = async (e: any) => {
              const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock("GridView1"))

            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一个炉次");
                return false;
            }

            popFreeEdit_F5 = new ER.PopFreeHelper(
                formPartition,
                "WMSM33CS2N",
                "Layout4"
            );


            ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit_F5, popOkClick_F9);
         };
        const F9_PRE_DO = async (e: any) => { };
        const F9_CANCEL = async (e: any) => { };
        const F10_DO = async (e: any) => { };
        const F10_PRE_DO = async (e: any) => { };
        const F10_CANCEL = async (e: any) => { };
        const F11_DO = async (e: any) => { };
        const F11_PRE_DO = async (e: any) => { };
        const F11_CANCEL = async (e: any) => { };

        return {
            erFormHelper,
            initializeFlag,
            GridView1FocusChanged,
            F1_DO,
            F2_DO,
            F2_PRE_DO,
            F2_CANCEL,
            F3_DO,
            F3_PRE_DO,
            F3_CANCEL,
            F4_DO,
            F4_PRE_DO,
            F4_CANCEL,
            F5_DO,
            F5_PRE_DO,
            F5_CANCEL,
            F6_DO,
            F6_PRE_DO,
            F6_CANCEL,
            F7_DO,
            F7_PRE_DO,
            F7_CANCEL,
            F8_DO,
            F8_PRE_DO,
            F8_CANCEL,
            F9_DO,
            F9_PRE_DO,
            F9_CANCEL,
            F10_DO,
            F10_PRE_DO,
            F10_CANCEL,
            F11_DO,
            F11_PRE_DO,
            F11_CANCEL,
            layout,
            gridview,
            efFormReady,
            dialogVisible,
            parentInfo,
            dialogFormName,
            xrEfDialogClose,
            getChildInfo,
        };
    },
});

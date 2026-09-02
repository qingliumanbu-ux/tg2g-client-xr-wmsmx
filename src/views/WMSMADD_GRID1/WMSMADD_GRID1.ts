
import {
    defineComponent,
    onMounted,
    ref,
    reactive,
    computed,
    nextTick,
    Ref,
    toRaw,
} from "vue";
import { EI, EIManager } from "EIX/ei";
import { ER } from "ERX/Er";
// import { SiUtils } from "ERX/SiUtils";
// import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";

import xrEfDialog from "EFX/xrEfDialog";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";

export default defineComponent({
    name: "TMSMADDAV",
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid,
        xrEfDialog,
    },
    // 接收父画面传递过来的参数
    props: {
        openInDialog: {
            type: Boolean,
            default: false,
        },
        dialogFormName: {
            type: String,
            default: "",
        },
        parentInfo: {
            type: Object,
        },
    },
    // 向父画面传递数据-注册emit监听事件
    emits: ["getChildInfo"],
    // setup中添加props和emit
    setup: (props, { emit }) => {
        // 变量定义
        const efFormInfo = ref<{ [key: string]: any }>({});
        // const efFormIsReady = ref(false);
        let formPartition: string;
        let formName: string;
        let PROGRAM_NAME: string;
        let gridview: any;

        // xr-ef-form提供了ready事件, 在这里获取画面配置信息
        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区
            formName = efFormInfo.value.formName; // 当前画面名
            if (efFormInfo.value.formParams?.form_name) {
                PROGRAM_NAME = efFormInfo.value.formParams["form_name"];
            }
            initializePage();




        };
        const erGridReady = (e: any) => {
            gridview = erFormHelper.getGrid(LayoutName);
        }
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const initializeService = "wm00_form_get";


        let i_form_ename = props.dialogFormName; // 低代码配置画面布局名



        const LayoutName = props.parentInfo?.LayoutName;
        const asdcf = props.parentInfo?.mainData

        // 画面相关数据初始化
        const initializePage = async () => {

            const initialResult = await erFormHelper.Initialize(
                formPartition,
                i_form_ename,
                "",
                initializeService
            );
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    erFormHelper.stopGridEditing(LayoutName, () => {
                        erFormHelper.mergeEiBlockToGrid(props.parentInfo?.mainData, LayoutName);
                    })

                });
            } else {
                erFormHelper.messageError(
                    "ErFormHelper initialize faild, error msg is [" +
                    initialResult.msg +
                    "]!"
                );
            }
        };






        // 点击关闭按钮，绑定事件closeEfDialog
        // 向父画面传递数据-触发emit方法向父传递数据，并在emits中注册事件名
        const closeEfDialog = () => {
            const data = {

            };
            emit("getChildInfo", data);
        };

        onMounted(() => { });


        const tuodingdan = async () => {

            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(LayoutName))

            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一根材料");
                return false;
            }
            console.log('fghyuio', eiInfo)
            const outInfo = await erFormHelper.callService(props.parentInfo?.callService, eiInfo, true, true, true);
            if (outInfo.sys.status < 0) {
                erFormHelper.messageError("错误:" + outInfo.sys.msg);
            } else {
                //erFormHelper.messageSuccess('操作成功')
            }
        };
        const F2_DO = async (e: any) => {
            tuodingdan();
            closeEfDialog();
        };


        return {
            erFormHelper,
            initializeFlag,
            efFormReady,

            closeEfDialog, LayoutName, F2_DO, erGridReady

        };
    },
});


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

import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";

import xrEfDialog from "EFX/xrEfDialog";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";

export default defineComponent({
    name: '',
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
            console.log('efFormInfo.value', efFormInfo.value);
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区            
            formName = efFormInfo.value.formName; // 当前画面名
            if (efFormInfo.value.formParams?.form_name) {
                PROGRAM_NAME = efFormInfo.value.formParams["form_name"];
            }
            initializePage();


        };
        const erGridReady = (e: any) => {
            gridview = erFormHelper.getGrid(GridName);

        }
        const erFormHelper: ER.FormHelper = reactive(new ER.FormHelper()) as any;
        const initializeFlag = ref(0);
        const initializeService = '';


        let i_form_ename = props.dialogFormName; // 低代码配置画面布局名       
        const LayoutName = props.parentInfo?.LayoutName;
        const GridName = props.parentInfo?.GridName;
        const asdcf = props.parentInfo?.mainData;
        console.log('传入maindata', asdcf);

        // 画面相关数据初始化
        const initializePage = async () => {

            const initialResult = await erFormHelper.Initialize(
                formPartition,
                i_form_ename,
                '',
                initializeService
            );
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    // erFormHelper.stopGridEditing(LayoutName, () => {
                    //     erFormHelper.mergeEiBlockToGrid(props.parentInfo?.mainData, LayoutName);
                    // })
                    queryMainGrid();
                    console.log('queryMainGrid执行完毕');
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

        // 查询主表明细信息
        const queryMainGrid = async () => {
            //清空grid数据
            console.log('F2查询开始');
            erFormHelper.clearGridData(GridName);
            const inInfo = new EI.EIInfo();
            //获取查询条件dt
            const Query = erFormHelper.getAllControlValueAsEiBlock(LayoutName);
            inInfo.addBlock(Query);
            inInfo.addBlock(props.parentInfo?.mainData, 'Table2');
            console.log('inInfo', inInfo);
            const service_name = props.parentInfo?.callService;
            const outInfo = await erFormHelper.callService(service_name, inInfo, true, false, true);
            console.log(outInfo.getBlock(0).data.length);
            if (outInfo.sys.status >= 0) {
                // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
                erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), GridName);
            } else {
                erFormHelper.messageError(outInfo.sys.msg);
            }
        };
        const F2_DO = async (e: any) => {
            queryMainGrid();

        };
        const F3_DO = async (e: any) => {
            console.log('F3新增开始')
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(GridName));
            eiInfo.addBlock(props.parentInfo?.mainData, 'Table2');

            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一根材料");
                return false;
            }
            console.log('service传入数据块', eiInfo)
            const outInfo = await erFormHelper.callService(
                props.parentInfo?.callService1,
                eiInfo,
                true,
                false,
                true
            );
            if (outInfo.sys.status < 0) {
                erFormHelper.messageError("错误:" + outInfo.sys.msg);
            } else {
                erFormHelper.messageSuccess('操作成功')
                closeEfDialog();
            }

        };


        return {
            erFormHelper,
            initializeFlag,
            efFormReady,

            closeEfDialog, LayoutName, F2_DO, F3_DO, erGridReady, GridName

        };
    },
});

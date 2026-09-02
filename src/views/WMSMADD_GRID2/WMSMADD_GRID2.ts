
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
        let gridview2: any;

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
        const erGrid2Ready = (e: any) => {
            gridview2 = erFormHelper.getGrid(GridName);
        }
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const initializeService = "wm00_form_get";


        let i_form_ename = props.dialogFormName; // 低代码配置画面布局名



        const LayoutName = props.parentInfo?.LayoutName;
        const GridName = props.parentInfo?.GridName;
        const asdcf = props.parentInfo?.mainData
        console.log('fghyuio', props.parentInfo)

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
                    get_ponoslab();
                });
            } else {
                erFormHelper.messageError(
                    "ErFormHelper initialize faild, error msg is [" +
                    initialResult.msg +
                    "]!"
                );
            }
        };


        const get_ponoslab = async () => {
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(
                erFormHelper.buildEiBlock([{
                    PONO: props.parentInfo?.PONO,
                    MAT_DESTION: props.parentInfo?.MAT_DESTION,
                }])
            );
            console.log('fghyuio', eiInfo, GridName.value)
            const outInfo = await erFormHelper.callService('wmsm01_ponoslab_inq', eiInfo, true, false, true);
            if (outInfo.sys.status < 0) {
                erFormHelper.messageError("错误:" + outInfo.sys.msg);
            } else {
                erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, props.parentInfo?.GridName);
            }
        }



        // 点击关闭按钮，绑定事件closeEfDialog
        // 向父画面传递数据-触发emit方法向父传递数据，并在emits中注册事件名
        const closeEfDialog = () => {
            const data = {

            };
            emit("getChildInfo", data);
        };

        onMounted(() => { });


        const guadingdan = async () => {
            console.log('fghyuio')
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(LayoutName))
            eiInfo.addBlock(erFormHelper.buildEiBlock([{
                PONO: props.parentInfo?.PONO,
            }]), 'Table2')
            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一根材料");
                return false;
            }
            console.log('fghyuio', eiInfo)
            const outInfo = await erFormHelper.callService(
                props.parentInfo?.callService,
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
        const guadingdan1 = async () => {
            console.log('fghyuio')
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(LayoutName))
            eiInfo.addBlock(erFormHelper.buildEiBlock([{
                PONO: props.parentInfo?.PONO,
            }]), 'Table2')
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView2'), 'Table3')
            if (eiInfo.getBlock(0).data.length === 0) {
                erFormHelper.messageWarning("请至少选择一根材料");
                return false;
            }
            if (eiInfo.getBlock(0).data.length !== eiInfo.getBlock(2).data.length) {
                erFormHelper.messageWarning("请选择相同数量的板坯信息和预定板坯信息！");
                return false;
            }
            console.log('fghyuio', eiInfo)
            if (await erFormHelper.messageConfirm(`当前材料${eiInfo.getBlock(0).data[0]?.MAT_NO}与命令板坯${eiInfo.getBlock(2).data[0]?.SLAB_NO}的长度差为'${Number(eiInfo.getBlock(0).data[0]?.MAT_LEN) - Number(eiInfo.getBlock(2).data[0]?.SLAB_LEN)}',是否继续操作？`)) {
                const outInfo = await erFormHelper.callService(
                    'wmsm01q0_gua1',
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
            }

        };
        const F2_DO = async (e: any) => {
            guadingdan();

        };
        const F3_DO = async (e: any) => {
            guadingdan1();

        };
        const GridView1FocusChanged = async (e: any) => {
            if (e) {
                if (e.data && e.rowChanged) {
                    erFormHelper.checkGridCurrentRow('GridView1')
                    const model = erFormHelper.getGridCurrentRow('GridView1');
                    //console.log('fghjkl', gridview2.gridOptions.api)
                    const current_row = gridview2.getRowData();
                    console.log('fghjkl', current_row)
                    erFormHelper.stopGridEditing('GridView2', () => {

                        current_row.forEach((item: any) => {
                            console.log('fghjkl', item, model['MAT_LEN'], item.SLAB_LEN, Math.abs(model['MAT_LEN'] - item.SLAB_LEN))

                            item.set('LEN_ABS', Math.abs(model['MAT_LEN'] - item.SLAB_LEN))
                            gridview2.gridOptions.api.refreshCells();

                        });

                    })
                }
            }
        }

        return {
            erFormHelper,
            initializeFlag,
            efFormReady,
            erGrid2Ready,
            closeEfDialog, LayoutName, F2_DO, F3_DO, erGridReady, GridName, GridView1FocusChanged

        };
    },
});

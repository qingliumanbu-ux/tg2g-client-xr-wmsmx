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
    name: 'WMSM01GGS2N',
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
        let gridview1!: any;
        let gridview2!: any;
        let gridview3!: any;
        const initializeService = ''; //画面布局配置获取


        // 变量定义
        const formName = 'WMSM01GGS2N';
        const show_msg = ref('');
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        const layout = ref();
        const gridview = ref(); //主表

        const mainviewName = ref('');
        const subviewName = ref('');
        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区
            formName_Now = efFormInfo.value.formName; // 当前画面名




            initializePage();
        };
        const erGrid1Ready = (e: any) => {
            gridview1 = erFormHelper.getGrid('GridView1');

            gridview1.gridOptions.getRowStyle = (params: any) => {


                if (params.data.PONO_SLAB.toString().trim() === '') {
                    return {
                        fontweight: 'bold',
                        background: 'yellow'
                    }
                }



            }

            erFormHelper.setGridEditable('GridView1', false);
        }
        const erGrid2Ready = (e: any) => {
            gridview2 = erFormHelper.getGrid('GridView2');

            gridview2.gridOptions.getRowStyle = (params: any) => {

                console.log(params.data.IFKEPEI)
                if (params.data.IFKEPEI.toString().trim() === '1') {
                    return {
                        fontweight: 'bold',
                        background: 'lightgreen'
                    }
                }



            }

            erFormHelper.setGridEditable('GridView2', false);
        }
        const erGrid3Ready = (e: any) => {
            gridview3 = erFormHelper.getGrid('GridView3');

            gridview3.gridOptions.getRowStyle = (params: any) => {


                if (params.data.IFKEPEI.toString().trim() === '1') {
                    return {
                        fontweight: 'bold',
                        background: 'lightgreen'
                    }
                }



            }

            erFormHelper.setGridEditable('GridView3', false);
        }



        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(
                formPartition,
                formName_Now,
                '',
                initializeService
            );
            console.log('kjhgc')
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

            const inInfo = new EI.EIInfo();
            //获取查询条件dt
            const Query = erFormHelper.getAllControlValueAsEiBlock('LayoutGroupQuery');
            inInfo.addBlock(Query);

            const service_name = 'wmsm01gg_inq';
            const outInfo = await erFormHelper.callService(service_name, inInfo, false, true);

            if (outInfo.sys.status >= 0) {
                // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
                erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), 'GridView1');
            } else {
                //erFormHelper.messageError(outInfo.sys.msg);
            }
        };
        // 查询子表明细信息
        const queryDetailInfo = async (currentRowInfo: any) => {
            //
            erFormHelper.clearGridData('GridView2');
            erFormHelper.clearGridData('GridView3');
            erFormHelper.clearLayoutData('LayoutGroup1');
            erFormHelper.clearLayoutData('LayoutGroup2');
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.buildEiBlock([currentRowInfo]));
            const service_name = 'wmsm01gg_inq1';
            console.log('iuytfdcxcvghjk', eiInfo)
            const outInfo = await erFormHelper.callService(service_name, eiInfo, false, true);
            if (outInfo.sys.status < 0) {
                //('查询错误:' + outInfo.sys.msg);
            } else {
                erFormHelper.setControlValueEx('LayoutGroup1', outInfo.getBlock(0).data[0]);

                erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(1), 'GridView2');
                erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(2), 'GridView3');
                console.log('tfghjnmsdfghbn', outInfo.getBlock(1))
                if (currentRowInfo.LSLAB_NO.toString().trim() !== "") {
                    erFormHelper.setControlValueEx('LayoutGroup2', outInfo.getBlock(3).data[0]);
                    show_msg.value = '匹配上虚拟板坯:' + currentRowInfo.LSLAB_NO.toString();
                }
                else {
                    show_msg.value = " ";
                }
            }
        };

        // 主表焦点行事件-查询子表明细信息
        const GridView1FocusChanged = async (e: any) => {
            if (e) {
                if (e.data && e.rowChanged) {
                    if (e.data) {
                        const currentRow = erFormHelper.getGridCurrentRow('GridView1', true);
                        console.log('currentRow', currentRow);
                        queryDetailInfo(currentRow);
                    }
                }
            }
        };
        const F2_DO = async (e: any) => {
            queryMainGrid();
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
            subviewName, efFormReady, erGrid1Ready, erGrid2Ready, erGrid3Ready, show_msg
        };
    }
});

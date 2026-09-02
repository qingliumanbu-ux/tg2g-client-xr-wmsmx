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
import xrEfDialog from "EFX/xrEfDialog";
import WMSM01Q0_GRID1 from '../WMSMADD_GRID1/WMSMADD_GRID1.vue'
import WMSM01Q0_GRID2 from '../WMSMADD_GRID2/WMSMADD_GRID2.vue'

import { useRoute } from "vue-router";
import { Console } from "console";
import ErPopFree from 'ERX/ErPopFree';
import ErPopQuery from 'ERX/ErPopQuery';

export default defineComponent({
    name: '',
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid, xrEfDialog, WMSM01Q0_GRID1, WMSM01Q0_GRID2, ErPopFree, ErPopQuery,
    },
    setup: () => {
        // 获取画面的分区信息及设置画面初始化service
        const efFormInfo = ref<{ [key: string]: any }>({});

        let formPartition: string;
        const initializeService = 'wm00_form_get';
        interface DynamicObject {
            [key: string]: any;
        }
        let ob: any = reactive({});
        let popFreeEdit: ER.PopFreeHelper;



        // 变量定义
        let formName = 'WMSM01Q0S2N';
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const initializeFlag = ref(0);
        let gridview1!: any;
        let kf!: any;
        const layout_name = ref('LayoutGroup7')
        let startDate: any;
        let endDate: any;

        let if_auto_refresh: boolean = true;

        watch(
            layout_name, (oldVal) => {
                console.log('xdfghjkl;', oldVal)
            },
        );

        const efFormReady = (e: any) => {
            startDate = new Date();
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区


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
                else if (params.data.RCV_MAT_FLAG.toString().trim() === 'S') {
                    if (params.data.HOLD_FLAG.toString().trim() === '2') {

                        return {

                            fontweight: 'bold',
                            background: 'pink'
                        }

                    }
                    else if (params.data.HR_SEND_FLAG.toString().trim() !== '1'
                        && kf.includes(params.data.GUIDE_DEST.toString())) {
                        return {

                            fontweight: 'bold',
                            background: 'red'
                        }
                    }
                }


            }

            erFormHelper.setGridEditable('GridView1', false);
        }
        const erGridReady = (e: any) => {
            erFormHelper.setGridColumnEditable('GridView3', false, 'CODE_DESC_1_CONTENT');
            erFormHelper.setGridColumnEditable('GridView4', false, 'CODE_DESC_1_CONTENT');
        }
        const getWmsmzd = async (code: string) => {

            let sqlstr = `SELECT * FROM TWMSMZD02  WHERE  CODE_CLASS='WM02' and CODE = '${code}' `;
            const out = await erFormHelper.querySql('', sqlstr);

            //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT)
            return String(out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT);
        };
        const getWmsmzd1 = async () => {

            let sqlstr = `SELECT '['||LISTAGG(code, ',')||']' AS CODE  FROM TWMSMZD02  WHERE  CODE_CLASS='WM02' and CODE_DESC_3_CONTENT like '%1%' `;
            const out = await erFormHelper.querySql('', sqlstr);

            //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE)
            return String(out.getBlock(0).data[0]?.CODE);
        };
        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(
                formPartition,
                formName,
                '',
                initializeService
            );
            kf = await getWmsmzd1();
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    nextTick(() => {
                        erFormHelper.setAllControlReadOnly(['LayoutGroup1', 'LayoutGroup2', 'LayoutGroup4', 'LayoutGroup5', 'LayoutGroup', 'LayoutGroup7'], true)
                        endDate = new Date();
                        console.log('fgh', startDate.getSeconds(), startDate.getMilliseconds(), endDate.getSeconds(), endDate.getMilliseconds())
                        //erFormHelper.messageSuccess(`时间差：'${(startDate.getSeconds()*1000+ startDate.getMilliseconds())-(endDate.getSeconds()*1000- endDate.getMilliseconds()) }'`); // 这将会输出时间差的毫秒数
                    })
                    // 获取画面上的主要控件信息
                    //erFormHelper.setAllControlEnable(['LayoutGroup1', 'LayoutGroup2', 'LayoutGroup4', 'LayoutGroup5', 'LayoutGroup','LayoutGroup7'], false)


                });

            } else {
                erFormHelper.messageError(
                    'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
                );
            }
        };
        const click_row = (e: any) => {

            erFormHelper.checkGridCurrentRow('GridView1')

        }
        onMounted(() => {
            //queryMat();

            document.addEventListener('mousemove', resetTimer);
        });
        let timer: any;
        function resetTimer() {

        }
        const queryMat = async () => {

            const inInfo = new EI.EIInfo();
            inInfo.blocks.clear;
            inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroupQuery'));
            const outInfo = await erFormHelper.callService('wmsm01q0q_inq', inInfo, false, true);
            console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', outInfo)
            erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'GridView1');
            erFormHelper.autoBestFit('GridView1');


        };
        const gridFocusChanged = async (e: any) => {

            if (e) {
                if (e.rowChanged && e.data) {
                    const eiInfo = new EI.EIInfo();
                    const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
                    eiBlock.pushData(
                        {
                            SLAB_NO: e.data.get('SLAB_NO')
                        },
                        true
                    );
                    const outInfo = await erFormHelper.callService('wmsm01q0q_inq1', eiInfo, true, true, true);
                    console.log('uygfcvghjkl;', outInfo)
                    let c_div = e.data.get('C_DIV');//1-不锈钢；2-碳钢

                    if (c_div === '1') {
                        layout_name.value = 'LayoutGroup6'
                    }
                    else if (c_div === '2') {
                        layout_name.value = 'LayoutGroup7'
                    }
                    if (outInfo?.sys.status >= 0) {
                        // erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, ...['LayoutGroup1', 'GridView2']);

                        erFormHelper.setControlValueEx('LayoutGroup1', {
                            ...outInfo.getBlock('TMMSM01').data[0]
                        });
                        erFormHelper.setControlValueEx('LayoutGroup2', {
                            ...outInfo.getBlock('TMMSM01').data[0]
                        });
                        erFormHelper.setControlValueEx('LayoutGroup5', {
                            ...outInfo.getBlock('TMMSM01').data[0]
                        });

                        for (let prop in ob) {
                            if (ob.hasOwnProperty(prop)) {
                                delete ob[prop];
                            }
                        }

                        for (let s = 0; s < outInfo.getBlock(1).columns.length; s++) {
                            //console.log('fgyuijhnbnklp', String(outInfo.getBlock(1).columns[s].descName), outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]);
                            ob[outInfo.getBlock(1).columns[s].descName] = outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]
                        }
                        //console.log('fgyuijhnbnklp', outInfo.getBlock(1).columns.length, ob);
                        //erFormHelper.messageSuccess('操作成功');
                        console.log('uygfdx', outInfo.getBlock(2).data[0], layout_name.value)
                        erFormHelper.setControlValueEx(layout_name.value, {
                            ...outInfo.getBlock(2).data[0]
                        });
                    }
                    //console.log(outInfo);

                }
            }
        };
        const F2_DO = async (e: any) => {
            queryMat();
        };

        const dialogVisible = ref<boolean>(false);
        const dialogVisible1 = ref<boolean>(false);
        const dialogFormName = ref(''); // 弹出画面的画面名
        const parentInfo = ref({}); // 给弹出画面传入数据
        // 打开弹框事件
        const openXrEfDialog = () => {


        };
        // 获取弹窗画面传递过来的数据
        const getChildInfo = (info: any) => {
            console.log("获取弹窗画面传递过来的信息", info);


            dialogVisible.value = false; // 关闭弹框
            dialogVisible1.value = false; // 关闭弹框
            closeXrEfDialog();

            return true;

        };
        // 关闭弹窗事件
        const closeXrEfDialog = () => {
            setTimeout(() => {

                if_auto_refresh = true;
            }, 500)

        };


        //弹窗配置
        const popFreeEditOkClick = async (e: any) => {
            const inInfo = new EI.EIInfo();


            inInfo.addBlock(
                erFormHelper.getGridCheckedRowsAsBlock('GridView1')
            );
            inInfo.addBlock(
                erFormHelper.buildEiBlock([{ GUIDE_DEST: e.dataModel['GUIDE_DEST'] }])
                , 'Table2');
            console.log('fgyuhbnkl;', inInfo)
            const outInfo = await erFormHelper.callService(
                'wmsm01q0_qxupd',
                inInfo,
                true,
                false,
                true
            );
            if (outInfo.sys.status < 0) {
                erFormHelper.messageError("错误:" + outInfo.sys.msg);
            } else {
                erFormHelper.messageSuccess('操作成功')
                queryMat();
            }

        };
        const zdkd_query = async () => {
            const eiInfo = new EI.EIInfo();

            const outInfo = await erFormHelper.callService('wmsmzdkd_inq', eiInfo, true, true, true);
            if (outInfo?.sys.status >= 0) {
                erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, 'GridView3')
                erFormHelper.messageSuccess('操作成功');
            }
        }
        const zdqx_query = async () => {
            const eiInfo = new EI.EIInfo();

            const outInfo = await erFormHelper.callService('wmsmzdqx_inq', eiInfo, true, true, true);
            if (outInfo?.sys.status >= 0) {
                erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, 'GridView4')
                erFormHelper.messageSuccess('操作成功');
            }
        }
        const zdkd_upd = async () => {
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView3'));
            if (eiInfo.getBlock(0).data.length > 0) {
                const outInfo = await erFormHelper.callService('wmsmzdkd_upd', eiInfo, true, true, true);
                if (outInfo?.sys.status >= 0) {
                    erFormHelper.unCheckAllGridRow('GridView3');
                    erFormHelper.messageSuccess('操作成功');
                    zdkd_query();
                    return true;
                }
                else {
                    // erFormHelper.messageError('操作失败');
                    // return false;
                }
            }

        }
        const zdqx_upd = async () => {
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView4'));
            if (eiInfo.getBlock(0).data.length > 0) {
                const outInfo = await erFormHelper.callService('wmsmzdqx_upd', eiInfo, true, true, true);
                if (outInfo?.sys.status >= 0) {
                    erFormHelper.unCheckAllGridRow('GridView4');
                    erFormHelper.messageSuccess('操作成功');
                    zdqx_query();
                    return true;
                }
                else {
                    // erFormHelper.messageError('操作失败');
                    // return false;
                }
            }

        }

        const valueChanged = async () => {

            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroup8'))
            eiInfo.addBlock(erFormHelper.buildEiBlock([{ HEAT_NO: erFormHelper.getControlValue('LayoutGroup1', 'HEAT_NO') }]), 'Table2')
            console.log('dfghjkl;', eiInfo)
            const outInfo = await erFormHelper.callService('wmsm01q0_cal', eiInfo, true, true, true);
            console.log('dfghjkl;', outInfo)
            if (outInfo?.sys.status >= 0) {
                erFormHelper.setControlValueEx('LayoutGroup8', {
                    ...outInfo.getBlock(0).data[0]
                });

            }
        }
      


        return {
            ob,
            erFormHelper,
            initializeFlag,
            F2_DO,

            gridFocusChanged, efFormReady, dialogVisible, dialogVisible1, dialogFormName, parentInfo, closeXrEfDialog, getChildInfo, zdkd_query, erGridReady, zdqx_query, zdkd_upd, zdqx_upd, layout_name, erGrid1Ready, click_row, valueChanged
        };
    }
});

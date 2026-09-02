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
import ErPopFree from 'ERX/ErPopFree';
import ErPopQuery from 'ERX/ErPopQuery';
import { Row } from "ant-design-vue";

export default defineComponent({
    name: 'WMSM12PBS2N',
    components: {
        xrEfForm,
        xrEfPanel,
        erLayout,
        erGrid, EFCallForm, ErPopFree, ErPopQuery,
    },
    setup() {
        const efFormInfo = ref<{ [key: string]: any }>({});
        let formPartition: string;
        const initializeService = 'wm00_form_get'; //获取低代码配置的service

        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const i_factory_div = ref('');
        const i_mat_shape_flag = ref('');
        const i_default = ref('');
        const i_unit_code = ref('');
        const i_form_name = ref('WMSM12PBS2N'); //低代码配置的画面名
        const stock_no = ref<string>('');
        const down_disabled_flag = ref<boolean>(true);
        const gridToolbar: Ref<any[]> = ref([]);

        let gridView1!: any
        let gridView2!: any
        let gridView3!: any
        let gridView_zc!: any
        const zhuangdian = ref('');
        const xiedian = ref('');
        const jihuahao = ref('');
        const shijihao = ref('');
        let popFreeEdit: ER.PopFreeHelper;
        const efFormReady = (e: any) => {

            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区


            initializePage();
        };
        // grid渲染完成事件
        const erGrid1Ready = () => {
            //不可编辑

            gridView1 = erFormHelper.getGrid("gridView1");
            //console.log('sdrtyhgvhjk', gridView1);
            gridView1.gridOptions.getRowStyle = (params: any) => {


                if (params.data.USAGE_DECISION.toString().trim() !== '3001') {
                    return {
                        fontweight: 'bold',
                        background: '#FE9A2E'
                    }
                }
                if (params.data.SURF_QUALITY.toString().trim() !== '47') {
                    return {
                        fontweight: 'bold',
                        background: 'yellow'
                    }
                }


            }
            erFormHelper.setGridEditable("gridView1", false);
        }
        const erGrid3Ready = () => {
            //不可编辑

            gridView3 = erFormHelper.getGrid("gridView3");
            //console.log('sdrtyhgvhjk', gridView3);
            erFormHelper.setGridEditable("gridView3", false);
        }
        const erGrid2Ready = () => {
            //不可编辑

            gridView2 = erFormHelper.getGrid("gridView2");
            // console.log('sdrtyhgvhjk', gridView2);
            erFormHelper.setGridEditable("gridView2", false);
        }
        const erGridzReady = () => {
            //不可编辑

            gridView_zc = erFormHelper.getGrid("GridView_ZC");

            erFormHelper.setGridEditable("GridView_ZC", false);
            erFormHelper.initialGridToolbar("GridView_ZC", {
                refresh: {
                    visible: false,
                    action: (e: any) => {


                    },
                    preventDefault: true,
                },
            });
        }


        const initializeFlag = ref(0);

        //时间格式转字符串
        function formatDate(date: any): string {
            console.log('uytfvgbhjkl;', date)
            let year = date.$y.toString();
            let month = (date.$M + 1).toString().padStart(2, '0');
            let day = date.$D.toString().padStart(2, '0');
            let hour = date.$H.toString().padStart(2, '0');
            let minute = date.$m.toString().padStart(2, '0');
            let second = date.$s.toString().padStart(2, '0');
            return year + month + day + hour + minute + second;
        }






        //let gridView2!: kendo.ui.Grid;

        //#region 分页查询库区信息 grid1pagingQuery start
        const grid1pagingQuery = async () => {

            const inInfo = new EI.EIInfo();
            const filter_condition = erFormHelper.getAllControlValue('layoutControlGroup1', {
                FACTORY_DIV: i_factory_div.value,
                UNIT_CODE: i_unit_code.value,
                LOAD_FLAG: 'P'
            });
            inInfo.addBlock(erFormHelper.buildEiBlock([filter_condition]));
            const dt = inInfo.getBlock(0);
            const mat_no = inInfo.getBlock(0).data[0]['MAT_NO']?.toString().trim();
            if (mat_no !== '' && mat_no !== undefined) {
                let temp_mat_no = '';
                dt.data[0]['MAT_NO'] = mat_no.split('\n').join("','");

            }

            console.log('dfghjkl;', dt.data[0]['MAT_NO'])
            const outInfo = await erFormHelper.callService('wmsmsm12_inq1', inInfo, false, true);
            console.log('dftyujhbvbhjo', outInfo.getBlock(0).data);
            if (outInfo.sys.status >= 0) {
                const resultData = outInfo.getBlock(0).data; //后台返回的当页的数据
                erFormHelper.mergeDataToGrid(outInfo.getBlock('Table0').data, 'gridView1');
                return true;
            }
            else {
                return false;
            }
        };




        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(
                formPartition,
                i_form_name.value,
                '',
                initializeService,
                { FACTORY_DIV: i_factory_div.value, MAT_SHAPE_FLAG: i_mat_shape_flag.value }
            );
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;
                // 设置分页方法

                //初始化工具栏

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    // 获取画面上的主要控件信息

                });
            } else {
                erFormHelper.messageError(
                    'ErFormHelper initialize faild, error  msg is [' + initialResult.msg + ']!'
                );
            }
        };
        const query_zx = async (e: any) => {
            console.log('sdrtygbhjkl', e);
            if (e.target?.innerText.toString().trim() === "查 询") {
                const inInfo = new EI.EIInfo();
                // const inBlock = new EI.EiBlock();
                inInfo.addBlock(
                    erFormHelper.getAllControlValueAsEiBlock('LayoutGroup1')
                );
                console.log('dftyujhbvbhjo', inInfo);
                const outInfo = await erFormHelper.callService('wmsmsm60_inq', inInfo, false, true);
                console.log('dftyujhbvbhjo', outInfo);
                if (outInfo.sys.status >= 0) {
                    erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), 'gridView2');
                } else {
                    return false;
                }
            }
            else if (e?.field === 'LOAD_CODE' || e?.field === 'UNLOAD_CODE') {
                const inInfo = new EI.EIInfo();
                // const inBlock = new EI.EiBlock();
                inInfo.addBlock(
                    erFormHelper.getAllControlValueAsEiBlock('LayoutGroup1')
                );
                console.log('dftyujhbvbhjo', inInfo);
                const outInfo = await erFormHelper.callService('wmsmsm60_inq', inInfo, false, true);
                console.log('dftyujhbvbhjo', outInfo);
                if (outInfo.sys.status >= 0) {
                    erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), 'gridView2');
                } else {
                    return false;
                }
            }
        };
        const query_zc = async (e: any) => {
            console.log('sdrtygbhjkl', e);
            if (e.target?.innerText.toString().trim() === "查 询") {
                const inInfo = new EI.EIInfo();
                // const inBlock = new EI.EiBlock();
                inInfo.addBlock(
                    erFormHelper.getAllControlValueAsEiBlock('LayoutGroup2')
                );
                console.log('dftyujhbvbhjo', inInfo);
                const outInfo = await erFormHelper.callService('wmsmsm12p_inq', inInfo, false, true);
                console.log('dftyujhbvbhjo', outInfo);
                if (outInfo.sys.status >= 0) {
                    erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), 'GridView_ZC');
                } else {
                    return false;
                }
            }

        };
        const setStockPlaceNo = async (e: any) => {

            erFormHelper.checkGridCurrentRow('gridView2')

            const model = erFormHelper.getGridCurrentRow('gridView2');
            //const dt = erFormHelper.getGridCheckedRows('gridView1');

            const current_row = gridView3.gridOptions.api.getSelectedNodes();
            console.log('jhgfc', current_row)
            erFormHelper.stopGridEditing('gridView3', () => {
                current_row.forEach((item: any) => item.setDataValue('PLAN_NO', model['PLAN_NO']));
                current_row.forEach((item: any) => item.setDataValue('LOAD_CODE_FACTORY', model['LOAD_CODE_FACTORY']));
                current_row.forEach((item: any) => item.setDataValue('LOAD_CODE_AREA', model['LOAD_CODE_AREA']));
                current_row.forEach((item: any) => item.setDataValue('LOAD_CODE', model['LOAD_CODE']));
                current_row.forEach((item: any) => item.setDataValue('UNLOAD_CODE_FACTORY', model['UNLOAD_CODE_FACTORY']));
                current_row.forEach((item: any) => item.setDataValue('UNLOAD_CODE_AREA', model['UNLOAD_CODE_AREA']));
                current_row.forEach((item: any) => item.setDataValue('UNLOAD_CODE', model['UNLOAD_CODE']));
            })
            console.log('ftyhgvbhjnjk', erFormHelper.getGridAllRowsAsBlock('gridView3'));


        };
        const setLoadMAT = async () => {
            erFormHelper.clearGridData('gridView3');
            erFormHelper.checkGridCurrentRow('GridView_ZC')
            const model = erFormHelper.getGridCurrentRow('GridView_ZC');
            const eiInfo4 = new EI.EIInfo();
            eiInfo4.addBlock(erFormHelper.buildEiBlock([{ LOAD_SCHEME_NO: model['LOAD_SCHEME_NO'] }]))

            console.log('eiInfo4', eiInfo4);


            const outInfo4 = await erFormHelper.callService('wmsmsm12p_inq1', eiInfo4, true, false, true);
            if (outInfo4.sys.status < 0) {
                erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
            } else {
                erFormHelper.mergeEiBlockToGrid(outInfo4.getBlock(0), 'gridView3');
            }
        }
        const getSmShiftGroup = async () => {

            let sqlstr = 'select T2.SHIFT_GROUP from(select FLOOR(MOD(((SYSDATE - '
                + `TO_DATE(TIME_BEGIN, 'yyyy-mm-dd hh24-mi-ss'))),DAYS_PER_LOOP)* 2) seq_no from TEP0007 where SHIFT_CLASS = 'SMCP') t1 `
                + `left join tep0008 t2 on t1.seq_no = t2.SHIFT_SEQ and t2.SHIFT_CLASS = 'SMCP'`;
            const out = await erFormHelper.querySql('', sqlstr);

            //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.SHIFT_GROUP)
            return String(out.getBlock(0).data[0]?.SHIFT_GROUP);
        };
        const F2_DO = async (e: any) => {
            stock_no.value = erFormHelper.getControlValue('layoutControlGroup1', 'STOCK_NO');
            // if (stock_no.value === '') {
            //   erFormHelper.messageWarning('请输入库区号');
            //   return false;
            // }

            grid1pagingQuery();
        };
        const F3_DO = async (e: any) => {
            console.log('fty8uhgbvbhjiokjnb bnjkopokn ', await erFormHelper.checkRequiredInput('layoutControlGroup4'))
            if (!await erFormHelper.checkRequiredInput('layoutControlGroup4')) {
                erFormHelper.messageWarning('请检查输入');
                return false;
            }
            if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
                erFormHelper.messageWarning('请选择需要准备出库的材料信息');
                return false;
            }
            const inInfo = new EI.EIInfo();
            inInfo.blocks.clear;
            console.log('iuytgfdxcfghjkl;', erFormHelper.getControlValue('layoutControlGroup4', 'TRUCK_NO'), Number(erFormHelper.getControlValue('layoutControlGroup1', 'IF_DB')))
            const checkedRowEiBlock = erFormHelper.getGridCheckedRowsAsBlock(
                'gridView3',
                {

                    OUT_STOCK_TIME: formatDate(
                        erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')
                    ),
                    TRNP_MODE_CODE: erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE'),//运输方式
                    TRUCK_NO: erFormHelper.getControlValue('layoutControlGroup4', 'TRUCK_NO'),//卡车号
                    OPERATOR: erFormHelper.getControlValue('layoutControlGroup4', 'OPERATOR'),//卡车号
                    SHIFT_GROUP: erFormHelper.getControlValue('layoutControlGroup4', 'SHIFT_GROUP'),//卡车号
                    IF_DB: String(Number(erFormHelper.getControlValue('layoutControlGroup1', 'IF_DB')))
                },
                true
            );
            console.log('iuytgfdxcfghjkl;', erFormHelper.getControlValue('layoutControlGroup1', 'IF_DB'))
            if (String(Number(erFormHelper.getControlValue('layoutControlGroup1', 'IF_DB'))) === "1") {
                if (!await erFormHelper.messageConfirm('是否对已调拨完成的材料进行装车')) {
                    return false;
                }
            }

            inInfo.addBlock(checkedRowEiBlock);

            for (let i = 0; i < inInfo.getBlock(0).data.length; i++) {
                if (inInfo.getBlock(0).data[i]['PLAN_NO']?.toString().trim() === '') {
                    erFormHelper.messageWarning('选中记录没有选中倒运计划号');
                    return false;
                }

            }
            for (let i = 0; i < inInfo.getBlock(0).data.length - 1; i++) {

                if (
                    inInfo.getBlock(0).data[i]['PLAN_NO'] !==
                    inInfo.getBlock(0).data[i + 1]['PLAN_NO']
                ) {
                    erFormHelper.messageWarning('选中的倒运计划号不一致，不能进行一次操作。');
                    return false;
                }

            }


            console.log('inInfo', inInfo);
            const outInfo = await erFormHelper.callService('wmsmsm12p_zc', inInfo, true, true);
            if (outInfo.sys.status >= 0) {
                erFormHelper.messageSuccess();
                down_disabled_flag.value = true;
                refresh_mat();
                grid1pagingQuery();
                erFormHelper.clearLayoutData('layoutControlGroup4')
                return true;
            } else {
                return false;
            }

        };
        const F3_PRE_DO = async (e: any) => {
            down_disabled_flag.value = false;
            refresh_mat();
            console.log('行号', 433)

            console.log('行号', 438)

            let shift_group = await getSmShiftGroup();

            erFormHelper.setControlValue('layoutControlGroup4', 'OUT_STOCK_TIME', new Date());
            erFormHelper.setControlValue('layoutControlGroup4', 'TRNP_MODE_CODE', '1');
            console.log('fty8uhgbvbhjiokjnb bnjkopokn ', formatDate(
                erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')
            ))
            erFormHelper.setControlValue('layoutControlGroup4', 'SHIFT_GROUP', shift_group);
        };
        const F3_CANCEL = async (e: any) => {
            down_disabled_flag.value = true;
            refresh_mat();
            grid1pagingQuery();
            erFormHelper.clearLayoutData('layoutControlGroup4')

        };
        const F4_DO = async (e: any) => {
            if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
                erFormHelper.messageWarning('请选择需要撤销装车的材料');
                return false;
            }
            const eiInfo = new EI.EIInfo();
            eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3',
                { LOAD_SCHEME_NO: erFormHelper.getGridCurrentRow('GridView_ZC')['LOAD_SCHEME_NO'] }));


            const outInfo4 = await erFormHelper.callService('wmsmsm12p_cencel', eiInfo, true, false, true);
            if (outInfo4.sys.status < 0) {
                erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
                return false;
            } else {
                erFormHelper.messageSuccess('处理成功');
                grid1pagingQuery();
                refresh_mat();
                query_zc(1);
                erFormHelper.clearLayoutData('layoutControlGroup4')
                return true;
            }
        };
        const F4_PRE_DO = async (e: any) => {
            erFormHelper.clearGridData('gridView3');
        };
        const F4_CANCEL = async (e: any) => {

            erFormHelper.clearLayoutData('layoutControlGroup4')
        };
        const F5_DO = async (e: any) => {
            if (erFormHelper.getGridCheckedRowsAsBlock('GridView_ZC').data.length === 0) {
                erFormHelper.messageWarning('请选择需要装车确认的实绩');
                return false;
            }
            const eiInfo = new EI.EIInfo();
            if (await erFormHelper.messageConfirm('是否对该实绩的预装车单确认？')) {
                eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView_ZC'));


                const outInfo4 = await erFormHelper.callService('wmsmsm12p_conf', eiInfo, true, false, true);
                if (outInfo4.sys.status < 0) {
                    erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
                    return false;
                } else {
                    erFormHelper.messageSuccess('处理成功');
                    grid1pagingQuery();
                    refresh_mat();
                    query_zc(1);
                    erFormHelper.clearLayoutData('layoutControlGroup4')
                    return true;
                }
            }

        };
        const F5_PRE_DO = async (e: any) => {
            erFormHelper.clearGridData('gridView3');
        };
        const F5_CANCEL = async (e: any) => {

            erFormHelper.clearLayoutData('layoutControlGroup4')
        };
        const F6_DO = async (e: any) => {

            EFCallForm('WMSMZCS2N', {});
        };

        function useDebounce(callback: any, delay: any) {
            let timer: any;

            const debouncedCallback = (...args: any) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    callback(...args);
                }, delay);
            };


            return debouncedCallback;
        }

        const down_mat = useDebounce(() => {
            let if_exist = false;
            if (erFormHelper.getGridCheckedRows('gridView1').length === 0) {
                erFormHelper.messageWarning('请至少选择一个材料!');
            }
            else {
                for (const s of erFormHelper.getGridCheckedRowsAsBlock('gridView1').data) {
                    for (const index of erFormHelper.getGridAllRowsAsBlock('gridView3').data) {
                        if (s['MAT_NO']?.toString().trim() === index['MAT_NO']?.toString().trim()) {
                            if_exist = true;
                            break;
                        }

                    }
                    if (if_exist) {
                        console.log('cfgtyujhnjk', '重复');
                        if_exist = false;
                        continue;
                    }

                    erFormHelper.stopGridEditing('gridView3', () => {
                        console.log('xdrtgfcvghuijhbnji', s)

                        const sdf = erFormHelper.addRowToGrid('gridView3', true);
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_NO: s['MAT_NO'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { ST_NO: s['ST_NO'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_LINE_TYPE: s['MAT_LINE_TYPE'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { HOT_SEND_FLAG: s['HOT_SEND_FLAG'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { HEAT_NO: s['HEAT_NO'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_ACT_THICK: s['MAT_ACT_THICK']?.toString() });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_ACT_WIDTH: s['MAT_ACT_WIDTH']?.toString() });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_ACT_LEN: s['MAT_ACT_LEN']?.toString() });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_ACT_WT: s['MAT_ACT_WT']?.toString() });
                        erFormHelper.setGridRowData('gridView3', sdf, { LAYERNO: s['LAYERNO']?.toString() });
                        erFormHelper.setGridRowData('gridView3', sdf, { MAT_STATUS: s['MAT_STATUS'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { PONO: s['PONO'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { GUIDE_DEST: s['GUIDE_DEST'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { SURF_QUALITY: s['SURF_QUALITY'] });
                        erFormHelper.setGridRowData('gridView3', sdf, { USAGE_DECISION: s['USAGE_DECISION'] });

                        erFormHelper.deleteGridRows('gridView1', false);
                        erFormHelper.checkGridRow('gridView3', sdf, true);
                    })

                }
            }
        }, 200)
        const up_mat = () => {
            if (erFormHelper.getGridCheckedRows('gridView3').length === 0) {
                erFormHelper.messageWarning('请至少选择一个材料!');
            }
            else {
                erFormHelper.stopGridEditing('gridView3', () => {

                    erFormHelper.deleteGridRows('gridView3', false);
                })
            }
        }
        const qu_mat = () => {
            grid1pagingQuery();
        }
        const refresh_mat = () => {
            erFormHelper.clearGridData('gridView3');
        }
        return {
            erFormHelper,
            initializeFlag,
            gridToolbar, down_mat, up_mat, refresh_mat, erGrid3Ready,
            F2_DO,
            F3_DO,
            F3_PRE_DO,
            F3_CANCEL,
            F4_DO,
            F4_PRE_DO,
            F4_CANCEL,
            F5_DO,
            F5_PRE_DO,
            F5_CANCEL, F6_DO,
            qu_mat,
            query_zx, query_zc,
            zhuangdian,
            xiedian, jihuahao, shijihao,
            setStockPlaceNo, efFormReady, erGrid1Ready, erGrid2Ready, erGridzReady, setLoadMAT, down_disabled_flag
        };
    }
});

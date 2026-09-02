import { computed, defineComponent, onMounted, reactive, ref, watch, toRaw, nextTick, Ref } from 'vue';
import { EI, EIManager, buildEIInfo } from 'EIX/ei';
import { ER } from 'ERX/Er';
import { SiUtils } from 'ERX/SiUtils';
import { FiUtils } from 'ERX/FiUtils';
import xrEfForm from 'EFX/xrEfForm';
import xrEfPanel from 'EFX/xrEfPanel';
import erLayout from 'ERX/ErLayout';
import erGrid from 'ERX/ErGrid';
import xrEfDialog from 'EFX/xrEfDialog';
import ErPopFree from 'ERX/ErPopFree';
import { PopQueryReturnInfo, PopFreeReturnInfo } from 'ERX/er-type';
import { Console, log } from 'console';
import eBFR from "EBFR/eBFR";
import WMSMDIALOG from "../../components/WMSMDIALOG.vue";

export default defineComponent({
  name: 'WMSM0RXYS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    xrEfDialog,
    ErPopFree, WMSMDIALOG
  },

  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const efFormInfo = ref<{ [key: string]: any }>({});
    const efFormIsReady = ref(false);
    let formPartition: string;
    let formName: '';
    let PROGRAM_NAME: string;
    let i_form_ename = ''; // 低代码配置画面布局名
    let grid_main!: any;
    let grid_daoru!: any;
    let grid_chengfen!: any;
    const gridView_tab2 = ref('GridView2');
    const gridView_tab3 = ref('GridView3');
    let LayoutGroupFilter = 'LayoutGroupFilter';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();

    const initializeService = '';
    //const tabActiveKey = ref('tab1');
    let i_proc_div = '';
    let cs_OkClick = '';
    let popFreeEdit: ER.PopFreeHelper;
    let grid_tab = '';

    // xr-ef-form提供了ready事件, 在这里获取画面配置信息
    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      formName = efFormInfo.value.formName; // 当前画面名
      console.log('efFormInfo', formName);
      if (efFormInfo.value.formParams?.PROGRAM_NAME) {
        PROGRAM_NAME = efFormInfo.value.formParams['PROGRAM_NAME'];
      }
      initializePage();
    };

    // 变量定义
    const initializeFlag = ref(0);
    let dt_key = new EI.EiBlock();
    const i_service_f2 = 'qmts0r_inq';
    //const i_service_f5 = 'mmsmdr_inq';
    const i_service_f3 = 'qmts0rdr_inq';
    const i_service_f4 = 'qmts0r_pro1';
    const i_factory_div = 'S2N';
    let out = new EI.EIInfo();
    let v_datalist: (string | number | boolean | Date | ArrayBuffer | null)[] = [];

    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(formPartition, formName, i_form_ename, initializeService);
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = 1;

        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(async() => {
          // let sqlstr = `select CODE from TWMSMZD02 t WHERE CODE_CLASS='WMSM0R' `;
          // out = await erFormHelper.querySql('', sqlstr);
          // for (let i = 0; i < out.getBlock(0).data.length; i++) {
          //   v_datalist.push(out.getBlock(0).data[i].CODE);
          // }
         });
      } else {
        erFormHelper.messageError('ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!');
      }
    };

    onMounted(() => { });
    //grid实例
    const erGridReady = () => {
      grid_main = erFormHelper.getGrid(gridView_tab2.value);
      erFormHelper.setGridToolbarVisible(gridView_tab2.value, {
        addrow: false,
        copyrow: false,
        excel: true
      });
    };

    // const handleTabChange = (activeKey: string) => {
    //   if (activeKey === 'tab1') {
    //     query_main();
    //   } else if (activeKey === 'tab2') {

    //   }
    // };
    // function loadFile(url: any, callback: any) {
    //   PizZipUtils.getBinaryContent(url, callback);
    // }

    // const renderDoc_1 = async (data: any) => {
    //   loadFile("http://10.162.72.16:10004/WordTemplate/质保书报表模板1.docx", function(
    //     error: any,
    //     content: any
    //   ) {
    //     if (error) {
    //       throw error;
    //     }
    //     const zip = new PizZip(content);
    //     const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    //     doc.render(data);

    //     const out = doc.getZip().generate({
    //       type: "blob",
    //       mimeType:
    //         "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    //     });
    //     // Output the document using Data-URI
    //     const fileName = erFormHelper.getGridSelectRowsAsBlock('GridView1').data[0]["CERTI_PRINT_NO"] + "_质保书.docx";
    //     saveAs(out, fileName);
    //   });
    // }

    // const renderDoc_2 = async (data: any) => {
    //     loadFile("http://10.162.72.16:10004/WordTemplate/质保书报表模板2.docx", function(
    //       error: any,
    //       content: any
    //     ) {
    //       if (error) {
    //         throw error;
    //       }
    //       const zip = new PizZip(content);
    //       const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    //       doc.render(data);

    //       const out = doc.getZip().generate({
    //         type: "blob",
    //         mimeType:
    //           "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    //       });
    //       // Output the document using Data-URI
    //       const fileName = erFormHelper.getGridSelectRowsAsBlock('GridView1').data[0]["CERTI_PRINT_NO"] + "_质保书.docx";
    //       saveAs(out, fileName);
    //     });
    // }

    // const filePreview = async (file: any) => {
    //         console.log(file);
    //         const addTypeArray = file.name.split(".");
    //         const addType = addTypeArray[addTypeArray.length - 1];
    //         if (['pdf', 'png', 'jpg'].includes(addType)) {
    //           window.open(file.url, '_blank');
    //         }
    //         else if (file.name.toLowerCase().endsWith('.doc') || file.name.toLowerCase().endsWith('.docx') || file.name.toLowerCase().endsWith('.xls')) {
    //           window.open(
    //             "http://view.officeapps.live.com/op/view.aspx?src=" + file.response
    //           );
    //         }
    //         else {
    //           console.log('Preview not implemented for this file type');
    //         }
    // };
    //const filePreview_2 = async (data: any) => {};


    //焦点行数据查询
    const GridView1FocusChanged = async (e: any) => {
      if (e) {
        if (e.rowChanged && e.data) {
          const inInfo = new EI.EIInfo();
          inInfo.addBlock(
            erFormHelper.convertModelAsBlock(e.data, {
              ORDER_NO: e.data.get('ORDER_NO'),
              // TABLE_NAME_1: 'QMTS0RXY'
              TABLE_NAME_1: 'QMTS0RXYS2N'
            })
          );
          const outInfo = await erFormHelper.callService('qmts0r_inq2', inInfo, false, true);
          console.log('qwert', outInfo);
          if (outInfo.sys.status < 0) {
            erFormHelper.messageError('成分查询错误:' + outInfo.sys.msg);
            return;
          } else {
            erFormHelper.mergeDataToGrid(outInfo, gridView_tab3.value);
          }
          const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
          console.log('outInfo1', outInfo1);
          //清空
          erFormHelper.clearLayoutData('LayoutGroup1');
          //erFormHelper.setAllControlDefalutValue('LayoutGroup1', true);
          
          erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
        }
      }


      // if (e) {
      //   if (e.data && e.rowChanged) {
      //       if (e.data) {
      //           const currentRow = erFormHelper.getGridCurrentRow('GridView1', true);
      //           console.log('currentRow', currentRow);
      //           // queryDetailInfo(currentRow);
      //       }
      //   }
      // }
    };

    const query_dr = async () => {
      const eiInfo = new EI.EIInfo();
      //efFormInfo.value.formParams["service"]
      //const table_name = 'TQMTS0RDR';
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock(LayoutGroupFilter);
      //eiBlock.addColumn('table_name', table_name); //传表名
      //console.log('table_name',table_name);

      eiInfo.addBlock(eiBlock, '');
      const outInfo = await erFormHelper.callService(i_service_f3, eiInfo);
      console.log('查询', outInfo);

      if (outInfo.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
        return;
      } else {
        console.log('hbhjikjnmkl',outInfo,gridView_tab2.value)
        erFormHelper.mergeDataToGrid(outInfo, gridView_tab2.value);
      }

      const mainGridCheckedRow = erFormHelper.getGridCurrentRowAsBlock('GridView2').data[0];
      const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
      const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
      const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
      console.log('HEAT_NO', mainGridCheckedRow['HEAT_NO']?.toString());
      console.log('ORDER_NO', mainGridCheckedRow['ORDER_NO']?.toString());

      //erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
    };

    //自定义模板参数
    const popFreeEdit_pars = async (Click_name: string) => {
      if (cs_OkClick === 'F7') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG1');
      }
      if (cs_OkClick === 'F8') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG2');
      }
      if (cs_OkClick === 'F9') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG3');
      }
      if (cs_OkClick === 'F10') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG4');
      }
      if (cs_OkClick === 'F11') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG5');
      }
      if (cs_OkClick === 'F12') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG6');
      }
      //删除成分信息
      // if (cs_OkClick === 'F12_D') {
      //   popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG3');
      // }
      //修改成分规定值
      if (cs_OkClick === 'F13') {
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM_DIALOG', 'WMSM0R_LAYOUT_DIALOG7');
      }
    };

    //弹出界面OK按钮点击事件
    const popFreeEditOkClick = async (e: PopFreeReturnInfo) => {
      console.log('111');
      let i_service: any;
      const inInfo = new EI.EIInfo();
      let outInfo: EI.EIInfo = new EI.EIInfo();
      i_service = i_service_f4;
      inInfo.addBlock(
        erFormHelper.convertModelAsBlock(e.dataModel, {
          FACTORY_DIV: i_factory_div,
          PROC_DIV: i_proc_div,
          TABLE_NAME_1: 'QMTS0RXYS2N'
        }),
        'PARA'
      );

      if (inInfo.getBlock('PARA').data[0]['HEAT_NO'] == '' || inInfo.getBlock('PARA').data[0]['ORDER_NO'] == '') {
        erFormHelper.messageWarning('熔炼号和合同号均不能为空!');
        return;
      }
      outInfo = await erFormHelper.callService(i_service, inInfo, false, true, true);
      if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('操作成功！');
      }
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];

      query_dr();
      const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
      const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
      const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
      erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
      console.log('JD111');
      const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
      console.log('q222', outInfo1);
      //清空
      erFormHelper.setAllControlDefalutValue('LayoutGroup1', false);
      //加载
      erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
    };

    //layout值发生改变事件

    const F2_DO = async () => {
      //query_main();
      query_dr();
    };

    // const query_main = async () => {
    //   const eiInfo = new EI.EIInfo();
    //   const eiBlock = erFormHelper.getAllControlValueAsEiBlock(LayoutGroupFilter);
    //   //eiBlock.addColumn('GRID_TAB', 'TMMSM01'); //传表名
    //   eiInfo.addBlock(eiBlock, '');
    //   const outInfo = await erFormHelper.callService(i_service_f2, eiInfo);

    //   if (outInfo.sys.status < 0) {
    //     erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
    //     return;
    //   } else {
    //     erFormHelper.mergeDataToGrid(outInfo, gridView_tab2.value);
    //   }
    // };

    //分析
    const F3_DO = async () => {
      const inInfo = new EI.EIInfo();
      console.log('111', inInfo);

      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条核电信息！');
        return;
      }
      console.log('main', inInfo);
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const XY_FLAG = mainGridCheckedRow['XY_FLAG'];
      if (XY_FLAG !== '1') {
        erFormHelper.messageWarning('该信息未修约，不可进行分析！');
        return;
      }
      const AYL_FLAG = mainGridCheckedRow['AYL_FLAG'];
      if (AYL_FLAG == '1') {
        erFormHelper.messageWarning('该信息已分析！');
      } else {
        inInfo.addBlock(
          erFormHelper.getGridSelectRowsAsBlock('GridView2', {
            PROC_DIV: 'A',
            FACTORY_DIV: i_factory_div,
            TABLE_NAME_1: 'QMTS0RXYS2N'
          }),
          'PARA'
        );
        const mes_res = await erFormHelper.messageConfirm('选中的记录将被修改, 是否继续？');
        if (!mes_res) {
          return false;
        }
        const outInfo = await erFormHelper.callService(i_service_f4, inInfo, false, true);
        console.log('q111', outInfo);

        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess('操作成功！');
        }
        query_dr();
        const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
        const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
        const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
        erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
        console.log('JD');
        const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
        console.log('q222', outInfo1);
        //清空
        erFormHelper.setAllControlDefalutValue('LayoutGroup1', false);
        //加载
        erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
      }
    };
    //审核
    const F4_DO = async () => {
      const inInfo = new EI.EIInfo();
      console.log('inInfo', inInfo);
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条核电信息！');
        return;
      }
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const AYL_FLAG = mainGridCheckedRow['AYL_FLAG'];
      const CHECK_FLAG = mainGridCheckedRow['CHECK_FLAG'];
      console.log('AYL_FLAG', AYL_FLAG);

      if (AYL_FLAG !== '1') {
        erFormHelper.messageWarning('该信息未分析，不可进行审核！');
      } else if (CHECK_FLAG == '1') {
        erFormHelper.messageWarning('该信息已审核！');
      } else {
        inInfo.addBlock(
          erFormHelper.getGridSelectRowsAsBlock('GridView2', {
            PROC_DIV: 'C',
            FACTORY_DIV: i_factory_div,
            TABLE_NAME_1: 'QMTS0RXYS2N'
          }),
          'PARA'
        );
        const mes_res = await erFormHelper.messageConfirm('选中的记录将被修改, 是否继续？');
        if (!mes_res) {
          return false;
        }

        const outInfo = await erFormHelper.callService(i_service_f4, inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess('操作成功！');
        }
        query_dr();
        const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
        const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
        const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
        erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
        console.log('JD');
        const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
        console.log('q222', outInfo1);
        //清空
        erFormHelper.setAllControlDefalutValue('LayoutGroup1', false);
        //加载
        erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
      }
    };
    //判定
    const F5_DO = async () => {
      const inInfo = new EI.EIInfo();
      console.log('inInfo', inInfo);
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条核电信息！');
        return;
      }
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const CHECK_FLAG = mainGridCheckedRow['CHECK_FLAG'];
      const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      if (CHECK_FLAG !== '1') {
        erFormHelper.messageWarning('该信息未审核，不可进行判定！');
      } else if (DECIDE_CODE == '1') {
        erFormHelper.messageWarning('该信息已判定！');
      } else {
        inInfo.addBlock(
          erFormHelper.getGridSelectRowsAsBlock('GridView2', {
            PROC_DIV: 'D',
            FACTORY_DIV: i_factory_div,
            TABLE_NAME_1: 'QMTS0RXYS2N'
          }),
          'PARA'
        );
        const mes_res = await erFormHelper.messageConfirm('选中的记录将被修改, 是否继续？');
        if (!mes_res) {
          return false;
        }

        const outInfo = await erFormHelper.callService(i_service_f4, inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess('判定成功！');
        }

        cs_OkClick = 'F10';
        i_proc_div = 'U10';
        popFreeEdit_pars(cs_OkClick);
        popFreeEdit.ReceiveData(mainGridCheckedRow, {
          // MAT_NO: true,
          // PRINT_NO: true
        });
        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      }
    };
    //预览
    const F6_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条核电修约信息！');
        return;
      }
      inInfo.addBlock(
        erFormHelper.getGridSelectRowsAsBlock('GridView2', {
        }),
        'PARA'
      );
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const HS = mainGridCheckedRow['HS'];
      console.log('HS', HS);
      console.log('inInfo', inInfo);
      // const outInfo = await erFormHelper.callService(i_service_f3, inInfo, false, true);
      // console.log('outInfo',outInfo);
      // if (outInfo.sys.status < 0) {
      //   erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
      //   return;
      // }else{

      //       filePreview(outInfo.getBlock(0).data[0]);

      // }
      let popFreeEdit: ER.PopFreeHelper;
      popFreeEdit = new ER.PopFreeHelper(formPartition, efFormInfo.value.formName, 'LayoutDPmessage');

      const myMap: Map<string, string> = new Map();
      myMap.set("HEAT_NO", String(mainGridCheckedRow['HEAT_NO']));
      myMap.set("ORDER_NO", String(mainGridCheckedRow['ORDER_NO']));
      myMap.set("NOW_ROW", String(mainGridCheckedRow['NOW_ROW']));
      console.log('NOW_ROW', String(mainGridCheckedRow['NOW_ROW']));

      if (HS == '1') {
        eBFR.CallReportPDFFromMap('QMTS0R3', myMap)
      }
      if (HS == '2') {
        eBFR.CallReportPDFFromMap('QMTS0R4', myMap)
      }
      console.log('行号', 468)

    };
    const popFreeEditOkClick1 = async (e: any) => {


      const inInfo = new EI.EIInfo();
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];

      const myMap: Map<string, string> = new Map();
      myMap.set("ORDER_NO", String(mainGridCheckedRow['ORDER_NO']));
      myMap.set("HEAT_NO", String(mainGridCheckedRow['HEAT_NO']));
      eBFR.CallReportPDFFromMap('QMTS0R', myMap)
    };
    //下载
    //const F7_DO = async () => {
    // const inInfo = new EI.EIInfo();
    // if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
    //   erFormHelper.messageWarning('请选择一条质保书信息！');
    //   return;
    // }
    // inInfo.addBlock(
    //   erFormHelper.getGridSelectRowsAsBlock('GridView1', {
    //   }),
    //   'PARA'
    // );
    // const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
    // const HS = mainGridCheckedRow['HS'];
    // console.log('HS',HS);
    // const outInfo = await erFormHelper.callService(i_service_f3, inInfo, false, true);
    // console.log('outInfo',outInfo);
    // if (outInfo.sys.status < 0) {
    //   erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
    //   return;
    // }
    // if(HS == '1'){
    //   renderDoc_1(outInfo.getBlock(0).data[0]);
    // }
    // if(HS == '2'){
    //   renderDoc_2(outInfo.getBlock(0).data[0]);
    // }
    //};
    const F7_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条需要修改分析时间的记录！');
        return;
      }
      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const AYL_FLAG = mainGridCheckedRow['AYL_FLAG'];
      if (AYL_FLAG != '1') {
        erFormHelper.messageWarning('该信息未分析，不可进行修改时间操作！');
      } else {
        cs_OkClick = 'F7';
        i_proc_div = 'U7';
        popFreeEdit_pars(cs_OkClick);
        popFreeEdit.ReceiveData(mainGridCheckedRow, {
          // MAT_NO: true,
          // PRINT_NO: true          
        });

        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      }
    };

    const F8_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条需要修改审核时间的记录！');
        return;
      }

      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const CHECK_FLAG = mainGridCheckedRow['CHECK_FLAG'];
      if (CHECK_FLAG != '1') {
        erFormHelper.messageWarning('该信息未审核，不可进行修改审核时间操作！');
      } else {
        cs_OkClick = 'F8';
        i_proc_div = 'U8';
        popFreeEdit_pars(cs_OkClick);
        popFreeEdit.ReceiveData(mainGridCheckedRow, {
          // MAT_NO: true,
          // PRINT_NO: true
        });

        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      }
    };

    const F9_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条需要修改判定时间的记录！');
        return;
      }

      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      if (DECIDE_CODE != '1') {
        erFormHelper.messageWarning('该信息未判定，不可进行修改判定时间操作！');
      } else {
        cs_OkClick = 'F9';
        i_proc_div = 'U9';
        popFreeEdit_pars(cs_OkClick);
        popFreeEdit.ReceiveData(mainGridCheckedRow, {
          // MAT_NO: true,
          // PRINT_NO: true
        });

        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      }
    };

    const F10_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条修改成分规定值的数据！');
        return;
      }
      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      console.log('修改成分规定值mainGridCheckedRow', mainGridCheckedRow);
      // const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      // if (DECIDE_CODE != '1') {
      //   erFormHelper.messageWarning('该信息未判定，不可进行该操作！');
      // } else {
        //后期加此功能
        cs_OkClick = 'F13';
        i_proc_div = 'U13';
        popFreeEdit_pars(cs_OkClick);
        popFreeEdit.ReceiveData(mainGridCheckedRow, {
          // MAT_NO: true,
          // PRINT_NO: true
        });
        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      //}
    };
    
    const dialogFormVisible = ref(false);
    const handleClose = () => {
      dialogFormVisible.value = false;
      query_dr();
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2')[0];
      const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
      const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
      const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
      erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
    };
    const formData = {
      HEAT_NO: '',
      ORDER_NO: '',
      NOW_ROW: '',
      REMARK: '',
      datalist: v_datalist
    };
    const F11_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条需要备注的信息！');
        return;
      }
      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2')[0];
      //const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      // if (DECIDE_CODE != '1') {
      //   erFormHelper.messageWarning('该信息未判定，不可进行该操作！');
      // }else{ 
      const XY_FLAG = mainGridCheckedRow['XY_FLAG'];
      if (XY_FLAG !== '1') {
        erFormHelper.messageWarning('该信息未修约，不可进行该操作！');
        return;
      }
      // cs_OkClick = 'F11';
      // i_proc_div = 'U11';
      // popFreeEdit_pars(cs_OkClick);
      // popFreeEdit.ReceiveData(mainGridCheckedRow, {
      //   // MAT_NO: true,
      //   // PRINT_NO: true
      // });

      // ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      //}
      
      formData.HEAT_NO = mainGridCheckedRow['HEAT_NO'];
      formData.ORDER_NO = mainGridCheckedRow['ORDER_NO'];
      formData.NOW_ROW = mainGridCheckedRow['NOW_ROW'];
      formData.REMARK = erFormHelper.getControlValue('LayoutGroup1', 'REMARK');
      // formData.datalist = v_datalist;
      dialogFormVisible.value = true;
 
      inInfo.addBlock(
        erFormHelper.getGridSelectRowsAsBlock('GridView2', {
          TABLE_NAME_1: 'QMTS0RXYS2N'
        }),
        'PARA'
      );
      

      const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
      console.log('outInfo1', outInfo1);
      //清空
      erFormHelper.setAllControlDefalutValue('LayoutGroup1', false);
      //加载
      erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
    };

    //F12：增加成分信息
    const F12_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView2').length === 0) {
        erFormHelper.messageWarning('请选择一条需要增加成分信息的记录！');
        return;
      }
      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView2', true)[0];
      const XY_FLAG = mainGridCheckedRow['XY_FLAG'];
      if (XY_FLAG != '1') {
        erFormHelper.messageWarning('该信息未修约，不可进行操作！');
      } else {
        //GirdView3有勾选则为删除成分信息，无勾选则增加成分信息
        if (erFormHelper.getGridCheckedRows('GridView3').length !== 0) {

          const mainGridCheckedRow_GridView3 = erFormHelper.getGridCheckedRows('GridView3', true)[0];
          const ELM_ROW = mainGridCheckedRow_GridView3['ELM_ROW'];
          console.log('ELM_ROW', ELM_ROW);
        
            inInfo.addBlock(
              erFormHelper.getGridSelectRowsAsBlock('GridView2', {
                PROC_DIV: 'D12',
                ELM_ROW: ELM_ROW,
                FACTORY_DIV: i_factory_div,
                TABLE_NAME_1: 'QMTS0RXYS2N'
              }),
              'PARA'
            );
          const mes_res = await erFormHelper.messageConfirm('选中的成分信息将被删除, 是否继续？');
          if (!mes_res) {
            return false;
          }
          const outInfo = await erFormHelper.callService(i_service_f4, inInfo, false, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess('删除成功！');
          }
          query_dr();
          const HEAT_NO = mainGridCheckedRow['HEAT_NO'];
          const ORDER_NO = mainGridCheckedRow['ORDER_NO'];
          const NOW_ROW = mainGridCheckedRow['NOW_ROW'];
          erFormHelper.setGridIndicator('GridView2', { HEAT_NO: HEAT_NO, ORDER_NO: ORDER_NO, NOW_ROW: NOW_ROW });
          console.log('JD');
          const outInfo1 = await erFormHelper.callService(i_service_f2, inInfo, false, true);
          console.log('q222', outInfo1);
          //清空
          erFormHelper.setAllControlDefalutValue('LayoutGroup1', false);
          //加载
          erFormHelper.setControlValueEx('LayoutGroup1', outInfo1.getBlock(0).data[0]);
        }else{
          cs_OkClick = 'F12';
          i_proc_div = 'U12';
          popFreeEdit_pars(cs_OkClick);
          popFreeEdit.ReceiveData(mainGridCheckedRow, {
            // MAT_NO: true,
            // PRINT_NO: true          
          });

          ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
        }
    }
    };
   
    return {
      erFormHelper,
      initializeFlag,
      efFormReady,
      LayoutGroupFilter,
      //gridView_tab1,
      //gridView_tab2,
      F2_DO,
      F3_DO,
      F4_DO,
      F5_DO,
      F6_DO,
      F7_DO,
      F8_DO,
      F9_DO,
      F10_DO,
      F11_DO,
      F12_DO,
      erGridReady,
      //erGrid2Ready,
      //erGrid3Ready,
      //handleTabChange,
      //tabActiveKey,
      GridView1FocusChanged, 
      dialogFormVisible, handleClose, formData
    };
  }
});

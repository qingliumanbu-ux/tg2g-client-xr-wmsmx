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
import axios from 'axios';
import eBFR from "EBFR/eBFR";

export default defineComponent({
  name: 'WMSM0RS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    xrEfDialog,
    ErPopFree,
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
    const gridView_tab1 = ref('GridView1');
    //const gridView_tab2 = ref('gridView_m');
    let LayoutGroupFilter = 'LayoutGroupFilter';
    //WMSM0R_LAYOUT_DIALOG

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
    const erFormHelper: ER.FormHelper = new ER.FormHelper();

    // 变量定义
    const initializeFlag = ref(0);
    let dt_key = new EI.EiBlock();
    const i_service_f2 = 'qmts0r_inq';
    const i_service_f3 = 'qmts0r_detail';
    const i_service_f4 = 'qmts0r_pro';
    const i_factory_div = 'S2N';

    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(formPartition, formName, i_form_ename, initializeService);
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = 1;

        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {});
      } else {
        erFormHelper.messageError('ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!');
      }
    };

    onMounted(() => {});
    //grid实例
    const erGrid1Ready = () => {
      grid_main = erFormHelper.getGrid(gridView_tab1.value);
      erFormHelper.setGridToolbarVisible(gridView_tab1.value, {
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
    
    //自定义模板参数
    const popFreeEdit_pars = async (Click_name: string) => {
      // popFreeEdit = new ER.PopFreeHelper(formPartition, 'MMSM_DIALOG', 'MMSM39_LAYOUT_DIALOG');
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
    };

    //弹出界面OK按钮点击事件
    const popFreeEditOkClick = async (e: PopFreeReturnInfo) => {
      console.log('111');
      let i_service: any;
      const inInfo = new EI.EIInfo();
      console.log('inInfoqqq', inInfo);
      let outInfo: EI.EIInfo = new EI.EIInfo();

        i_service = i_service_f4;


      inInfo.addBlock(
        erFormHelper.convertModelAsBlock(e.dataModel, {
          FACTORY_DIV: i_factory_div,
          PROC_DIV: i_proc_div
        }),
        'PARA'
      );

      if (inInfo.getBlock('PARA').data[0]['CERTI_PRINT_NO'] == '') {
        erFormHelper.messageWarning('质保书打印号不能为空!');
        return;
      }
      // const mainGridCheckedRow = erFormHelper.getGridCurrentRow('GridView1');
      // inInfo.addBlock(mainGridCheckedRow, 'TMMSM01');

      // inInfo.addBlock(
      //   erFormHelper.convertModelAsBlock(e.dataModel, {

      // CUT_BEFORE_LEN: e.dataModel.MAT_ACT_LEN,
      //   }),
      //   'CUT_BEFORE'
      // );

      console.log('inInfo', inInfo);
      outInfo = await erFormHelper.callService(i_service, inInfo, false, true, true);
      console.log('inInfo123', inInfo);
      console.log('outInfo123', outInfo);

      if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('操作成功！');
      }
      //}

      query_main();
    };

    //layout值发生改变事件

    const F2_DO = async () => {
      query_main();
    };

    const query_main = async () => {
      const eiInfo = new EI.EIInfo();
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock(LayoutGroupFilter);
      //eiBlock.addColumn('GRID_TAB', 'TMMSM01'); //传表名
      eiInfo.addBlock(eiBlock, '');
      const outInfo = await erFormHelper.callService(i_service_f2, eiInfo);

      if (outInfo.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
        return;
      } else {
        erFormHelper.mergeDataToGrid(outInfo, gridView_tab1.value);
      }
    };
    //分析
    const F3_DO = async () => {
        const inInfo = new EI.EIInfo();
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
            erFormHelper.messageWarning('请选择一条质保书信息！');
            return;
        }
        inInfo.addBlock(
            erFormHelper.getGridSelectRowsAsBlock('GridView1', {
              PROC_DIV: 'A',
              FACTORY_DIV: i_factory_div
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
        query_main();
    };
    //审核
    const F4_DO = async () => {
        const inInfo = new EI.EIInfo();
        console.log('inInfo',inInfo);
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
            erFormHelper.messageWarning('请选择一条质保书信息！');
            return;
        }
        const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
        const AYL_FLAG = mainGridCheckedRow['AYL_FLAG'];
        console.log('AYL_FLAG',AYL_FLAG);

        if (AYL_FLAG != '1') {
          erFormHelper.messageWarning('该条信息未分析，不可进行审核！');
        }else{
          inInfo.addBlock(
            erFormHelper.getGridSelectRowsAsBlock('GridView1', {
              PROC_DIV: 'C',
              FACTORY_DIV: i_factory_div
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
        }
        query_main();
    };
    //判定
    const F5_DO = async () => {
      const inInfo = new EI.EIInfo();
      console.log('inInfo',inInfo);
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
          erFormHelper.messageWarning('请选择一条质保书信息！');
          return;
      }
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
      const CHECK_FLAG = mainGridCheckedRow['CHECK_FLAG'];
      if (CHECK_FLAG != '1') {
        erFormHelper.messageWarning('该条信息未审核，不可进行判定！');
      }else{
        inInfo.addBlock(
          erFormHelper.getGridSelectRowsAsBlock('GridView1', {
            PROC_DIV: 'D',
            FACTORY_DIV: i_factory_div
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
      }
      query_main();
    };
    //预览
    const F6_DO = async () => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请选择一条质保书信息！');
        return;
      }
      inInfo.addBlock(
        erFormHelper.getGridSelectRowsAsBlock('GridView1', {
        }),
        'PARA'
      );
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
      const HS = mainGridCheckedRow['HS'];
      console.log('HS',HS);
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
      myMap.set("CERTI_PRINT_NO", String(mainGridCheckedRow['CERTI_PRINT_NO']));
      myMap.set("CERTI_BILL_NO", String(mainGridCheckedRow['CERTI_BILL_NO']));
      if(HS == '1'){
        eBFR.CallReportPDFFromMap('QMTS0R', myMap)
      }
      if(HS == '2'){
        eBFR.CallReportPDFFromMap('QMTS0R2', myMap)
      }
      console.log('行号', 468)
          
    };
    const popFreeEditOkClick1 = async (e: any) => {


      const inInfo = new EI.EIInfo();
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];

      const myMap: Map<string, string> = new Map();
      myMap.set("CERTI_PRINT_NO", String(mainGridCheckedRow['CERTI_PRINT_NO']));
      myMap.set("CERTI_BILL_NO", String(mainGridCheckedRow['CERTI_BILL_NO']));
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
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
          erFormHelper.messageWarning('请选择一条需要修改分析时间的记录！');
          return;
        }
        //获取选中行信息
        const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
        const AYL_FLAG = mainGridCheckedRow['AYL_FLAG'];
      if (AYL_FLAG != '1') {
        erFormHelper.messageWarning('该条信息未分析，不可进行修改时间操作！');
      }else{
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
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
          erFormHelper.messageWarning('请选择一条需要修改审核时间的记录！');
          return;
        }
  
        //获取选中行信息
        const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
      const CHECK_FLAG = mainGridCheckedRow['CHECK_FLAG'];
      if (CHECK_FLAG != '1') {
        erFormHelper.messageWarning('该条信息未审核，不可进行修改审核时间操作！');
      }else{
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
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
          erFormHelper.messageWarning('请选择一条需要修改判定时间的记录！');
          return;
        }
  
        //获取选中行信息
        const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
        const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      if (DECIDE_CODE != '1') {
        erFormHelper.messageWarning('该条信息未判定，不可进行修改判定时间操作！');
      }else{
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
        if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
          erFormHelper.messageWarning('请选择一条需要总结的数据！');
          return;
        }
        //获取选中行信息
        const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
        const DECIDE_CODE = mainGridCheckedRow['DECIDE_CODE'];
      if (DECIDE_CODE != '1') {
        erFormHelper.messageWarning('该条信息未判定，不可进行修改判定时间操作！');
      }else{
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
      erGrid1Ready,
      //handleTabChange,
      //tabActiveKey,
    };
  }
});

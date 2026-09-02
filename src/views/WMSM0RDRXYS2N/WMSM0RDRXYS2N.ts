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

export default defineComponent({
  name: 'WMSM0RDRXYS2N',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
    xrEfDialog,
    ErPopFree
  },

  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const efFormInfo = ref<{ [key: string]: any }>({});
    const efFormIsReady = ref(false);
    let formPartition: string;
    let formName: '';
    let UserName: '';
    let PROGRAM_NAME: string;
    let i_form_ename = ''; // 低代码配置画面布局名
    let grid_main!: any;
    const gridView_tab1 = ref('GridView1');
    let LayoutGroupFilter = 'layoutControlGroup1';
    let F5_Status = 0; // F7按钮状态，0: 未进入多步，1: 进入多步

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
    const erFormHelper: ER.FormHelper = reactive(new ER.FormHelper()) as any;

    // 变量定义
    const initializeFlag = ref(0);
    let dt_key = new EI.EiBlock();
    const i_service_f2 = 'mmsmdr_inq';
    const i_service_f3 = 'qmts30_pro';
    // const i_service_f4 = 'qmts30_pro';
    const i_service_f4 = 'mmsmdyts_del';
    //导入存入表
    const i_service_f5 = 'mmsmdr_add';
    const i_factory_div = 'LG1';

    // 自定义grid工具栏按钮是否可用
    const setToolbarVisible1 = (configId: string, visible: boolean) => {
      erFormHelper.setGridToolbarVisible(configId, {
        import: true,
        excel: true
      });
    };
    const setToolbarVisible2 = (configId: string, visible: boolean) => {
      erFormHelper.setGridToolbarVisible(configId, {
        refresh: false,
        import: false,
        excel: true
      });
    };
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
      erFormHelper.setGridEditable(gridView_tab1.value, false); // 设置grid不可编辑
      erFormHelper.setGridToolbarVisible(gridView_tab1.value, {
        excel: true
      });
    };
    // const erGrid5Ready = () => {
    //   grid_main = erFormHelper.getGrid(gridView_tab1.value);
    //   erFormHelper.setGridEditable(gridView_tab1.value, false); // 设置grid不可编辑
    //   erFormHelper.setGridToolbarVisible(gridView_tab1.value, {
    //       excel: true
    //   });
    // if (F5_Status) {
    //   // 如果F5处于多步状态
    //   // 设置工具栏按钮可见
    //   setToolbarVisible(gridView_tab1.value, true);
    // }
    //};

    //自定义模板参数
    const popFreeEdit_pars = async (Click_name: string) => {
      // if (cs_OkClick === "F3") {
      //   //popFreeEdit.AllowEidt = true;
      //   popFreeEdit = new ER.PopFreeHelper(
      //     formPartition,
      //     "QMTS_DIALOG",
      //     "QMTS30_LAYOUT_DIALOG1"
      //   );
      // }
      // if (cs_OkClick === "F4") {
      //   popFreeEdit = new ER.PopFreeHelper(
      //     formPartition,
      //     "QMTS_DIALOG",
      //     "QMTS30_LAYOUT_DIALOG2"
      //   );
      // }
      // if (cs_OkClick === 'F5') {
      //   popFreeEdit = new ER.PopFreeHelper(formPartition, 'QMTS_DIALOG', 'QMTS30_LAYOUT_DIALOG3');
      // }
    };

    //弹出界面OK按钮点击事件
    const popFreeEditOkClick = async (e: PopFreeReturnInfo) => {
      let i_service: any;
      const inInfo = new EI.EIInfo();
      let outInfo: EI.EIInfo = new EI.EIInfo();

      if (cs_OkClick === 'F3') {
        i_service = i_service_f3;
      } else if (cs_OkClick === 'F4') {
        i_service = i_service_f4;
      }

      inInfo.addBlock(
        erFormHelper.convertModelAsBlock(e.dataModel, {
          FACTORY_DIV: i_factory_div,
          PRO_DIV: i_proc_div
        }),
        'PARA'
      );

      // if (inInfo.getBlock('PARA').data[0]['AREA'] == '') {
      //   erFormHelper.messageWarning('请选择区域!');
      //   return;
      // }
      const mainGridCheckedRow = erFormHelper.getGridCurrentRow('GridView1');
      inInfo.addBlock(mainGridCheckedRow, formName);

      console.log('inInfo', inInfo);

      outInfo = await erFormHelper.callService(i_service, inInfo, false, true, true);

      if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('操作成功！');
      }
      query_main();
    };
    const query_main = async () => {
      const eiInfo = new EI.EIInfo();
      //efFormInfo.value.formParams["service"]
      const eiBlock = erFormHelper.getAllControlValueAsEiBlock(LayoutGroupFilter);
      eiBlock.addColumn('table_name', 'TQMTS0RDR'); //传表名
      eiInfo.addBlock(eiBlock, '');
      const outInfo = await erFormHelper.callService(i_service_f2, eiInfo);

      if (outInfo.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
        return;
      } else {
        erFormHelper.mergeDataToGrid(outInfo, gridView_tab1.value);
      }
    };

    const F2_DO = async () => {
      query_main();
    };

    //F3点击事件：请求发送
    const F3_DO = async (e: any) => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请选择一条信息！');
        return;
      }

      //获取选中行信息
      const mainGridCheckedRow = erFormHelper.getGridCheckedRows('GridView1', true)[0];
      console.log('mainGridCheckedRow', mainGridCheckedRow);

      //获取用户名
    //   mainGridCheckedRow['DECIDER'] = UserName;

      //获取系统当前时间
    //   mainGridCheckedRow['JUDGE_TIME'] = new Date();

    //   cs_OkClick = 'F3';
    //   i_proc_div = 'UPD';
    //   popFreeEdit_pars(cs_OkClick);
    //   popFreeEdit.ReceiveData(mainGridCheckedRow, {
    //     ST_NO: true,
    //     HEAT_NO: true
    //   });
      const outInfo = await erFormHelper.callService("", inInfo, false, true, true);
 
      if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('操作成功！');
      }
      ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
    };

    //F5点击事件：导入
    const F5_PRE_DO = async (e: any) => {
      // 设置工具栏按钮可见
      setToolbarVisible1(gridView_tab1.value, true);
      //清空grid数据
      erFormHelper.clearGridData('GridView1');
    };
    const F5_DO = async (e: any) => {
      const inInfo = new EI.EIInfo();
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请选择要导入的信息！');
        return false;
      }
      // const eiBlock = erFormHelper.getAllControlValueAsEiBlock("GridView1");
      // inInfo.addBlock(eiBlock);
      console.log('inInfo', inInfo);
      const pageBlock = inInfo.addBlock(new EI.EiBlock(), 'page');
      pageBlock.addColumns('table_name');
      pageBlock.addRow({
        // table_name: efFormInfo.value.formParams['table_name']
        table_name: 'TQMTS0RDR'
      });
      //获取选中行信息
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView1'));

      // const mainGridCheckedRow = erFormHelper.getGridCurrentRow('GridView1');
      // inInfo.addBlock(
      //   mainGridCheckedRow, ''
      //   );

      console.log('inInfo', inInfo);
      const outInfo = await erFormHelper.callService('mmsmdrsj_add', inInfo, false, true, true);

      if (outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('导入操作成功！');
      }

      //导入同时发送请求
      const outInfo_request = await erFormHelper.callService('qmts0rdr_snd', inInfo, false, true, true);

      if (outInfo_request?.sys.status >= 0 && outInfo?.sys.status >= 0) {
        erFormHelper.messageSuccess('导入成功并发送请求！');
      }

      query_main();
    };
    const F5_CANCEL = async (e: any) => {
      setToolbarVisible2(gridView_tab1.value, true);
      query_main();
    };

    return {
      erFormHelper,
      initializeFlag,
      efFormReady,
      LayoutGroupFilter,
      gridView_tab1,
      F2_DO,
      erGrid1Ready,
      //erGrid5Ready,
      F3_DO,
      F5_PRE_DO,
      F5_DO,
      F5_CANCEL
    };
  }
});

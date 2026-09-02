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

export default defineComponent({
  name: 'WM04V',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const efFormInfo = ref<{ [key: string]: any }>({});

    let formPartition: string;
    let formName: string;
    const initializeService = 'wm00_form_get';
    const grid1Toolbar = ref([]);
    let gridView1!: string;

    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      formName = 'WM04'; // 当前画面名

      initializePage();
    };
    // 变量定义

    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);



    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        initializeService
      );
      console.log(initialResult, formPartition, formName)
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = 1;

        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {
          // 获取画面上的主要控件信息

          nextTick(() => {
            grid1ToolbarVisible(false);

            //不可编辑
            erFormHelper.setGridEditable('gridView1', true);

          });
        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    // grid渲染完成事件
    const erGrid1Ready = () => {
      gridView1 = erFormHelper.getGrid("gridView1");
      erFormHelper.setGridEditable("gridView1", false); // 设置grid不可编辑
      erFormHelper.initialGridToolbar("gridView1", {
        addrow: {
          visible: false,
          action: (e: any) => {
            const asd = erFormHelper.addRowToGrid('gridView1', true);
            asd.set('MAT_LINE_TYPE', 'SM');
            asd.set('MAT_KIND', 'SM');
            asd.set('MAT_SHAPE_FLAG', '1');
          },
          preventDefault: true,
        },
      });
    };

    onMounted(() => {

    });

    //#region gridView1显示新增和复制新增 grid1Toolbar start
    const grid1ToolbarVisible = (flag: boolean, type?: string | undefined) => {
      erFormHelper.setGridEditable('gridView1', flag);
      if (type == "I") {
        erFormHelper.setGridToolbarVisible('gridView1', { 'copyrow': flag });
        erFormHelper.setGridToolbarVisible('gridView1', { 'addrow': flag });
      }
      if (type == "D") {
        erFormHelper.setGridToolbarVisible('gridView1', { 'delete': flag });
      }
      if (!flag) {
        erFormHelper.setGridToolbarVisible('gridView1', { 'copyrow': flag });
        erFormHelper.setGridToolbarVisible('gridView1', { 'addrow': flag });
        erFormHelper.setGridToolbarVisible('gridView1', { 'delete': flag });
      }

    };
    //#endregion gridView1显示新增和复制新增 end

    //#region 分页查询库区信息 grid1pagingQuery start
    const QueryMat = async () => {



      const inInfo = new EI.EIInfo();

      inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroupFilter'), 'QUERY_FILTER');


      const outInfo = await erFormHelper.callService('wm04_inq', inInfo, false, true);
      console.log(outInfo)
      if (outInfo.sys.status >= 0) {

        erFormHelper.clearGridData('gridView1');
        const resultData = outInfo.getBlock('Table0').data; //后台返回的当页的数据
        erFormHelper.mergeDataToLayoutOrGrid(resultData, true, 'gridView1')
      }
    };
    //#endregion 分页查询库区信息 end

    //#region F2查询 start
    const F2_DO = async (e: any) => {
      QueryMat();
    };
    //#endregion F2查询 end

    //#region F3新增 start
    const F3_DO = async (e: any) => {
      erFormHelper.stopGridEditing('gridView1', async () => {
        const grid1dt = erFormHelper.getGridSelectRowsAsBlock('gridView1');
        console.log(grid1dt.data);
        if (grid1dt.data.length < 1) {
          erFormHelper.messageInfo('请勾选记录进行操作');
          return false;
        }
        const inInfo = new EI.EIInfo();
        inInfo.addBlock(grid1dt, 'Table1');
        const outInfo = await erFormHelper.callService('wm04_ins', inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess();

          grid1ToolbarVisible(false);
          QueryMat();
          erFormHelper.setGridEditable('gridView1', false);
        } else {
          return false;
        }
      })

    };
    const F3_PRE_DO = async (e: any) => {
      grid1ToolbarVisible(true, 'I');
      erFormHelper.setGridEditable('gridView1', true);
    };
    const F3_CANCEL = async (e: any) => {
      grid1ToolbarVisible(false);
      erFormHelper.unCheckAllGridRow('gridView1');
      erFormHelper.setGridEditable('gridView1', false);

      QueryMat();
    };
    //#endregion F3新增 end

    //#region F4修改 start
    const F4_DO = async (e: any) => {
      erFormHelper.stopGridEditing('gridView1', async () => {
        const grid1dt = erFormHelper.getGridSelectRowsAsBlock('gridView1');

        if (grid1dt.data.length < 1) {
          erFormHelper.messageInfo('请勾选记录进行操作');
          return false;
        }
        const inInfo = new EI.EIInfo();
        inInfo.addBlock(grid1dt, 'Table1');
        const outInfo = await erFormHelper.callService('wm04_upt', inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess();

          grid1ToolbarVisible(false);
          QueryMat();
          erFormHelper.setGridEditable('gridView1', false);

        }
      })

    };
    const F4_PRE_DO = async (e: any) => {
      grid1ToolbarVisible(true);
      erFormHelper.setGridEditable('gridView1', true);
      erFormHelper.setGridColumnEditable('gridView1', false, ...['STOCK_PLACE_NO', 'STOCK_NO']);
    };
    const F4_CANCEL = async (e: any) => {
      erFormHelper.unCheckAllGridRow('gridView1');
      QueryMat();

      grid1ToolbarVisible(false);
      erFormHelper.setGridEditable('gridView1', false);

    };
    //#endregion F4修改 end

    //#region F5删除 start
    const F5_DO = async (e: any) => {
      const grid1dt = erFormHelper.getGridSelectRowsAsBlock('gridView1');

      if (grid1dt.data.length < 1) {
        erFormHelper.messageInfo('请勾选记录进行操作');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(grid1dt, 'Table1');
      const outInfo = await erFormHelper.callService('wm04_del', inInfo, false, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1ToolbarVisible(false);
        QueryMat();
      }
    };
    const F5_PRE_DO = async (e: any) => { grid1ToolbarVisible(true, 'D'); };
    const F5_CANCEL = async (e: any) => { grid1ToolbarVisible(false); QueryMat(); };
    //#endregion F5删除 end

    //#region F6库位封锁 start
    const F6_DO = async (e: any) => {
      const grid1dt = erFormHelper.getGridSelectRowsAsBlock('gridView1');

      if (grid1dt.data.length < 1) {
        erFormHelper.messageInfo('请勾选记录进行操作');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(grid1dt, 'Table1');
      const outInfo = await erFormHelper.callService('wm04_lck', inInfo, false, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        QueryMat();
      }
    };
    const F6_PRE_DO = async (e: any) => { };
    const F6_CANCEL = async (e: any) => { };
    //#endregion F6库位封锁 end

    //#region F7库位释放 start
    const F7_DO = async (e: any) => {
      const grid1dt = erFormHelper.getGridSelectRowsAsBlock('gridView1');

      if (grid1dt.data.length < 1) {
        erFormHelper.messageInfo('请勾选记录进行操作');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(grid1dt, 'Table1');
      const outInfo = await erFormHelper.callService('wm04_rels', inInfo, false, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        QueryMat();
      }
    };
    const F7_PRE_DO = async (e: any) => { };
    const F7_CANCEL = async (e: any) => { };
    //#endregion F7库位释放 end

    return {
      erFormHelper,
      initializeFlag,
      grid1Toolbar, efFormReady, erGrid1Ready,
      F2_DO,
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
      F7_CANCEL
    };
  }
});

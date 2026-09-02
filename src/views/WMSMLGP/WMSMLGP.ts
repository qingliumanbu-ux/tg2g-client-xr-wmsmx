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
import EFDialogForm from "EFX/EFDialogForm";

import { EI, EIManager } from "EIX/ei";
import { ER } from "ERX/Er";
import { SiUtils } from "ERX/SiUtils";
import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";
import EFCallForm from 'EFX/EFCallForm';
import xrEfDialog from "EFX/xrEfDialog";
import WMSMLGP_POPS2N from '../WMSMLGP_POPS2N/WMSMLGP_POPS2N.vue'
import { useRoute } from "vue-router";
import { Console } from "console";
import ErPopFree from 'ERX/ErPopFree';
import ErPopQuery from 'ERX/ErPopQuery';
export default defineComponent({
  name: 'WMSMLGP',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid, xrEfDialog, EFCallForm, WMSMLGP_POPS2N, ErPopFree, ErPopQuery,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    console.log('开始');
    const efFormInfo = ref<{ [key: string]: any }>({});
    const efFormIsReady = ref(false);
    let formPartition: string;
    const formName = 'WMSMLGP';
    let formName_Now: string;
    let sn: number = 0;
    const initializeService = 'wm00_form_get'; //画面布局配置获取
    interface DynamicObject {
      [key: string]: any;
    }
    let ob: any = reactive({});

    // 变量定义
    const keyStr = '';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);
    const layout = ref();
    const gridview = ref(); //主表
    const gridview1 = ref(); //子表
    const mainviewName = ref('');
    const subviewName = ref('');
    let service_inq: string;
    let service_inq1: string;

    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      formName_Now = efFormInfo.value.formName; // 当前画面名
      sn = String(formName_Now).length - 3;
      layout.value = 'LayoutGroupQuery_' + String(formName_Now).substring(4, sn);
      gridview.value = 'GridView_' + String(formName_Now).substring(4, sn) + '1';
      gridview1.value = 'GridView_' + String(formName_Now).substring(4, sn) + '2';
      service_inq = String(formName_Now).toLowerCase().toString().substring(0, sn) + '_inq';
      service_inq1 = String(formName_Now).toLowerCase().toString().substring(0, sn) + '_inq1';
      console.log('dfghyuiop', layout, gridview, gridview1, String(formName_Now), efFormInfo);

      if (efFormInfo.value.formParams?.MainviewName)
        mainviewName.value = efFormInfo.value.formParams['MainviewName'];
      console.log('mainviewName', efFormInfo.value.formParams['MainviewName'].toString());
      if (efFormInfo.value.formParams?.SubviewName)
        subviewName.value = efFormInfo.value.formParams['SubviewName'];
      initializePage();
    };
    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        initializeService
      );
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = 1;

        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {
          erFormHelper.setGridEditable(gridview.value, false);
          erFormHelper.setGridEditable(gridview1.value, false);
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
      const Query = erFormHelper.getAllControlValueAsEiBlock(layout.value);
      inInfo.addBlock(Query);
      console.log('inInfo', inInfo);

      const outInfo = await erFormHelper.callService(service_inq, inInfo, true, false, true);
      console.log(outInfo.getBlock(0).data.length);
      if (outInfo.sys.status >= 0) {
        // 根据返回数据加载页面显示数据//需要和si配置的数据集的表一致
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), gridview.value);
      } else {
        erFormHelper.messageError(outInfo.sys.msg);
      }
    };
    // 查询子表明细信息
    const queryDetailInfo = async (currentRowInfo: any) => {
      //

      const eiInfo4 = new EI.EIInfo();
      const eiBlock4 = new EI.EiBlock();

      eiInfo4.addBlock(eiBlock4);
      eiBlock4.pushData({ ...currentRowInfo }, true);


      const outInfo4 = await erFormHelper.callService(service_inq1, eiInfo4, true, false, true);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
      } else {
        erFormHelper.mergeEiBlockToGrid(outInfo4.getBlock(0), gridview1.value);
      }
    };

    // 主表焦点行事件-查询子表明细信息
    const GridView1FocusChanged = async (e: any) => {
      if (e) {
        if (e.data && e.rowChanged) {
          if (e.data) {
            const currentRow = erFormHelper.getGridCurrentRow(gridview.value, true, true);
            console.log('currentRow', currentRow);
            queryDetailInfo(currentRow);
          }
        }
      }
    };
    // 主表保存
    const saveMainGridData = async () => {
      if (erFormHelper.hasDataChange(gridview.value)) {
        const eiinfo = new EI.EIInfo();
        const created = erFormHelper.getGridRowsAsBlock(gridview.value, 'add');
        eiinfo.addBlock(created, 'ADD');

        const updated = erFormHelper.getGridRowsAsBlock(gridview.value, 'modify');
        eiinfo.addBlock(updated, 'UPD');

        const deleted = erFormHelper.getGridRowsAsBlock(gridview.value, 'delete');
        eiinfo.addBlock(deleted, 'DEL');

        const para = erFormHelper.getAllControlValueAsEiBlock(layout.value);
        eiinfo.addBlock(para, 'PARA');
        console.log('saveMainGridData', eiinfo);
        erFormHelper.callService(String(formName_Now).toLowerCase().substring(0, sn) + '_save', eiinfo, true, true).then((res) => {
        });
      }
    };
    const saveSubGridData = async () => {
      if (erFormHelper.hasDataChange(gridview1.value)) {
        const eiinfo = new EI.EIInfo();
        const created = erFormHelper.getGridRowsAsBlock(gridview1.value, 'add');
        eiinfo.addBlock(created, 'ADD');

        const updated = erFormHelper.getGridRowsAsBlock(gridview1.value, 'modify');
        eiinfo.addBlock(updated, 'UPD');

        const deleted = erFormHelper.getGridRowsAsBlock(gridview1.value, 'delete');
        eiinfo.addBlock(deleted, 'DEL');

        const para = erFormHelper.getAllControlValueAsEiBlock(layout.value);
        eiinfo.addBlock(para, 'PARA');
        erFormHelper.callService(String(formName_Now).toLowerCase().substring(0, sn) + '_save1', eiinfo, true, true).then((res) => {
        });
      }
    };
    const F2_DO = async (e: any) => {
      queryMainGrid();
    };
    const F3_DO = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview.value, {
        addrow: false,
        copyrow: false,
      });
      erFormHelper.setGridEditable(gridview.value, false);
      return await saveMainGridData()
        .then((res: any) => {
          if (res > 0) {

          }
          else {

            erFormHelper.setGridEditable(gridview.value, false);
            erFormHelper.messageSuccess("操作成功！");
            queryMainGrid();
          }
        })
        .catch((error) => {
          erFormHelper.messageError(error);
          //return false;
        });
    };
    const F3_PRE_DO = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview.value, {
        addrow: true,
        copyrow: true,
      });
      erFormHelper.setGridEditable(gridview.value, true);
      //erFormHelper.addRowToGrid(gridview.value, true);
    };
    const F3_CANCEL = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview.value, {
        addrow: false,
        copyrow: false,
      });
      erFormHelper.setGridEditable(gridview.value, false);
      queryMainGrid();
    };
    const F4_DO = async (e: any) => {
      return await saveMainGridData()
        .then((res: any) => {
          if (res > 0) {
            queryMainGrid();
            erFormHelper.setGridEditable(gridview.value, false);
            erFormHelper.messageSuccess();
          }
        })
        .catch((error) => {
          erFormHelper.messageError(error);

        });
    };
    const F4_PRE_DO = async (e: any) => {
      erFormHelper.setGridEditable(gridview.value, true);
    };
    const F4_CANCEL = async (e: any) => {

    };
    const F5_DO = async (e: any) => {
      return await saveMainGridData()
        .then((res: any) => {
          if (res > 0) {
          }
          else {
            queryMainGrid();
            erFormHelper.setGridEditable(gridview.value, false);
            erFormHelper.setGridToolbarVisible(gridview.value, {
              delete: false,
            });
            erFormHelper.messageSuccess("操作成功！");
          }
        })
        .catch((error) => {
          erFormHelper.messageError(error);
          erFormHelper.setGridToolbarVisible(gridview.value, {
            delete: false,

          });
          erFormHelper.setGridEditable(gridview.value, false);
        });
    };
    const F5_PRE_DO = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview.value, {
        delete: true,

      });
      erFormHelper.setGridEditable(gridview.value, true);
    };
    const F5_CANCEL = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview.value, {
        delete: false,

      });
      erFormHelper.setGridEditable(gridview.value, false);
      queryMainGrid();
    };
    const dialogFormName = ref(''); // 弹出画面的画面名
    const dialogVisible = ref<boolean>(false);
    const dialogVisible1 = ref<boolean>(false);
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
        const currentRow = erFormHelper.getGridCurrentRow(gridview.value, true, true);
        console.log('currentRow', currentRow);
        queryDetailInfo(currentRow);
      }, 500)

    };
    const F6_DO = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview1.value, {
        delete: false,

      });
      erFormHelper.setGridEditable(gridview1.value, false);
      return await saveSubGridData()
        .then((res: any) => {
          queryMainGrid();

          erFormHelper.setGridEditable(gridview.value, false);
        })
        .catch((error) => {
          erFormHelper.messageError(error);
          return false;
        });


    };
    //弹窗配置
    const popFreeEditOkClick = async (e: any) => {
      const inInfo = new EI.EIInfo();

      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(gridview.value)
      );
      inInfo.addBlock(
        erFormHelper.buildEiBlock([{ MAT_NO: e.dataModel['MAT_NO'] }])
        , 'Table2');
      console.log('popinInfo;', inInfo)
      const outInfo = await erFormHelper.callService(
        String(formName_Now).toLowerCase().substring(0, sn) + '_F6',
        inInfo,
        true,
        false,
        true
      );
      if (outInfo.sys.status < 0) {
        erFormHelper.messageError("错误:" + outInfo.sys.msg);
      } else {
        erFormHelper.messageSuccess('操作成功');
        const currentRow = erFormHelper.getGridCurrentRow(gridview.value, true, true);
        queryDetailInfo(currentRow);

      }

    };
    const F6_PRE_DO = async (e: any) => {
      console.log('gridview1.value', gridview1.value);
      const gird2Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview1.value, undefined, true);
      console.log('gird2Dt', gird2Dt);
      if (gird2Dt.data.length <= 0) {
        if (erFormHelper.getGridCheckedRows(gridview1.value).length >= 1) {
          erFormHelper.setGridEditable(gridview1.value, true);
        }
        else {
          if (erFormHelper.getGridCheckedRows(gridview.value).length === 1) {
            const data = {
              LayoutName: 'LayoutGroupQuery_' + String(formName_Now).substring(4, sn),
              GridName: 'GridView1_' + String(formName_Now).substring(4, sn),
              callService: String(formName_Now).toLowerCase().substring(0, sn) + '_mat_inq',
              callService1: String(formName_Now).toLowerCase().substring(0, sn) + '_f6',
              mainData: erFormHelper.getGridSelectRowsAsBlock(gridview.value)
            };
            console.log('data', data);
            dialogFormName.value = 'WMSMLGP_MATS2N'; // 读配置表获取画面名
            parentInfo.value = data;
            dialogVisible.value = true;
          } else {
            erFormHelper.messageWarning('请选择一个计划!');
          }
          return false;
        }
      }
      else {
        erFormHelper.setGridToolbarVisible(gridview1.value, {
          delete: true,
        });
        erFormHelper.setGridEditable(gridview1.value, true);

      }
    };
    const F6_CANCEL = async (e: any) => {
      erFormHelper.setGridToolbarVisible(gridview1.value, {
        delete: false,
      });
      erFormHelper.setGridEditable(gridview1.value, false);

    };
    const F7_DO = async (e: any) => {
      const inInfo = new EI.EIInfo();
      const gird1Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview.value, undefined, true);
      const gird2Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview1.value, undefined, true);
      if (gird1Dt.data.length <= 0) {
        erFormHelper.messageInfo('请选择要审核的计划！');
        return false;
      }
      else {
        inInfo.addBlock(gird1Dt, 'Table1');
        inInfo.addBlock(gird2Dt, 'Table2');
        const outInfo = await erFormHelper.callService(String(formName_Now).toLowerCase().substring(0, sn) + '_f7', inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          queryMainGrid();
          erFormHelper.messageSuccess();
        } else {
          return false;
        }

      }
    };
    const F7_PRE_DO = async (e: any) => {

      const gird1Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview.value, undefined, true);

      if (gird1Dt.data.length <= 0) {
        erFormHelper.messageInfo('请选择要操作的计划！');
        return false;
      }
    };
    const F7_CANCEL = async (e: any) => {

    };
    const F8_DO = async (e: any) => {
      const inInfo = new EI.EIInfo();
      const gird1Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview.value, undefined, true);
      if (gird1Dt.data.length <= 0) {
        erFormHelper.messageInfo('请选择要操作的计划！');
        return false;
      }
      else {
        inInfo.addBlock(gird1Dt, 'Table1');
        const outInfo = await erFormHelper.callService(String(formName_Now).toLowerCase().substring(0, sn) + '_f8', inInfo, false, true);
        if (outInfo.sys.status >= 0) {
          queryMainGrid();
          erFormHelper.messageSuccess();
        } else {
          return false;
        }

      }
    };
    const F8_PRE_DO = async (e: any) => {
      const gird1Dt = erFormHelper.getGridCheckedRowsAsBlock(gridview.value, undefined, true);

      if (gird1Dt.data.length <= 0) {
        erFormHelper.messageInfo('请选择要操作的计划！');
        return false;
      }
    };
    const F8_CANCEL = async (e: any) => {

    };
    const F9_DO = async (e: any) => {

    };
    const F9_PRE_DO = async (e: any) => {

    };
    const F9_CANCEL = async (e: any) => {

    };
    const F10_DO = async (e: any) => {

    };
    const F10_PRE_DO = async (e: any) => {

    };
    const F10_CANCEL = async (e: any) => {

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
      subviewName,
      efFormReady,
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
      F7_CANCEL,
      F8_DO,
      F8_PRE_DO,
      F8_CANCEL,
      F9_DO,
      F9_PRE_DO,
      F9_CANCEL,
      F10_DO,
      F10_PRE_DO,
      F10_CANCEL,
      popFreeEditOkClick,
      dialogFormName, dialogVisible, dialogVisible1, parentInfo, closeXrEfDialog, getChildInfo
    };
  }
});

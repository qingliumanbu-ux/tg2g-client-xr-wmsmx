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
import ErPopFree from 'ERX/ErPopFree';
import { Console } from "console";
import eBFR from "EBFR/eBFR";

export default defineComponent({
  name: '',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid, ErPopFree
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const efFormInfo = ref<{ [key: string]: any }>({});
    let formPartition: string;
    let formName_Now: string;
    const initializeService = 'wm00_form_get';

    // 变量定义
    let formName = 'WMSMTURN';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);
    const layout = ref();
    const gridview = ref();
    const callService_f2 = ref();
    const callService_f3 = ref();
    const callService_f4 = ref();
    const ifview = ref<boolean>(false);


    const efFormReady = (e: any) => {
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      formName_Now = efFormInfo.value.formName;
      formName_Now = formName_Now.substring(0, formName_Now.length - 3)
      console.log('formName_Now', efFormInfo.value.formCaption);
      layout.value = 'LayoutGroupQuery_' + String(formName_Now).substring(4);
      gridview.value = 'GridView_' + String(formName_Now).substring(4);
      callService_f2.value = String(formName_Now).toLowerCase() + '_inq';
      callService_f3.value = String(formName_Now).toLowerCase() + '_f3';
      callService_f4.value = String(formName_Now).toLowerCase() + '_f4';
      console.log(layout, gridview, String(formName_Now), callService_f2);
      initializePage();
      //erFormHelper.setGridOptions(gridview.value, 'excel', { fileName: `${efFormInfo.value.formCaption}-${Date.now()}` });
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
          // 获取画面上的主要控件信息

        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    onMounted(() => {

    });

    const F2_DO = async (e: any) => {
      //console.log('fghjkl;', formName_Now)

      const inInfo = new EI.EIInfo();

      inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('layout1'));
      console.log(inInfo.getBlock(0).data)
      const outInfo = await erFormHelper.callService('wmsmturn_inq', inInfo, true, true);
      console.log('dfgh;', outInfo, gridview.value);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        erFormHelper.mergeDataToLayoutOrGrid(outInfo.getBlock(0), true, 'GridView1');
        erFormHelper.mergeDataToLayoutOrGrid(outInfo.getBlock(1), true, 'GridView2');
        return true;

      } else {
        return false;
      }


    };
    const F3_DO = async (e: any) => {
      if (erFormHelper.getControlValue('layout1', 'HEAT_NO') === '') {
        erFormHelper.messageWarning('请输入原熔炼号');
        return false;
      }
      if (erFormHelper.getControlValue('layout2', 'HEAT_NO') === '') {
        erFormHelper.messageWarning('请输入目标熔炼号');
        return false;
      }
      const inInfo = new EI.EIInfo();

      inInfo.addBlock(erFormHelper.buildEiBlock([{ HEAT_NO_OLD: erFormHelper.getControlValue('layout1', 'HEAT_NO'), HEAT_NO_NEW: erFormHelper.getControlValue('layout2', 'HEAT_NO') }]));
      const outInfo = await erFormHelper.callService('wmsm_heatno_turn', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();


        return true;

      } else {
        return false;
      }



    };
    const F3_PRE_DO = async (e: any) => {


    };
    const F3_CANCEL = async (e: any) => {

    };
    const F4_DO = async (e: any) => {

    };
    const F4_PRE_DO = async (e: any) => {

    };
    const F4_CANCEL = async (e: any) => {

    };
    const popFreeEditOkClick = async (e: any) => {



    };

    return {
      erFormHelper,
      initializeFlag,
      F2_DO, F3_DO, F4_DO, F4_CANCEL, F4_PRE_DO, F3_CANCEL, F3_PRE_DO, ifview,
      layout,
      gridview, efFormReady
    };
  }
});

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
    let formName = 'WMSMQUERY';
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
        nextTick(async() => {
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
      if (formName_Now === 'WMSMBP') {
        erFormHelper.clearGridData(gridview.value);
        //console.log('前台dblink', '1');
        let sqlstr = `select FELDBEZ||'_'||REIHEBEZ||'_'||PLATZBEZ GUNDAO,LOC_NO SLAB_NO,BATCH_NO MAT_NO from entck_vmmi@meslink t where 1=1 `;
        const out = await erFormHelper.querySql('wmsmbp_inq', sqlstr);
        erFormHelper.mergeDataToLayoutOrGrid(out, true, gridview.value);
        console.log('前台dblink', '2', out.getBlock(0), sqlstr);

      }
      else if (formName_Now === 'WMSMTEST') {
        erFormHelper.clearGridData(gridview.value);
        let sqlstr = ` SELECT * FROM TWMSMTEST WHERE 1=1 `;
        const out = await erFormHelper.querySql( ' ', sqlstr);
        erFormHelper.mergeDataToLayoutOrGrid(out, true, gridview.value);
        console.log('前台dblink', '2', out.getBlock(0), sqlstr, gridview.value);
      }
      else {
        const inInfo = new EI.EIInfo();

        inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock(layout.value));
        console.log(inInfo.getBlock(0).data)
        const outInfo = await erFormHelper.callService(callService_f2.value, inInfo, true, true);
        console.log('dfgh;', outInfo, gridview.value);
        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess();
          erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, gridview.value);

          return true;

        } else {
          return false;
        }
      }

    };
    const F3_DO = async (e: any) => {
      if (formName_Now === "WMSMPLAN") {
        if (await erFormHelper.messageConfirm('是否要手动生成当天的倒运计划？')) {
          const inInfo = new EI.EIInfo();


          const outInfo = await erFormHelper.callService(callService_f3.value, inInfo, true, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess();


            return true;

          } else {
            return false;
          }
        }
      }
      else if (formName_Now === "WMSMBP") {
        if (await erFormHelper.messageConfirm('是否清除当前数据，获取最新板坯数据？')) {
          const inInfo = new EI.EIInfo();


          const outInfo = await erFormHelper.callService(callService_f3.value, inInfo, true, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess();


            return true;

          } else {
            return false;
          }
        }
      }
      else if (formName_Now === "WMSMGDTL" || formName_Now === "WMSMLGPB") {
        if (await erFormHelper.messageConfirm('是否将选中材料进行302退料？')) {
          const inInfo = new EI.EIInfo();

          inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(gridview.value, erFormHelper.getAllControlValue('layoutGroup1'), true));
          const outInfo = await erFormHelper.callService(callService_f3.value, inInfo, true, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess();
            ifview.value = false;

            return true;

          } else {
            return false;
          }
        }
      }
      else if (formName_Now === "WMSMTEST") {
        let popFreeEdit: ER.PopFreeHelper;
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSMQUERY', 'LayoutTESTmessage');

        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
        console.log('行号', 468)
      }


    };
    const F3_PRE_DO = async (e: any) => {
      if (formName_Now === "WMSMGDTL" || formName_Now === "WMSMLGPB") {
        ifview.value = true;
      }

    };
    const F3_CANCEL = async (e: any) => {
      ifview.value = false;
    };
    const F4_DO = async (e: any) => {
      if (formName_Now === "WMSMDP") {
        if (erFormHelper.getGridCheckedRowsAsBlock(gridview.value).data.length === 0) {
          erFormHelper.messageWarning('请选择需要打印出门单的材料信息');
          return false;
        }

        const inInfo = new EI.EIInfo();
        inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(gridview.value))
        for (let i = 0; i < inInfo.getBlock(0).data.length - 1; i++) {

          if (
            inInfo.getBlock(0).data[i]['HEAT_NO'] !==
            inInfo.getBlock(0).data[i + 1]['HEAT_NO']
          ) {
            erFormHelper.messageWarning('选中的炉号不一致，不能进行一次操作。');
            return false;
          }
          if (
            inInfo.getBlock(0).data[i]['WIDTH'] !==
            inInfo.getBlock(0).data[i + 1]['WIDTH']
          ) {
            erFormHelper.messageWarning('选中的材料宽度不一致，不能进行一次操作。');
            return false;
          }
          if (
            inInfo.getBlock(0).data[i]['THICK'] !==
            inInfo.getBlock(0).data[i + 1]['THICK']
          ) {
            erFormHelper.messageWarning('选中的材料厚度不一致，不能进行一次操作。');
            return false;
          }
        }

        let popFreeEdit: ER.PopFreeHelper;
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSMQUERY', 'LayoutDPmessage');

        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
        console.log('行号', 468)
      }
      if (formName_Now === "WMSMGDTL") {
        if (await erFormHelper.messageConfirm('是否将选中材料清除？')) {
          const inInfo = new EI.EIInfo();

          inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(gridview.value, {}, true));
          const outInfo = await erFormHelper.callService(callService_f4.value, inInfo, true, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess();
            ifview.value = false;
            F2_DO(1);
            return true;

          } else {
            return false;
          }
        }
      }
      if (formName_Now === "WMSMPLAN") {
        if (await erFormHelper.messageConfirm('是否关闭选中计划？')) {
          const inInfo = new EI.EIInfo();

          inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock(gridview.value, {}, true));
          const outInfo = await erFormHelper.callService(callService_f4.value, inInfo, true, true);
          if (outInfo.sys.status >= 0) {
            erFormHelper.messageSuccess();
            ifview.value = false;
            F2_DO(1);
            return true;

          } else {
            return false;
          }
        }
      }
    };
    const F4_PRE_DO = async (e: any) => {

    };
    const F4_CANCEL = async (e: any) => {

    };
    const popFreeEditOkClick = async (e: any) => {


      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(gridview.value)
      );

      const myMap: Map<string, string> = new Map();
      myMap.set("HEAT_NO", String(inInfo.getBlock(0).data[0]['HEAT_NO']));
      myMap.set("MAT_NO", String(inInfo.getBlock(0).data.map((item: any) => item.MAT_NO)));
      myMap.set("SHIFT_GROUP", e.dataModel.PROD_SHIFT_GROUP);
      myMap.set("GUIDE_DEST", e.dataModel.GUIDE_DEST);
      myMap.set("TRUCK_NO", e.dataModel.TRUCK_NO);
      myMap.set("MAKER", e.dataModel.SPARE_ITEM_0);
      console.log('dfghujiop[]', String(inInfo.getBlock(0).data.map((item: any) => item.MAT_NO)), myMap)
      eBFR.CallReportPDFFromMap('WMSM_CM', myMap)
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

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

import { useRoute } from "vue-router";
import { Console } from "console";

export default defineComponent({
  name: 'WMSMSM11',
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
    const initializeService = 'wm00_form_get';

    // 变量定义
    let formName: string;

    const initializeFlag = ref(0);
    const gridToolbar: Ref<any[]> = ref([]);
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const efFormReady = (e: any) => {

      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区
      formName = 'WMSMSM11P1';

      initializePage();
      if (efFormInfo.value.formParams?.DEFAULT) {
        i_default.value = efFormInfo.value.formParams['DEFAULT'];
      }

    };

    //定制化
    let gridView1!: any;

    let gridView2!: string;
    const stock_no = ref<string>('');
    const stock_no_q = ref(null);
    const stock_place_no = ref<string>('');
    const down_disabled_flag = ref<boolean>(true);
    const offline_cause = ref<boolean>(false);
    const come_reject_cause = ref('');
    const slat_unlade_cause = ref('');
    const wMJ1_DataSource = reactive({
      dataSource: <any>[]
    });
    const wM23_DataSource = reactive({
      dataSource: <any>[]
    });
    const i_factory_div = ref('');
    const i_mat_shape_flag = ref('');
    const i_default = ref('');
    const i_unit_code = ref('');





    //#region 分页查询库区信息 grid1pagingQuery start
    const grid1pagingQuery = async () => {

      const inInfo = new EI.EIInfo();
      const filter_condition = erFormHelper.getAllControlValue('layoutControlGroup1');
      inInfo.addBlock(erFormHelper.buildEiBlock([filter_condition]));
      const dt = inInfo.getBlock(0);
      const mat_no = inInfo.getBlock(0).data[0]['MAT_NO']?.toString().trim();
      if (mat_no !== '' && mat_no !== undefined) {

        let temp_mat_no = '';
        const mat_no_array = mat_no.split(' ');
        for (let i = 0; i < mat_no_array.length; i++) {
          temp_mat_no += `${mat_no_array[i].toString()}','`;
        }
        // 去除最后一个材料的逗号
        temp_mat_no = temp_mat_no.substring(0, temp_mat_no.length - 3);
        dt.data[0]['MAT_NO'] = `'${temp_mat_no}'`;
      }


      const outInfo = await erFormHelper.callService('wmsmsm11_inq', inInfo, false, true);

      if (outInfo.sys.status >= 0) {
        console.log('drty7uhgbhujio', outInfo)
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView1')
      }
    };
    //#endregion 分页查询库区信息 end


    // 初始化画面配置
    const initPage = async () => {
      // 设置查询条件 库区
      //console.log('dfghjkl;', efFormInfo.value.formParams['DEFAULT'], i_default)
      erFormHelper.setControlValueEx('layoutControlGroup1', { STOCK_NO: i_default.value });

    };

    // 画面相关数据初始化
    const initializePage = async () => {

      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
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

          // gridView1 = erFormHelper.getGridApi('gridView1');

          // gridView2 = 'gridView2';

          initPage();
        });

      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    // grid渲染完成事件
    const erGrid1Ready = () => {
      //不可编辑

      gridView1 = erFormHelper.getGrid("gridView1");
      //console.log('sdrtyhgvhjk', gridView1);
      erFormHelper.setGridEditable("gridView1", false);
    }



    const queryStockPlaceNo = async () => {
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([{
          STOCK_NO: erFormHelper.getControlValue('LayoutGroup3', 'STOCK_NO'),
          STOCK_PLACE_NO: erFormHelper.getControlValue('LayoutGroup3', 'STOCK_PLACE_NO')
        }])
      );
      console.log('cfghujhbb njkmn', inInfo);
      const outInfo = await erFormHelper.callService('wm_stockplace', inInfo, false, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView2');
        return true;
      } else {
        return false;
      }
    };

    const inStock = async (stock_oper_order_div: string) => {
      if (!await erFormHelper.checkRequiredInput('layoutGroup2')) {
        erFormHelper.messageWarning('请检查输入');
        return false;
      }
      const inInfo = new EI.EIInfo();

      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView1', erFormHelper.getAllControlValue('layoutGroup2'), true));
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView2', {}, true).data.length !== 0) {
        inInfo.addBlock(
          erFormHelper.getGridCheckedRowsAsBlock('gridView2', { STOCK_OPER_ORDER_DIV: '1' }, true), 'Table2'
        );
      }
      else {
        inInfo.addBlock(
          erFormHelper.buildEiBlock([{ STOCK_NO: 'SYA', STOCK_PLACE_NO: 'SYA', STOCK_OPER_ORDER_DIV: '1' }]), 'Table2'
        );
      }

      console.log('sdfgtyuiop[]', inInfo)
      const outInfo = await erFormHelper.callService('wmsmsm11_instock', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1pagingQuery();
        return true;

      } else {
        return false;
      }
    };

    const setStockPlaceNo = async () => {

      const model = erFormHelper.getGridCurrentRow('gridView2');
      //const dt = erFormHelper.getGridCheckedRows('gridView1');

      const current_row = gridView1.gridOptions.api.getSelectedNodes();
      console.log('ftyhgvbhjnjk', current_row);
      current_row.forEach((item: any) => item.setDataValue('TO_STOCK_NO', model['STOCK_NO']));
      current_row.forEach((item: any) => item.setDataValue('TO_STOCK_PLACE_NO', model['STOCK_PLACE_NO']));
      //gridView1.refresh();
    };

    // 查询
    const F2_DO = async (e: any) => {
      stock_no.value = erFormHelper.getControlValue('layoutControlGroup1', 'STOCK_NO');
      if (stock_no.value === '') {
        erFormHelper.messageWarning('请输入库区号');
        return false;
      }
      erFormHelper.setControlValue('LayoutGroup3', 'STOCK_NO', stock_no.value);
      grid1pagingQuery();
    };

    // 入库确认
    const F3_DO = async (e: any) => {
      await inStock('1');
      offline_cause.value = false;
    };
    const F3_PRE_DO = async (e: any) => {
      if (erFormHelper.getGridAllRows('gridView1').length === 0) {
        erFormHelper.messageWarning('请先进行查询');
        return false;
      }
      if (erFormHelper.getGridCheckedRows('gridView1').length === 0) {
        erFormHelper.messageWarning('请勾选需要入库的材料');
        return false;
      }
      if (erFormHelper.getGridCheckedRows('gridView2').length !== 0) {
        if (!await erFormHelper.messageConfirm('是否入已选定库位？')) {
          console.log('进');
          return false;
        }

      }
      offline_cause.value = true;
    };
    const F3_CANCEL = async (e: any) => {
      offline_cause.value = false;
      grid1pagingQuery();
    };
    // 来料拒收
    const F4_DO = async (e: any) => {
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView1', undefined, true));

      for (let i = 0; i < inInfo.getBlock(0).data.length; i++) {
        if (
          inInfo.getBlock(0).data[i]['STOCK_OPER_ORDER'] !== '1A' &&
          inInfo.getBlock(0).data[i]['STOCK_OPER_ORDER'] !== '1Q'
        ) {
          erFormHelper.messageWarning(
            '材料[' +
            inInfo.getBlock(0).data[i]['MAT_NO'] +
            ']不允许拒收,其库业务类型有误 请再次确认'
          );
          return false;
        }

      }


      const outInfo = await erFormHelper.callService('wmsmsm11_in_reject', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1pagingQuery();

        return true;
      } else {
        return false;
      }
    };
    const F4_PRE_DO = async (e: any) => {
      if (erFormHelper.getGridAllRows('gridView1').length === 0) {
        erFormHelper.messageWarning('请先进行查询');
        return false;
      }
      if (erFormHelper.getGridCheckedRows('gridView1').length === 0) {
        erFormHelper.messageWarning('请勾选需要来料拒收的材料');
        return false;
      }

    };
    const F4_CANCEL = async (e: any) => {
      grid1pagingQuery();

    };

    const get_query = (e: any) => {

      if (e.target.innerText.toString().trim() === "查 询") {
        queryStockPlaceNo();
      }

    }

    return {
      erFormHelper,
      initializeFlag,
      gridToolbar,
      F2_DO,
      F3_DO,
      F3_PRE_DO,
      F3_CANCEL,
      F4_DO,
      F4_PRE_DO,
      F4_CANCEL,
      stock_no,
      stock_no_q,
      stock_place_no,
      down_disabled_flag,
      come_reject_cause,
      slat_unlade_cause,
      wMJ1_DataSource,
      wM23_DataSource,
      queryStockPlaceNo,
      setStockPlaceNo, efFormReady, get_query, erGrid1Ready, offline_cause
    };
  }
});

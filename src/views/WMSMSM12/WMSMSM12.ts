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
  name: 'WMSMSM12',
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
    const i_form_name = ref('WMSMSM12P1'); //低代码配置的画面名
    const stock_no = ref<string>('');
    const down_disabled_flag = ref<boolean>(false);
    const gridToolbar: Ref<any[]> = ref([]);

    let gridView1!: any
    let gridView2!: any
    let gridView3!: any
    let gridView_zc!: any
    let gridView_yz!: any
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
      erFormHelper.setGridEditable("gridView1", false);
    }
    const erGridYReady = () => {
      //不可编辑

      gridView_yz = erFormHelper.getGrid("GridView_YZ");
      //console.log('sdrtyhgvhjk', gridView1);
      erFormHelper.setGridEditable("GridView_YZ", false);
      gridView_yz.gridOptions.getRowStyle = (params: any) => {
        if (params.data.COMPANY_CODE.toString().trim() == '1') {

          return {
            fontweight: 'blod',
            background: '#FE9A2E'
          };
        }
        if (params.data.COMPANY_CODE.toString().trim() == '2') {

          return {
            fontweight: 'blod',
            background: '#DF3A01'
          };
        }
      }

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
    // if (formParams.formParams?.FACTORY_DIV)
    //   i_factory_div.value = formParams.formParams['FACTORY_DIV'];
    // if (formParams.formParams?.MAT_SHAPE_FLAG)
    //   i_mat_shape_flag.value = formParams.formParams['MAT_SHAPE_FLAG'];
    // if (formParams.formParams?.DEFAULT) i_default.value = formParams.formParams['DEFAULT'];
    // if (formParams.formParams?.UNIT_CODE) i_unit_code.value = formParams.formParams['UNIT_CODE'];
    // if (formParams.formParams?.FORM_NAME) i_form_name.value = formParams.formParams.FORM_NAME;

    const initializeFlag = ref(0);

    //时间格式转字符串
    function formatDate(date: any): string {
      console.log('zxdfghujikop[]', date);
      if (date === null) {
        return ' ';
      }
      else {
        let year = date.$y.toString();
        let month = (date.$M + 1).toString().padStart(2, '0');
        let day = date.$D.toString().padStart(2, '0');
        let hour = date.$H.toString().padStart(2, '0');
        let minute = date.$m.toString().padStart(2, '0');
        let second = date.$s.toString().padStart(2, '0');
        return year + month + day + hour + minute + second;
      }

    }
    //弹窗配置
    const popFreeEditOkClick = async (e: any) => {
      const inInfo = new EI.EIInfo();


      inInfo.addBlock(
        erFormHelper.convertModelAsBlock(e.dataModel,),
      );
      // console.log('fgyuhbnkl;', inInfo.getBlock(0).data[0]['C_ACCEPTDEPT'], inInfo.getBlock(0).data[0]['C_ACCEPTSTOCK'])
      erFormHelper.setControlValue('layoutControlGroup4', 'C_ACCEPTDEPT', inInfo.getBlock(0).data[0]['C_ACCEPTDEPT']);
      erFormHelper.setControlValue('layoutControlGroup4', 'C_ACCEPTSTOCK', inInfo.getBlock(0).data[0]['C_ACCEPTSTOCK']);
    };
    const popBACKOkClick = async (e: any) => {
      const eiInfo = new EI.EIInfo();
      console.log('kjhgfds', e)
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', { C_ACCEPTDEPT: e.dataModel['C_SENDDEPT'], C_ACCEPTSTOCK: e.dataModel['C_SENDSTOCK'] },true));


      const outInfo4 = await erFormHelper.callService('wmsmsm12_ruturn_verify', eiInfo, true, false, true);

      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('处理错误:' + outInfo4.sys.msg);
        return false;
      } else {
        erFormHelper.messageSuccess('处理成功');
        grid1pagingQuery();
        //down_disabled_flag.value = true;
        return true;
      }
    };
    //弹窗配置
    const popFreeEditCencelClick = async (e: any) => {

      grid1pagingQuery();
      return true;
    };
    const outStock = async () => {



    };
    const outStock1 = async () => {
      const inInfo = new EI.EIInfo();
      inInfo.blocks.clear;


      const checkedRowEiBlock = erFormHelper.getGridCheckedRowsAsBlock(
        'gridView3',
        {

          OUT_STOCK_TIME: formatDate(
            erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')
          ),
          TRNP_MODE_CODE: erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE'),//运输方式
          TRUCK_NO: erFormHelper.getControlValue('layoutControlGroup4', 'TRUCK_NO'),//卡车号
          AIM_STOCK_NO: erFormHelper.getControlValue('layoutControlGroup4', 'AIM_STOCK_NO'),//目的库区
          C_DELIVERYTYPE: erFormHelper.getControlValue('layoutControlGroup4', 'C_DELIVERYTYPE'),//调拨类型
          C_ACCEPTDEPT: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTDEPT'),//接受工厂
          C_ACCEPTSTOCK: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTSTOCK'),//接受库房
        },
        true
      );

      inInfo.addBlock(checkedRowEiBlock);
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', {}), 'Table2');
      if (inInfo.getBlock(0).data.length === 0) {
        erFormHelper.messageWarning('请选择需要准备出库的材料信息');
        return false;
      }

      console.log('inInfo', inInfo);
      const outInfo = await erFormHelper.callService('wmsmsm12_outstock_tg', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1pagingQuery();
        erFormHelper.clearLayoutOrGridData(...['layoutControlGroup4', 'gridView3'])
        return true;
      } else {
        return false;
      }
    };
    const outStock2 = async () => {


      const inInfo = new EI.EIInfo();
      inInfo.blocks.clear;
      if (erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTDEPT')?.toString().trim() === '') {
        erFormHelper.messageWarning('接收工厂不能为空');
        return false;
      }
      if (erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTSTOCK')?.toString().trim() === '') {
        erFormHelper.messageWarning('接收库房不能为空');
        return false;
      }
      const checkedRowEiBlock = erFormHelper.getGridCheckedRowsAsBlock(
        'gridView3',
        {
          OUT_STOCK_TIME: formatDate(
            erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')
          ),

          C_ACCEPTDEPT: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTDEPT'),//接受工厂
          C_ACCEPTSTOCK: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTSTOCK'),//接受库房
        },
        true
      );

      inInfo.addBlock(checkedRowEiBlock);
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', {}), 'Table2');


      console.log('inInfo', inInfo);
      const outInfo = await erFormHelper.callService('wmsmsm12_outstock_db', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1pagingQuery();
        erFormHelper.clearLayoutOrGridData(...['layoutControlGroup4', 'gridView3'])
        return true;
      } else {
        return false;
      }
    };

    const wMJ1_DataSource = reactive({
      dataSource: <any>[]
    });

    //let gridView2!: kendo.ui.Grid;

    //#region 分页查询库区信息 grid1pagingQuery start
    const grid1pagingQuery = async () => {

      const inInfo = new EI.EIInfo();
      const filter_condition = erFormHelper.getAllControlValue('layoutControlGroup1', {
        FACTORY_DIV: i_factory_div.value,
        UNIT_CODE: i_unit_code.value
      });
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


      const outInfo = await erFormHelper.callService('wmsmsm12_inq', inInfo, false, true);
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
    const gridyzQuery = async () => {
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(erFormHelper.buildEiBlock([
        {
          LOAD_SCHEME_NO: ' ',
          LOAD_UP_TIME_F: formatDate(erFormHelper.getControlValue('layoutControlGroup1', 'LOAD_UP_TIME_F')),
          LOAD_UP_TIME_T: formatDate(erFormHelper.getControlValue('layoutControlGroup1', 'LOAD_UP_TIME_T'))
        }
      ]))
      console.log('uytfdcvghjk', inInfo)
      const outInfo = await erFormHelper.callService('wmsmsm12p_inq', inInfo, false, true);
      console.log('dftyujhbvbhjo', 1, outInfo);
      if (outInfo.sys.status >= 0) {
        const resultData = outInfo.getBlock(0).data; //后台返回的当页的数据
        console.log('dftyujhbvbhjo', 2);
        erFormHelper.mergeDataToGrid(outInfo.getBlock('Table0').data, 'GridView_YZ');
        console.log('dftyujhbvbhjo', 3);
        return true;
      }
      else {
        console.log('dftyujhbvbhjo', 4);
        return false;
      }
    }
    // 获取 EPEP03
    const getEpep03 = async (code: string) => {

    };
    // 初始化画面配置
    const initPage = async () => {
      // 设置查询条件 库区
      erFormHelper.setControlValue('layoutControlGroup1', 'STOCK_NO', i_default.value);
      wMJ1_DataSource.dataSource = await getEpep03('WMJ1');
    };

    // 自定义工具栏按钮功能
    const InitialToolbar = () => {

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
        InitialToolbar();
        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {
          // 获取画面上的主要控件信息

          initPage();
        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error  msg is [' + initialResult.msg + ']!'
        );
      }
    };

    const getWmsmkf = async (code: string) => {

      let sqlstr = `SELECT * FROM TWMSMZD02  WHERE  CODE_CLASS='WM04' and CODE_DESC_3_CONTENT='${code}' `;
      const out = await erFormHelper.querySql('', sqlstr);

      //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT)
      return String(out.getBlock(0).data[0]?.CODE);
    };
    const getWmsmqx = async (code: string) => {

      let sqlstr = `SELECT * FROM TWMSMZD02  WHERE  CODE_CLASS='WM02' and CODE='${code}' `;
      const out = await erFormHelper.querySql('', sqlstr);

      //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT)
      return String(out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT);
    };

    const getWMSMBACK = async (code: string) => {
      let v_senddept = ' ';
      let v_sendstock = ' ';
      let i_reservecol4 = ' ';
      let sqlstr = `select C_SENDDEPT,C_SENDSTOCK,I_RESERVECOL4 from (select * from TWM41DJ where 1 = 1 AND C_BATCHUNIT = '${code}'  order by REC_CREATE_TIME desc) where ROWNUM = 1 `;
      const out = await erFormHelper.querySql('', sqlstr);

      //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT)

      v_senddept = String(out.getBlock(0).data[0]?.C_SENDDEPT);
      v_sendstock = String(out.getBlock(0).data[0]?.C_SENDSTOCK);
       i_reservecol4 = String(out.getBlock(0).data[0]?.I_RESERVECOL4);

      return { C_SENDDEPT: v_senddept, C_SENDSTOCK: v_sendstock, I_RESERVECOL4: i_reservecol4 };
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
    const query_zc = async () => {
      const inInfo = new EI.EIInfo();
      // const inBlock = new EI.EiBlock();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([
          { MAT_NO: jihuahao.value, TRUCK_NO: shijihao.value }
        ])
      );
      console.log('dftyujhbvbhjo', inInfo);
      const outInfo = await erFormHelper.callService('wmsmsm61_inq', inInfo, false, true);
      console.log('dftyujhbvbhjo', outInfo);
      if (outInfo.sys.status >= 0) {
        erFormHelper.mergeEiBlockToGrid(outInfo.getBlock(0), 'GridView_ZC');
      } else {
        return false;
      }
    };
    const setStockPlaceNo = async () => {
      erFormHelper.checkGridCurrentRow('gridView2')
      const model = erFormHelper.getGridCurrentRow('gridView2');
      //const dt = erFormHelper.getGridCheckedRows('gridView1');

      const current_row = gridView3.gridOptions.api.getSelectedNodes();

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
      eiInfo4.addBlock(erFormHelper.buildEiBlock([{ PRACTICE_NO: model['PRACTICE_NO'] }]))

      console.log('eiInfo4', eiInfo4);


      const outInfo4 = await erFormHelper.callService('wmsmzc_inq1', eiInfo4, true, false, true);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo4.sys.msg);
      } else {
        erFormHelper.mergeEiBlockToGrid(outInfo4.getBlock(0), 'gridView3');
      }
    }

    const F2_DO = async (e: any) => {
      stock_no.value = erFormHelper.getControlValue('layoutControlGroup1', 'STOCK_NO');
      erFormHelper.clearLayoutData('layoutControlGroup4')
      if (tabActiveKey.value === 'tab1') {
        grid1pagingQuery();

      } else if (tabActiveKey.value === 'tab2') {
        gridyzQuery();

      }
    };
    const F3_DO = async (e: any) => {
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
      console.log('ytrfghjuikolp[', 1);
      const checkedRowEiBlock = erFormHelper.getGridCheckedRowsAsBlock(
        'gridView3',
        {

          OUT_STOCK_TIME: formatDate(
            erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')
          ),
          TRNP_MODE_CODE: erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE'),//运输方式
          TRUCK_NO: erFormHelper.getControlValue('layoutControlGroup4', 'TRUCK_NO'),//卡车号
          AIM_STOCK_NO: erFormHelper.getControlValue('layoutControlGroup4', 'AIM_STOCK_NO'),//目的库区
          C_DELIVERYTYPE: erFormHelper.getControlValue('layoutControlGroup4', 'C_DELIVERYTYPE'),//调拨类型
          C_ACCEPTDEPT: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTDEPT'),//接受工厂
          C_ACCEPTSTOCK: erFormHelper.getControlValue('layoutControlGroup4', 'C_ACCEPTSTOCK'),//接受库房
        },
        true
      );
      console.log('ytrfghjuikolpXCFGHJ', checkedRowEiBlock);
      console.log('ytrfghjuikolp[', 2);
      inInfo.addBlock(checkedRowEiBlock);
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', {}), 'Table2');

      for (let i = 0; i < inInfo.getBlock(0).data.length - 1; i++) {

        if (
          inInfo.getBlock(0).data[i]['PLAN_NO'] !==
          inInfo.getBlock(0).data[i + 1]['PLAN_NO']
        ) {
          erFormHelper.messageWarning('选中的倒运计划号不一致，不能进行一次操作。');
          return false;
        }

      }
      for (let i = 0; i < inInfo.getBlock(0).data.length; i++) {
        if (inInfo.getBlock(0).data[i]['PLAN_NO']?.toString().trim() === '') {
          erFormHelper.messageWarning('选中记录没有选中倒运计划号');
          return false;
        }


      }
      console.log('ytrfghjuikolp[', 3);

      console.log('inInfo', inInfo);
      const outInfo = await erFormHelper.callService('wmsmsm12_outstock', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        grid1pagingQuery();
        erFormHelper.clearLayoutOrGridData(...['layoutControlGroup4', 'gridView3'])
        return true;
      } else {
        return false;
      }
    };
    const F3_PRE_DO = async (e: any) => {

      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
        erFormHelper.messageWarning('请选择需要准备出库的材料信息');
        return false;
      }
      console.log('行号', 438)
      const inInfo = new EI.EIInfo();
      let c_acceptdept: string;
      let c_acceptstock: string;
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', undefined, true));
      for (let i = 0; i < inInfo.getBlock(0).data.length - 1; i++) {

        if (
          inInfo.getBlock(0).data[i]['PLAN_NO'] !==
          inInfo.getBlock(0).data[i + 1]['PLAN_NO']
        ) {
          erFormHelper.messageWarning('选中的倒运计划号不一致，不能进行一次操作。');
          return false;
        }

      }
      for (let i = 0; i < inInfo.getBlock(0).data.length; i++) {
        if (inInfo.getBlock(0).data[i]['PLAN_NO']?.toString().trim() === '') {
          erFormHelper.messageWarning('选中记录没有选中倒运计划号');
          return false;
        }


      }
      console.log('行号', String(erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')).trim(), String(erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE')).trim())
      if (String(erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')) === 'null') {
        erFormHelper.setControlValue('layoutControlGroup4', 'OUT_STOCK_TIME', new Date());
      }
      if (String(erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE')).trim() === '') {
        erFormHelper.setControlValue('layoutControlGroup4', 'TRNP_MODE_CODE', '1');
      }

      c_acceptdept = String(inInfo.getBlock(0).data[0]['UNLOAD_CODE_FACTORY']?.toString());
      c_acceptstock = await getWmsmkf(String(inInfo.getBlock(0).data[0]['UNLOAD_CODE_FACTORY']?.toString()));
      console.log('行号', 462, c_acceptstock)
      popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSMSM12P1', 'LayoutDbmessage');
      const data = { C_ACCEPTDEPT: c_acceptdept, C_ACCEPTSTOCK: c_acceptstock }
      popFreeEdit.ReceiveData(data)
      //console.log('qwsedfvb ', popFreeEdit)
      ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);
      console.log('行号', 468)
    };
    const F3_CANCEL = async (e: any) => {

      erFormHelper.clearLayoutData('layoutControlGroup4')

    };
    const F4_DO = async (e: any) => {
      if (!await erFormHelper.checkRequiredInput('layoutControlGroup4')) {
        erFormHelper.messageWarning('请检查输入');
        return false;
      }
      if (erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME') === null) {
        erFormHelper.messageWarning('请输入出库时间');
        return false;
      }
      for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length - 1; i++) {

        if (
          erFormHelper.getGridCheckedRowsAsBlock('gridView3').data[i]['PLAN_NO'] !==
          erFormHelper.getGridCheckedRowsAsBlock('gridView3').data[i + 1]['PLAN_NO']
        ) {
          erFormHelper.messageWarning('选中的倒运计划号不一致，不能进行一次操作。');
          return false;
        }

      }
      for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length; i++) {
        if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data[i]['PLAN_NO']?.toString().trim() === '') {
          erFormHelper.messageWarning('选中记录没有选中倒运计划号');
          return false;
        }


      }
      await outStock1();
    };
    const F4_PRE_DO = async (e: any) => {

      if (String(erFormHelper.getControlValue('layoutControlGroup4', 'OUT_STOCK_TIME')) === 'null') {
        erFormHelper.setControlValue('layoutControlGroup4', 'OUT_STOCK_TIME', new Date());
      }
      if (String(erFormHelper.getControlValue('layoutControlGroup4', 'TRNP_MODE_CODE')).trim() === '') {
        erFormHelper.setControlValue('layoutControlGroup4', 'TRNP_MODE_CODE', '1');
      }
    };
    const F4_CANCEL = async (e: any) => {

      erFormHelper.clearLayoutData('layoutControlGroup4')

    };
    const F5_DO = async (e: any) => {

      await outStock2();
    };
    const F5_PRE_DO = async (e: any) => {

      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
        erFormHelper.messageWarning('请选择需要准备出库的材料信息');
        return false;
      }
      popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSMSM12P1', 'LayoutDbmessage');
      ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick, popFreeEditCencelClick);
    };
    const F5_CANCEL = async (e: any) => {

      erFormHelper.clearLayoutData('layoutControlGroup4')
    };
    const F6_DO = async (e: any) => {

      EFCallForm('WMSMZCS2N', {});
    };
    const F7_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
        erFormHelper.messageWarning('请选择需要撤销装车的材料');
        return false;
      }
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3', { PRACTICE_NO: erFormHelper.getGridCurrentRow('GridView_ZC')['PRACTICE_NO'] }));


      const outInfo4 = await erFormHelper.callService('wmsmsm12_cencel', eiInfo, true, false, true);
      console.log('oiuygfdcvgbhjkolp', eiInfo);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('处理错误:' + outInfo4.sys.msg);
      } else {
        erFormHelper.messageSuccess('处理成功');
        grid1pagingQuery();
        down_disabled_flag.value = false;
      }

    };
    const F7_PRE_DO = async (e: any) => {
      down_disabled_flag.value = true;
      erFormHelper.clearGridData('gridView3');

    };
    const F7_CANCEL = async (e: any) => {
      down_disabled_flag.value = false;

    };
    const F8_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView1').data.length === 0) {
        erFormHelper.messageWarning('请选择需要做调拨反馈的临钢坯材料');
        return false;
      }
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView1'));


      const outInfo4 = await erFormHelper.callService('wmsmsm12_db_feedback', eiInfo, true, false, true);
      console.log('oiuygfdcvgbhjkolp', eiInfo);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('处理错误:' + outInfo4.sys.msg);
      } else {
        erFormHelper.messageSuccess('处理成功');
        grid1pagingQuery();
        down_disabled_flag.value = false;
      }

    };
    const F8_PRE_DO = async (e: any) => {

      for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('gridView1').data.length; i++) {
        let kefa = await getWmsmqx(String(erFormHelper.getGridCheckedRowsAsBlock('gridView1').data[i]?.GUIDE_DEST?.toString()));
        console.log('ghujhjk', kefa)
        if (
          String(kefa).indexOf('4') < 0
        ) {
          //人工匹配--选的材料预定板坯号需要全为空
          erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.MAT_NO?.toString()}的去向不为临钢坯，不可调拨反馈。`);
          return false;
        }


      }
      down_disabled_flag.value = true;

    };
    const F8_CANCEL = async (e: any) => {
      down_disabled_flag.value = false;

    };
    const F9_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
        erFormHelper.messageWarning('请选择需要补装车的材料');
        return false;
      }
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3',
        {
          PRACTICE_NO: erFormHelper.getGridCurrentRow('GridView_ZC')['PRACTICE_NO']
        }
      ));


      const outInfo4 = await erFormHelper.callService('wmsmsm12_push', eiInfo, true, false, true);
      console.log('oiuygfdcvgbhjkolp', eiInfo);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('处理错误:' + outInfo4.sys.msg);
        return false;
      } else {
        erFormHelper.messageSuccess('处理成功');
        grid1pagingQuery();
        //down_disabled_flag.value = true;
        return true;
      }

    };
    const F9_PRE_DO = async (e: any) => {
      //down_disabled_flag.value = false;
      erFormHelper.clearGridData('gridView3');

    };
    const F9_CANCEL = async (e: any) => {
      erFormHelper.clearGridData('gridView3');

    };

    const F10_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length !== 1) {
        erFormHelper.messageWarning('请只选择一个材料进行回退');
        return false;
      }

      let c_obj = await getWMSMBACK(String(erFormHelper.getGridCheckedRowsAsBlock('gridView3').data[0].MAT_NO));

      console.log('lkjhgfd', c_obj.I_RESERVECOL4)
      if (c_obj.C_SENDDEPT === '6240'|| c_obj.I_RESERVECOL4 !== '0') {
        erFormHelper.messageError(`当前材料${erFormHelper.getGridCheckedRowsAsBlock('gridView3').data[0].MAT_NO}没有调来6240的调拨单，无法回退`);
        return false
      }
      popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSMSM12P1', 'LayoutDbmessage1');
      const data = { C_SENDDEPT: c_obj.C_SENDDEPT, C_SENDSTOCK: c_obj.C_SENDSTOCK}
      popFreeEdit.ReceiveData(data)
      //console.log('qwsedfvb ', popFreeEdit)
      ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popBACKOkClick);


    };
    const F10_PRE_DO = async (e: any) => {
      //down_disabled_flag.value = false;
      erFormHelper.clearGridData('gridView3');

    };
    const F10_CANCEL = async (e: any) => {
      erFormHelper.clearGridData('gridView3');

    };
    const F11_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRowsAsBlock('gridView3').data.length === 0) {
        erFormHelper.messageWarning('请选择材料到拣配区');
        return false;
      }
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView3'));


      const outInfo4 = await erFormHelper.callService('wmsmsm12_reset', eiInfo, true, false, true);
      console.log('oiuygfdcvgbhjkolp', eiInfo);
      if (outInfo4.sys.status < 0) {
        erFormHelper.messageError('处理错误:' + outInfo4.sys.msg);
        return false;
      } else {
        erFormHelper.messageSuccess('处理成功');
        grid1pagingQuery();
        //down_disabled_flag.value = true;
        return true;
      }

    };
    const F11_PRE_DO = async (e: any) => {
      //down_disabled_flag.value = false;
      erFormHelper.clearGridData('gridView3');

    };
    const F11_CANCEL = async (e: any) => {
      erFormHelper.clearGridData('gridView3');

    };

    onMounted(() => {

    });
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

    const down_mat = useDebounce(async () => {
      if (tabActiveKey.value === 'tab1') {
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
              //console.log('xdrtgfcvghuijhbnji', s)

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
              erFormHelper.setGridRowData('gridView3', sdf, { C_DELIVERYID: s['C_DELIVERYID'] });
              erFormHelper.setGridRowData('gridView3', sdf, { ORDER_NO: s['ORDER_NO'] });

              erFormHelper.deleteGridRows('gridView1', false);
              erFormHelper.checkGridRow('gridView3', sdf, true);
            })

          }

        }
      }
      else if (tabActiveKey.value === 'tab2') {
        let if_exist = false;
        if (erFormHelper.getGridCheckedRows('GridView_YZ').length === 0) {
          erFormHelper.messageWarning('请至少选择一个装车方案号!');
        }
        else {
          erFormHelper.clearGridData('gridView3')
          const eiInfo = new EI.EIInfo();
          eiInfo.addBlock(
            erFormHelper.getGridCheckedRowsAsBlock('GridView_YZ')
          );
          const outInfo4 = await erFormHelper.callService('wmsmsm12p_fre', eiInfo, false, true);

          for (const s of outInfo4.getBlock(0).data) {

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

              console.log('xdrtgfcvghuijhbnji', s['MAT_NO'], s['MAT_ACT_THICK'])
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
              erFormHelper.setGridRowData('gridView3', sdf, { PLAN_NO: s['PLAN_NO'] });
              erFormHelper.setGridRowData('gridView3', sdf, { LOAD_SCHEME_NO: s['LOAD_SCHEME_NO'] });
              erFormHelper.setGridRowData('gridView3', sdf, { C_DELIVERYID: s['C_DELIVERYID'] });
              erFormHelper.setGridRowData('gridView3', sdf, { ORDER_NO: s['ORDER_NO'] });
              //erFormHelper.deleteGridRows('gridView1', false);
            })

          }
          erFormHelper.stopGridEditing('gridView3', () => {
            erFormHelper.checkAllGridRow('gridView3');
          })

        }

        erFormHelper.unCheckAllGridRow('GridView_YZ', false);
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
    const refresh_mat = () => {
      erFormHelper.clearGridData('gridView3');
    }
    const tabActiveKey = ref('tab1')
    const handleTabChange = (activeKey: string) => {
      console.log(activeKey);
      if (activeKey === 'tab1') {
        grid1pagingQuery();
        tabActiveKey.value = 'tab1';
      } else if (activeKey === 'tab2') {
        gridyzQuery();
        tabActiveKey.value = 'tab2';
      }
    };
    const GridViewYFocusChanged = async (e: any) => {
      if (e) {
        if (e.data && e.rowChanged) {
          if (e.data) {
            erFormHelper.clearGridData('gridView3')
            const currentRow = erFormHelper.getGridCurrentRow('GridView_YZ', true, true);
            console.log('currentRow', currentRow);
            queryDetailInfo(currentRow);
          }
        }
      }
    }
    // 查询子表明细信息
    const queryDetailInfo = async (currentRowInfo: any) => {
      //

      const eiInfo = new EI.EIInfo();
      const eiBlock = new EI.EiBlock();

      eiInfo.addBlock(eiBlock);
      eiBlock.pushData({ ...currentRowInfo }, true);
      console.log('eiInfo4', eiInfo);
      // console.log('currentRowInfo', currentRowInfo);
      const service_name = 'wmsmsm12p_fre';
      const outInfo = await erFormHelper.callService(service_name, eiInfo, true, false, true);
      console.log('outInfo', outInfo);
      erFormHelper.setControlValueEx(
        'layoutControlGroup4',

        {
          OUT_STOCK_TIME: String(outInfo.getBlock(0).data[0]['OUT_STOCK_TIME']),
          TRNP_MODE_CODE: outInfo.getBlock(0).data[0]['TRNP_MODE_CODE'],
          TRUCK_NO: String(outInfo.getBlock(0).data[0]['TRUCK_NO'])
        },
        ...['OUT_STOCK_TIME', 'TRNP_MODE_CODE', 'TRUCK_NO']
      )
      //erFormHelper.setControlValue('layoutControlGroup4', 'TRNP_MODE_CODE', outInfo.getBlock(0).data[0]['TRNP_MODE_CODE']);
      //console.log('outInfo', outInfo.getBlock(0).data[0]['OUT_STOCK_TIME'], outInfo.getBlock(0).data[0]['TRNP_MODE_CODE']);

      if (outInfo.sys.status < 0) {
        erFormHelper.messageError('查询错误:' + outInfo.sys.msg);
      } else {
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView3');
        erFormHelper.checkAllGridRow('gridView3');
      }
    };
    return {
      erFormHelper, tabActiveKey, handleTabChange, GridViewYFocusChanged,
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
      F5_CANCEL,
      F6_DO,
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
      F11_DO,
      F11_PRE_DO,
      F11_CANCEL,
      query_zx, query_zc,
      zhuangdian,
      xiedian, jihuahao, shijihao,
      setStockPlaceNo, efFormReady, erGrid1Ready, erGrid2Ready, erGridzReady, setLoadMAT, down_disabled_flag, erGridYReady
    };
  }
});

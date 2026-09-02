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
  name: 'WMSMSM13',
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
    const formName = 'WMSMSM13P1';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);
    const gridToolbar: Ref<any[]> = ref([]);

    //定制化
    let gridView1!: any;
    let gridView2!: any;
    let gridView3!: any;
    const stock_no = ref<string>('');
    const stock_place_no = ref<string>('');
    const slat_unlade_cause_disabled = ref<boolean>(true);
    const slat_unlade_cause = ref('');
    const out_stock_disabled = ref<boolean>(true);
    const carNO_disabled = ref<boolean>(true);
    const carNO = ref('');
    const checkedDataSource = [];
    const down_DataSource = reactive({
      wM23DataSource: <any>[],
      stockNoDataSource: <any>[],
      stockNoToDataSource: <any>[],
      carNoToDataSource: <any>[]
    });
    const i_factory_div = ref('');
    const i_mat_shape_flag = ref('');
    const i_default = ref('');
    const i_unit_code = ref('');
    const i_form_name = ref('WMSMSM13P1');
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
      console.log('sdrtyhgvhjk', gridView1);
      erFormHelper.setGridEditable("gridView1", false);
    }
    // if (formParams.formParams?.FACTORY_DIV)
    //   i_factory_div.value = formParams.formParams['FACTORY_DIV'];
    // if (formParams.formParams?.MAT_SHAPE_FLAG)
    //   i_mat_shape_flag.value = formParams.formParams['MAT_SHAPE_FLAG'];
    // if (formParams.formParams?.DEFAULT) i_default.value = formParams.formParams['DEFAULT'];
    // if (formParams.formParams?.UNIT_CODE) i_unit_code.value = formParams.formParams['UNIT_CODE'];
    // if (formParams.formParams?.FORM_NAME) i_form_name.value = formParams.FORM_NAME;

    // 自定义工具栏按钮功能
    const InitialToolbar = () => {
      // gridToolbar.value = erFormHelper.getGridToolbar([
      //   { name: 'excel', visible: true }
      //   // { name: 'addrow', visible: false },
      //   // { name: 'copyrow', visible: false },
      //   // { name: 'delete', visible: false },
      //   // { name: 'save', visible: false },
      //   // { name: 'cancel', visible: false }
      // ]);
    };

    // 获取 EPEP03
    const getEpep03 = async (code: string) => {
      // let resData = <any>[];
      // await EFUtility.getCodeClassValue(formPartition, [code])
      //   .then((res) => {
      //     if (res.blocks[code]) {
      //       // 业务逻辑
      //       resData = res.blocks[code].data;
      //     }
      //   })
      //   .catch((error) => {
      //     // 异常处理逻辑
      //     erFormHelper.messageWarning(error);
      //   });
      // return resData;
    };

    const get_query = async () => {
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([{ STOCK_NO: stock_no.value, STOCK_PLACE_NO: stock_place_no.value }])
      );
      const outInfo = await erFormHelper.callService('wm_stockplace', inInfo, false, false, true);

      if (outInfo.sys.status >= 0) {
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView3');
        return true;
      } else {
        return false;
      }
    };
    const grid1pagingQuery = async () => {

      // 获取分页信息
      const inInfo = new EI.EIInfo();
      const filter_condition = erFormHelper.getAllControlValue('layoutControlGroup2', {
        FACTORY_DIV: i_factory_div.value,
        UNIT_CODE: i_unit_code.value,
        MAT_SHAPE_FLAG: i_mat_shape_flag.value
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

      const outInfo = await erFormHelper.callService('wmsmsm13_inq', inInfo, false, true, true);

      if (outInfo.sys.status >= 0) {
        const resultData = outInfo.getBlock(0).data; //后台返回的当页的数据
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView1');
      } else {
        return false;
      }
    };
    // 初始化画面配置
    const initPage = async () => {
      // 设置查询条件 库区
      down_DataSource.wM23DataSource = await getEpep03('WM23');
      let resTable = erFormHelper.querySql(
        '',
        ` select 'H01' CODE ,'热轧板坯库' CODE_DESC_1_CONTENT from sysibm.DUAL union ALL select 'B10' CODE ,'棒材方坯库' CODE_DESC_1_CONTENT from sysibm.DUAL `
      );
      down_DataSource.stockNoToDataSource = (await resTable).getBlock(0).data;

      // 右侧下拉库区
      resTable = erFormHelper.querySql(
        '',
        ` SELECT STOCK_NO CODE,STOCK_DESC CODE_DESC_1_CONTENT FROM TWM01 WHERE MAT_KIND = 'SM' AND MAT_LINE_TYPE = 'SM' AND FACTORY_DIV LIKE '${i_factory_div.value}%' `
      );
      down_DataSource.stockNoDataSource = (await resTable).getBlock(0).data;

      resTable = erFormHelper.querySql(
        '',
        ` select CODE from tep0002 where code_class = 'WMLD' AND (CODE_DESC_1_CONTENT = '${i_factory_div.value}' OR CODE_DESC_1_CONTENT = ' ') AND CODE_DESC_2_CONTENT = 'SM' `
      );
      down_DataSource.carNoToDataSource = (await resTable).getBlock(0).data;
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
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };

    onMounted(() => {

    });

    const Query_detail = async (
      heat_no: string,
      unit_code: string,
      st_no: string,
      sg_sign: string,
      pono: string,
      order_no: string
    ) => {
      // 获取分页信息
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([
          {
            HEAT_NO: heat_no,
            UNIT_CODE: unit_code,
            ST_NO: st_no,
            SG_SIGN: sg_sign,
            PONO: pono,
            ORDER_NO: order_no
          }
        ])
      );

      const outInfo = await erFormHelper.callService('wmsmsm13_detail', inInfo, false, true, true);

      if (outInfo.sys.status >= 0) {
        const mergeInfo = new EI.EIInfo();
        // 该数据源不能仅获取gridView的列，有BUG。
        const checkedDataBlock = erFormHelper.getGridCheckedRowsAsBlock('gridView2');
        const checkedDataBlock_o = erFormHelper.getGridCheckedRowsAsBlock('gridView2');
        // 获取勾选块行数
        const checkedDataLength = checkedDataBlock.data.length;

        if (checkedDataLength > 0) {
          mergeInfo.addBlock(checkedDataBlock);
        } else {
          mergeInfo.addBlock(new EI.EiBlock());
        }

        // 取得已勾选的材料号数组
        const mat_no_arr: any[] = [];
        checkedDataBlock.data.forEach((item) => mat_no_arr.push(item['MAT_NO']));
        outInfo.getBlock(0).data.forEach((item) => {
          // 去重添加，以材料号MAT_NO 为关键字
          if (mat_no_arr.indexOf(item['MAT_NO']) === -1) {
            mergeInfo.getBlock(0).data.push(item);
          }
        });
        // 合并后的数据源 （勾选行+后台查询）

        erFormHelper.mergeDataToGrid(mergeInfo.getBlock(0).data, 'gridView2', true);
        // 恢复勾选行
        console.log(checkedDataBlock_o);
        for (let index = 0; index < checkedDataLength; index++) {
          erFormHelper.checkGridRow('gridView2', checkedDataBlock_o.data, true);

        }
        return true;
      } else {
        return false;
      }
    };

    // 焦点行事件
    const gridView1FocusChanged = async (e: any) => {
      if (e) {
        if (e.rowChanged && e.data) {
          await Query_detail(
            e.data.get('HEAT_NO'),
            e.data.get('UNIT_CODE'),
            e.data.get('ST_NO'),
            e.data.get('SG_SIGN'),
            e.data.get('PONO'),
            e.data.get('ORDER_NO')
          );
        } else if (!e.data) {
          erFormHelper.clearGridData('gridView2');
        }
      }
    };

    // 手动触发焦点行
    const gridView1FocusChangedManual = async () => {
      erFormHelper.unCheckAllGridRow('gridView2');
      const currentRow = erFormHelper.getGridCurrentRow('gridView1', true, true);
      Query_detail(
        currentRow['HEAT_NO'],
        currentRow['UNIT_CODE'],
        currentRow['ST_NO'],
        currentRow['SG_SIGN'],
        currentRow['PONO'],
        currentRow['ORDER_NO']
      );
    };

    // 查询
    const F2_DO = async (e: any) => {
      grid1pagingQuery();
    };
    // 辊道出坯
    const F4_DO = async (e: any) => {
      // 获取分页信息
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView2', undefined, true));
      if (inInfo.getBlock(0).data.length <= 0) {
        erFormHelper.messageWarning('请选择需要开始出库的材料信息');
        return false;
      }

      const outInfo = await erFormHelper.callService('wmsmsm13_out_f', inInfo, false, true, true);

      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        // 手动触发焦点行
        gridView1FocusChangedManual();
        grid1pagingQuery();
        return true;
      } else {
        return false;
      }
    };
    const F4_PRE_DO = async (e: any) => { };
    const F4_CANCEL = async (e: any) => { };
    // 下线
    const F5_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('gridView3').length <= 0) {
        erFormHelper.messageWarning('请选择需要下线的库位号信息');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(
          'gridView2',
          {
            SLAT_UNLADE_CAUSE: slat_unlade_cause.value,
            STOCK_PLACE_NO: erFormHelper.getGridCheckedRows('gridView3')[0]['STOCK_PLACE_NO']
          },
          true
        )
      );
      if (inInfo.getBlock(0).data.length <= 0) {
        erFormHelper.messageWarning('请选择需要的材料信息');
        return false;
      }
      const outInfo = await erFormHelper.callService('wmsmsm13_downline', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        // 手动触发焦点行
        gridView1FocusChangedManual();
        slat_unlade_cause_disabled.value = true;
        grid1pagingQuery();
        return true;
      } else {
        return false;
      }


    };
    const F5_PRE_DO = async (e: any) => {
      slat_unlade_cause_disabled.value = false;
    };
    const F5_CANCEL = async (e: any) => {
      slat_unlade_cause_disabled.value = true;
      // 手动触发焦点行
      gridView1FocusChangedManual();
    };
    // 汽运出坯
    const F6_DO = async (e: any) => {
      if (carNO.value.trim() === '') {
        erFormHelper.messageWarning('出库车号必须不为空');
        return false;
      }
      if (erFormHelper.getGridCheckedRows('gridView3').length <= 0) {
        erFormHelper.messageWarning('请于右侧选择库位号信息');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(
          'gridView2',
          {
            VEHICLE_NO: carNO.value,
            STOCK_PLACE_NO: erFormHelper.getGridCheckedRows('gridView3')[0]['STOCK_PLACE_NO']
          },
          true
        )
      );
      if (inInfo.getBlock(0).data.length <= 0) {
        erFormHelper.messageWarning('请选择需要的材料信息');
        return false;
      }

      for (let index = 0; index < inInfo.getBlock(0).data.length; index++) {
        const mat_destion = inInfo.getBlock(0).data[index]['MAT_DESTION']?.toString().trim();
        if (mat_destion !== '10' && mat_destion !== '11' && mat_destion !== '13') {
          erFormHelper.messageWarning(
            '该材料号[' +
            inInfo.getBlock(0).data[index]['MAT_NO'] +
            ']材料去向不为轧钢，不能汽运出坯。'
          );
          return false;
        }
      }

      const outInfo = await erFormHelper.callService('wmsmsm13_out_f', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        // 手动触发焦点行
        gridView1FocusChangedManual();
        grid1pagingQuery();
        return true;
      } else {
        return false;
      }

    };
    const F6_PRE_DO = async (e: any) => {
      carNO_disabled.value = false;
    };
    const F6_CANCEL = async (e: any) => {
      carNO_disabled.value = true;
      // 手动触发焦点行
      gridView1FocusChangedManual();
    };
    // 临时下线
    const F10_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('gridView3').length <= 0) {
        erFormHelper.messageWarning('请选择需要临时下线的 库位号信息');
        return false;
      }
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(
          'gridView2',
          {
            SLAT_UNLADE_CAUSE: slat_unlade_cause.value,
            STOCK_PLACE_NO: erFormHelper.getGridCheckedRows('gridView3')[0]['STOCK_PLACE_NO']
          },
          true
        )
      );
      if (inInfo.getBlock(0).data.length <= 0) {
        erFormHelper.messageWarning('请选择需要临时下线的 材料信息');
        return false;
      }
      const outInfo = await erFormHelper.callService('wmsmsm13_downline1', inInfo, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        // 手动触发焦点行
        gridView1FocusChangedManual();
      } else {
        return false;
      }
      slat_unlade_cause_disabled.value = true;
      get_query();
      return true;
    };
    const F10_PRE_DO = async (e: any) => {
      slat_unlade_cause_disabled.value = false;
    };
    const F10_CANCEL = async (e: any) => {
      slat_unlade_cause_disabled.value = true;
      // 手动触发焦点行
      gridView1FocusChangedManual();
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

    return {
      erFormHelper,
      initializeFlag,
      gridToolbar,
      F2_DO,
      F4_DO,
      F4_PRE_DO,
      F4_CANCEL,
      F5_DO,
      F5_PRE_DO,
      F5_CANCEL,
      F6_DO,
      F6_PRE_DO,
      F6_CANCEL,
      F10_DO,
      F10_PRE_DO,
      F10_CANCEL,
      stock_no,
      stock_place_no,
      slat_unlade_cause_disabled,
      slat_unlade_cause,
      out_stock_disabled,
      carNO_disabled,
      carNO,
      down_DataSource,
      get_query,
      gridView1FocusChanged, efFormReady, setStockPlaceNo
    };
  }
});

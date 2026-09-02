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

import { useRoute } from "vue-router";
import { Console } from "console";

export default defineComponent({
  name: 'WMSMSM17',
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
    const formName = 'WMSMSM17P1';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);
    const gridToolbar: Ref<any[]> = ref([]);

    //定制化
    let gridView1!: any;
    let gridView2!: any;
    let gridView3!: any;
    const stock_no_disabled = ref<boolean>(true);
    const stock_place_no_disabled = ref<boolean>(true);
    const stock_no_dataSource = reactive({
      dataSource: <any>[]
    });
    const stock_place_no_dataSource = reactive({
      dataSource: <any>[]
    });

    const i_factory_div = ref('');
    const i_mat_shape_flag = ref('');
    const i_mat_line_type = ref('');
    const i_default = ref('');
    const stockNo = ref('');
    const stockPlaceNo = ref('');
    const efFormReady = (e: any) => {

      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区


      initializePage();
    };


    // 自定义工具栏按钮功能


    // 库位STOCK_PLACE_NO下拉框数据源查询
    const Query_stock_place_no = async () => {
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([
          {
            STOCK_NO: stockNo.value,
            STOCK_PLACE_NO: ''
          }
        ])
      );
      const outInfo = await erFormHelper.callService('wm_stockplace', inInfo, false, true, true);
      if (outInfo.sys.status >= 0) {
        const arr = [];
        for (let i = 0; i < outInfo.getBlock(0).data.length; i++) {
          arr.push(outInfo.getBlock(0).data[i]['STOCK_PLACE_NO']);
        }
        stock_place_no_dataSource.dataSource = arr;
        return true;
      } else {
        return false;
      }
    };

    // 查询显示库位整体信息-gridView1
    const Query_stockPlace = async () => {
      // 获取分页信息
      const inInfo = new EI.EIInfo();
      const filter_condition = erFormHelper.getAllControlValue('layoutControlGroup2');
      inInfo.addBlock(erFormHelper.buildEiBlock([filter_condition]));
      const dt = inInfo.getBlock(0);
      if (dt.data[0]['STOCK_NO']?.toString().trim() === '') {
        erFormHelper.messageWarning('请输入库区号');
        return false;
      }
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
      const outInfo = await erFormHelper.callService('wmsmsm17_inq', inInfo, false, true, true);
      if (outInfo.sys.status >= 0) {
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView1');
        return true;
      } else {
        return false;
      }
    };

    // 焦点行事件-查询库位材料信息,gridView2
    const Query_mat = async () => {
      const inInfo = new EI.EIInfo();
      const model = erFormHelper.getGridCurrentRow('gridView1');
      inInfo.addBlock(
        erFormHelper.buildEiBlock([
          {
            STOCK_PLACE_NO: model['STOCK_PLACE_NO'],
            MAT_LINE_TYPE: i_mat_line_type.value,
            ROWNO: '',
            COLUMN_NO: '',
            STOCK_NO: ''
          }
        ])
      );
      if (model['STOCK_PLACE_NO'].toString().trim() !== '') {
        const outInfo = await erFormHelper.callService(
          'wmsmsm17_inq_mat',
          inInfo,
          false,
          true,
          true
        );
        if (outInfo.sys.status >= 0) {
          erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView2');
          return true;
        } else {
          return false;
        }
      }
    };
    const get_query = (e: any) => {

      if (e.target.innerText.toString().trim() === "查 询"
        && (erFormHelper.getControlValue('LayoutGroup2', 'STOCK_NO')?.trim() !== '' || erFormHelper.getControlValue('LayoutGroup2', 'STOCK_NO')?.trim() !== null)
        && (erFormHelper.getControlValue('LayoutGroup2', 'STOCK_PLACE_NO')?.trim() !== '' || erFormHelper.getControlValue('LayoutGroup2', 'STOCK_PLACE_NO')?.trim() !== null)) {
        Query_stockPlaceNo_mat();
      }

    }
    // 按钮点击事件-查询库位材料信息,stockPlaceNo
    const Query_stockPlaceNo_mat = async () => {
      console.log('fgyuhbhijjkk')
      const inInfo = new EI.EIInfo();
      inInfo.addBlock(
        erFormHelper.buildEiBlock([
          {
            STOCK_PLACE_NO: erFormHelper.getControlValue('LayoutGroup2', 'STOCK_PLACE_NO'),
            MAT_LINE_TYPE: 'SM',
            ROWNO: '',
            COLUMN_NO: '',
            STOCK_NO: erFormHelper.getControlValue('LayoutGroup2', 'STOCK_NO')
          }
        ])
      );

      const outInfo = await erFormHelper.callService('wmsmsm17_inq_mat', inInfo, false, true, true);
      console.log('ytrdsxdcfghujiop', outInfo)
      if (outInfo.sys.status >= 0) {
        erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'gridView3');
        //gridView3.autoFitColumns;
        return true;
      } else {
        return false;
      }
    };

    // 画面显示1 焦点行事件
    const grid1FocusChanged = async (e: any) => {
      if (e) {
        if (e.rowChanged && e.data) {
          Query_mat();

          erFormHelper.setControlValue('LayoutGroup2', 'STOCK_NO', e.data.get('STOCK_NO'));
        }
      }
    };

    // 双击赋值库区库位
    const setStockPlaceNo = async (e: any) => {
      const model = erFormHelper.getGridCurrentRow('gridView3');
      const dt = erFormHelper.getGridCheckedRows('gridView2');
      for (let i = 0; i < dt.length; i++) {
        dt[i]['TO_STOCK_PLACE_NO'] = model['STOCK_PLACE_NO'];
        dt[i]['TO_STOCK_NO'] = model['STOCK_PLACE_NO'].toString().substring(0, 3);
      }
      gridView2.refresh();
    };

    // 初始化画面配置
    const InitPage = async () => {
      // 设置查询条件 库区

      erFormHelper.setControlValue('layoutControlGroup2', 'STOCK_NO', 'SYA');
      erFormHelper.setControlValue('LayoutGroup2', 'STOCK_NO', 'SYA');
      // await Query_stockno();
      await Query_stock_place_no();
      erFormHelper.setGridColumnEditable('gridView2', false);
    };

    // 层号更改
    const reComputeLayerno = async () => {
      const dt = erFormHelper.getGridAllRows('gridView2');
      const len = dt.length;
      for (let i = 0; i < len; i++) {
        dt[i].set('LAYERNO', len - i);
      }
      gridView2.refresh();
    };

    const RefreshGridView = async () => {
      gridView2.refresh();
    };
    // 自定义grid事件
    const customGridEvent = () => {
      // 监听拖拽事件
      // gridView2.bindGridCustomEvent('rowReorder', async (e: any) => {
      //   await RefreshGridView();
      //   await reComputeLayerno();
      //   erFormHelper.unCheckAllGridRow('gridView2');
      // });

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
        //初始化工具栏


        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {
          // 获取画面上的主要控件信息

          InitPage();
          // 自定义grid事件
          customGridEvent();

        });
      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };


    watch(stockNo, async (newStockNo, oldStockNo) => {
      if (newStockNo !== oldStockNo) {
        await Query_stock_place_no();
      }
    });

    const SetEditable = async (flag: string) => {
      if (flag === 'pre') {
        stock_place_no_disabled.value = false;
        erFormHelper.setGridEnable('gridView1', false);
      }
      if (flag === 'cancel') {
        stock_place_no_disabled.value = true;
        erFormHelper.setGridEnable('gridView1', true);
      }
    };

    const F2_DO = async (e: any) => {
      Query_stockPlace();
    };
    const F5_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('gridView2').length <= 0) {
        erFormHelper.messageWarning('请选择需操作的材料信息。');
        return false;
      }
      console.log('ftygvbhjnb nmklkmn ', erFormHelper.getAllControlValue('LayoutGroup2').STOCK_PLACE_NO.toString())
      if (erFormHelper.getAllControlValue('LayoutGroup2').STOCK_PLACE_NO.toString().trim() === '') {
        erFormHelper.messageWarning('请输入目标库位');
        return false;
      }

      const inInfo = new EI.EIInfo();
      const model = erFormHelper.getGridCurrentRow('gridView1');
      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock(
          'gridView2',
          {
            STOCK_PLACE_NO_FROM: model['STOCK_PLACE_NO'],
            STOCK_PLACE_NO_TO: erFormHelper.getAllControlValue('LayoutGroup2').STOCK_PLACE_NO.toString(),
            YARD_LAYER_TO: '',
            STOCK_OPER_ORDER: '30'
          },
          true
        )
      );
      const outInfo = await erFormHelper.callService('wmsmsm17_mov', inInfo, false, true, true);
      // 恢复画面状态
      SetEditable('cancel');
      if (outInfo.sys.status >= 0) {
        erFormHelper.messageSuccess();
        Query_stockPlace();
        // 拖拽行-gridView2,-- 待完成
        return true;
      } else {
        return false;
      }
    };
    const F5_PRE_DO = async (e: any) => {
      const dt = erFormHelper.getGridAllRows('gridView2');
      console.log('sdfghujiuhgvbnmk', dt);
      if (erFormHelper.getGridAllRows('gridView2').length <= 0) {
        erFormHelper.messageWarning('没有材料信息');
        return false;
      }
      SetEditable('pre');
    };
    const F5_CANCEL = async (e: any) => {
      SetEditable('cancel');
      erFormHelper.unCheckAllGridRow('gridView2');
      stockNo.value = ' ';
    };
    const F6_DO = async (e: any) => {

      if (erFormHelper.getGridCheckedRowsAsBlock('gridView2').data.length <= 0) {
        erFormHelper.messageWarning('请选择需操作的材料信息。');
        return false;
      }
      erFormHelper.stopGridEditing('gridView2', async () => {
        const inInfo = new EI.EIInfo();
        inInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('gridView2', {}, true));

        /* 以下代码为所有girdView2库区，库位赋值 gridView1的焦点行数据。
        const model = erFormHelper.getGridCurrentRow('gridView1');
        for (let i = 0; i < inInfo.getBlock(0).data.length; i++) {
          inInfo.getBlock(0).data[i]['STOCK_NO'] = model['STOCK_NO'];
          inInfo.getBlock(0).data[i]['STOCK_PLACE_NO'] = model['STOCK_PLACE_NO'];
        }
        */
        console.log(inInfo.getBlock(0).data);

        const outInfo = await erFormHelper.callService('wmsmsm17_adj', inInfo, true, true, true);

        if (outInfo.sys.status >= 0) {
          erFormHelper.messageSuccess();
          // 取消勾选
          erFormHelper.unCheckAllGridRow('gridView2');
          SetEditable('cancel');
          erFormHelper.setGridColumnEditable('gridView2', false, 'LAYERNO', 'STOCK_PLACE_POSITION');
          Query_stockPlace();
          return true;
        } else {
          return false;
        }
      })

    };
    const F6_PRE_DO = async (e: any) => {
      if (erFormHelper.getGridAllRows('gridView2').length <= 0) {
        erFormHelper.messageWarning('库位上没有材料信息，不需要层号调整。');
        return false;
      }
      SetEditable('pre');
      erFormHelper.setGridColumnEditable('gridView2', true, 'LAYERNO', 'STOCK_PLACE_POSITION');
    };
    const F6_CANCEL = async (e: any) => {
      SetEditable('cancel');
      erFormHelper.setGridColumnEditable('gridView2', false, 'LAYERNO', 'STOCK_PLACE_POSITION');
    };

    const valueChanged2 = async (e: any) => {
      console.log('sxfghhjkmkll', e);
      erFormHelper.setControlValue('LayoutGroup2', 'STOCK_NO', e.value);
    }


    return {
      erFormHelper,
      initializeFlag,
      gridToolbar,
      stock_no_disabled,
      stock_place_no_disabled,
      stock_no_dataSource, valueChanged2,
      stock_place_no_dataSource,
      stockNo,
      stockPlaceNo,
      F2_DO,
      F5_DO,
      F5_PRE_DO,
      F5_CANCEL,
      F6_DO,
      F6_PRE_DO,
      F6_CANCEL,

      grid1FocusChanged,
      Query_stock_place_no,
      Query_stockPlaceNo_mat,
      setStockPlaceNo, efFormReady, get_query,
    };
  }
});

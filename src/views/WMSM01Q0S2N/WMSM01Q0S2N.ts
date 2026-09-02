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
import { EI, EIManager, ValueType } from "EIX/ei";
import { ER } from "ERX/Er";
import { SiUtils } from "ERX/SiUtils";
import { FiUtils } from "ERX/FiUtils";
import xrEfForm from "EFX/xrEfForm";
import xrEfPanel from "EFX/xrEfPanel";
import erLayout from "ERX/ErLayout";
import erGrid from "ERX/ErGrid";
import xrEfDialog from "EFX/xrEfDialog";
import WMSM01Q0_GRID1 from '../WMSMADD_GRID1/WMSMADD_GRID1.vue'
import WMSM01Q0_GRID2 from '../WMSMADD_GRID2/WMSMADD_GRID2.vue'

import { useRoute } from "vue-router";
import { Console } from "console";
import ErPopFree from 'ERX/ErPopFree';
import ErPopQuery from 'ERX/ErPopQuery';

export default defineComponent({
  name: '',
  components: {
    xrEfForm,
    xrEfPanel,
    erLayout,
    erGrid, xrEfDialog, WMSM01Q0_GRID1, WMSM01Q0_GRID2, ErPopFree, ErPopQuery,
  },
  setup: () => {
    // 获取画面的分区信息及设置画面初始化service
    const efFormInfo = ref<{ [key: string]: any }>({});

    let formPartition: string;
    const initializeService = 'wm00_form_get';
    interface DynamicObject {
      [key: string]: any;
    }
    let ob: any = reactive({});
    let popFreeEdit: ER.PopFreeHelper;



    // 变量定义
    let formName = 'WMSM01Q0S2N';
    const erFormHelper: ER.FormHelper = new ER.FormHelper();
    const initializeFlag = ref(0);
    let gridview1!: any;
    let kf!: any;
    const layout_name = ref('LayoutGroup7')
    let startDate: any;
    let endDate: any;

    let if_auto_refresh: boolean = true;

    watch(
      layout_name, (oldVal) => {
        console.log('xdfghjkl;', oldVal)
      },
    );

    const efFormReady = (e: any) => {
      startDate = new Date();
      efFormInfo.value = e.formInfo;
      // efFormIsReady.value = true;
      formPartition = efFormInfo.value.formPartition; // 分区


      initializePage();


    };
    const erGrid1Ready = (e: any) => {
      gridview1 = erFormHelper.getGrid('GridView1');

      gridview1.gridOptions.getRowStyle = (params: any) => {


        if (params.data.PONO_SLAB.toString().trim() === '') {
          return {
            fontweight: 'bold',
            background: 'yellow'
          }
        }
        else if (params.data.RCV_MAT_FLAG.toString().trim() === 'S') {
          if (params.data.HOLD_FLAG.toString().trim() === '2') {

            return {

              fontweight: 'bold',
              background: 'pink'
            }

          }
          else if (params.data.HR_SEND_FLAG.toString().trim() !== '1') {
            console.log('ygvbhjkjnnmkl', kf, typeof (kf))
            if (kf.includes(params.data.GUIDE_DEST.toString())) {
              return {

                fontweight: 'bold',
                background: 'red'
              }
            }
          }

        }


      }

      erFormHelper.setGridEditable('GridView1', false);
    }
    const erGridReady = (e: any) => {
      erFormHelper.setGridColumnEditable('GridView3', false, 'CODE_DESC_1_CONTENT');
      erFormHelper.setGridColumnEditable('GridView4', false, 'CODE_DESC_1_CONTENT');
    }
    const getWmsmzd = async (code: string) => {

      let sqlstr = `SELECT * FROM TWMSMZD02  WHERE  CODE_CLASS='WM02' and CODE = '${code}' `;
      const out = await erFormHelper.querySql('', sqlstr);

      //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT)
      return String(out.getBlock(0).data[0]?.CODE_DESC_3_CONTENT);
    };
    const getWmsmzd1 = async () => {

      let sqlstr = `SELECT CODE  FROM TWMSMZD02  WHERE  CODE_CLASS='WM02' and CODE_DESC_3_CONTENT like '%1%' `;
      const out = await erFormHelper.querySql('', sqlstr);

      //console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', sqlstr, out.getBlock(0).data[0]?.CODE)
      let arr: string[] = [];
      out.getBlock(0).data.forEach((element: any) =>
        arr.push(element.CODE)
      );
      console.log('fdrtygfvghujhbnjkolkmdrtgfcvghujhnbnj', arr)
      return arr;
    };
    // 画面相关数据初始化
    const initializePage = async () => {
      const initialResult = await erFormHelper.Initialize(
        formPartition,
        formName,
        '',
        initializeService
      );
      kf = await getWmsmzd1();
      if (initialResult.flag >= 0) {
        // 画面工具类初始化成功后将画面渲染条件设置为1
        initializeFlag.value = 1;

        // 回调函数获取控件信息及设置定义事件等操作
        nextTick(() => {
          nextTick(() => {
            erFormHelper.setAllControlReadOnly(['LayoutGroup1', 'LayoutGroup2', 'LayoutGroup4', 'LayoutGroup5', 'LayoutGroup', 'LayoutGroup7'], true)
            endDate = new Date();
            console.log('fgh', startDate.getSeconds(), startDate.getMilliseconds(), endDate.getSeconds(), endDate.getMilliseconds())
            //erFormHelper.messageSuccess(`时间差：'${(startDate.getSeconds()*1000+ startDate.getMilliseconds())-(endDate.getSeconds()*1000- endDate.getMilliseconds()) }'`); // 这将会输出时间差的毫秒数
          })
          // 获取画面上的主要控件信息
          //erFormHelper.setAllControlEnable(['LayoutGroup1', 'LayoutGroup2', 'LayoutGroup4', 'LayoutGroup5', 'LayoutGroup','LayoutGroup7'], false)


        });

      } else {
        erFormHelper.messageError(
          'ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!'
        );
      }
    };
    const click_row = async (e: any) => {

      erFormHelper.checkGridCurrentRow('GridView1')
      if (e) {
        console.log('dfghjk', e)
        if (e.data) {
          console.log('dfghjk', 2)
          const eiInfo = new EI.EIInfo();
          const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
          eiBlock.pushData(
            {
              SLAB_NO: e.data.get('SLAB_NO')
            },
            true
          );
          const outInfo = await erFormHelper.callService('wmsm01q0_inq1', eiInfo, true, true, true);
          console.log('uygfcvghjkl;', outInfo)
          let c_div = e.data.get('C_DIV');//1-不锈钢；2-碳钢

          if (c_div === '1') {
            layout_name.value = 'LayoutGroup6'
          }
          else if (c_div === '2') {
            layout_name.value = 'LayoutGroup7'
          }
          if (outInfo?.sys.status >= 0) {
            // erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, ...['LayoutGroup1', 'GridView2']);

            erFormHelper.setControlValueEx('LayoutGroup1', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });
            erFormHelper.setControlValueEx('LayoutGroup2', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });
            erFormHelper.setControlValueEx('LayoutGroup5', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });

            for (let prop in ob) {
              if (ob.hasOwnProperty(prop)) {
                delete ob[prop];
              }
            }

            for (let s = 0; s < outInfo.getBlock(1).columns.length; s++) {
              //console.log('fgyuijhnbnklp', String(outInfo.getBlock(1).columns[s].descName), outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]);
              ob[outInfo.getBlock(1).columns[s].descName] = outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]
            }
            //console.log('fgyuijhnbnklp', outInfo.getBlock(1).columns.length, ob);
            //erFormHelper.messageSuccess('操作成功');
            console.log('uygfdx', outInfo.getBlock(2).data[0], layout_name.value)
            erFormHelper.setControlValueEx(layout_name.value, {
              ...outInfo.getBlock(2).data[0]
            });
          }
          //console.log(outInfo);

        }
      }

    }
    onMounted(() => {
      //queryMat();

      //document.addEventListener('mousemove', resetTimer);
    });
    let timer: any;
    function resetTimer() {
      if_auto_refresh = false;
      //console.log('Mouse has moved for 5 seconds');
      clearTimeout(timer);
      timer = setTimeout(() => {
        // Perform action when the mouse hasn't moved for 5 seconds
        //console.log('Mouse hasn\'t moved for 5 seconds');
        setTimeout(queryMat, 60000);
      }, 15000);
    }
    const queryMat = async () => {

      const inInfo = new EI.EIInfo();
      inInfo.blocks.clear;

      inInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroupQuery'));
      console.log('fdrtygfvghujhbnjkolkmdrtgfcvgh1ujhnbnj', inInfo)
      const outInfo = await erFormHelper.callService('wmsm01q0_inq', inInfo, false, true);

      erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'GridView1');
      erFormHelper.autoBestFit('GridView1');

      // if (if_auto_refresh) {
      //   setTimeout(queryMat, 60000);
      // }
    };
    const gridFocusChanged = async (e: any) => {

      if (e) {
        if (e.rowChanged && e.data) {
          const eiInfo = new EI.EIInfo();
          const eiBlock = eiInfo.addBlock(new EI.EiBlock(), 'Table0');
          eiBlock.pushData(
            {
              SLAB_NO: e.data.get('SLAB_NO')
            },
            true
          );
          const outInfo = await erFormHelper.callService('wmsm01q0_inq1', eiInfo, true, true, true);
          console.log('uygfcvghjkl;', outInfo)
          let c_div = e.data.get('C_DIV');//1-不锈钢；2-碳钢

          if (c_div === '1') {
            layout_name.value = 'LayoutGroup6'
          }
          else if (c_div === '2') {
            layout_name.value = 'LayoutGroup7'
          }
          if (outInfo?.sys.status >= 0) {
            // erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, ...['LayoutGroup1', 'GridView2']);

            erFormHelper.setControlValueEx('LayoutGroup1', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });
            erFormHelper.setControlValueEx('LayoutGroup2', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });
            erFormHelper.setControlValueEx('LayoutGroup5', {
              ...outInfo.getBlock('TMMSM01').data[0]
            });

            for (let prop in ob) {
              if (ob.hasOwnProperty(prop)) {
                delete ob[prop];
              }
            }

            for (let s = 0; s < outInfo.getBlock(1).columns.length; s++) {
              //console.log('fgyuijhnbnklp', String(outInfo.getBlock(1).columns[s].descName), outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]);
              ob[outInfo.getBlock(1).columns[s].descName] = outInfo.getBlock("Table1").data[0][String(outInfo.getBlock(1).columns[s].descName)]
            }
            //console.log('fgyuijhnbnklp', outInfo.getBlock(1).columns.length, ob);
            //erFormHelper.messageSuccess('操作成功');
            console.log('uygfdx', outInfo.getBlock(2).data[0], layout_name.value)
            erFormHelper.setControlValueEx(layout_name.value, {
              ...outInfo.getBlock(2).data[0]
            });
          }
          //console.log(outInfo);

        }
      }
    };
    const F2_DO = async (e: any) => {
      queryMat();
    };
    const F3_DO = async (e: any) => {

      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请至少选择一个材料!');
      }
      else {

        const eiInfo = new EI.EIInfo();
        eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView1'))
        eiInfo.addBlock(erFormHelper.buildEiBlock([{
          FLAG: 'S',
        }]), 'Table2')

        for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('GridView1').data.length; i++) {
          let kefa = await getWmsmzd(String(erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.GUIDE_DEST?.toString()));
          console.log('ghujhjk', kefa.indexOf('1'))
          if (
            kefa.indexOf('1') < 0
          ) {
            //人工匹配--选的材料预定板坯号需要全为空
            erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}的去向不为2250，不可发送电文。`);
            return false;
          }


        }
        console.log('fghyuio', eiInfo)
        const outInfo = await erFormHelper.callService(
          'wmsm01q0_snd',
          eiInfo,
          true,
          false,
          true
        );
        if (outInfo.sys.status < 0) {
          erFormHelper.messageError("错误:" + outInfo.sys.msg);
        } else {
          erFormHelper.messageSuccess('操作成功')
          queryMat();
        }
      }
    };
    const F3_PRE_DO = async (e: any) => { };
    const F3_CANCEL = async (e: any) => { };
    const F4_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请至少选择一个材料!');
      }
      else {

        const eiInfo = new EI.EIInfo();
        eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView1'))
        eiInfo.addBlock(erFormHelper.buildEiBlock([{
          FLAG: 'L',
        }]), 'Table2')

        for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('GridView1').data.length; i++) {
          // let kefa = await getWmsmzd(String(erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.GUIDE_DEST?.toString()));
          // if (
          //   kefa.indexOf('1') < 0
          // ) {
          //   //人工匹配--选的材料预定板坯号需要全为空
          //   // erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}的去向不为2250，不可发送电文。`);
          //   // return false;
          // }


        }
        console.log('fghyuio', eiInfo)
        const outInfo = await erFormHelper.callService(
          'wmsm01q0_snd',
          eiInfo,
          true,
          false,
          true
        );
        if (outInfo.sys.status < 0) {
          erFormHelper.messageError("错误:" + outInfo.sys.msg);
        } else {
          erFormHelper.messageSuccess('操作成功')
          queryMat();
        }
      }
    };
    const F4_PRE_DO = async (e: any) => { };
    const F4_CANCEL = async (e: any) => { };
    const dialogVisible = ref<boolean>(false);
    const dialogVisible1 = ref<boolean>(false);
    const dialogFormName = ref(''); // 弹出画面的画面名
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
        queryMat();
        setStartTimer();
      }, 500)

    };
    const F5_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请至少选择一个材料!');
      }
      else {


        for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('GridView1').data.length; i++) {
          // if (
          //   erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.PREC_SLAB_NO?.toString().trim() !== ''
          // ) {
          //   //人工匹配--选的材料预定板坯号需要全为空
          //   erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}的预定板坯号不为空，不可进行人工匹配操作。请检查或刷新尝试。`);
          //   return false;
          // }
          if (
            erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.RCV_MAT_FLAG?.toString().trim() === 'S'
          ) {
            //人工匹配--选的材料预定板坯号需要全为空
            erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}已收货，不可进行人工匹配操作。`);
            return false;
          }
          if (i > 0
            && erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.PONO?.toString() !== erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i - 1]?.PONO?.toString()) {
            erFormHelper.messageWarning(`选中材料不属于同一个制造命令。请检查或重新选择。`);
            return false;
          }
          if (i > 0
            && erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.MAT_DESTION?.toString() !== erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i - 1]?.MAT_DESTION?.toString()) {
            erFormHelper.messageWarning(`选中材料不属于同一个计划去向。请检查或重新选择。`);
            return false;
          }

        }
        const data = {
          LayoutName: 'GridView1',
          GridName: 'GridView2',
          callService: 'wmsm01q0_gua',
          mainData: erFormHelper.getGridCheckedRowsAsBlock('GridView1'),
          PONO: erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[0]?.PONO?.toString(),
          MAT_DESTION: erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[0]?.MAT_DESTION?.toString()
        };
        dialogFormName.value = 'WMSM01Q0_GUAS2N'; // 读配置表获取画面名
        parentInfo.value = data;

        dialogVisible1.value = true;
        clearInterval(timeId);;
      }
    };
    const F5_PRE_DO = async (e: any) => {


    };
    const F5_CANCEL = async (e: any) => { };
    const F6_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请至少选择一个材料!');
      } else {

        let mat_arr: string[] = [];

        for (let i = 0; i < erFormHelper.getGridCheckedRowsAsBlock('GridView1').data.length; i++) {
          if (
            erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.LSLAB_NO?.toString().trim() === ''
          ) {
            //取消匹配--选的材料预定板坯号需要全有值
            erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}的预定板坯号为空，不可进行取消匹配操作。请检查或刷新尝试。`);
            return false;
          }
          if (
            erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.RCV_MAT_FLAG?.toString().trim() === 'S'
          ) {
            //人工匹配--选的材料预定板坯号需要全为空
            erFormHelper.messageWarning(`选中材料${erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()}已收货，不可进行人工匹配操作。`);
            return false;
          }
          mat_arr.push(String(erFormHelper.getGridCheckedRowsAsBlock('GridView1').data[i]?.SLAB_NO?.toString()));
        }
        const data = {
          LayoutName: 'GridView1',
          callService: 'wmsm01q0_tuo',
          mainData: erFormHelper.getGridSelectRowsAsBlock('GridView1')
        };
        dialogFormName.value = 'WMSM01Q0_TUOS2N'; // 读配置表获取画面名
        parentInfo.value = data;

        dialogVisible.value = true;
        clearInterval(timeId);;
      }
    };
    const F6_PRE_DO = async (e: any) => {

    };
    const F6_CANCEL = async (e: any) => { };
    const F7_DO = async (e: any) => {
      if (erFormHelper.getGridCheckedRows('GridView1').length === 0) {
        erFormHelper.messageWarning('请至少选择一个材料!');
      } else {
        console.log('gfcvbhjkl', erFormHelper.getGridCheckedRows('GridView1')[0]?.GUIDE_DEST)
        popFreeEdit = new ER.PopFreeHelper(formPartition, 'WMSM01Q0S2N', 'Layout_guide');
        popFreeEdit.ReceiveData({ GUIDE_DEST: erFormHelper.getGridCheckedRows('GridView1')[0]?.GUIDE_DEST.toString(), STOCK_L2: erFormHelper.getGridCheckedRows('GridView1')[0]?.STOCK_L2.toString() })
        ER.PopUtils.showErPopFree(ErPopFree, popFreeEdit, popFreeEditOkClick);

      }
    }
    //弹窗配置
    const popFreeEditOkClick = async (e: any) => {
      const inInfo = new EI.EIInfo();


      inInfo.addBlock(
        erFormHelper.getGridCheckedRowsAsBlock('GridView1')
      );
      inInfo.addBlock(
        erFormHelper.buildEiBlock([{ GUIDE_DEST: e.dataModel['GUIDE_DEST'], STOCK_L2: e.dataModel['STOCK_L2'] }])
        , 'Table2');
      console.log('fgyuhbnkl;', inInfo)
      const outInfo = await erFormHelper.callService(
        'wmsm01q0_qxupd',
        inInfo,
        true,
        false,
        true
      );
      if (outInfo.sys.status < 0) {
        erFormHelper.messageError("错误:" + outInfo.sys.msg);
      } else {
        erFormHelper.messageSuccess('操作成功')
        queryMat();
      }

    };
    const zdkd_query = async () => {
      const eiInfo = new EI.EIInfo();

      const outInfo = await erFormHelper.callService('wmsmzdkd_inq', eiInfo, true, true, true);
      if (outInfo?.sys.status >= 0) {
        erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, 'GridView3')
        erFormHelper.messageSuccess('操作成功');
      }
    }
    const zdqx_query = async () => {
      const eiInfo = new EI.EIInfo();

      const outInfo = await erFormHelper.callService('wmsmzdqx_inq', eiInfo, true, true, true);
      if (outInfo?.sys.status >= 0) {
        erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, 'GridView4')
        erFormHelper.messageSuccess('操作成功');
      }
    }
    const zdkd_upd = async () => {
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView3'));
      if (eiInfo.getBlock(0).data.length > 0) {
        const outInfo = await erFormHelper.callService('wmsmzdkd_upd', eiInfo, true, true, true);
        if (outInfo?.sys.status >= 0) {
          erFormHelper.unCheckAllGridRow('GridView3');
          erFormHelper.messageSuccess('操作成功');
          zdkd_query();
          return true;
        }
        else {
          // erFormHelper.messageError('操作失败');
          // return false;
        }
      }

    }
    const zdqx_upd = async () => {
      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getGridCheckedRowsAsBlock('GridView4'));
      if (eiInfo.getBlock(0).data.length > 0) {
        const outInfo = await erFormHelper.callService('wmsmzdqx_upd', eiInfo, true, true, true);
        if (outInfo?.sys.status >= 0) {
          erFormHelper.unCheckAllGridRow('GridView4');
          erFormHelper.messageSuccess('操作成功');
          zdqx_query();
          return true;
        }
        else {
          // erFormHelper.messageError('操作失败');
          // return false;
        }
      }

    }
    const F8_DO = async () => {
      const eiInfo = new EI.EIInfo();

      const outInfo = await erFormHelper.callService('test_0rt801', eiInfo, true, true, true);
      if (outInfo?.sys.status >= 0) {
        erFormHelper.mergeDataToGrid(outInfo.getBlock(0).data, 'GridView4')
        erFormHelper.messageSuccess('操作成功');
      }

    }
    const valueChanged = async () => {

      const eiInfo = new EI.EIInfo();
      eiInfo.addBlock(erFormHelper.getAllControlValueAsEiBlock('LayoutGroup8'))
      eiInfo.addBlock(erFormHelper.buildEiBlock([{ HEAT_NO: erFormHelper.getControlValue('LayoutGroup1', 'HEAT_NO') }]), 'Table2')
      console.log('dfghjkl;', eiInfo)
      const outInfo = await erFormHelper.callService('wmsm01q0_cal', eiInfo, true, true, true);
      console.log('dfghjkl;', outInfo)
      if (outInfo?.sys.status >= 0) {
        erFormHelper.setControlValueEx('LayoutGroup8', {
          ...outInfo.getBlock(0).data[0]
        });

      }
    }
    let timeId: any;
    const setStartTimer = () => {
      console.log('定时器触发');
      timeId = setInterval(queryMat, 60000);
      //clearInterval(timeId);
      //erFormHelper.setControlValueEx('layoutControlGroup1', outInfo.getBlock(0).data[0]);
    };
    const valueChanged_Q = async (e: any) => {
      console.log('dfCCghjkl;', e);
      if (e.itemCode === 'AUTO_FRESH') {
        console.log('事件进来了', erFormHelper.getControlValue('LayoutGroupQuery', 'AUTO_FRESH'));
        if (erFormHelper.getControlValue('LayoutGroupQuery', 'AUTO_FRESH')) {
          setStartTimer();
        } else {
          clearInterval(timeId);
          console.log('事件进来了', erFormHelper.getControlValue('layoutControlGroup1', 'PEOPLE_DIV'));
        }
        /*  if (!erFormHelper.getControlValue('layoutControlGroup1', 'PEOPLE_DIV')) {
          clearInterval(timeId);
        } */
      }
    }


    return {
      ob,
      erFormHelper,
      initializeFlag,
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
      F6_CANCEL, F7_DO, F8_DO,
      gridFocusChanged, efFormReady, dialogVisible, dialogVisible1, dialogFormName, parentInfo, closeXrEfDialog, getChildInfo, zdkd_query, erGridReady, zdqx_query, zdkd_upd, zdqx_upd, layout_name, erGrid1Ready, click_row, valueChanged, valueChanged_Q
    };
  }
});

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
import { Console } from "console";

export default defineComponent({
    name: '',
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
        let formName = 'WMSM01';
        const erFormHelper: ER.FormHelper = reactive(new ER.FormHelper()) as any;
        const initializeFlag = ref(0);



        const gridToolbar: Ref<any[]> = ref([]);
        const gridToolbar1: Ref<any[]> = ref([]);
        let stock_no: string;

        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            // efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition; // 分区
            formName = 'WMSM01'; // 当前画面名

            initializePage();
        };

        // 指定要搜索的目录



        // 画面相关数据初始化
        const initializePage = async () => {

            const initialResult = await erFormHelper.Initialize(formPartition, formName, '', initializeService);

            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;

                // 回调函数获取控件信息及设置定义事件等操作
                nextTick(() => {
                    // 获取画面上的主要控件信息
                });
            } else {
                erFormHelper.messageError('ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!');
            }
        };

        onMounted(() => {

        });
        const F2_DO = async (e: any) => {
            stock_no = erFormHelper.getControlValue('LayoutGroup1', 'STOCK_NO');

            if (stock_no === '' || stock_no === null) {
                erFormHelper.messageWarning('请输入库区号');
                return false;
            }
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(
                erFormHelper.buildEiBlock([{ STOCK_NO: stock_no }])
            );
            const outInfo = await erFormHelper.callService('wmsm01s2n_inq', inInfo, false, true, true);
            if (outInfo.sys.status >= 0) {
                erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'GridView2');
                return true;
            } else {
                return false;
            }
        }


        const F4_DO = async (e: any) => {
            const diff = [];
            const gridview1_block = erFormHelper.getGridCheckedRowsAsBlock('GridView1', {}, true);
            const gridview2_block = erFormHelper.getGridCheckedRowsAsBlock('GridView2', {}, true);
            console.log(gridview1_block);
            console.log(gridview2_block);

            if (gridview1_block.data.length === 0) {
                erFormHelper.messageWarning('实物库存没有勾选的信息');
                return false;
            }
            if (gridview2_block.data.length === 0) {
                erFormHelper.messageWarning('信息库存没有勾选的信息');
                return false;
            }
            // const MAT_NO1 = gridview1_block.data.map(obj => obj?.MAT_NO);
            // const MAT_NO2 = gridview2_block.data.map(obj => obj?.MAT_NO);
            // console.log(MAT_NO1, MAT_NO2);
            const inInfo = new EI.EIInfo();
            inInfo.addBlock(
                gridview1_block, 'Table0'
            );
            inInfo.addBlock(
                gridview2_block, 'Table1'
            );
            console.log('inInfo', inInfo);
            const outInfo = await erFormHelper.callService('wmsm01s2n_contrast', inInfo, true, true, true);
            console.log('outInfo', outInfo);
            if (outInfo.sys.status >= 0) {
                erFormHelper.mergeDataToLayoutOrGrid(outInfo, true, 'GridView31');
                return true;
            } else {
                return false;
            }
            // mergeArrays(gridview1_block.data, gridview2_block.data);
        }

        function mergeArrays(arr1: Object[], arr2: Object[]) {
            let merged: Object[] = [];
            console.log('merged', merged);
            arr1.forEach((obj) => {
                const objWithSource = obj;
                //objWithSource.shuxing = "array1";
                merged.push(objWithSource);
                console.log('objWithSource', objWithSource);
                console.log('merged', merged);
            });
            console.log('merged', merged);
            // arr2.forEach((obj) => {
            //     let objWithSource = { ...obj };
            //     let found = false;

            //     merged.forEach((mergedObj) => {
            //         if (obj?.MAT_NO === mergedObj?.MAT_NO) {
            //             if (isEqual(obj, mergedObj)) {
            //                 mergedObj.source = "both";
            //             } else {
            //                 objWithSource.source = "array2";
            //                 merged.push(objWithSource);
            //             }
            //             found = true;
            //         }
            //     });

            //     if (!found) {
            //         objWithSource.source = "array2";
            //         merged.push(objWithSource);
            //     }
            // });

            // return merged;
        }

        // function isEqual(obj1, obj2) {
        //     // 判断两个对象的其他属性值是否相同
        //     // 这里可以根据你的具体需求来实现比较逻辑
        //     return obj1.otherProperty === obj2.otherProperty;
        // }

        return {
            erFormHelper,
            initializeFlag, F2_DO, F4_DO, gridToolbar, gridToolbar1, efFormReady
        };
    }
});
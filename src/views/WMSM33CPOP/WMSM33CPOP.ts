import { defineComponent, onMounted, ref, reactive, computed, nextTick, toRaw, Ref } from 'vue';
import { EI, EIManager } from 'EIX/ei';
import xrEfForm from 'EFX/xrEfForm';
import xrEfPanel from 'EFX/xrEfPanel';
import xrEfSearchBox from 'EFX/xrEfSearchBox';
import xrEfDialog from 'EFX/xrEfDialog';
import EFUtility from 'EFX/EFUtility';

import erLayout from 'ERX/ErLayout';
import erGrid from 'ERX/ErGrid';
import { ER } from 'ERX/Er';


export default defineComponent({
    name: 'WMSM33CPOP',
    components: { xrEfForm, xrEfPanel, erLayout, erGrid },
    props: {
        openInDialog: {
            type: Boolean,
            default: false
        },
        dialogFormName: {
            type: String,
            default: ''
        },
        parentInfo: {
            type: EI.EIInfo, default: reactive(new EI.EIInfo())
        }
    },
    // 向父画面传递数据-注册emit监听事件
    emits: ['getChildInfo'],
    setup: (props, { emit }) => {
        // 变量定义
        let formParams: any = '';
        let formPartition: any = '';

        const initializeService = '';
        let formName = ''; // 当前画面名
        let now = new Date();
        const erFormHelper: ER.FormHelper = new ER.FormHelper();
        const efFormInfo = ref<{ [key: string]: any }>({});
        const efFormIsReady = ref(false);
        const initializeFlag = ref(0);



        const efFormReady = (e: any) => {
            efFormInfo.value = e.formInfo;
            efFormIsReady.value = true;
            formPartition = efFormInfo.value.formPartition;
            formName = efFormInfo.value.formName; // 当前画面名
            // 初始化低代码工具类
            initializePage();

        };

        const parentInfo = ref(props.parentInfo); // 获取父画面传入参数


        // 画面相关数据初始化
        const initializePage = async () => {
            const initialResult = await erFormHelper.Initialize(formPartition, formName, '', initializeService);
            if (initialResult.flag >= 0) {
                // 画面工具类初始化成功后将画面渲染条件设置为1
                initializeFlag.value = 1;
                console.log('iuytgfdsdfgh', props.parentInfo)
                nextTick(() => {

                    setTimeout(() => {
                        erFormHelper.mergeDataToLayoutOrGrid(props.parentInfo, true, 'GridView1')
                    }, 500)
                });

            } else {
                erFormHelper.messageError('ErFormHelper initialize faild, error msg is [' + initialResult.msg + ']!');
            }
        };
        const cellValueChanged = async (e: any) => {
            console.log(e)
            if ((e.colDef.field === 'MAT_THICK'
                || e.colDef.field === 'MAT_WIDTH'
                || e.colDef.field === 'MAT_LEN'
                || e.colDef.field === 'ST_NO') && (e.data.ST_NO != ' ')
            ) {
                const eiInfo = new EI.EIInfo();
                eiInfo.addBlock(erFormHelper.buildEiBlock([{ MAT_THICK: e.data.MAT_THICK, MAT_WIDTH: e.data.MAT_WIDTH, MAT_LEN: e.data.MAT_LEN, ST_NO: e.data.ST_NO }]))
                const outInfo = await erFormHelper.callService('wmsm33c_inq2', eiInfo, true, false, true);
                erFormHelper.setGridRowData('GridView1', e.data.uid, { MAT_WT: outInfo.getBlock(0).data[0].MAT_WT })
            }

        };
        const erGrid1Ready = () => {


        };

        onMounted(() => {

        });



        const F2_DO = async (e: any) => {
            const eiInfo = new EI.EIInfo();

            eiInfo.addBlock(erFormHelper.getGridAllRowsAsBlock('GridView1'))

            const outInfo = await erFormHelper.callService('wmsm33c_f2', eiInfo, true, false, true);

            if (outInfo.sys.status < 0) {
                erFormHelper.messageError('处理错误:' + outInfo.sys.msg);
                return false;
            } else {
                erFormHelper.messageSuccess('处理成功');

                closeEfDialog();
                return true;
            }
        };
        // 点击关闭按钮，绑定事件closeEfDialog
        // 向父画面传递数据-触发emit方法向父传递数据，并在emits中注册事件名
        const closeEfDialog = () => {

            const data = {
                // name: formName,
                close: true
            };
            emit('getChildInfo', data);
        };



        return {
            erGrid1Ready,
            efFormReady,
            erFormHelper,
            initializeFlag,
            F2_DO,
            cellValueChanged,
            closeEfDialog,

        };
    }
});

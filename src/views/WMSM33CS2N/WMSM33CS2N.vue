<template>
    <xr-ef-form @ready="efFormReady" :f1-do="F1_DO" :f2-do="F2_DO" :f2-pre-do="F2_PRE_DO" :f2-cancel="F2_CANCEL"
        :f3-do="F3_DO" :f3-pre-do="F3_PRE_DO" :f3-cancel="F3_CANCEL" :f4-do="F4_DO" :f4-pre-do="F4_PRE_DO"
        :f4-cancel="F4_CANCEL" :f5-do="F5_DO" :f5-pre-do="F5_PRE_DO" :f5-cancel="F5_CANCEL" :f6-do="F6_DO"
        :f6-pre-do="F6_PRE_DO" :f6-cancel="F6_CANCEL" :f7-do="F7_DO" :f7-pre-do="F7_PRE_DO" :f7-cancel="F7_CANCEL"
        :f8-do="F8_DO" :f8-pre-do="F8_PRE_DO" :f8-cancel="F8_CANCEL" :f9-do="F9_DO" :f9-pre-do="F9_PRE_DO"
        :f9-cancel="F9_CANCEL" :f10-do="F10_DO" :f10-pre-do="F10_PRE_DO" :f10-cancel="F10_CANCEL"
        :f11-do="F11_DO" :f11-pre-do="F11_PRE_DO" :f11-cancel="F11_CANCEL">
        <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'Layout1'"></er-layout>
        <v-splitter style="height: 100%" class="default-theme">

            <v-splitter-pane size="40">

                <xr-ef-panel title="炉次信息" padding="5px" style="height: 50%;">
                    <template #customButtonSlot> </template>
                    <template #contentSlot>
                        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                            :config-id="'GridView1'" :toolbar-style="'both'" @focus-changed="GridView1FocusChanged">
                        </er-grid>
                    </template>
                </xr-ef-panel>
                <xr-ef-panel title="材料信息" padding="5px" style="height: 50%;">
                    <template #customButtonSlot> </template>
                    <template #contentSlot>
                        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                            :config-id="'GridView2'" :toolbar-style="'both'">
                        </er-grid>
                    </template>
                </xr-ef-panel>

            </v-splitter-pane>
            <v-splitter-pane size="60">
                <xr-ef-panel title="成分信息" padding="5px" style="height: 50%;">
                    <template #customButtonSlot> </template>
                    <template #contentSlot>
                        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                            :config-id="'GridView3'" :toolbar-style="'both'">
                        </er-grid>
                    </template>
                </xr-ef-panel>

                <div style="display: flex;flex-direction: row;height: 50%;">
                    <xr-ef-panel title="工艺路线" padding="5px">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                :config-id="'GridView4'" :toolbar-style="'both'">
                            </er-grid>
                        </template>
                    </xr-ef-panel> <xr-ef-panel title="投料列表" padding="5px">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                :config-id="'GridView5'" :toolbar-style="'both'">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </div>

            </v-splitter-pane>

        </v-splitter>
    </xr-ef-form>
    <xr-ef-dialog ref="xrEfDialogRef" :title="dialogFormName" height="80%" width="95%"
        @click-close-icon="xrEfDialogClose" v-model:visible="dialogVisible">
        <WMSM33CPOP :openInDialog="true" :dialogFormName="dialogFormName" :parentInfo="parentInfo"
            @getChildInfo="getChildInfo">
        </WMSM33CPOP>
    </xr-ef-dialog>
</template>

<script lang="ts" src="./WMSM33CS2N.ts"></script>

<style lang="scss" scoped></style>

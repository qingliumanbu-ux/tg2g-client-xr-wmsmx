<template>
    <div style="height: 100%">
        <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" >
            <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                :config-id="'LayoutGroupFilter'"></er-layout>
            <div style="display: flex; flex-direction: row; height: 100%">
                <div style="height: 100%; width: 50%">
                    <xr-ef-panel title="代办列表" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                :config-id="'GridView1'" :toolbar-options="gridToolbar" :toolbar-style="'both'"
                                style="height: 100%" @erGridReady="erGrid1Ready" >
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </div>
                <div style="height: 100%; width: 50%">
                    <xr-ef-panel title="错误列表" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                :config-id="'GridView2'" :toolbar-options="gridToolbar" :toolbar-style="'both'"
                                style="height: 100%" @erGridReady="erGrid2Ready">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </div>
            </div>
        </xr-ef-form>
    </div>
</template>

<script lang="ts" src="./WMSMDBSX"></script>

<style lang="scss"></style>

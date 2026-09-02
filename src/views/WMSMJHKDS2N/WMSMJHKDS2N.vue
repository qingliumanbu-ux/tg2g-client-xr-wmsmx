<template>
    <div style="height: 100%">
        <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f3-pre-do="F3_PRE_DO" :f3-cancel="F3_CANCEL">

            <div style="display: flex; flex-direction: row; height: 100%">
                <div style="height: 100%; width: 100%">
                    <xr-ef-panel title="列表" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                :config-id="'GridView1'" :toolbar-options="gridToolbar" :toolbar-style="'both'"
                                style="height: 100%" @erGridReady="erGrid1Ready">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </div>

            </div>
        </xr-ef-form>
    </div>
</template>

<script lang="ts" src="./WMSMJHKDS2N"></script>

<style lang="scss"></style>

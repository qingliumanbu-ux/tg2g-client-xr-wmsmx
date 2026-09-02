<template>
    <xr-ef-form @ready="efFormReady" :f1-do="F1_DO" :f2-do="F2_DO" :f3-do="F3_DO" :f4-do="F4_DO">

        <v-splitter style="height: 100%" class="default-theme">
            <v-splitter-pane size="50">
                <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                    :config-id="'Layout1'"></er-layout>
                <xr-ef-panel title="详细信息" padding="5px" style="height: 80%;">
                    <template #customButtonSlot> </template>
                    <template #contentSlot>
                        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                            :config-id="'GridView1'" :toolbar-style="'both'">
                        </er-grid>
                    </template>
                </xr-ef-panel>
                <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                    :config-id="'Layout3'"></er-layout>
            </v-splitter-pane>
            <v-splitter-pane size="50">
                <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                    :config-id="'Layout2'"></er-layout>
                <xr-ef-panel title="详细信息" padding="5px" style="height: 80%;">
                    <template #customButtonSlot> </template>
                    <template #contentSlot>
                        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                            :config-id="'GridView2'" :toolbar-style="'both'">
                        </er-grid>
                    </template>
                </xr-ef-panel>

            </v-splitter-pane>
        </v-splitter>
    </xr-ef-form>
</template>

<script lang="ts" src="./WMSM301"></script>

<style lang="scss" scoped>
@import "./WMSM301.scss";
</style>

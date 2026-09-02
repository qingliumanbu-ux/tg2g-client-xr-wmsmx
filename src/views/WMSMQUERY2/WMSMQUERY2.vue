<template>
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO">
        <template v-if="initializeFlag === 1"> <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${layout}`"></er-layout>
            <v-splitter  style="height: 100%" class="default-theme">
                <v-splitter-pane size="40">
                    <xr-ef-panel :title="`${mainviewName}`" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview}`"
                                :toolbar-style="'both'" @focus-changed="GridView1FocusChanged">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </v-splitter-pane>
                <v-splitter-pane size="60">
                    <xr-ef-panel :title="`${subviewName}`" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview1}`"
                                :toolbar-style="'both'">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </v-splitter-pane>
            </v-splitter></template>
       
    </xr-ef-form>
</template>

<script lang="ts" src="./WMSMQUERY2.ts"></script>

<style lang="scss">
@import "./WMSMQUERY2.scss";
</style>

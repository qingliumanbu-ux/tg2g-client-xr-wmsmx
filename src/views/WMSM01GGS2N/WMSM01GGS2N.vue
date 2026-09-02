<template>
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
        <template v-if="initializeFlag === 1">
            <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" config-id="LayoutGroupQuery">
            </er-layout>
            <v-splitter style="height: 100%" class="default-theme">
                <v-splitter-pane size="20">
                    <xr-ef-panel title="板坯列表" padding="5px" style="height: 100%">
                        <template #customButtonSlot> </template>
                        <template #contentSlot>
                            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                config-id="GridView1" :toolbar-style="'both'" @focus-changed="GridView1FocusChanged"
                                @erGridReady="erGrid1Ready">
                            </er-grid>
                        </template>
                    </xr-ef-panel>
                </v-splitter-pane>
                <v-splitter-pane size="80">
                    <v-splitter horizontal style="height: 100%" class="default-theme">
                        <v-splitter-pane size="40" style="display:flex;flex-direction: row;">

                            <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                config-id="LayoutGroup1">
                            </er-layout>
                            <div>
                                <div
                                    style="height: 50px;  border: 1px solid black;display: flex; justify-content:center;align-items: center; font-size: large;">
                                    {{ show_msg }}</div>
                                <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                    config-id="LayoutGroup2">
                                </er-layout>
                            </div>

                        </v-splitter-pane>
                        <v-splitter-pane size="30">
                            <xr-ef-panel title="炉次内规格" padding="5px" style="height: 100%">
                                <template #customButtonSlot> </template>
                                <template #contentSlot>
                                    <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                        config-id="GridView2" @erGridReady="erGrid2Ready" :toolbar-style="'both'">
                                    </er-grid>
                                </template>
                            </xr-ef-panel>
                        </v-splitter-pane>
                        <v-splitter-pane size="30">
                            <xr-ef-panel title="浇次内规格" padding="5px" style="height: 100%">
                                <template #customButtonSlot> </template>
                                <template #contentSlot>
                                    <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                                        config-id="GridView3" @erGridReady="erGrid3Ready" :toolbar-style="'both'">
                                    </er-grid>
                                </template>
                            </xr-ef-panel>
                        </v-splitter-pane>
                    </v-splitter>

                </v-splitter-pane>
            </v-splitter>
        </template>

    </xr-ef-form>
</template>

<script lang="ts" src="./WMSM01GGS2N"></script>

<style lang="scss">
@import "./WMSM01GGS2N.scss";
</style>

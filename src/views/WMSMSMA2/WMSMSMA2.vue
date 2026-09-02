<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f4-do="F4_DO" :f4-pre-do="F4_PRE_DO" :f4-cancel="F4_CANCEL"
      :f5-do="F5_DO" :f5-pre-do="F5_PRE_DO" :f5-cancel="F5_CANCEL" :f6-do="F6_DO" :f6-pre-do="F6_PRE_DO"
      :f6-cancel="F6_CANCEL" :f7-do="F7_DO" :f7-pre-do="F7_PRE_DO" :f7-cancel="F7_CANCEL">
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup2'"></er-layout>
      <xr-ef-panel title="库存查询" padding="5px">
        <template #customButtonSlot> </template>
        <template #contentSlot>
          <v-splitter horizontal style="height: 100%" class="default-theme">
            <v-splitter-pane size="50">
              <v-splitter style="height: 100%" class="default-theme">
                <v-splitter-pane size="70">
                  <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'gridView3'"
                    :toolbar-options="gridToolbar" :toolbar-style="'both'" @focus-changed="gridView3FocusChanged"
                    @erGridReady="erGrid3Ready">
                  </er-grid></v-splitter-pane>
                <v-splitter-pane size="30">
                  <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView2'"
                    :toolbar-options="gridToolbar" :toolbar-style="'both'" @focus-changed="gridView3FocusChanged"
                    @erGridReady="erGrid2Ready">
                  </er-grid></v-splitter-pane></v-splitter>
            </v-splitter-pane>
            <v-splitter-pane size="50">
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'gridView1'"
                :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGrid1Ready">
              </er-grid>
            </v-splitter-pane>
          </v-splitter>
        </template>
      </xr-ef-panel>
     
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSMA2.ts"></script>

<style lang="scss">
@import "./WMSMSMA2.scss";
</style>

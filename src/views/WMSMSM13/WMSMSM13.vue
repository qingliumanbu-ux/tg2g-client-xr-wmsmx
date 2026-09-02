<template>
  <div style="height: 100%">
    <xr-ef-form
      @ready="efFormReady"
      :f2-do="F2_DO"
      :f4-do="F4_DO"
      :f4-pre-do="F4_PRE_DO"
      :f4-cancel="F4_CANCEL"
      :f5-do="F5_DO"
      :f5-pre-do="F5_PRE_DO"
      :f5-cancel="F5_CANCEL"
      :f6-do="F6_DO"
      :f6-pre-do="F6_PRE_DO"
      :f6-cancel="F6_CANCEL"
      :f10-do="F10_DO"
      :f10-pre-do="F10_PRE_DO"
      :f10-cancel="F10_CANCEL"
    >
      <er-layout
        v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup2'"
      ></er-layout>
      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="66" >
          <v-splitter horizontal style="height: 100%" class="default-theme">
            <v-splitter-pane size="50">
              <xr-ef-panel title="出库炉号" padding="0px" style="height: 100%;">
                <template #customButtonSlot> </template>
                <template #contentSlot>
                  <er-grid
                    v-if="initializeFlag === 1"
                    :er-form-helper-prop="erFormHelper"
                    :config-id="'gridView1'"
                    :toolbar-options="gridToolbar"
                    :toolbar-style="'both'"
                    @focus-changed="gridView1FocusChanged"
                  >
                  </er-grid>
                </template>
              </xr-ef-panel>
            </v-splitter-pane>
            <v-splitter-pane>
              <xr-ef-panel title="出库材料" padding="0px" style="height: 100%;">
                <template #customButtonSlot> </template>
                <template #contentSlot>
                  <er-grid
                    v-if="initializeFlag === 1"
                    :er-form-helper-prop="erFormHelper"
                    :config-id="'gridView2'"
                    :toolbar-options="gridToolbar"
                    :toolbar-style="'both'"
                  >
                  </er-grid>
                </template>
              </xr-ef-panel>
            </v-splitter-pane>
          </v-splitter>
        </v-splitter-pane>
        <v-splitter-pane style="height: 100%;">
          <er-layout
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'LayoutGroup3'"
              style="margin: -5px 0px 0 -5px"
              :config-caption="'库位查询'"
              @click="get_query"
            ></er-layout>

            <er-grid
              v-if="initializeFlag === 1"
              style="flex: 1; margin: 5;height: 100%;"
              :er-form-helper-prop="erFormHelper"
              :config-id="'gridView3'"
              :toolbar-style="'both'"
              @dblclick="setStockPlaceNo"
              
            >
            </er-grid>
        </v-splitter-pane>
      </v-splitter>

   
      
          <er-layout
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'LayoutGroup2'"
              :config-caption="'输入项'"
              style="margin: -5px -5px 0 -5px"
             
            ></er-layout>
        
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSM13.ts"></script>

<style lang="scss">
@import "./WMSMSM13.scss";
</style>

<template>
  <div style="height: 100%">
    <xr-ef-form
      @ready="efFormReady"
      :f2-do="F2_DO"
      :f5-do="F5_DO"
      :f5-pre-do="F5_PRE_DO"
      :f5-cancel="F5_CANCEL"
      :f6-do="F6_DO"
      :f6-pre-do="F6_PRE_DO"
      :f6-cancel="F6_CANCEL"
      
    >
      <er-layout
        v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup2'"
        @value-changed="valueChanged2"
      ></er-layout>
      <div style="display: flex; flex-direction: row; height: 100%">
        <div style="width: 33%">
          <xr-ef-panel title="库位信息" padding="5px" style="height: 100%">
            <template #customButtonSlot></template>
            <template #contentSlot>
              <er-grid
                v-if="initializeFlag === 1"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView1'"
                :toolbar-options="gridToolbar"
                :toolbar-style="'both'"
                @focus-changed="grid1FocusChanged"
              
              ></er-grid>
            </template>
          </xr-ef-panel>
        </div>
        <div style="width: 33%">
          <xr-ef-panel title="库位材料信息" padding="5px" style="height: 100%">
            <template #customButtonSlot></template>
            <template #contentSlot>
              <er-grid
                v-if="initializeFlag === 1"
                :er-form-helper-prop="erFormHelper"
                :config-id="'gridView2'"
                :toolbar-options="gridToolbar"
                :toolbar-style="'both'"
              
              ></er-grid>
            </template>
          </xr-ef-panel>
        </div>
        <div style="width: 34%">
          <xr-ef-panel title="库内查询信息" padding="5px" style="height: 100%">
            <template #customButtonSlot></template>
            <template #contentSlot>
              <div style="display: flex; flex-direction: column; height: 100%">
                <er-layout
                  v-if="initializeFlag === 1"
                   :show-group-border="false" 
                  :er-form-helper-prop="erFormHelper"
                  :config-id="'LayoutGroup2'"
                  style="margin: -5px -5px 0 -5px"
                  @click="get_query"
                ></er-layout>
                <er-grid
                  v-if="initializeFlag === 1"
                  style="flex: 1"
                  :er-form-helper-prop="erFormHelper"
                  :config-id="'gridView3'"
                  :toolbar-options="gridToolbar"
                  :toolbar-style="'both'"
                  @double-click="setStockPlaceNo"
                ></er-grid>
              </div>
            </template>
          </xr-ef-panel>
        </div>
      </div>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSM17.ts"></script>

<style lang="scss">
@import "./WMSMSM17.scss";
</style>

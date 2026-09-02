<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f3-pre-do="F3_PRE_DO" :f3-cancel="F3_CANCEL"
      :f4-do="F4_DO" :f4-pre-do="F4_PRE_DO" :f4-cancel="F4_CANCEL" :f5-do="F5_DO">
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroup1'"></er-layout>
      <div style="display: flex; flex-direction: row; height: 100%">
        <div style="height: 100%; width: 30%">
          <xr-ef-panel title="字典列表" padding="5px" style="height: 100%">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView1'"
                :toolbar-options="gridToolbar" :toolbar-style="'both'" style="height: 100%" @erGridReady="erGrid1Ready"
                @focus-changed="gridFocusChanged">
              </er-grid>
            </template>
          </xr-ef-panel>
        </div>
        <div style="height: 100%; width: 70%">
          <xr-ef-panel title="明细列表" padding="5px" style="height: 100%">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView2'" 
                :toolbar-options="gridToolbar" :toolbar-style="'both'" style="height: 100%" @erGridReady="erGrid2Ready"
                 @focus-changed="grid2FocusChanged">
              </er-grid>
            </template>
          </xr-ef-panel>
        </div>
      </div>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMZD"></script>

<style lang="scss"></style>

<template>
  <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f4-do="F4_DO">
    <er-layout
      v-if="initializeFlag === 1"
      :er-form-helper-prop="erFormHelper"
      :config-id="'LayoutGroup1'"
    ></er-layout>

    <div style="display: flex; flex-direction: row; width: 100%; height: 100%">
      <div style="width: 30%; height: 100%">
        <xr-ef-panel
          title="实物库存(以按列字段导出为模板)"
          padding="5px"
          style="height: 100%"
        >
          <template #customButtonSlot></template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'GridView1'"
              :toolbar-style="'both'"
              :toolbar-options="gridToolbar"
            ></er-grid>
          </template>
        </xr-ef-panel>
      </div>
      <div style="width: 30%; height: 100%">
        <xr-ef-panel title="信息库存" padding="5px" style="height: 100%">
          <template #customButtonSlot></template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'GridView2'"
              :toolbar-style="'both'"
              :toolbar-options="gridToolbar1"
            ></er-grid>
          </template>
        </xr-ef-panel>
      </div>
      <div style="width: 40%; height: 100%">
        <xr-ef-panel title="核对结果" padding="5px" style="height: 100%">
          <template #customButtonSlot></template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'GridView31'"
              :toolbar-style="'both'"
              :toolbar-options="gridToolbar1"
            ></er-grid>
          </template>
        </xr-ef-panel>
      </div>
    </div>
  </xr-ef-form>
</template>

<script lang="ts" src="./WMSM01"></script>

<style lang="scss" scoped>
@import "./WMSM01.scss";
</style>

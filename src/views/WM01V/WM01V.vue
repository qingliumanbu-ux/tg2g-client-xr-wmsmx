<template>
  <div style="height: 100%">
    <xr-ef-form
      @ready="efFormReady"
      :f2-do="F2_DO"
      :f3-do="F3_DO"
      :f3-pre-do="F3_PRE_DO"
      :f3-cancel="F3_CANCEL"
      :f4-do="F4_DO"
      :f4-pre-do="F4_PRE_DO"
      :f4-cancel="F4_CANCEL"
      :f5-do="F5_DO"
      :f5-pre-do="F5_PRE_DO"
      :f5-cancel="F5_CANCEL"
    >
      <er-layout
        v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"
      ></er-layout>
      <xr-ef-panel title="库区信息" padding="5px">
        <template #customButtonSlot> </template>
        <template #contentSlot>
          <er-grid
            v-if="initializeFlag === 1"
            :er-form-helper-prop="erFormHelper"
            :toolbar-options="grid1Toolbar"
            :config-id="'gridView1'"
            @erGridReady="erGrid1Ready"
           
          >
          </er-grid>
        </template>
      </xr-ef-panel>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WM01V.ts"></script>

<style lang="scss">
@import "./WM01V.scss";
</style>

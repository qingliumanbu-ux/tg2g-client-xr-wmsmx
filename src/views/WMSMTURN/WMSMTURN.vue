<template>
  <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f4-do="F4_DO" :f3-pre-do="F3_PRE_DO"
    :f3-cancel="F3_CANCEL" :f4-pre-do="F4_PRE_DO" :f4-cancel="F4_CANCEL">
    <div style="display: flex;flex-direction: row;">
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'layout1'"
        style="width: 50%;"></er-layout>
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'layout2'"
        style="width: 50%;"></er-layout>
    </div>
    <div style="display: flex;flex-direction: row; height: 100%;">
      <div style="width: 70%;">
        <xr-ef-panel title="详细信息" padding="5px" style="height: 100%;">
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView1'"
              :toolbar-style="'both'">
            </er-grid>
          </template>
        </xr-ef-panel>
      </div>
      <div style="width: 30%;">
        <xr-ef-panel title="处置履历" padding="5px" style="height: 100%;">
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView2'"
              :toolbar-style="'both'">
            </er-grid>
          </template>
        </xr-ef-panel>
      </div>

    </div>

  </xr-ef-form>
</template>

<script lang="ts" src="./WMSMTURN"></script>

<style lang="scss" scoped>
@import "./WMSMTURN.scss";
</style>

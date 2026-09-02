<template>
  <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f4-do="F4_DO" :f3-pre-do="F3_PRE_DO"
    :f3-cancel="F3_CANCEL" :f4-pre-do="F4_PRE_DO" :f4-cancel="F4_CANCEL">
    <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${layout}`"></er-layout>
    <xr-ef-panel title="详细信息" padding="5px">
      <template #customButtonSlot> </template>
      <template #contentSlot>
        <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview}`"
          :toolbar-style="'both'">
        </er-grid>
      </template>
    </xr-ef-panel>
    <er-layout v-if="ifview" :er-form-helper-prop="erFormHelper" config-id="layoutGroup1"></er-layout>
  </xr-ef-form>
</template>

<script lang="ts" src="./WMSMQUERY"></script>

<style lang="scss" scoped>
@import "./WMSMQUERY.scss";
</style>

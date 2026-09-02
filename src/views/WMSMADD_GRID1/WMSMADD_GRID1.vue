<!--
 * @Description:
 * @Author: Edward
 * @Date: 2022-04-28 11:04:08
 * @LastEditors: zhangTing
 * @LastEditTime: 2023-07-19 14:43:52
-->
<template>
  <div style="height: 100%">
    <xr-ef-form
      :in-dialog-form-name="openInDialog ? dialogFormName : 'null'"
      @ready="efFormReady"
      @closeDialog="closeEfDialog"
      :f2-do="F2_DO"
    >
      <template v-if="initializeFlag === 1">
        <xr-ef-panel title="详细信息" padding="5px">
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="LayoutName"
              :toolbar-style="'both'"
              @erGridReady="erGridReady"
            >
            </er-grid>
          </template> </xr-ef-panel
      ></template>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMADD_GRID1"></script>

<style lang="scss" scoped>
@import "./WMSMADD_GRID1.scss";
</style>

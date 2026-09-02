<!--
 * @Description:
 * @Author: Edward
 * @Date: 2022-04-28 11:04:08
 * @LastEditors: zhangTing
 * @LastEditTime: 2023-07-19 14:43:52
-->
<template>
  <div style="height: 100%">
    <xr-ef-form :in-dialog-form-name="openInDialog ? dialogFormName : 'null'" @ready="efFormReady"
      @closeDialog="closeEfDialog" :f2-do="F2_DO" :f3-do="F3_DO">
      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="50">
          <xr-ef-panel title="板坯信息" padding="5px" style="height: 100%">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="LayoutName"
                :toolbar-style="'both'" @focus-changed="GridView1FocusChanged" @erGridReady="erGridReady">
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>
        <v-splitter-pane size="50">
          <xr-ef-panel title="预定板坯信息" padding="5px" style="height: 100%">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="GridName"
                :toolbar-style="'both'" @erGridReady="erGrid2Ready">
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>
      </v-splitter>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMADD_GRID2"></script>

<style lang="scss" scoped>
@import "./WMSMADD_GRID2.scss";
</style>

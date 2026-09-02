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
        :f3-do="F3_DO"
      >
      <er-layout
      v-if="initializeFlag === 1"
      :er-form-helper-prop="erFormHelper"
      :config-id="LayoutName"
    ></er-layout>
            <xr-ef-panel title="材料清单" padding="0px" style="height: 100%">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <er-grid
                  v-if="initializeFlag === 1"
                  :er-form-helper-prop="erFormHelper"
                  :config-id="GridName"
                  :toolbar-style="'both'"
                  @erGridReady="erGridReady"
                >
                </er-grid>
              </template>
            </xr-ef-panel>        
          
      </xr-ef-form>
    </div>
  </template>
  
  <script lang="ts" src="./WMSMLGP_POPS2N"></script>
  
  <style lang="scss" scoped>
  @import "./WMSMLGP_POPS2N.scss";
  </style>
  
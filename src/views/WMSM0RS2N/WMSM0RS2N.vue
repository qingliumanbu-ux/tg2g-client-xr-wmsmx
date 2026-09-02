<template>
    <div style="height: 100%;">
      <xr-ef-form @ready="efFormReady" 
      :f2-do="F2_DO" 
      :f3-do="F3_DO" 
      :f4-do="F4_DO" 
      :f5-do="F5_DO" 
      :f6-do="F6_DO" 
      :f7-do="F7_DO"
      :f8-do="F8_DO" 
      :f9-do="F9_DO"
      :f10-do="F10_DO"
      >
        <!-- 上下分割 -->
        <er-layout v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"></er-layout>
      <xr-ef-panel title="质保书信息"
        padding="5px">
        <template #customButtonSlot>

        </template>
        <template #contentSlot>
          <er-grid v-if="initializeFlag === 1"
            :er-form-helper-prop="erFormHelper"
            :config-id="'GridView1'"
            @erGridReady="erGrid1Ready"
            :toolbar-style="'both'">
          </er-grid>
        </template>
      </xr-ef-panel>
      </xr-ef-form>
      <!-- <ZhiBaoShu :dialogFormVisible="dialogFormVisible" @formSubmitted="handleFormSubmitted" @handleClose="handleClose"
        :formData="formData">
      </ZhiBaoShu> -->
    </div>
  </template>
  
  <script lang="ts" src="./WMSM0RS2N.ts">
  </script>
  
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
    :f11-do="F11_DO" 
    :f12-do="F12_DO"
    >
      <!-- 上下分割 -->
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
        :config-id="'LayoutGroupFilter'"></er-layout>

      <!-- 左右结构 -->
      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="45">
          <xr-ef-panel title="核电信息" padding="5px" style="height: 100%; width: 100%">
            <template #customButtonSlot> </template>
            <template #contentSlot>
              <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView2'"
                :toolbar-style="'both'" 
                @erGridReady="erGridReady"
                @focus-changed= "GridView1FocusChanged"
                >
              </er-grid>
            </template>
          </xr-ef-panel>
        </v-splitter-pane>

        <v-splitter-pane size="55" type="card">
          <div style="display: flex; flex-direction: column; height: 50%;">
            <xr-ef-panel title="详细信息" padding="5px" style="overflow: auto;">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <!-- :toolbar-options="gridToolbar1" -->
                <!-- <er-grid
                  v-if="initializeFlag === 1"
                  :er-form-helper-prop="erFormHelper"
                  :config-id="'LayoutGroup1'"
                  :toolbar-style="'both'"
                >
                </er-grid> -->
                <div style="overflow: auto;">
                  <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'LayoutGroup1'"
                    :show-group-border="false"></er-layout>
                </div>

              </template>
            </xr-ef-panel>
          </div>

          <div style="display: flex; flex-direction: column; height: 50%">
            <xr-ef-panel title="成分信息" padding="5px">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <!-- :toolbar-options="gridToolbar1" -->
                <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView3'"
                  :toolbar-style="'both'">
                </er-grid>
              </template>
            </xr-ef-panel>
          </div>
        </v-splitter-pane>
      </v-splitter>
    </xr-ef-form>
    <!-- <ZhiBaoShu :dialogFormVisible="dialogFormVisible" @formSubmitted="handleFormSubmitted" @handleClose="handleClose"
        :formData="formData">
      </ZhiBaoShu> -->
    <WMSMDIALOG :dialogFormVisible="dialogFormVisible"  @handleClose="handleClose"
      :formData="formData">
    </WMSMDIALOG>
  </div>
</template>
  
  <script lang="ts" src="./WMSM0RXYS2N.ts">
  </script>
  
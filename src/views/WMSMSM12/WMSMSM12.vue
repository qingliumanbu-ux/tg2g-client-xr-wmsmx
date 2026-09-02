<template>
  <div style="height: 100%">
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f3-pre-do="F3_PRE_DO" :f3-cancel="F3_CANCEL"
      :f4-do="F4_DO" :f4-pre-do="F4_PRE_DO" :f4-cancel="F4_CANCEL" :f5-do="F5_DO" :f5-pre-do="F5_PRE_DO"
      :f5-cancel="F5_CANCEL" :f6-do="F6_DO" :f7-do="F7_DO" :f7-pre-do="F7_PRE_DO" :f7-cancel="F7_CANCEL" :f8-do="F8_DO"
      :f8-pre-do="F8_PRE_DO" :f8-cancel="F8_CANCEL" :f9-do="F9_DO" :f9-pre-do="F9_PRE_DO" :f9-cancel="F9_CANCEL"
      :f10-do="F10_DO" :f10-pre-do="F10_PRE_DO" :f10-cancel="F10_CANCEL" :f11-do="F11_DO" :f11-pre-do="F11_PRE_DO"
      :f11-cancel="F11_CANCEL">
      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup1'"></er-layout>

      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="70">
          <div style="display: flex; flex-direction: column; height: 100%">
            <div style="height: 50%;"> <a-tabs v-model:activeKey="tabActiveKey" type="card" @change="handleTabChange">
                <a-tab-pane key="tab1" tab="按材料装车">
                  <div style="height: 100%;">
                    <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'gridView1'"
                      :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGrid1Ready">
                    </er-grid>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="tab2" tab="按预装车单装车 表面质量不合-橘红 / 综判不合-红色">
                  <div style="height: 100%;">
                    <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView_YZ'"
                      :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGridYReady"
                      @focus-changed="GridViewYFocusChanged">
                    </er-grid>
                  </div>
                </a-tab-pane></a-tabs></div>



            <div v-if="initializeFlag === 1" style="display: flex; flex-direction: row; margin: 0; padding: 0">
              <!-- <button v-if="tabActiveKey==='tab1'" style="width: 40%; margin: 0 5%" @click="qu_mat"
                :disabled="down_disabled_flag">
                查询
              </button> -->
              <button style="width: 40%; margin: 0 5%" @click="down_mat" :disabled="down_disabled_flag">
                &darr;&darr;&darr;
              </button>
              <button style="width: 40%; margin: 0 5%" @click="up_mat" :disabled="down_disabled_flag">
                &uarr;&uarr;&uarr;
              </button>
              <button style="width: 40%; margin: 0 5%" @click="refresh_mat" :disabled="down_disabled_flag">
                清空&#x21bb;
              </button>
            </div>

            <xr-ef-panel padding="0px" title="拣配材料">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'gridView3'"
                  :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGrid3Ready">
                </er-grid>
              </template>
            </xr-ef-panel>
          </div>
        </v-splitter-pane>
        <v-splitter-pane size="30">
          <div style="
              display: flex;
              flex-direction: column;
              height: 100%;
              padding: 0px;
            ">
            <div v-if="initializeFlag === 1" style="display: flex; flex-direction: row;padding: 0px;margin: 0;">
              <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'LayoutGroup1'"
                :show-group-border="false" :show-form-toolbar="false" style="padding: 0px;margin: 0px;width: 100%;"
                @click="query_zx" @valueChanged="query_zx"></er-layout>


            </div>
            <xr-ef-panel padding="0px" title="倒运计划">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'gridView2'"
                  :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGrid2Ready"
                  @focus-changed="setStockPlaceNo" @click="setStockPlaceNo">
                </er-grid>
              </template>
            </xr-ef-panel>
            <div v-if="initializeFlag === 1" style="display: flex; flex-direction: row">
              <span>材料号 <input style="width: 40%" v-model="jihuahao" /></span>
              <span>
                车号 <input style="width: 40%" v-model="shijihao" />
              </span>
              <button style="width: 20%" @click="query_zc">查询</button>
            </div>
            <xr-ef-panel padding="0px" title="装车实绩">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView_ZC'"
                  :toolbar-options="gridToolbar" :toolbar-style="'both'" @erGridReady="erGridzReady"
                  @focus-changed="setLoadMAT" @click="setLoadMAT">
                </er-grid>
              </template>
            </xr-ef-panel>
          </div>
        </v-splitter-pane>
      </v-splitter>

      <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup4'"></er-layout>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSM12.ts"></script>

<style lang="scss">
@import "./WMSMSM12.scss";
</style>

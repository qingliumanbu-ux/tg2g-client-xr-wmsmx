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

    >
      <er-layout
        v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup1'"
      ></er-layout>
      <v-splitter style="height: 100%" class="default-theme">
        <v-splitter-pane size="70">
          <div style="display: flex; flex-direction: column; height: 100%">
            <xr-ef-panel padding="0px" title="待入库材料">
              <template #customButtonSlot> </template>
              <template #contentSlot>
                <er-grid
                  v-if="initializeFlag === 1"
                  :er-form-helper-prop="erFormHelper"
                  :config-id="'gridView1'"
                  :toolbar-options="gridToolbar"
                  :toolbar-style="'both'"
                  @erGridReady="erGrid1Ready"
                >
                </er-grid>
              </template>
            </xr-ef-panel>
            <er-layout
        v-if="offline_cause"
        :er-form-helper-prop="erFormHelper"
        :config-id="'layoutGroup2'"
      ></er-layout>
          </div>
        </v-splitter-pane>
        <v-splitter-pane size="30">
          <div
            style="
              display: flex;
              flex-direction: column;
              height: 100%;
              padding: 5px;
            "
          >
            <er-layout
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="'LayoutGroup3'"
              style="margin: -5px -5px 0 -5px"
              @click="get_query"
            ></er-layout>

            <er-grid
              v-if="initializeFlag === 1"
              style="flex: 1; margin: 5"
              :er-form-helper-prop="erFormHelper"
              :config-id="'gridView2'"
              :toolbar-style="'both'"
              @dblclick="setStockPlaceNo"
            >
            </er-grid>
          </div>
        </v-splitter-pane>
      </v-splitter>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSM11.ts"></script>

<style lang="scss">
@import "./WMSMSM11.scss";
</style>

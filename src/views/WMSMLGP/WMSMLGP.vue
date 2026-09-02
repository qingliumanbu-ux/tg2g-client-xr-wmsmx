<template>
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
    :f6-do="F6_DO"
    :f6-pre-do="F6_PRE_DO"
    :f6-cancel="F6_CANCEL"
    :f7-do="F7_DO"
    :f7-pre-do="F7_PRE_DO"
    :f7-cancel="F7_CANCEL"
    :f8-do="F8_DO"
    :f8-pre-do="F8_PRE_DO"
    :f8-cancel="F8_CANCEL"
    :f9-do="F9_DO"
    :f9-pre-do="F9_PRE_DO"
    :f9-cancel="F9_CANCEL"
    :f10-do="F10_DO"
    :f10-pre-do="F10_PRE_DO"
    :f10-cancel="F10_CANCEL"
  >
    <er-layout
      v-if="initializeFlag === 1"
      :er-form-helper-prop="erFormHelper"
      :config-id="`${layout}`"
    ></er-layout>
    <v-splitter horizontal style="height: 100%" class="default-theme">
      <v-splitter-pane size="50">
        <xr-ef-panel
          :title="`${mainviewName}`"
          padding="5px"
          style="height: 100%"
        >
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="`${gridview}`"
              :toolbar-style="'both'"
              @focus-changed="GridView1FocusChanged"
            >
            </er-grid>
          </template>
        </xr-ef-panel>
      </v-splitter-pane>
      <v-splitter-pane size="50">
        <xr-ef-panel
          :title="`${subviewName}`"
          padding="5px"
          style="height: 100%"
        >
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid
              v-if="initializeFlag === 1"
              :er-form-helper-prop="erFormHelper"
              :config-id="`${gridview1}`"
              :toolbar-style="'both'"
            >
            </er-grid>
          </template>
        </xr-ef-panel>
      </v-splitter-pane>
    </v-splitter>
  </xr-ef-form>
  <xr-ef-dialog
    v-model:visible="dialogVisible"
    :title="'材料清单'"
    height="80%"
    width="80%"
    @click-close-icon="closeXrEfDialog"
    :default-footer="false"
  >
    <WMSMLGP_POPS2N  v-if="initializeFlag === 1 && dialogVisible"
      :openInDialog="true"
      :dialogFormName="'WMSMLGP_MATS2N'"
      :parentInfo="parentInfo"
      @getChildInfo="getChildInfo"
    ></WMSMLGP_POPS2N>
  </xr-ef-dialog>
  <xr-ef-dialog
    v-model:visible="dialogVisible1"
    :title="'材料清单'"
    height="80%"
    width="80%"
    @click-close-icon="closeXrEfDialog"
    :default-footer="false"
  >
    <WMSMLGP_POPS2N
      :openInDialog="true"
      :dialogFormName="dialogFormName"
      :parentInfo="parentInfo"
      @getChildInfo="getChildInfo"
    ></WMSMLGP_POPS2N>
  </xr-ef-dialog>
</template>

<script lang="ts" src="./WMSMLGP"></script>

<style lang="scss">
@import "./WMSMLGP.scss";
</style>

<template>
  <xr-ef-form @ready="efFormReady" :f2-do="F2_DO" :f3-do="F3_DO" :f4-do="F4_DO">
    <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${layout}`"></er-layout>
    <v-splitter horizontal style="height: 100%" class="default-theme">
      <v-splitter-pane size="50">
        <xr-ef-panel :title="`${mainviewName}`" padding="5px" style="height: 100%">
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview}`"
              :toolbar-style="'both'" @focus-changed="GridView1FocusChanged">
            </er-grid>
          </template>
        </xr-ef-panel>
      </v-splitter-pane>
      <v-splitter-pane size="50">
        <xr-ef-panel :title="`${subviewName}`" padding="5px" style="height: 100%">
          <template #customButtonSlot> </template>
          <template #contentSlot>
            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview1}`"
              :toolbar-style="'both'">
            </er-grid>
          </template>
        </xr-ef-panel>
      </v-splitter-pane>
    </v-splitter>
  </xr-ef-form>
</template>

<script lang="ts" src="./WMSMQUERY1.ts"></script>

<style lang="scss">
@import "./WMSMQUERY1.scss";
</style>

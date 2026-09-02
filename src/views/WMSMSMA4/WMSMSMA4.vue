<template>
  <div style="height: 100%">
    <xr-ef-form   @ready="efFormReady" :f2-do="F2_DO">
      <er-layout
        v-if="initializeFlag === 1"
        :er-form-helper-prop="erFormHelper"
        :config-id="'layoutControlGroup2'"
      ></er-layout>

      <xr-ef-panel title="炼钢板坯出入库信息" padding="5px">
        <template #customButtonSlot> </template>
        <template #contentSlot>
          <er-grid
            v-if="initializeFlag === 1"
            :er-form-helper-prop="erFormHelper"
            :config-id="'gridView1'"
            :toolbar-options="gridToolbar"
            :toolbar-style="'both'"
          >
          </er-grid>
        </template>
      </xr-ef-panel>
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSMSMA4">

</script>

<style lang="scss"></style>

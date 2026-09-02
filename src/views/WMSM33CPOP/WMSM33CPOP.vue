<template>
  <div style="height: 100%;">
    <xr-ef-form :f2-do="F2_DO" :in-dialog-form-name="openInDialog ? dialogFormName : null" @closeDialog="closeEfDialog"
      @ready="efFormReady">
     
      
      <xr-ef-panel title="录入区" padding="5px" >
        <template #customButtonSlot>
        </template>
        <template #contentSlot>
          <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
            :config-id="'GridView1'" @erGridReady="erGrid1Ready"  @cell-value-changed="cellValueChanged">
          </er-grid>
        </template>
      </xr-ef-panel>
     
    </xr-ef-form>
  </div>
</template>

<script lang="ts" src="./WMSM33CPOP.ts">
</script>

<style lang="scss" scoped>

</style>

<template>
    <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
        <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${layout}`"></er-layout>
        <xr-ef-panel title="详细信息" padding="5px">
            <template #customButtonSlot> </template>
            <template #contentSlot>
                <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="`${gridview}`"
                    :toolbar-style="'both'">
                </er-grid>
            </template>
        </xr-ef-panel>
        <er-layout v-if="ifview" :er-form-helper-prop="erFormHelper" config-id="layoutGroup1"></er-layout>
    </xr-ef-form>
</template>

<script lang="ts" src="./WMSMBBRY"></script>

<style lang="scss" scoped>
@import "./WMSMBBRY.scss";
</style>

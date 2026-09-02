<template>
  <xr-ef-form @ready="efFormReady" :f2-do="F2_DO">
    <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'LayoutGroupQuery'"
      ></er-layout>
    <div style="display: flex; height: 100%; overflow: auto">
      <div style="display: flex; flex-direction: column; width: 20%">
        <xr-ef-panel title="板坯数据" padding="5px">
          <template #customButtonSlot></template>
          <template #contentSlot>
            <er-grid v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="'GridView1'"
              :toolbar-style="'both'" @focus-changed="gridFocusChanged" @erGridReady="erGrid1Ready"
              @click="click_row"></er-grid>
          </template>
        </xr-ef-panel>
      </div>
      <div style="display: flex; flex-direction: column; width: 85%">
        <div style="width: 100%; height: auto; flex-direction: row; display: flex">
          <div style="
              padding: 0px !important;
              width: 30%;
              height: auto;
              margin: 0 5px;
            ">
            <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
              :config-id="'LayoutGroup1'"></er-layout>
            <div style=" height: 100px">
              <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                :config-id="'LayoutGroup2'"></er-layout>
            </div>
          </div>
          <div style="
              padding: 0px !important;
              width: 25%;
              height: auto;
              margin: 0 5px;
            ">
            <xr-ef-panel title="成分数据" v-model="ob">
              <template #customButtonSlot></template>
              <template #contentSlot>
                <table style="font-size: 15px;width: 100%;">
                  <tr>
                    <th class="th1"></th>
                    <th class="th2">上限</th>
                    <th class="th3">下限</th>
                    <th class="th4">终值</th>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td><input id="C_MAX" v-model="ob['C_MAX']" /></td>
                    <td><input id="C_MIN" v-model="ob['C_MIN']" /></td>
                    <td>
                      <input id="C_AIM" v-model="ob['C_AIM']" :style="{
    backgroundColor: ob['C_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Si</td>
                    <td><input id="Si_MAX" v-model="ob['SI_MAX']" /></td>
                    <td><input id="Si_MIN" v-model="ob['SI_MIN']" /></td>
                    <td>
                      <input id="Si_AIM" v-model="ob['SI_AIM']" :style="{
    backgroundColor: ob['SI_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Mn</td>
                    <td><input id="Mn_MAX" v-model="ob['MN_MAX']" /></td>
                    <td><input id="Mn_MIN" v-model="ob['MN_MIN']" /></td>
                    <td>
                      <input id="Mn_AIM" v-model="ob['MN_AIM']" :style="{
    backgroundColor: ob['MN_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>P</td>
                    <td><input id="P_MAX" v-model="ob['P_MAX']" /></td>
                    <td><input id="P_MIN" v-model="ob['P_MIN']" /></td>
                    <td>
                      <input id="P_AIM" v-model="ob['P_AIM']" :style="{
    backgroundColor: ob['P_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td><input id="S_MAX" v-model="ob['S_MAX']" /></td>
                    <td><input id="S_MIN" v-model="ob['S_MIN']" /></td>
                    <td>
                      <input id="S_AIM" v-model="ob['S_AIM']" :style="{
    backgroundColor: ob['S_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Cr</td>
                    <td><input id="Cr_MAX" v-model="ob['CR_MAX']" /></td>
                    <td><input id="Cr_MIN" v-model="ob['CR_MIN']" /></td>
                    <td>
                      <input id="Cr_AIM" v-model="ob['CR_AIM']" :style="{
    backgroundColor: ob['CR_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ni</td>
                    <td><input id="Ni_MAX" v-model="ob['NI_MAX']" /></td>
                    <td><input id="Ni_MIN" v-model="ob['NI_MIN']" /></td>
                    <td>
                      <input id="Ni_AIM" v-model="ob['NI_AIM']" :style="{
    backgroundColor: ob['NI_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Cu</td>
                    <td><input id="Cu_MAX" v-model="ob['CU_MAX']" /></td>
                    <td><input id="Cu_MIN" v-model="ob['CU_MIN']" /></td>
                    <td>
                      <input id="Cu_AIM" v-model="ob['CU_AIM']" :style="{
    backgroundColor: ob['CU_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>V</td>
                    <td><input id="V_MAX" v-model="ob['V_MAX']" /></td>
                    <td><input id="V_MIN" v-model="ob['V_MIN']" /></td>
                    <td>
                      <input id="V_AIM" v-model="ob['V_AIM']" :style="{
    backgroundColor: ob['V_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Nb</td>
                    <td><input id="Nb_MAX" v-model="ob['NB_MAX']" /></td>
                    <td><input id="Nb_MIN" v-model="ob['NB_MIN']" /></td>
                    <td>
                      <input id="Nb_AIM" v-model="ob['NB_AIM']" :style="{
    backgroundColor: ob['NB_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ti</td>
                    <td><input id="Ti_MAX" v-model="ob['TI_MAX']" /></td>
                    <td><input id="Ti_MIN" v-model="ob['TI_MIN']" /></td>
                    <td>
                      <input id="Ti_AIM" v-model="ob['TI_AIM']" :style="{
    backgroundColor: ob['TI_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>As</td>
                    <td><input id="As_MAX" v-model="ob['AS_MAX']" /></td>
                    <td><input id="As_MIN" v-model="ob['AS_MIN']" /></td>
                    <td>
                      <input id="As_AIM" v-model="ob['AS_AIM']" :style="{
    backgroundColor: ob['AS_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Alt</td>
                    <td><input id="Alt_MAX" v-model="ob['AL_MAX']" /></td>
                    <td><input id="Alt_MIN" v-model="ob['AL_MIN']" /></td>
                    <td>
                      <input id="Alt_AIM" v-model="ob['AL_AIM']" :style="{
    backgroundColor: ob['AL_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Als</td>
                    <td><input id="Als_MAX" v-model="ob['ALS_MAX']" /></td>
                    <td><input id="Als_MIN" v-model="ob['ALS_MIN']" /></td>
                    <td>
                      <input id="Als_AIM" v-model="ob['ALS_AIM']" :style="{
    backgroundColor: ob['ALS_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Mo</td>
                    <td><input id="Mo_MAX" v-model="ob['MO_MAX']" /></td>
                    <td><input id="Mo_MIN" v-model="ob['MO_MIN']" /></td>
                    <td>
                      <input id="Mo_AIM" v-model="ob['MO_AIM']" :style="{
    backgroundColor: ob['MO_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ca</td>
                    <td><input id="Ca_MAX" v-model="ob['CA_MAX']" /></td>
                    <td><input id="Ca_MIN" v-model="ob['CA_MIN']" /></td>
                    <td>
                      <input id="Ca_AIM" v-model="ob['CA_AIM']" :style="{
    backgroundColor: ob['CA_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sn</td>
                    <td><input id="Sn_MAX" v-model="ob['SN_MAX']" /></td>
                    <td><input id="Sn_MIN" v-model="ob['SN_MIN']" /></td>
                    <td>
                      <input id="Sn_AIM" v-model="ob['SN_AIM']" :style="{
    backgroundColor: ob['SN_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>W</td>
                    <td><input id="W_MAX" v-model="ob['W_MAX']" /></td>
                    <td><input id="W_MIN" v-model="ob['W_MIN']" /></td>
                    <td>
                      <input id="W_AIM" v-model="ob['W_AIM']" :style="{
    backgroundColor: ob['W_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Pb</td>
                    <td><input id="Pb_MAX" v-model="ob['PB_MAX']" /></td>
                    <td><input id="Pb_MIN" v-model="ob['PB_MIN']" /></td>
                    <td>
                      <input id="Pb_AIM" v-model="ob['PB_AIM']" :style="{
    backgroundColor: ob['PB_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td><input id="B_MAX" v-model="ob['B_MAX']" /></td>
                    <td><input id="B_MIN" v-model="ob['B_MIN']" /></td>
                    <td>
                      <input id="B_AIM" v-model="ob['B_AIM']" :style="{
    backgroundColor: ob['B_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Bi</td>
                    <td><input id="Bi_MAX" v-model="ob['BI_MAX']" /></td>
                    <td><input id="Bi_MIN" v-model="ob['BI_MIN']" /></td>
                    <td>
                      <input id="Bi_AIM" v-model="ob['BI_AIM']" :style="{
    backgroundColor: ob['BI_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>O</td>
                    <td><input id="O_MAX" v-model="ob['O_MAX']" /></td>
                    <td><input id="O_MIN" v-model="ob['O_MIN']" /></td>
                    <td>
                      <input id="O_AIM" v-model="ob['O_AIM']" :style="{
    backgroundColor: ob['O_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>H</td>
                    <td><input id="H_MAX" v-model="ob['H_MAX']" /></td>
                    <td><input id="H_MIN" v-model="ob['H_MIN']" /></td>
                    <td>
                      <input id="H_AIM" v-model="ob['H_AIM']" :style="{
    backgroundColor: ob['H_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>N</td>
                    <td><input id="N_MAX" v-model="ob['N_MAX']" /></td>
                    <td><input id="N_MIN" v-model="ob['N_MIN']" /></td>
                    <td>
                      <input id="N_AIM" v-model="ob['N_AIM']" :style="{
    backgroundColor: ob['N_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>CrNiEq</td>
                    <td>
                      <input id="CrNiEq_MAX" v-model="ob['CRNIEQ_MAX']" />
                    </td>
                    <td>
                      <input id="CrNiEq_MIN" v-model="ob['CRNIEQ_MIN']" />
                    </td>
                    <td>
                      <input id="CrNiEq_AIM" v-model="ob['CRNIEQ_AIM']" :style="{
    backgroundColor: ob['CRNIEQ_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                  <tr>
                    <td>Co</td>
                    <td><input id="Co_MAX" v-model="ob['CO_MAX']" /></td>
                    <td><input id="Co_MIN" v-model="ob['CO_MIN']" /></td>
                    <td>
                      <input id="Co_AIM" v-model="ob['CO_AIM']" :style="{
    backgroundColor: ob['CO_OK'] === '1' ? 'red' : '',
  }" />
                    </td>
                  </tr>
                </table>
              </template>
            </xr-ef-panel>
            <div style=" height: 100px">
              <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper"
                :config-id="'LayoutGroup5'"></er-layout>
            </div>
          </div>
          <div style="
              padding: 0px !important;
              width: 20%;
              height: 100%;
              overflow: auto;
              margin: 0 5px;
             
            ">
            <er-layout v-if="initializeFlag === 1" :er-form-helper-prop="erFormHelper" :config-id="layout_name"
              :key="layout_name"></er-layout>
            <er-layout v-if="layout_name === 'LayoutGroup6'" :er-form-helper-prop="erFormHelper"
              :show-group-border="false" :config-id="'LayoutGroup8'" @value-changed="valueChanged"
              :key="layout_name"></er-layout>

          </div>

        </div>

        <div style="width: 100%; height: auto; flex-direction: row; display: flex">



        </div>
      </div>
    </div>
  </xr-ef-form>
  <xr-ef-dialog v-model:visible="dialogVisible" :title="dialogFormName" height="80%" width="80%"
    @click-close-icon="closeXrEfDialog" :default-footer="false">
    <WMSM01Q0_GRID1 :openInDialog="true" :dialogFormName="dialogFormName" :parentInfo="parentInfo"
      @getChildInfo="getChildInfo"></WMSM01Q0_GRID1>
  </xr-ef-dialog>
  <xr-ef-dialog v-model:visible="dialogVisible1" :title="dialogFormName" height="80%" width="80%"
    @click-close-icon="closeXrEfDialog" :default-footer="false">
    <WMSM01Q0_GRID2 :openInDialog="true" :dialogFormName="dialogFormName" :parentInfo="parentInfo"
      @getChildInfo="getChildInfo"></WMSM01Q0_GRID2>
  </xr-ef-dialog>
</template>

<script lang="ts" src="./WMSM01Q0QS2N"></script>

<style lang="scss" scoped>
@import "./WMSM01Q0QS2N.scss";
</style>

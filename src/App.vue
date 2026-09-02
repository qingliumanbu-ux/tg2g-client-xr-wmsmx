<!--
 * @Description:
 * @Author: Edward
 * @Date: 2023-10-16 16:35:33
 * @LastEditors: zhangTing
 * @LastEditTime: 2024-02-20 15:09:39
-->
<script setup lang="ts">
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { getAntdTheme, changeTheme } from "EFX/theme";
import { getAntdLocale, getDayjsLocale, setI18nLanguage, customDayjsLocale, getLocale, isRTL } from 'EFX/locale';

const antdTheme = ref(getAntdTheme());

onMounted(() => {
  changeTheme(undefined, true);
});

if ((window as any).$wujie) {
  (window as any).$wujie.bus?.$on("changeThemeEmit", (e: any) => {
    changeTheme(undefined, true);
    antdTheme.value = getAntdTheme();
  });
  (window as any).$wujie.bus?.$on("changeLangEmit", (e: any) => {
    setI18nLanguage(e, false); // zh_Hans, en, ar
  });
} else {
  const lang = import.meta.env.VITE_APP_LANG;
  setI18nLanguage(lang, false); // zh_Hans, en, ar
}

dayjs.locale(getDayjsLocale());
// 支持更多本地化的长日期格式
dayjs.extend(localizedFormat);
// 更新语言配置的属性
dayjs.extend(updateLocale);
// 自定义语言配置formats
customDayjsLocale(dayjs.updateLocale);

</script>
<script lang="ts">
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
export default defineComponent({
  name: "App",
  components: {
    "a-config-provider": ConfigProvider,
  },
});
</script>
<template>
  <a-config-provider :theme="antdTheme" :locale="getAntdLocale()" component-size="small"
    :direction="isRTL() ? 'rtl' : 'ltr'">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped>
</style>

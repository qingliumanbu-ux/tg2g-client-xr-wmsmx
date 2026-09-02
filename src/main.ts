/*
 * @Description:
 * @Author: Edward
 * @Date: 2022-06-01 12:24:15
 * @LastEditors: zhangTing
 * @LastEditTime: 2024-05-09 14:40:31
 */
import "@/styles/index.scss";
import { createApp } from "vue";
import type { App as TypeApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  RouterHistory,
} from "vue-router";

import {
  setCurrentEnvironment,
  setCurrentUser,
  setRefreshToken,
  setRememberMe,
  setToken,
  init,
} from "EIX/ei";
import { version as appVersion } from "../package.json";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import Antd, { message } from "ant-design-vue";

import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import 'dayjs/locale/en';
import 'dayjs/locale/ar';

import getVueI18n from 'EFX/locale';
import { importAllLocales } from "./utils/i18n";

// -----------国际化功能相关配置start---------
const localeMessages = importAllLocales();
// 初始化vue i8n
const vueI18n = getVueI18n({
  ...localeMessages
});
// -----------国际化功能相关配置end---------

import {
  ModuleRegistry,
  ExcelExportModule,
  StatusBarModule,
  SideBarModule,
  ClientSideRowModelModule,
  RowGroupingModule,
  SetFilterModule,
  FiltersToolPanelModule,
  AdvancedFilterModule,
  MultiFilterModule,
  ColumnsToolPanelModule,
  MenuModule,
  ClipboardModule,
  RichSelectModule,
  ServerSideRowModelModule,
  MasterDetailModule,
  RangeSelectionModule
} from "EFX/agPlugins";
// 注册模块
ModuleRegistry.registerModules([
  ExcelExportModule,
  StatusBarModule,
  SideBarModule,
  ClientSideRowModelModule,
  RowGroupingModule,
  SetFilterModule,
  FiltersToolPanelModule,
  AdvancedFilterModule,
  MultiFilterModule,
  ColumnsToolPanelModule,
  MenuModule,
  ClipboardModule,
  RichSelectModule,
  ServerSideRowModelModule,
  MasterDetailModule,
  RangeSelectionModule
]);
import AgGridVue from "EFX/AgGridVue";
declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void;
    // 子应用无界实例
    __WUJIE: { mount: () => void };
  }
}
declare const window: Window & Record<string, any>;

let app: TypeApp | undefined = undefined;
const appName = import.meta.env.VITE_APP_NAME;
function render(props: any = {}) {
  const {
    container,
    routerBase,
    routerHistory,
    parentRouter,
    parentStore,
    data,
    onGlobalStateChange,
    setGlobalState,
  } = props ?? {};

  const { appContext } = window.$wujie?.props ?? {};
  const baseURL =
    appContext ??
    (window as any).top._APP_OPTIONS_?.appContext ??
    import.meta.env.VITE_APP_BASE_API ??
    "/";
  app = createApp(App);
  const historyBase =
    process.env.NODE_ENV === "production" ? `${baseURL}child/${appName}/` : "";
  const history =
    routerHistory === "memory"
      ? createMemoryHistory(historyBase)
      : createWebHistory(historyBase);

  // 创建路由实例
  const router = createRouter({
    history: history,
    routes: routes,
  });
  router.beforeEach((to, next) => {
    console.log("to", to);
  });
  app.provide("parentRouter", parentRouter || router);
  app.provide("parentStore", parentStore);
  app.use(router);
  app.use(Antd);
  app.use(vueI18n);
  app.use(ElementPlus, { locale: zhCn, })
  app.component("ag-grid-vue", AgGridVue);
  app.component("v-splitter", Splitpanes);
  app.component("v-splitter-pane", Pane);

  // const { defaultPath, context } = data ?? {};

  init({
    baseURL: baseURL,
    powerByQianKun: window.__POWERED_BY_WUJIE__ ?? false,
    currentRouter: router,
    platType: "4C",
    // messageService: message
  });
  app.mount("#sub-app");
}
function mount() {
  console.log("%c%s", "color: blue;", `${appName} app mount`);
  render();
}

function unmount() {
  console.log("%c%s", "color: blue;", `${appName} app mount`);
  app?.unmount();
}
if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = mount;
  window.__WUJIE_UNMOUNT = unmount;

  //@ts-ignore
  // window.__WUJIE.mount();
  window.__WUJIE.mount();
} else {
  render();
}

(async () => {
  //TODO: 测试环境模拟登录用户
  //?: 本地测试在父框架运行的话需注释，单独运行的话请解注释
  //!: 是否考虑用户名也放在环境变量中，还是直接在这里改动
  if (process.env.NODE_ENV !== "production" && !window.__POWERED_BY_WUJIE__) {
    // 本地测试配置国际化语言
    setRememberMe(true);
    const token = import.meta.env.VITE_APP_SIGNATURE_TOKEN;
    const splitArr = token.split(":");
    setToken(token);
    setRefreshToken(import.meta.env.VITE_APP_REFRESH_TOKEN);
    if (splitArr.length > 2) {
      const userName = splitArr[1];
      setCurrentUser({
        id: "999999",
        userId: splitArr[1],
        userName: userName,
        deptId: "",
        deptEName: "",
        deptCName: "",
      });
    }

    setCurrentEnvironment({
      skinName: "default",
      culture: import.meta.env.VITE_APP_LANG,
      companyCode: import.meta.env.VITE_APP_COMPANY_CODE || "BS",
      companyName: "宝信软件",
      appName: import.meta.env.VITE_APPLICATION_NAME || "IPLAT4C",
    });
  }
})();
// export { mount,  unmount, render};
console.log(
  `%c===================================================`,
  "color:green"
);
console.log(`%capp name: %c${appName}`, "color: blue", "color:red");
// console.log(`%cversion: %c${appVersion}`, "color: blue", "color:red");
console.log(`%cversion: %c${new URL(window.location.href).searchParams.get('ver') ?? ''}`, "color: blue", "color:red");
// console.log(`%cef version: %c${efVersion}`, 'color: blue', 'color:red');
// console.log(`%cer version: %c${undefined}`, 'color: blue', 'color:red');
console.log(
  `%cbuild time: %c${process.env.BUILD_TIMESTAMP}`,
  "color: blue",
  "color:red"
);
console.log(
  `%c===================================================`,
  "color:green"
);

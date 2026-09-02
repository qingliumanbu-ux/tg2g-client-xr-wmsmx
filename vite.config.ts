/*
 * @Description:
 * @Author: Edward
 * @Date: 2023-10-16 16:35:33
 * @LastEditors: zhangTing
 * @LastEditTime: 2024-03-20 10:03:20
 */
import { defineConfig, loadEnv, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import federation, {
  VitePluginFederationOptions,
} from "@originjs/vite-plugin-federation";

import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import topLevelAwait from "vite-plugin-top-level-await";

import { toIsoString } from "./build/utils";
import VitePluginHtmlEnv from "vite-plugin-html-env";
import { FederationTypesPlugin } from "./build/vite-plugin-federation-types";

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
  const { mode } = configEnv;
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;
  const {
    VITE_APP_NAME: appName,
    VITE_APP_BASE_API: baseApi,
    VITE_APP_PUBLIC_PATH: publicPath,
  } = viteEnv;
  const __DEV__ = mode === "development";
  const moduleFederationConfig: VitePluginFederationOptions = {
    name: `${appName}_general`,
    filename: "remoteEntry.js",
    remotes: {
      EFX: __DEV__
        ? `${baseApi}remote_exposes/EFX/assets/remoteEntry.js`
        : {
            external: `Promise.resolve(
              window.top._APP_OPTIONS_  ?
              window.top._APP_OPTIONS_.appContext + 'remote_exposes/EFX/assets/remoteEntry.js' 
                : '/remote_exposes/EFX/assets/remoteEntry.js'
              )`,
            externalType: "promise",
          },
      EIX: __DEV__
        ? `${baseApi}remote_exposes/EIX/assets/remoteEntry.js`
        : {
            external: `Promise.resolve(
            window.top._APP_OPTIONS_  ?
            window.top._APP_OPTIONS_.appContext + 'remote_exposes/EIX/assets/remoteEntry.js' 
              : '/remote_exposes/EIX/assets/remoteEntry.js'
            )`,
            externalType: "promise",
          },

      ERX: __DEV__
        ? `${baseApi}remote_exposes/ERX/assets/remoteEntry.js`
        : {
            external: `Promise.resolve(
          window.top._APP_OPTIONS_  ?
          window.top._APP_OPTIONS_.appContext + 'remote_exposes/ERX/assets/remoteEntry.js'
            : '/remote_exposes/ERX/assets/remoteEntry.js'
          )`,
            externalType: "promise",
          },
      // 附件上传组件引用关系。若不需要请注释掉，否则应用会报错
      EPTF: __DEV__
        ? `${baseApi}remote_exposes/EPTF/assets/remoteEntry.js`
        : {
            external: `Promise.resolve(
          window.top._APP_OPTIONS_  ?
          window.top._APP_OPTIONS_.appContext + 'remote_exposes/EPTF/assets/remoteEntry.js'
            : '/remote_exposes/EPTF/assets/remoteEntry.js'
          )`,
            externalType: "promise",
          },
      // 报表组件引用关系。若不需要请注释掉，否则应用会报错
      EBFR: __DEV__
        ? `${baseApi}remote_exposes/EBFR/assets/remoteEntry.js`
        : {
            external: `Promise.resolve(
          window.top._APP_OPTIONS_  ?
          window.top._APP_OPTIONS_.appContext + 'remote_exposes/EBFR/assets/remoteEntry.js'
            : '/remote_exposes/EBFR/assets/remoteEntry.js'
          )`,
            externalType: "promise",
          },
    },
    shared: ["vue"],
  };
  const remoteNames = Object.keys(moduleFederationConfig.remotes!);
  const remoteZips = remoteNames.map((it) => {
    return {
      remoteName: it,
      remoteUrl: `${baseApi}remote_exposes/${it}/${it}.d.zip`,
    };
  });
  return defineConfig({
    define: {
      //viteEnv
      "process.env": {
        ...viteEnv,
        BUILD_TIMESTAMP: `${toIsoString(new Date())}`,
      },
    },
    base: __DEV__ ? "/" : `./`,
    resolve: {
      alias: {
        /** @ 符号指向 src 目录 */
        "@": resolve(__dirname, "./src"),
        "#": resolve(__dirname),
        public: resolve(__dirname, "./public"),
      },
    },
    plugins: [
      vue(),
      VitePluginHtmlEnv({
        compiler: true,
        // compiler: false // 旧版本
      }),
      FederationTypesPlugin({ targetDir: "@mf-types", remoteZips: remoteZips }),
      federation(moduleFederationConfig),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
      visualizer({
        template: "treemap", // or sunburst
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: "./dist/analyse.html", // will be saved in project's root
      }),
      viteCompression({
        threshold: 1024000, // 对大于 1mb 的文件进行压缩
      }),
    ],
    server: {
      proxy: {
        // 使用正则表达式匹配 URL
        "^/.*/api": {
          target: baseApi,
          changeOrigin: true,
        },
        "/EX": {
          target: baseApi,
          changeOrigin: true,
        },
        "/refreshToken": {
          target: baseApi,
          changeOrigin: true,
        },
        "/remote_exposes": {
          target: baseApi,
          changeOrigin: true,
        },
      },
    },
    build: {
      target: "esnext",
      outDir: `./dist/${appName}`,
      sourcemap: false,
      minify: true,
    },
  });
};

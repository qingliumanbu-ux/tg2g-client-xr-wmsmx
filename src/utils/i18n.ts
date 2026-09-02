/*
 * @Description:
 * @Author: Edward
 * @Date: 2024-01-18 10:51:28
 * @LastEditors: zhangTing
 * @LastEditTime: 2024-05-09 10:30:30
 */
import { LocaleMessages, VueMessageType } from "vue-i18n";
import { importErxLocales } from 'ERX/ErI18n';

/**
 * 自动导入 框架自定义语言
 * @author Edward
 */
export function importAllLocales(): LocaleMessages<VueMessageType> {
  const modules: LocaleMessages<VueMessageType> = {};
  try {
    // 导入 @/views 下文件，包含子目录，文件名为：[/\\]locales[/\\]([a-z]{2})-?([A-Z]{2})?\.ts
    const viewsLocales = import.meta.glob(`@/views/**/locales/*.json`, { eager: true });
    Object.keys(viewsLocales).forEach((key) => {
      const modulesName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
      const modulesContent = viewsLocales[key] as any;
      if (modules[modulesName]) {
        modules[modulesName] = {
          ...(modules[modulesName] as any),
          ...modulesContent.default
        };
      } else {
        modules[modulesName] = modulesContent.default;
      }
    });

    // 导入 @/layouts 下文件，包含子目录，文件名为：[/\\]locales[/\\]([a-z]{2})-?([A-Z]{2})?\.ts
    // const layoutLocales = import.meta.glob(`@/layouts/**/locales/*.json`, { eager: true });
    // Object.keys(layoutLocales).forEach((key) => {
    //   const modulesName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
    //   const modulesContent = layoutLocales[key] as any;
    //   if (modules[modulesName]) {
    //     modules[modulesName] = {
    //       ...(modules[modulesName] as any),
    //       ...modulesContent.default
    //     };
    //   } else {
    //     modules[modulesName] = modulesContent.default;
    //   }
    // });


    // 导入 @/components 下文件，包含子目录，文件名为：[/\\]locales[/\\]([a-z]{2})-?([A-Z]{2})?\.ts
    const componentsLocales = import.meta.glob(`@/components/**/locales/*.json`, { eager: true });
    Object.keys(componentsLocales).forEach((key) => {
      const modulesName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
      const modulesContent = componentsLocales[key] as any;
      if (modules[modulesName]) {
        modules[modulesName] = {
          ...(modules[modulesName] as any),
          ...modulesContent.default
        };
      } else {
        modules[modulesName] = modulesContent.default;
      }
    });


    // 导入 @/locales 下文件，不包含子目录，文件名为：([a-z]{2})-?([A-Z]{2})?\.ts
    const globalLocales = import.meta.glob(`@/locales/*.json`, { eager: true });
    Object.keys(globalLocales).forEach((key) => {
      const modulesName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
      const modulesContent = globalLocales[key] as any;

      if (modules[modulesName]) {
        modules[modulesName] = {
          ...(modules[modulesName] as any),
          ...modulesContent.default
        };
      } else {
        modules[modulesName] = modulesContent.default;
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  // 合并erx中的语言包
  const erxLocales = importErxLocales();
  if (Object.keys(erxLocales).length) {
    Object.keys(modules).forEach((key) => {
      Object.assign(modules[key], erxLocales[key]);
    });
  }
  return modules;
}

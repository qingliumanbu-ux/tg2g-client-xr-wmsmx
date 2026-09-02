// declare module "EFX/*";
///<reference types="../EIX" />
declare module "EFX/agPaginationPanel" {
  const _default: import("vue").DefineComponent<
    {},
    {
      gridApi: any;
      paginationParams: any;
      pageSizesOptions: import("vue").Ref<number[]>;
      pageSizes: any;
      totalPages: any;
      currentPages: any;
      totalCount: any;
      isPagination: import("vue").Ref<boolean>;
      onPageSizeChanged: () => void;
      onPageChanged: () => void;
      refreshPagination: () => void;
      toFirst: () => void;
      toLast: () => void;
      toPre: () => void;
      toNext: () => void;
      handlePageChange: () => void;
      firstDisabled: import("vue").Ref<boolean>;
      preDisabled: import("vue").Ref<boolean>;
      nextDisabled: import("vue").Ref<boolean>;
      lastDisabled: import("vue").Ref<boolean>;
    },
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<import("vue").ExtractPropTypes<{}>>,
    {},
    {}
  >;
  export default _default;
}
declare module "EFX/agToolbarPanel" {
  import { ColumnApi, IRowNode } from "@ag-grid-community/core";
  export interface IChangedNodes {
    createdNodes: any[];
    updatedNodes: any[];
    deletedNodes: any[];
  }
  export interface IChangedData {
    createdData: any[];
    updatedData: any[];
    deleteData: any[];
  }
  export interface ImodifiedData {
    modifiedData: IChangedData;
    modifiedAndSelectedData: IChangedData;
  }
  export interface ISaveEventParams {
    hasChanges: boolean;
    changedData: ImodifiedData;
    done: () => void;
  }
  export interface IToolbarButton {
    name: string;
    text: string;
    icon: string;
    isAuth?: boolean;
    click: () => void;
  }
  export interface IPropsParams {
    columnApi: ColumnApi;
    options?: any;
    queryButtons?: IToolbarButton[];
    editButtons?: IToolbarButton[];
    addRow?: () => void;
    copyRow?: () => void;
    deleteRow?: () => void;
    exportExcel?: () => void;
    importExcel?: () => void;
    setAddDefault?: () => string;
    save?: () => void;
  }
  const _default: import("vue").DefineComponent<
    {},
    {
      resultQueryButtonList: import("vue").Ref<any[]>;
      resultEditButtonList: import("vue").Ref<
        {
          name: string;
          text: string;
          icon: string;
          isAuth?: boolean | undefined;
          click: () => void;
        }[]
      >;
      saveChangedData: (saveCallback: Function) => void;
      clickExportButton: () => void;
      clickImportButton: () => void;
      clickAddButton: () => void;
      clickCopyButton: () => void;
      clickDeleteButton: () => void;
      clickSaveButton: () => void;
      change: (editStatus: boolean) => void;
      isEditable: import("vue").Ref<boolean>;
      exportIsAuth: import("vue").Ref<boolean>;
      importIsAuth: import("vue").Ref<boolean>;
      setEditButtons: (buttons: IToolbarButton[]) => void;
      setQueryButtons: (buttons: IToolbarButton[]) => void;
      updateData: (
        data: any[] | Record<string, any>,
        key?: string | Array<string>
      ) => void;
      addData: (data: any[], addIndex?: number) => void;
      updateRow: (rowNode: IRowNode, rowData: Record<string, any>) => void;
      removeRow: (rowNode: IRowNode) => void;
      hasChanges: () => boolean;
      getChangedData: () => ImodifiedData;
      clearChanges: () => void;
    },
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<import("vue").ExtractPropTypes<{}>>,
    {},
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfForm" {
  import { PropType } from "vue";
  import { IAuthButton } from "EFX/type";
  const _default: import("vue").DefineComponent<
    {
      inDialogFormName: {
        type: PropType<string | null>;
        default: null;
      };
      haveAuthButton: {
        type: BooleanConstructor;
        default: boolean;
      };
      buttonList: {
        type: PropType<IAuthButton[]>;
        default: () => never[];
      };
      hiddenButton: {
        type: ArrayConstructor;
        default: () => never[];
      };
      customDisableStatus: {
        type: BooleanConstructor;
        default: boolean;
      };
      authButtonDisabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
      };
      showCancelButton: {
        type: BooleanConstructor;
        default: boolean;
      };
      showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
      };
      confirmButtonText: {
        type: StringConstructor;
        default: string;
      };
      cancelButtonText: {
        type: StringConstructor;
        default: string;
      };
      closeButtonText: {
        type: StringConstructor;
        default: string;
      };
      customClassName: {};
    },
    any,
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    (
      | "formResize"
      | "closeEfDialogForm"
      | "closeDialog"
      | "initialized"
      | "ready"
      | "formVisible"
    )[],
    | "formResize"
    | "closeEfDialogForm"
    | "closeDialog"
    | "initialized"
    | "ready"
    | "formVisible",
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        inDialogFormName: {
          type: PropType<string | null>;
          default: null;
        };
        haveAuthButton: {
          type: BooleanConstructor;
          default: boolean;
        };
        buttonList: {
          type: PropType<IAuthButton[]>;
          default: () => never[];
        };
        hiddenButton: {
          type: ArrayConstructor;
          default: () => never[];
        };
        customDisableStatus: {
          type: BooleanConstructor;
          default: boolean;
        };
        authButtonDisabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        showConfirmButton: {
          type: BooleanConstructor;
          default: boolean;
        };
        showCancelButton: {
          type: BooleanConstructor;
          default: boolean;
        };
        showCloseButton: {
          type: BooleanConstructor;
          default: boolean;
        };
        confirmButtonText: {
          type: StringConstructor;
          default: string;
        };
        cancelButtonText: {
          type: StringConstructor;
          default: string;
        };
        closeButtonText: {
          type: StringConstructor;
          default: string;
        };
        customClassName: {};
      }>
    > & {
      onFormResize?: ((...args: any[]) => any) | undefined;
      onCloseEfDialogForm?: ((...args: any[]) => any) | undefined;
      onCloseDialog?: ((...args: any[]) => any) | undefined;
      onInitialized?: ((...args: any[]) => any) | undefined;
      onReady?: ((...args: any[]) => any) | undefined;
      onFormVisible?: ((...args: any[]) => any) | undefined;
    },
    {
      inDialogFormName: string | null;
      haveAuthButton: boolean;
      buttonList: IAuthButton[];
      hiddenButton: unknown[];
      customDisableStatus: boolean;
      authButtonDisabled: boolean;
      showConfirmButton: boolean;
      showCancelButton: boolean;
      showCloseButton: boolean;
      confirmButtonText: string;
      cancelButtonText: string;
      closeButtonText: string;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfFormBase" {
  const _default: import("vue").DefineComponent<
    {},
    {},
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<import("vue").ExtractPropTypes<{}>>,
    {},
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfPanel" {
  const _default: import("vue").DefineComponent<
    {
      showHeader: {
        type: BooleanConstructor;
        default: boolean;
      };
      flex: {
        type: NumberConstructor;
        default: number;
      };
      title: {
        type: StringConstructor;
        default: string;
      };
      height: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
      isSearchBox: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
      };
      showAuthButton: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
      };
      padding: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
      openHeaderShow: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
      };
      id: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
    },
    {
      tI18n: {
        <
          Key extends string,
          DefinedLocaleMessage extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage> extends false
            ? import("vue-i18n").PickupPaths<{
                [K in keyof DefinedLocaleMessage]: DefinedLocaleMessage[K];
              }>
            : never,
          ResourceKeys extends Keys = import("vue-i18n").IsNever<Keys> extends false
            ? Keys
            : never
        >(
          key: string | Key | ResourceKeys
        ): string;
        <
          Key_1 extends string,
          DefinedLocaleMessage_1 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_1 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_1> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_1 in keyof DefinedLocaleMessage_1]: DefinedLocaleMessage_1[K_1];
              }>
            : never,
          ResourceKeys_1 extends Keys_1 = import("vue-i18n").IsNever<Keys_1> extends false
            ? Keys_1
            : never
        >(
          key: string | Key_1 | ResourceKeys_1
        ): string;
        <
          Key_2 extends string,
          DefinedLocaleMessage_2 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_2 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_2> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_2 in keyof DefinedLocaleMessage_2]: DefinedLocaleMessage_2[K_2];
              }>
            : never,
          ResourceKeys_2 extends Keys_2 = import("vue-i18n").IsNever<Keys_2> extends false
            ? Keys_2
            : never
        >(
          key: string | Key_2 | ResourceKeys_2,
          locale: string,
          list: unknown[]
        ): string;
        <
          Key_3 extends string,
          DefinedLocaleMessage_3 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_3 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_3> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_3 in keyof DefinedLocaleMessage_3]: DefinedLocaleMessage_3[K_3];
              }>
            : never,
          ResourceKeys_3 extends Keys_3 = import("vue-i18n").IsNever<Keys_3> extends false
            ? Keys_3
            : never
        >(
          key: string | Key_3 | ResourceKeys_3,
          locale: string,
          named: object
        ): string;
        <
          Key_4 extends string,
          DefinedLocaleMessage_4 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_4 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_4> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_4 in keyof DefinedLocaleMessage_4]: DefinedLocaleMessage_4[K_4];
              }>
            : never,
          ResourceKeys_4 extends Keys_4 = import("vue-i18n").IsNever<Keys_4> extends false
            ? Keys_4
            : never
        >(
          key: string | Key_4 | ResourceKeys_4,
          list: unknown[]
        ): string;
        <
          Key_5 extends string,
          DefinedLocaleMessage_5 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_5 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_5> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_5 in keyof DefinedLocaleMessage_5]: DefinedLocaleMessage_5[K_5];
              }>
            : never,
          ResourceKeys_5 extends Keys_5 = import("vue-i18n").IsNever<Keys_5> extends false
            ? Keys_5
            : never
        >(
          key: string | Key_5 | ResourceKeys_5,
          named: Record<string, unknown>
        ): string;
        <
          Key_6 extends string,
          DefinedLocaleMessage_6 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_6 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_6> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_6 in keyof DefinedLocaleMessage_6]: DefinedLocaleMessage_6[K_6];
              }>
            : never,
          ResourceKeys_6 extends Keys_6 = import("vue-i18n").IsNever<Keys_6> extends false
            ? Keys_6
            : never
        >(
          key: string | Key_6 | ResourceKeys_6
        ): string;
        <
          Key_7 extends string,
          DefinedLocaleMessage_7 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_7 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_7> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_7 in keyof DefinedLocaleMessage_7]: DefinedLocaleMessage_7[K_7];
              }>
            : never,
          ResourceKeys_7 extends Keys_7 = import("vue-i18n").IsNever<Keys_7> extends false
            ? Keys_7
            : never
        >(
          key: string | Key_7 | ResourceKeys_7,
          plural: number
        ): string;
        <
          Key_8 extends string,
          DefinedLocaleMessage_8 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_8 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_8> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_8 in keyof DefinedLocaleMessage_8]: DefinedLocaleMessage_8[K_8];
              }>
            : never,
          ResourceKeys_8 extends Keys_8 = import("vue-i18n").IsNever<Keys_8> extends false
            ? Keys_8
            : never
        >(
          key: string | Key_8 | ResourceKeys_8,
          plural: number,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_9 extends string,
          DefinedLocaleMessage_9 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_9 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_9> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_9 in keyof DefinedLocaleMessage_9]: DefinedLocaleMessage_9[K_9];
              }>
            : never,
          ResourceKeys_9 extends Keys_9 = import("vue-i18n").IsNever<Keys_9> extends false
            ? Keys_9
            : never
        >(
          key: string | Key_9 | ResourceKeys_9,
          defaultMsg: string
        ): string;
        <
          Key_10 extends string,
          DefinedLocaleMessage_10 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_10 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_10> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_10 in keyof DefinedLocaleMessage_10]: DefinedLocaleMessage_10[K_10];
              }>
            : never,
          ResourceKeys_10 extends Keys_10 = import("vue-i18n").IsNever<Keys_10> extends false
            ? Keys_10
            : never
        >(
          key: string | Key_10 | ResourceKeys_10,
          defaultMsg: string,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_11 extends string,
          DefinedLocaleMessage_11 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_11 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_11> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_11 in keyof DefinedLocaleMessage_11]: DefinedLocaleMessage_11[K_11];
              }>
            : never,
          ResourceKeys_11 extends Keys_11 = import("vue-i18n").IsNever<Keys_11> extends false
            ? Keys_11
            : never
        >(
          key: string | Key_11 | ResourceKeys_11,
          list: unknown[]
        ): string;
        <
          Key_12 extends string,
          DefinedLocaleMessage_12 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_12 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_12> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_12 in keyof DefinedLocaleMessage_12]: DefinedLocaleMessage_12[K_12];
              }>
            : never,
          ResourceKeys_12 extends Keys_12 = import("vue-i18n").IsNever<Keys_12> extends false
            ? Keys_12
            : never
        >(
          key: string | Key_12 | ResourceKeys_12,
          list: unknown[],
          plural: number
        ): string;
        <
          Key_13 extends string,
          DefinedLocaleMessage_13 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_13 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_13> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_13 in keyof DefinedLocaleMessage_13]: DefinedLocaleMessage_13[K_13];
              }>
            : never,
          ResourceKeys_13 extends Keys_13 = import("vue-i18n").IsNever<Keys_13> extends false
            ? Keys_13
            : never
        >(
          key: string | Key_13 | ResourceKeys_13,
          list: unknown[],
          defaultMsg: string
        ): string;
        <
          Key_14 extends string,
          DefinedLocaleMessage_14 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_14 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_14> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_14 in keyof DefinedLocaleMessage_14]: DefinedLocaleMessage_14[K_14];
              }>
            : never,
          ResourceKeys_14 extends Keys_14 = import("vue-i18n").IsNever<Keys_14> extends false
            ? Keys_14
            : never
        >(
          key: string | Key_14 | ResourceKeys_14,
          list: unknown[],
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_15 extends string,
          DefinedLocaleMessage_15 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_15 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_15> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_15 in keyof DefinedLocaleMessage_15]: DefinedLocaleMessage_15[K_15];
              }>
            : never,
          ResourceKeys_15 extends Keys_15 = import("vue-i18n").IsNever<Keys_15> extends false
            ? Keys_15
            : never
        >(
          key: string | Key_15 | ResourceKeys_15,
          named: Record<string, unknown>
        ): string;
        <
          Key_16 extends string,
          DefinedLocaleMessage_16 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_16 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_16> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_16 in keyof DefinedLocaleMessage_16]: DefinedLocaleMessage_16[K_16];
              }>
            : never,
          ResourceKeys_16 extends Keys_16 = import("vue-i18n").IsNever<Keys_16> extends false
            ? Keys_16
            : never
        >(
          key: string | Key_16 | ResourceKeys_16,
          named: Record<string, unknown>,
          plural: number
        ): string;
        <
          Key_17 extends string,
          DefinedLocaleMessage_17 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_17 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_17> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_17 in keyof DefinedLocaleMessage_17]: DefinedLocaleMessage_17[K_17];
              }>
            : never,
          ResourceKeys_17 extends Keys_17 = import("vue-i18n").IsNever<Keys_17> extends false
            ? Keys_17
            : never
        >(
          key: string | Key_17 | ResourceKeys_17,
          named: Record<string, unknown>,
          defaultMsg: string
        ): string;
        <
          Key_18 extends string,
          DefinedLocaleMessage_18 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_18 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_18> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_18 in keyof DefinedLocaleMessage_18]: DefinedLocaleMessage_18[K_18];
              }>
            : never,
          ResourceKeys_18 extends Keys_18 = import("vue-i18n").IsNever<Keys_18> extends false
            ? Keys_18
            : never
        >(
          key: string | Key_18 | ResourceKeys_18,
          named: Record<string, unknown>,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
      };
      openHeader: import("vue").Ref<boolean>;
      flexStyle: import("vue").Ref<string>;
      searchButtonId: import("vue").ComputedRef<string>;
      query: () => void;
      openHeaderChange: () => void;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    ("queryClick" | "openHeaderChange")[],
    "queryClick" | "openHeaderChange",
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        showHeader: {
          type: BooleanConstructor;
          default: boolean;
        };
        flex: {
          type: NumberConstructor;
          default: number;
        };
        title: {
          type: StringConstructor;
          default: string;
        };
        height: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
        isSearchBox: {
          type: BooleanConstructor;
          default: boolean;
          require: boolean;
        };
        showAuthButton: {
          type: BooleanConstructor;
          default: boolean;
          require: boolean;
        };
        padding: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
        openHeaderShow: {
          type: BooleanConstructor;
          default: boolean;
          require: boolean;
        };
        id: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
      }>
    > & {
      onQueryClick?: ((...args: any[]) => any) | undefined;
      onOpenHeaderChange?: ((...args: any[]) => any) | undefined;
    },
    {
      title: string;
      height: string;
      padding: string;
      id: string;
      showHeader: boolean;
      flex: number;
      isSearchBox: boolean;
      showAuthButton: boolean;
      openHeaderShow: boolean;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfSearchBox" {
  const _default: import("vue").DefineComponent<
    {
      title: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
      height: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
      showAuthButton: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
      };
      padding: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
      openHeaderShow: {
        type: BooleanConstructor;
        default: boolean;
        require: boolean;
      };
      id: {
        type: StringConstructor;
        default: string;
        require: boolean;
      };
    },
    {
      i18nTitle: import("vue").ComputedRef<string>;
      searchClick: (e: any) => void;
      openChange: (e: any) => void;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    ("openHeaderChange" | "searchClick")[],
    "openHeaderChange" | "searchClick",
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        title: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
        height: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
        showAuthButton: {
          type: BooleanConstructor;
          default: boolean;
          require: boolean;
        };
        padding: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
        openHeaderShow: {
          type: BooleanConstructor;
          default: boolean;
          require: boolean;
        };
        id: {
          type: StringConstructor;
          default: string;
          require: boolean;
        };
      }>
    > & {
      onOpenHeaderChange?: ((...args: any[]) => any) | undefined;
      onSearchClick?: ((...args: any[]) => any) | undefined;
    },
    {
      title: string;
      height: string;
      padding: string;
      id: string;
      showAuthButton: boolean;
      openHeaderShow: boolean;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfDialog" {
  const _default: import("vue").DefineComponent<
    import("vue").ExtractPropTypes<{
      debounce: {
        type: BooleanConstructor;
        default: boolean;
      };
      debounceWait: {
        type: NumberConstructor;
        default: number;
      };
      visible: {
        type: BooleanConstructor;
        required: true;
      };
      title: {
        type: StringConstructor;
        default: string;
      };
      width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      modal: {
        type: BooleanConstructor;
        default: boolean;
      };
      defaultFooter: {
        type: BooleanConstructor;
        default: boolean;
      };
      destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
      };
      showConfirm: {
        type: BooleanConstructor;
        default: boolean;
      };
      showCancel: {
        type: BooleanConstructor;
        default: boolean;
      };
      parentFormRef: {
        type: any;
        default: null;
      };
      resizable: {
        type: BooleanConstructor;
        default: boolean;
      };
      draggable: {
        type: BooleanConstructor;
        default: boolean;
      };
      actions: {
        type: ArrayConstructor;
        default: string[];
      };
      id: {
        type: StringConstructor;
        default: string;
      };
      class: {
        type: StringConstructor;
        default: string;
      };
      formName: {
        type: StringConstructor;
        default: string;
      };
      zIndex: {
        type: NumberConstructor;
        default: number;
      };
    }>,
    {
      tI18n: {
        <
          Key extends string,
          DefinedLocaleMessage extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage> extends false
            ? import("vue-i18n").PickupPaths<{
                [K in keyof DefinedLocaleMessage]: DefinedLocaleMessage[K];
              }>
            : never,
          ResourceKeys extends Keys = import("vue-i18n").IsNever<Keys> extends false
            ? Keys
            : never
        >(
          key: string | Key | ResourceKeys
        ): string;
        <
          Key_1 extends string,
          DefinedLocaleMessage_1 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_1 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_1> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_1 in keyof DefinedLocaleMessage_1]: DefinedLocaleMessage_1[K_1];
              }>
            : never,
          ResourceKeys_1 extends Keys_1 = import("vue-i18n").IsNever<Keys_1> extends false
            ? Keys_1
            : never
        >(
          key: string | Key_1 | ResourceKeys_1
        ): string;
        <
          Key_2 extends string,
          DefinedLocaleMessage_2 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_2 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_2> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_2 in keyof DefinedLocaleMessage_2]: DefinedLocaleMessage_2[K_2];
              }>
            : never,
          ResourceKeys_2 extends Keys_2 = import("vue-i18n").IsNever<Keys_2> extends false
            ? Keys_2
            : never
        >(
          key: string | Key_2 | ResourceKeys_2,
          locale: string,
          list: unknown[]
        ): string;
        <
          Key_3 extends string,
          DefinedLocaleMessage_3 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_3 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_3> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_3 in keyof DefinedLocaleMessage_3]: DefinedLocaleMessage_3[K_3];
              }>
            : never,
          ResourceKeys_3 extends Keys_3 = import("vue-i18n").IsNever<Keys_3> extends false
            ? Keys_3
            : never
        >(
          key: string | Key_3 | ResourceKeys_3,
          locale: string,
          named: object
        ): string;
        <
          Key_4 extends string,
          DefinedLocaleMessage_4 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_4 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_4> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_4 in keyof DefinedLocaleMessage_4]: DefinedLocaleMessage_4[K_4];
              }>
            : never,
          ResourceKeys_4 extends Keys_4 = import("vue-i18n").IsNever<Keys_4> extends false
            ? Keys_4
            : never
        >(
          key: string | Key_4 | ResourceKeys_4,
          list: unknown[]
        ): string;
        <
          Key_5 extends string,
          DefinedLocaleMessage_5 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_5 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_5> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_5 in keyof DefinedLocaleMessage_5]: DefinedLocaleMessage_5[K_5];
              }>
            : never,
          ResourceKeys_5 extends Keys_5 = import("vue-i18n").IsNever<Keys_5> extends false
            ? Keys_5
            : never
        >(
          key: string | Key_5 | ResourceKeys_5,
          named: Record<string, unknown>
        ): string;
        <
          Key_6 extends string,
          DefinedLocaleMessage_6 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_6 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_6> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_6 in keyof DefinedLocaleMessage_6]: DefinedLocaleMessage_6[K_6];
              }>
            : never,
          ResourceKeys_6 extends Keys_6 = import("vue-i18n").IsNever<Keys_6> extends false
            ? Keys_6
            : never
        >(
          key: string | Key_6 | ResourceKeys_6
        ): string;
        <
          Key_7 extends string,
          DefinedLocaleMessage_7 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_7 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_7> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_7 in keyof DefinedLocaleMessage_7]: DefinedLocaleMessage_7[K_7];
              }>
            : never,
          ResourceKeys_7 extends Keys_7 = import("vue-i18n").IsNever<Keys_7> extends false
            ? Keys_7
            : never
        >(
          key: string | Key_7 | ResourceKeys_7,
          plural: number
        ): string;
        <
          Key_8 extends string,
          DefinedLocaleMessage_8 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_8 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_8> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_8 in keyof DefinedLocaleMessage_8]: DefinedLocaleMessage_8[K_8];
              }>
            : never,
          ResourceKeys_8 extends Keys_8 = import("vue-i18n").IsNever<Keys_8> extends false
            ? Keys_8
            : never
        >(
          key: string | Key_8 | ResourceKeys_8,
          plural: number,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_9 extends string,
          DefinedLocaleMessage_9 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_9 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_9> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_9 in keyof DefinedLocaleMessage_9]: DefinedLocaleMessage_9[K_9];
              }>
            : never,
          ResourceKeys_9 extends Keys_9 = import("vue-i18n").IsNever<Keys_9> extends false
            ? Keys_9
            : never
        >(
          key: string | Key_9 | ResourceKeys_9,
          defaultMsg: string
        ): string;
        <
          Key_10 extends string,
          DefinedLocaleMessage_10 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_10 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_10> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_10 in keyof DefinedLocaleMessage_10]: DefinedLocaleMessage_10[K_10];
              }>
            : never,
          ResourceKeys_10 extends Keys_10 = import("vue-i18n").IsNever<Keys_10> extends false
            ? Keys_10
            : never
        >(
          key: string | Key_10 | ResourceKeys_10,
          defaultMsg: string,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_11 extends string,
          DefinedLocaleMessage_11 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_11 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_11> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_11 in keyof DefinedLocaleMessage_11]: DefinedLocaleMessage_11[K_11];
              }>
            : never,
          ResourceKeys_11 extends Keys_11 = import("vue-i18n").IsNever<Keys_11> extends false
            ? Keys_11
            : never
        >(
          key: string | Key_11 | ResourceKeys_11,
          list: unknown[]
        ): string;
        <
          Key_12 extends string,
          DefinedLocaleMessage_12 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_12 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_12> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_12 in keyof DefinedLocaleMessage_12]: DefinedLocaleMessage_12[K_12];
              }>
            : never,
          ResourceKeys_12 extends Keys_12 = import("vue-i18n").IsNever<Keys_12> extends false
            ? Keys_12
            : never
        >(
          key: string | Key_12 | ResourceKeys_12,
          list: unknown[],
          plural: number
        ): string;
        <
          Key_13 extends string,
          DefinedLocaleMessage_13 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_13 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_13> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_13 in keyof DefinedLocaleMessage_13]: DefinedLocaleMessage_13[K_13];
              }>
            : never,
          ResourceKeys_13 extends Keys_13 = import("vue-i18n").IsNever<Keys_13> extends false
            ? Keys_13
            : never
        >(
          key: string | Key_13 | ResourceKeys_13,
          list: unknown[],
          defaultMsg: string
        ): string;
        <
          Key_14 extends string,
          DefinedLocaleMessage_14 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_14 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_14> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_14 in keyof DefinedLocaleMessage_14]: DefinedLocaleMessage_14[K_14];
              }>
            : never,
          ResourceKeys_14 extends Keys_14 = import("vue-i18n").IsNever<Keys_14> extends false
            ? Keys_14
            : never
        >(
          key: string | Key_14 | ResourceKeys_14,
          list: unknown[],
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_15 extends string,
          DefinedLocaleMessage_15 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_15 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_15> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_15 in keyof DefinedLocaleMessage_15]: DefinedLocaleMessage_15[K_15];
              }>
            : never,
          ResourceKeys_15 extends Keys_15 = import("vue-i18n").IsNever<Keys_15> extends false
            ? Keys_15
            : never
        >(
          key: string | Key_15 | ResourceKeys_15,
          named: Record<string, unknown>
        ): string;
        <
          Key_16 extends string,
          DefinedLocaleMessage_16 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_16 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_16> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_16 in keyof DefinedLocaleMessage_16]: DefinedLocaleMessage_16[K_16];
              }>
            : never,
          ResourceKeys_16 extends Keys_16 = import("vue-i18n").IsNever<Keys_16> extends false
            ? Keys_16
            : never
        >(
          key: string | Key_16 | ResourceKeys_16,
          named: Record<string, unknown>,
          plural: number
        ): string;
        <
          Key_17 extends string,
          DefinedLocaleMessage_17 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_17 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_17> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_17 in keyof DefinedLocaleMessage_17]: DefinedLocaleMessage_17[K_17];
              }>
            : never,
          ResourceKeys_17 extends Keys_17 = import("vue-i18n").IsNever<Keys_17> extends false
            ? Keys_17
            : never
        >(
          key: string | Key_17 | ResourceKeys_17,
          named: Record<string, unknown>,
          defaultMsg: string
        ): string;
        <
          Key_18 extends string,
          DefinedLocaleMessage_18 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_18 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_18> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_18 in keyof DefinedLocaleMessage_18]: DefinedLocaleMessage_18[K_18];
              }>
            : never,
          ResourceKeys_18 extends Keys_18 = import("vue-i18n").IsNever<Keys_18> extends false
            ? Keys_18
            : never
        >(
          key: string | Key_18 | ResourceKeys_18,
          named: Record<string, unknown>,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
      };
      dialogHeight: import("vue").Ref<string | number, string | number>;
      dialogWidth: import("vue").Ref<string | number, string | number>;
      isRender: import("vue").Ref<boolean, boolean>;
      dialogFrameRef: import("vue").Ref<any, any>;
      xrEfDialogRef: import("vue").Ref<any, any>;
      onClickClose: () => void;
      dialogZIndex: import("vue").Ref<number, number>;
      confirmClick: () => void;
      cancelClick: () => void;
      dialogResize: () => void;
      onOpen: () => void;
    },
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    (
      | "cancel"
      | "confirm"
      | "open"
      | "clickCloseIcon"
      | "update:visible"
      | "dialogResize"
    )[],
    | "cancel"
    | "confirm"
    | "open"
    | "clickCloseIcon"
    | "update:visible"
    | "dialogResize",
    import("vue").PublicProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        debounce: {
          type: BooleanConstructor;
          default: boolean;
        };
        debounceWait: {
          type: NumberConstructor;
          default: number;
        };
        visible: {
          type: BooleanConstructor;
          required: true;
        };
        title: {
          type: StringConstructor;
          default: string;
        };
        width: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        height: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        modal: {
          type: BooleanConstructor;
          default: boolean;
        };
        defaultFooter: {
          type: BooleanConstructor;
          default: boolean;
        };
        destroyOnClose: {
          type: BooleanConstructor;
          default: boolean;
        };
        showConfirm: {
          type: BooleanConstructor;
          default: boolean;
        };
        showCancel: {
          type: BooleanConstructor;
          default: boolean;
        };
        parentFormRef: {
          type: any;
          default: null;
        };
        resizable: {
          type: BooleanConstructor;
          default: boolean;
        };
        draggable: {
          type: BooleanConstructor;
          default: boolean;
        };
        actions: {
          type: ArrayConstructor;
          default: string[];
        };
        id: {
          type: StringConstructor;
          default: string;
        };
        class: {
          type: StringConstructor;
          default: string;
        };
        formName: {
          type: StringConstructor;
          default: string;
        };
        zIndex: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > &
      Readonly<{
        onOpen?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
        onClickCloseIcon?: ((...args: any[]) => any) | undefined;
        onDialogResize?: ((...args: any[]) => any) | undefined;
      }>,
    {
      title: string;
      width: string | number;
      height: string | number;
      id: string;
      class: string;
      debounce: boolean;
      zIndex: number;
      modal: boolean;
      actions: unknown[];
      formName: string;
      parentFormRef: any;
      debounceWait: number;
      resizable: boolean;
      draggable: boolean;
      showCancel: boolean;
      defaultFooter: boolean;
      destroyOnClose: boolean;
      showConfirm: boolean;
    },
    {},
    {
      dialogFrame: import("vue").DefineComponent<
        import("vue").ExtractPropTypes<{
          sameApp: {
            type: BooleanConstructor;
            required: true;
          };
          formName: {
            type: StringConstructor;
            default: string;
          };
          sameAppformName: {
            type: StringConstructor;
            default: string;
          };
          parentFormRef: {
            type: any;
            default: null;
          };
          modalZIndex: {
            type: NumberConstructor;
            default: number;
          };
          title: {
            type: StringConstructor;
            default: string;
          };
          width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
          };
          height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
          };
          message: {
            type: ObjectConstructor;
            default: () => {};
          };
          destroy: {
            type: FunctionConstructor;
            default: () => void;
          };
          debounce: {
            type: BooleanConstructor;
            default: boolean;
          };
          debounceWait: {
            type: NumberConstructor;
            default: number;
          };
          defaultWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
          };
          defaultHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
          };
          resizable: {
            type: BooleanConstructor;
            default: boolean;
          };
          draggable: {
            type: BooleanConstructor;
            default: boolean;
          };
          actions: {
            type: ArrayConstructor;
            default: string[];
          };
        }>,
        any,
        {},
        {},
        {},
        import("vue").ComponentOptionsMixin,
        import("vue").ComponentOptionsMixin,
        ("open" | "clickClose" | "formResize")[],
        "open" | "clickClose" | "formResize",
        import("vue").PublicProps,
        Readonly<
          import("vue").ExtractPropTypes<{
            sameApp: {
              type: BooleanConstructor;
              required: true;
            };
            formName: {
              type: StringConstructor;
              default: string;
            };
            sameAppformName: {
              type: StringConstructor;
              default: string;
            };
            parentFormRef: {
              type: any;
              default: null;
            };
            modalZIndex: {
              type: NumberConstructor;
              default: number;
            };
            title: {
              type: StringConstructor;
              default: string;
            };
            width: {
              type: (NumberConstructor | StringConstructor)[];
              default: string;
            };
            height: {
              type: (NumberConstructor | StringConstructor)[];
              default: string;
            };
            message: {
              type: ObjectConstructor;
              default: () => {};
            };
            destroy: {
              type: FunctionConstructor;
              default: () => void;
            };
            debounce: {
              type: BooleanConstructor;
              default: boolean;
            };
            debounceWait: {
              type: NumberConstructor;
              default: number;
            };
            defaultWidth: {
              type: (NumberConstructor | StringConstructor)[];
              default: string;
            };
            defaultHeight: {
              type: (NumberConstructor | StringConstructor)[];
              default: string;
            };
            resizable: {
              type: BooleanConstructor;
              default: boolean;
            };
            draggable: {
              type: BooleanConstructor;
              default: boolean;
            };
            actions: {
              type: ArrayConstructor;
              default: string[];
            };
          }>
        > &
          Readonly<{
            onClickClose?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
            onFormResize?: ((...args: any[]) => any) | undefined;
          }>,
        {
          title: string;
          message: Record<string, any>;
          width: string | number;
          height: string | number;
          modalZIndex: number;
          destroy: Function;
          debounce: boolean;
          actions: unknown[];
          formName: string;
          sameAppformName: string;
          parentFormRef: any;
          debounceWait: number;
          defaultWidth: string | number;
          defaultHeight: string | number;
          resizable: boolean;
          draggable: boolean;
        },
        {},
        {
          "wujie-vue": {
            new (
              ...args: any[]
            ): import("vue").CreateComponentPublicInstanceWithMixins<
              Readonly<import("vue").ExtractPropTypes<{}>>,
              {},
              {},
              import("vue").ComputedOptions,
              import("vue").MethodOptions,
              import("vue").ComponentOptionsMixin,
              import("vue").ComponentOptionsMixin,
              {},
              import("vue").PublicProps,
              {},
              true,
              {},
              {},
              import("vue").GlobalComponents,
              import("vue").GlobalDirectives,
              string,
              {},
              any,
              import("vue").ComponentProvideOptions,
              {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
              },
              Readonly<import("vue").ExtractPropTypes<{}>>,
              {},
              {},
              import("vue").ComputedOptions,
              import("vue").MethodOptions,
              {}
            >;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
          } & import("vue").ComponentOptionsBase<
            Readonly<import("vue").ExtractPropTypes<{}>>,
            {},
            {},
            import("vue").ComputedOptions,
            import("vue").MethodOptions,
            import("vue").ComponentOptionsMixin,
            import("vue").ComponentOptionsMixin,
            {},
            string,
            {},
            {},
            string,
            {},
            import("vue").GlobalComponents,
            import("vue").GlobalDirectives,
            string,
            import("vue").ComponentProvideOptions
          > &
            import("vue").VNodeProps &
            import("vue").AllowedComponentProps &
            import("vue").ComponentCustomProps &
            import("vue").Plugin & {
              bus: import("wujie/esm/event").EventBus;
              setupApp: typeof import("wujie").setupApp;
              preloadApp: typeof import("wujie").preloadApp;
              destroyApp: typeof import("wujie").destroyApp;
            };
        },
        {},
        string,
        import("vue").ComponentProvideOptions,
        true,
        {},
        any
      >;
    },
    {},
    string,
    import("vue").ComponentProvideOptions,
    true,
    {},
    any
  >;
  export default _default;
}
declare module "EFX/xrEfGridBox" {
  const _default: import("vue").DefineComponent<
    {
      colWidth: {
        type: ArrayConstructor;
        default: () => number[];
      };
      isAutoFit: {
        type: BooleanConstructor;
        default: boolean;
      };
      colLabelWidth: {
        type: ArrayConstructor;
        default: () => never[];
      };
      labelClass: {
        type: StringConstructor;
        default: string;
      };
      columnGap: {
        type: NumberConstructor;
        default: number;
      };
      rowGap: {
        type: NumberConstructor;
        default: number;
      };
    },
    {
      xrEfGridBoxContainer: import("vue").Ref<any>;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    never[],
    never,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        colWidth: {
          type: ArrayConstructor;
          default: () => number[];
        };
        isAutoFit: {
          type: BooleanConstructor;
          default: boolean;
        };
        colLabelWidth: {
          type: ArrayConstructor;
          default: () => never[];
        };
        labelClass: {
          type: StringConstructor;
          default: string;
        };
        columnGap: {
          type: NumberConstructor;
          default: number;
        };
        rowGap: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > & {},
    {
      colWidth: unknown[];
      isAutoFit: boolean;
      colLabelWidth: unknown[];
      labelClass: string;
      columnGap: number;
      rowGap: number;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfGridBoxItem" {
  const _default: import("vue").DefineComponent<
    {
      span: {
        type: NumberConstructor;
        default: number;
      };
      rowSpan: {
        type: NumberConstructor;
        default: number;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    never[],
    never,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        span: {
          type: NumberConstructor;
          default: number;
        };
        rowSpan: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > & {},
    {
      span: number;
      rowSpan: number;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfFieldItem" {
  const _default: import("vue").DefineComponent<
    {
      label: {
        type: StringConstructor;
        default: string;
      };
      labelAlign: {
        type: StringConstructor;
        default: string;
      };
      labelWidth: {
        type: NumberConstructor;
        default: undefined;
      };
      labelHidden: {
        type: BooleanConstructor;
        default: boolean;
      };
      labelPosition: {
        type: StringConstructor;
        default: string;
      };
      required: {
        type: BooleanConstructor;
        default: boolean;
      };
      controlHeight: {
        type: StringConstructor;
        default: string;
      };
    },
    {
      alignStyle: import("vue").Ref<
        | "right"
        | "left"
        | "end"
        | "center"
        | "start"
        | "justify"
        | "match-parent"
      >;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    never[],
    never,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        label: {
          type: StringConstructor;
          default: string;
        };
        labelAlign: {
          type: StringConstructor;
          default: string;
        };
        labelWidth: {
          type: NumberConstructor;
          default: undefined;
        };
        labelHidden: {
          type: BooleanConstructor;
          default: boolean;
        };
        labelPosition: {
          type: StringConstructor;
          default: string;
        };
        required: {
          type: BooleanConstructor;
          default: boolean;
        };
        controlHeight: {
          type: StringConstructor;
          default: string;
        };
      }>
    > & {},
    {
      label: string;
      required: boolean;
      labelAlign: string;
      labelWidth: number;
      labelHidden: boolean;
      labelPosition: string;
      controlHeight: string;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfNumberRangeInput" {
  type IFormatter = (
    value: number | string,
    info: {
      userTyping: boolean;
      input: string;
    }
  ) => string;
  type IParser = (arg0: string) => number;
  const _default: import("vue").DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<{
        value: number[];
        decimalSeparator?: string | string[] | undefined;
        precision?: number | number[] | undefined;
        step?: string | number | string[] | undefined;
        stringMode?: boolean | boolean[] | undefined;
        max?: number | number[] | undefined;
        min?: number | number[] | undefined;
        formatter?: IFormatter | IFormatter[] | undefined;
        parser?: IParser | IParser[] | undefined;
        disabled?: boolean | boolean[] | undefined;
        col?: string[] | number[] | undefined;
        controls?: boolean | undefined;
        keyboard?: boolean | undefined;
        status?: "error" | "warning" | ("error" | "warning")[] | undefined;
      }>,
      {
        controls: boolean;
        keyboard: boolean;
        disabled: boolean;
        step: number;
        stringMode: boolean;
        max: number;
        min: number;
      }
    >,
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      change: (...args: any[]) => void;
      step: (...args: any[]) => void;
      "update:value": (...args: any[]) => void;
      pressEnter: (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<{
            value: number[];
            decimalSeparator?: string | string[] | undefined;
            precision?: number | number[] | undefined;
            step?: string | number | string[] | undefined;
            stringMode?: boolean | boolean[] | undefined;
            max?: number | number[] | undefined;
            min?: number | number[] | undefined;
            formatter?: IFormatter | IFormatter[] | undefined;
            parser?: IParser | IParser[] | undefined;
            disabled?: boolean | boolean[] | undefined;
            col?: string[] | number[] | undefined;
            controls?: boolean | undefined;
            keyboard?: boolean | undefined;
            status?: "error" | "warning" | ("error" | "warning")[] | undefined;
          }>,
          {
            controls: boolean;
            keyboard: boolean;
            disabled: boolean;
            step: number;
            stringMode: boolean;
            max: number;
            min: number;
          }
        >
      >
    > & {
      onChange?: ((...args: any[]) => any) | undefined;
      onStep?: ((...args: any[]) => any) | undefined;
      "onUpdate:value"?: ((...args: any[]) => any) | undefined;
      onPressEnter?: ((...args: any[]) => any) | undefined;
    },
    {
      min: number[] | number;
      max: number[] | number;
      disabled: boolean[] | boolean;
      step: string[] | string[] | number | string;
      stringMode: boolean[] | boolean;
      controls: boolean;
      keyboard: boolean;
    },
    {}
  >;
  export default _default;
  type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
  type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K>
      ? {
          type: import("vue").PropType<__VLS_NonUndefinedable<T[K]>>;
        }
      : {
          type: import("vue").PropType<T[K]>;
          required: true;
        };
  };
  type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D
      ? __VLS_Prettify<
          P[K] & {
            default: D[K];
          }
        >
      : P[K];
  };
  type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};
}
declare module "EFX/EFDialogForm" {
  import { EfDialogFormOptions } from "EFX/type";
  /**
   * @description: 获取efDialogForm组件挂载dom
   * @param {string} formName
   * @param {string} parentFormRef
   * @param {{ [key: string]: any }} message
   * @param {EfDialogFormOptions} options
   * @return {*} efDialogForm组件
   */
  const getEfDialogFormDom: {
    (
      formName: string,
      parentFormRef?: any,
      message?:
        | {
            [key: string]: any;
          }
        | undefined,
      options?: EfDialogFormOptions
    ): import("vue").ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      import("vue").ComponentOptionsBase<
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        {},
        {},
        string,
        {}
      >,
      {},
      {}
    >;
    open(
      formName: string,
      parentFormRef?: any,
      message?:
        | {
            [key: string]: any;
          }
        | undefined,
      options?: EfDialogFormOptions
    ): any;
  };
  export default getEfDialogFormDom;
  export class EFDialogFormMessage {
    static receive: (id: string, callback: Function) => void;
    static post: (
      id: string,
      message: {
        [key: string]: any;
      }
    ) => void;
  }
}
declare module "EFX/xfEfExportJsonDialog" {
  /// <reference types="#/@mf-types/eix" />
  import { EI } from "EIX/ei";
  const _default: import("vue").DefineComponent<
    {
      visible: {
        type: BooleanConstructor;
        default: () => boolean;
      };
      exportDataInfo: {
        type: typeof EI.EIInfo;
        default: () => EI.EIInfo;
      };
      exportServiceName: {
        type: StringConstructor;
        default: () => string;
      };
      partition: {
        type: StringConstructor;
        default: () => string;
      };
      keyColumnNames: {
        type: ArrayConstructor;
        required: true;
        validator: (value: string[]) => boolean;
      };
      fileName: {
        type: StringConstructor;
        default: () => string;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      "update:visible": (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        visible: {
          type: BooleanConstructor;
          default: () => boolean;
        };
        exportDataInfo: {
          type: typeof EI.EIInfo;
          default: () => EI.EIInfo;
        };
        exportServiceName: {
          type: StringConstructor;
          default: () => string;
        };
        partition: {
          type: StringConstructor;
          default: () => string;
        };
        keyColumnNames: {
          type: ArrayConstructor;
          required: true;
          validator: (value: string[]) => boolean;
        };
        fileName: {
          type: StringConstructor;
          default: () => string;
        };
      }>
    > & {
      "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    },
    {
      visible: boolean;
      fileName: string;
      exportDataInfo: EI.EIInfo;
      exportServiceName: string;
      partition: string;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xfEfImportJsonDialog" {
  const _default: import("vue").DefineComponent<
    {
      visible: {
        type: BooleanConstructor;
        default: () => boolean;
      };
      importServiceName: {
        type: StringConstructor;
        default: () => string;
      };
      partition: {
        type: StringConstructor;
        default: () => string;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      "update:visible": (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        visible: {
          type: BooleanConstructor;
          default: () => boolean;
        };
        importServiceName: {
          type: StringConstructor;
          default: () => string;
        };
        partition: {
          type: StringConstructor;
          default: () => string;
        };
      }>
    > & {
      "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    },
    {
      visible: boolean;
      partition: string;
      importServiceName: string;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/type" {
  export type TTitleType = "both" | "field" | "desc";
  export interface IExportHeader {
    titleType: TTitleType;
  }
  export interface IExportConfig {
    exportData?: Record<string, any>;
    fileName?: string;
    header?: IExportHeader;
    excelStyles?: any[];
  }
  export interface IAllSheetData {
    name: string;
    data: any[];
  }
  export interface EfDialogFormOptions {
    modal?: boolean;
    width?: string | number;
    height?: string | number;
    title?: string;
    resizable?: boolean;
    draggable?: boolean;
    actions?: string[];
  }
  export interface IAuthButton {
    name: string;
    desc: string;
    opType: string;
  }
  export interface IButtonInfo {
    DESCRIPTION: string;
    NAME: string;
    OPTYPE: string;
  }
  export interface IformDllInfo {
    ABBREV: string;
    ACLID: number;
    APPNAME: string;
    DESCRIPTION: string;
    DLLNAME: string;
    DLLPATH: string;
    FORM_CALL_MODE: string;
    ICONNUM: number;
    NAME: string;
  }
  export interface IFormInfo {
    appName: string;
    formName: string;
    formPath: string;
    dllName: string;
    formCallMode: string;
    formCaption: string;
    formPartition: string;
    formParams: { [key: string]: any };
    baseFormName: string;
    buttonInfo: IAuthButton[];
    isDialogForm?: boolean;
  }
}
declare module "EFX/EFGridUtils" {
  import { IExportConfig, IAllSheetData } from "EFX/type";
  export default class EFGridUtils {
    static exportGridAsExcel(
      gridRef: any,
      exportConfig: IExportConfig,
      useOldModeForExport?: boolean
    ): void;
    /**
     * @description: 导入excel获取Sheet1中的excel数据
     * @param {any} gridInstance
     * @return {*}
     */
    static getImportExcelData(gridInstance: any): Promise<any[]>;
    /**
     * @description: 导入excel获取所有sheet页的数据，返回包含所有sheet页数据的数组
     * @param {number} headerRowCount: 若grid为多级列头，传入列头行数
     * @return {*}
     */
    static getImportExcelAllSheetData(
      headerRowCount?: number[]
    ): Promise<IAllSheetData[]>;
    static importExcelToGrid(gridRef: any): Promise<unknown>;
    static renderImportDataToGrid(gridRef: any, excelData: any[]): void;
  }
}

declare module "EFX/EFUtility" {
  import { EI } from "EIX/ei";
  export default class Utility {
    /**
     * 根据传入的代码编号获取值集信息
     * @param partName 分区名，传入''调用默认分区服务
     * @param codeClassNames 代码编号数组
     * @param boolean 是否判断细部资源权限
     */
    static getCodeClassValue(
      partName: string,
      codeClassNames: string[],
      auth?: boolean
    ): Promise<EI.EIInfo>;
    /**
     * 在指定的分区上执行动态查询
     * @param partName 分区名称
     * @param sqls SQL语句列表
     */
    static execQueryPart(partName: string, sqls: string[]): Promise<EI.EIInfo>;
    /**
     * 根据传入的时间戳、班次类获取对应班次、班组信息
     * @param time 时间戳，日期类型
     * @param shiftClass 班次类
     * @param partName 分区名，不传，则调用默认分区服务
     */
    static getShiftNoGroup(
      time: Date,
      shiftClass: string,
      partName?: string
    ): Promise<
      | {
          shift_no: import("EIX/ei").ValueType;
          shift_group: import("EIX/ei").ValueType;
        }
      | undefined
    >;
    /**
     * 根据传入的时间戳、班次类获取对应班次、班组、班次日期信息
     * @param time 时间戳，日期类型
     * @param shiftClass 班次类
     * @param partName 分区名，不传，则调用默认分区服务
     */
    static getShiftNoGroupDate(
      time: Date,
      shiftClass: string,
      partName?: string
    ): Promise<
      | {
          shift_no: import("EIX/ei").ValueType;
          shift_group: import("EIX/ei").ValueType;
          shift_day: import("EIX/ei").ValueType;
        }
      | undefined
    >;
    /**
     * 根据当前登录人获取待办
     * @param taskFlag 标志位，'0' 待办、'1'已办
     */
    static getTaskInfo(taskFlag?: string): Promise<EI.EIInfo>;
    /**
     * 根据当前登录人获取公告、消息、待办等信息
     * @param queryCategory 查询类型，'NEW'是否有新消息, 'UNREAD_COUNT'新消息数量, 'DETAIL'新消息详情
     * @param msgCategory 消息类型，'CHMSG'频道消息,'ANNOUNCE'公告,'TASKMSG'任务待办,'WF'工作流待办
     */
    static getMsgInfo(
      queryCategory?: string[],
      msgCategory?: string[]
    ): Promise<EI.EIInfo>;
    /**
     * 获取当前系统配置分区信息
     */
    static getPartInfo(): Promise<EI.EIInfo>;
    /**
     * 计算打开每个画面所花费的时间
     */
    static calcLoadDuration(): void;
    /**
     * 显示消息提示窗
     * @param msg 消息内容
     * @param type 消息类型
     * @param duration 多少s自动关闭
     */
    static showMessage(
      msg: string,
      type?: "info" | "error" | "success" | "warning",
      duration?: number
    ): void;
  }
}
declare module "EFX/EFCallForm" {
  /**
   * 打开画面，跨子应用画面只能在父应用上才能生效
   * @param formName 画面名
   * @param formParams 可选，url传参参数
   */
  const EFCallForm: (
    formName: string,
    formParams?: Record<string, any>
  ) => void;
  export default EFCallForm;
}

declare module "EFX/agPlugins" {
  import "@ag-grid-community/styles/ag-grid.min.css";
  import "@ag-grid-community/styles/ag-theme-balham.min.css";
  import { ModuleRegistry } from "@ag-grid-community/core";
  import {
    ExcelExportModule,
    exportMultipleSheetsAsExcel,
  } from "@ag-grid-enterprise/excel-export";
  import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
  import { SideBarModule } from "@ag-grid-enterprise/side-bar";
  import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
  import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
  import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
  import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
  import { AdvancedFilterModule } from "@ag-grid-enterprise/advanced-filter";
  import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
  import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
  import { GridChartsModule } from "@ag-grid-enterprise/charts";
  import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
  import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
  import { SparklinesModule } from "@ag-grid-enterprise/sparklines";
  import { MenuModule } from "@ag-grid-enterprise/menu";
  import { CsvExportModule, CsvCreator } from "@ag-grid-community/csv-export";
  import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model";
  import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
  import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
  import { ServerSideRowModelModule } from "@ag-grid-enterprise/server-side-row-model";
  import { ViewportRowModelModule } from "@ag-grid-enterprise/viewport-row-model";
  export {
    exportMultipleSheetsAsExcel,
    CsvExportModule,
    CsvCreator,
    InfiniteRowModelModule,
    ClipboardModule,
    RichSelectModule,
    ServerSideRowModelModule,
    ViewportRowModelModule,
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
    GridChartsModule,
    MasterDetailModule,
    RangeSelectionModule,
    SparklinesModule,
  };
}
declare module "EFX/AgGridVue" {
  import { AgGridVue } from "@ag-grid-community/vue3";
  export default AgGridVue;
}
declare module "EFX/ag-i18n-cn" {
  const AG_GRID_LOCALE_ZH: {
    selectAll: string;
    selectAllSearchResults: string;
    addCurrentSelectionToFilter: string;
    searchOoo: string;
    blanks: string;
    noMatches: string;
    filterOoo: string;
    equals: string;
    notEqual: string;
    blank: string;
    notBlank: string;
    empty: string;
    lessThan: string;
    greaterThan: string;
    lessThanOrEqual: string;
    greaterThanOrEqual: string;
    inRange: string;
    inRangeStart: string;
    inRangeEnd: string;
    contains: string;
    notContains: string;
    startsWith: string;
    endsWith: string;
    dateFormatOoo: string;
    andCondition: string;
    orCondition: string;
    applyFilter: string;
    resetFilter: string;
    clearFilter: string;
    cancelFilter: string;
    textFilter: string;
    numberFilter: string;
    dateFilter: string;
    setFilter: string;
    groupFilterSelect: string;
    advancedFilterContains: string;
    advancedFilterNotContains: string;
    advancedFilterTextEquals: string;
    advancedFilterTextNotEqual: string;
    advancedFilterStartsWith: string;
    advancedFilterEndsWith: string;
    advancedFilterBlank: string;
    advancedFilterNotBlank: string;
    advancedFilterEquals: string;
    advancedFilterNotEqual: string;
    advancedFilterGreaterThan: string;
    advancedFilterGreaterThanOrEqual: string;
    advancedFilterLessThan: string;
    advancedFilterLessThanOrEqual: string;
    advancedFilterTrue: string;
    advancedFilterFalse: string;
    advancedFilterAnd: string;
    advancedFilterOr: string;
    advancedFilterApply: string;
    advancedFilterBuilder: string;
    advancedFilterValidationMissingColumn: string;
    advancedFilterValidationMissingOption: string;
    advancedFilterValidationMissingValue: string;
    advancedFilterValidationInvalidColumn: string;
    advancedFilterValidationInvalidOption: string;
    advancedFilterValidationMissingQuote: string;
    advancedFilterValidationNotANumber: string;
    advancedFilterValidationInvalidDate: string;
    advancedFilterValidationMissingCondition: string;
    advancedFilterValidationJoinOperatorMismatch: string;
    advancedFilterValidationInvalidJoinOperator: string;
    advancedFilterValidationMissingEndBracket: string;
    advancedFilterValidationExtraEndBracket: string;
    advancedFilterValidationMessage: string;
    advancedFilterValidationMessageAtEnd: string;
    advancedFilterBuilderTitle: string;
    advancedFilterBuilderApply: string;
    advancedFilterBuilderCancel: string;
    advancedFilterBuilderAddButtonTooltip: string;
    advancedFilterBuilderRemoveButtonTooltip: string;
    advancedFilterBuilderMoveUpButtonTooltip: string;
    advancedFilterBuilderMoveDownButtonTooltip: string;
    advancedFilterBuilderAddJoin: string;
    advancedFilterBuilderAddCondition: string;
    advancedFilterBuilderSelectColumn: string;
    advancedFilterBuilderSelectOption: string;
    advancedFilterBuilderEnterValue: string;
    advancedFilterBuilderValidationAlreadyApplied: string;
    advancedFilterBuilderValidationIncomplete: string;
    advancedFilterBuilderValidationSelectColumn: string;
    advancedFilterBuilderValidationSelectOption: string;
    advancedFilterBuilderValidationEnterValue: string;
    columns: string;
    filters: string;
    pivotMode: string;
    groups: string;
    rowGroupColumnsEmptyMessage: string;
    values: string;
    valueColumnsEmptyMessage: string;
    pivots: string;
    pivotColumnsEmptyMessage: string;
    group: string;
    rowDragRow: string;
    rowDragRows: string;
    loadingOoo: string;
    loadingError: string;
    noRowsToShow: string;
    enabled: string;
    pinColumn: string;
    pinLeft: string;
    pinRight: string;
    noPin: string;
    valueAggregation: string;
    noAggregation: string;
    autosizeThiscolumn: string;
    autosizeAllColumns: string;
    groupBy: string;
    ungroupBy: string;
    ungroupAll: string;
    addToValues: string;
    removeFromValues: string;
    addToLabels: string;
    removeFromLabels: string;
    resetColumns: string;
    expandAll: string;
    collapseAll: string;
    copy: string;
    ctrlC: string;
    ctrlX: string;
    copyWithHeaders: string;
    copyWithGroupHeaders: string;
    cut: string;
    paste: string;
    ctrlV: string;
    export: string;
    csvExport: string;
    excelExport: string;
    sum: string;
    first: string;
    last: string;
    min: string;
    max: string;
    none: string;
    count: string;
    avg: string;
    filteredRows: string;
    selectedRows: string;
    totalRows: string;
    totalAndFilteredRows: string;
    more: string;
    to: string;
    of: string;
    page: string;
    pageLastRowUnknown: string;
    nextPage: string;
    lastPage: string;
    firstPage: string;
    previousPage: string;
    pivotColumnGroupTotals: string;
    pivotChartAndPivotMode: string;
    pivotChart: string;
    chartRange: string;
    columnChart: string;
    groupedColumn: string;
    stackedColumn: string;
    normalizedColumn: string;
    barChart: string;
    groupedBar: string;
    stackedBar: string;
    normalizedBar: string;
    pieChart: string;
    pie: string;
    doughnut: string;
    line: string;
    xyChart: string;
    scatter: string;
    bubble: string;
    areaChart: string;
    area: string;
    stackedArea: string;
    normalizedArea: string;
    histogramChart: string;
    histogramFrequency: string;
    combinationChart: string;
    columnLineCombo: string;
    AreaColumnCombo: string;
    pivotChartTitle: string;
    rangeChartTitle: string;
    settings: string;
    data: string;
    format: string;
    categories: string;
    defaultCategory: string;
    series: string;
    xyValues: string;
    paired: string;
    axis: string;
    navigator: string;
    color: string;
    thickness: string;
    xType: string;
    automatic: string;
    category: string;
    number: string;
    time: string;
    autoRotate: string;
    xRotation: string;
    yRotation: string;
    ticks: string;
    width: string;
    height: string;
    length: string;
    padding: string;
    spacing: string;
    chart: string;
    title: string;
    titlePlaceholder: string;
    background: string;
    font: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    labels: string;
    size: string;
    minSize: string;
    maxSize: string;
    legend: string;
    position: string;
    markerSize: string;
    markerStroke: string;
    markerPadding: string;
    itemSpacing: string;
    itemPaddingX: string;
    itemPaddingY: string;
    layoutHorizontalSpacing: string;
    layoutVerticalSpacing: string;
    strokeWidth: string;
    lineDash: string;
    offset: string;
    offsets: string;
    tooltips: string;
    callout: string;
    markers: string;
    shadow: string;
    blur: string;
    xOffset: string;
    yOffset: string;
    lineWidth: string;
    normal: string;
    bold: string;
    italic: string;
    boldItalic: string;
    predefined: string;
    fillOpacity: string;
    strokeOpacity: string;
    histogramBinCount: string;
    columnGroup: string;
    barGroup: string;
    pieGroup: string;
    lineGroup: string;
    scatterGroup: string;
    areaGroup: string;
    histogramGroup: string;
    combinationGroup: string;
    groupedColumnTooltip: string;
    stackedColumnTooltip: string;
    normalizedColumnTooltip: string;
    groupedBarTooltip: string;
    stackedBarTooltip: string;
    normalizedBarTooltip: string;
    pieTooltip: string;
    doughnutTooltip: string;
    lineTooltip: string;
    groupedAreaTooltip: string;
    stackedAreaTooltip: string;
    normalizedAreaTooltip: string;
    scatterTooltip: string;
    bubbleTooltip: string;
    histogramTooltip: string;
    columnLineComboTooltip: string;
    areaColumnComboTooltip: string;
    customComboTooltip: string;
    noDataToChart: string;
    pivotChartRequiresPivotMode: string;
    chartSettingsToolbarTooltip: string;
    chartLinkToolbarTooltip: string;
    chartUnlinkToolbarTooltip: string;
    chartDownloadToolbarTooltip: string;
    seriesChartType: string;
    seriesType: string;
    secondaryAxis: string;
    ariaAdvancedFilterBuilderItem: string;
    ariaAdvancedFilterBuilderItemValidation: string;
    ariaAdvancedFilterBuilderList: string;
    ariaAdvancedFilterBuilderFilterItem: string;
    ariaAdvancedFilterBuilderGroupItem: string;
    ariaAdvancedFilterBuilderColumn: string;
    ariaAdvancedFilterBuilderOption: string;
    ariaAdvancedFilterBuilderValueP: string;
    ariaAdvancedFilterBuilderJoinOperator: string;
    ariaAdvancedFilterInput: string;
    ariaChecked: string;
    ariaColumn: string;
    ariaColumnGroup: string;
    ariaColumnList: string;
    ariaColumnSelectAll: string;
    ariaDateFilterInput: string;
    ariaDefaultListName: string;
    ariaFilterColumnsInput: string;
    ariaFilterFromValue: string;
    ariaFilterInput: string;
    ariaFilterList: string;
    ariaFilterToValue: string;
    ariaFilterValue: string;
    ariaFilterMenuOpen: string;
    ariaFilteringOperator: string;
    ariaHidden: string;
    ariaIndeterminate: string;
    ariaInputEditor: string;
    ariaMenuColumn: string;
    ariaRowDeselect: string;
    ariaRowSelectAll: string;
    ariaRowToggleSelection: string;
    ariaRowSelect: string;
    ariaSearch: string;
    ariaSortableColumn: string;
    ariaToggleVisibility: string;
    ariaToggleCellValue: string;
    ariaUnchecked: string;
    ariaVisible: string;
    ariaSearchFilterValues: string;
    ariaRowGroupDropZonePanelLabel: string;
    ariaValuesDropZonePanelLabel: string;
    ariaPivotDropZonePanelLabel: string;
    ariaDropZoneColumnComponentDescription: string;
    ariaDropZoneColumnValueItemDescription: string;
    ariaDropZoneColumnGroupItemDescription: string;
    ariaDropZoneColumnComponentAggFuncSeparator: string;
    ariaDropZoneColumnComponentSortAscending: string;
    ariaDropZoneColumnComponentSortDescending: string;
    ariaLabelColumnMenu: string;
    ariaLabelCellEditor: string;
    ariaLabelDialog: string;
    ariaLabelSelectField: string;
    ariaLabelRichSelectField: string;
    ariaLabelTooltip: string;
    ariaLabelContextMenu: string;
    ariaLabelSubMenu: string;
    ariaLabelAggregationFunction: string;
    ariaLabelAdvancedFilterAutocomplete: string;
    ariaLabelAdvancedFilterBuilderAddField: string;
    ariaLabelAdvancedFilterBuilderColumnSelectField: string;
    ariaLabelAdvancedFilterBuilderOptionSelectField: string;
    ariaLabelAdvancedFilterBuilderJoinSelectField: string;
    thousandSeparator: string;
    decimalSeparator: string;
    true: string;
    false: string;
    invalidDate: string;
    invalidNumber: string;
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
  };
  export default AG_GRID_LOCALE_ZH;
}
declare module "EFX/theme" {
  export const getTheme: () => "default" | "ghostShark";
  /**
   * 换取antd主题配置
   * @returns
   */
  export const getAntdTheme: () =>
    | {
        token: {
          fontSize: number;
          sizeStep: number;
          borderRadius: number;
          wireframe: boolean;
          colorPrimary: string;
        };
        components: {
          Tabs: {
            colorFillAlter: string;
            colorBgContainer: string;
            colorPrimary: string;
            colorText: string;
            colorSplit: string;
            colorBorder: string;
            colorPrimaryBorder: string;
            lineHeight: number;
          };
        };
      }
    | {
        token: {
          fontSize: number;
          sizeStep: number;
          borderRadius: number;
          wireframe: boolean;
          colorPrimary: string;
          colorPrimaryBorder: string;
          colorPrimaryBorderHover: string;
          colorPrimaryText: string;
        };
        components: {
          Button: {
            colorBgContainer: string;
            colorBorder: string;
            colorText: string;
          };
          Form: {
            colorPrimary: string;
            colorTextHeading: string;
            colorTextDescription: string;
            colorText: string;
            colorBorder: string;
            controlOutline: string;
            colorError: string;
          };
          Input: {
            colorBgContainer: string;
            colorBorder: string;
            colorIconHover: string;
            colorPrimaryActive: string;
            colorBgContainerDisabled: string;
            colorText: string;
          };
          Checkbox: {
            colorBgContainer: string;
            colorBorder: string;
          };
          InputNumber: {
            colorBgContainer: string;
            colorBorder: string;
            colorIconHover: string;
            colorPrimaryActive: string;
            colorBgContainerDisabled: string;
            colorText: string;
          };
          Radio: {
            colorBgContainer: string;
            colorBgContainerDisabled: string;
          };
          Switch: {
            colorPrimary: string;
            colorBgContainer: string;
          };
          TreeSelect: {
            colorBgContainer: string;
          };
          Tabs: {
            colorPrimaryActive: string;
            colorBgContainer: string;
            colorPrimary: string;
            colorFillAlter: string;
            colorSplit: string;
            colorText: string;
          };
          Select: {
            colorBgContainer: string;
            colorBgContainerDisabled: string;
            colorBgElevated: string;
            controlItemBgActive: string;
            colorBorder: string;
            colorText: string;
          };
          DatePicker: {
            colorBgContainer: string;
            colorBgContainerDisabled: string;
            colorBorder: string;
            colorText: string;
            colorBgElevated: string;
          };
          Calendar: {
            colorBgContainer: string;
          };
        };
      };
  /**
   * 换肤
   * @param theme 主题
   * @param reload 是否强制换肤
   */
  export const changeTheme: (theme?: string, reload?: boolean) => void;
}
declare module "EFX/xrEfSelect" {
  import type { PropType } from "vue";
  interface xrEfSelectOptions {
    multiple?: boolean;
    valueField: string;
    textField: string;
    tokenSeparators?: string;
    appendTo?: string;
    format?: string | any;
    resizable?: boolean;
  }
  const _default: import("vue").DefineComponent<
    {
      modelValue: PropType<any>;
      id: {
        type: StringConstructor;
      };
      width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      columns: {
        type: ArrayConstructor;
        required: true;
      };
      data: {
        type: ArrayConstructor;
        required: true;
      };
      options: {
        type: PropType<xrEfSelectOptions>;
        required: true;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      change: (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        modelValue: PropType<any>;
        id: {
          type: StringConstructor;
        };
        width: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        height: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        columns: {
          type: ArrayConstructor;
          required: true;
        };
        data: {
          type: ArrayConstructor;
          required: true;
        };
        options: {
          type: PropType<xrEfSelectOptions>;
          required: true;
        };
      }>
    > & {
      onChange?: ((...args: any[]) => any) | undefined;
    },
    {
      width: string | number;
      height: string | number;
    },
    {}
  >;
  export default _default;
}

declare module "EFX/xrEfPartitionSelect" {
  import type { PropType } from "vue";
  interface xrEfSelectOptions {
    valueField: string;
    textField: string;
    tokenSeparators?: string;
    appendTo?: string;
    format?: string | any;
    resizable?: boolean;
  }
  const _default: import("vue").DefineComponent<
    {
      modelValue: PropType<any>;
      id: {
        type: StringConstructor;
      };
      width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
      };
      columns: {
        type: ArrayConstructor;
        required: true;
      };
      data: {
        type: ArrayConstructor;
        required: true;
      };
      options: {
        type: PropType<xrEfSelectOptions>;
        required: true;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      change: (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        modelValue: PropType<any>;
        id: {
          type: StringConstructor;
        };
        width: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        height: {
          type: (NumberConstructor | StringConstructor)[];
          default: string;
        };
        columns: {
          type: ArrayConstructor;
          required: true;
        };
        data: {
          type: ArrayConstructor;
          required: true;
        };
        options: {
          type: PropType<xrEfSelectOptions>;
          required: true;
        };
      }>
    > & {
      onChange?: ((...args: any[]) => any) | undefined;
    },
    {
      width: string | number;
      height: string | number;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/authButton" {
  interface Props {
    name: string;
    text?: string;
    class?: string;
  }
  const _default: import("vue").DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<Props>,
      {
        name: string;
        text: string;
        class: string;
      }
    >,
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      click: (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<Props>,
          {
            name: string;
            text: string;
            class: string;
          }
        >
      >
    > & {
      onClick?: ((...args: any[]) => any) | undefined;
    },
    {
      text: string;
      name: string;
      class: string;
    },
    {}
  >;
  export default _default;
  type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
  type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K>
      ? {
          type: import("vue").PropType<__VLS_NonUndefinedable<T[K]>>;
        }
      : {
          type: import("vue").PropType<T[K]>;
          required: true;
        };
  };
  type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D
      ? __VLS_Prettify<
          P[K] & {
            default: D[K];
          }
        >
      : P[K];
  };
  type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};
}
declare module "EFX/EFModuleUtils" {
  /**
   * 获取用户自定义配置
   * @param cfgKey 可选参数，键名, 不传或传undefined时返回所有配置项
   * @param cfgName 可选参数，返回cfgName对应的配置
   * @returns Promise
   */
  const getAppConfig: (
    cfgKey?: string | any,
    cfgName?: string
  ) => Promise<unknown>;
  /**
   * 修改更新用户自定义配置
   * @param config 配置信息
   * @param cfgName 可选参数，设置cfgName对应的配置
   */
  const setAppConfig: (config: object | any, cfgName?: string) => Promise<void>;
  export { getAppConfig, setAppConfig };
}
declare module "EFX/EFFrameUtils" {
  /**
   * @description 回到上一个tab页
   */
  const goToPreviousTab: () => void;
  export { goToPreviousTab };
}
declare module "EFX/getAppConfig" {
  /**
   * 传入应用名获取对应配置信息
   * @param cfgKey 键名
   * @param isCommon 可选参数，是否查询COMMON
   * @returns Promise
   */
  const getAppConfig: (
    cfgKey?: string | any,
    isCommon?: boolean
  ) => Promise<unknown>;
  export default getAppConfig;
}
declare module "EFX/setAppConfig" {
  /**
   * 传入应用名、config更新对应的配置信息
   * @param config 配置信息
   * @param isCommon 可选参数，是否设置COMMON
   */
  const setAppConfig: (
    config: object | any,
    isCommon?: boolean
  ) => Promise<void>;
  export default setAppConfig;
}
declare module "EFX/EFMicroUtils" {
  global {
    interface Window {
      __POWERED_BY_WUJIE__?: boolean;
      $wujie?: any;
      __MICRO_APP_ENVIRONMENT__?: boolean;
      __MICRO_APP_NAME__?: string;
      microApp?: any;
    }
  }
  type EventHandler = (data?: any) => void;
  /**
   * EFMicroBus 事件总线类，用于微前端环境中的事件通信。
   * @class EFMicroBus
   */
  class EFMicroBus {
    private microAppHandlers;
    private wujieAppHandlers;
    private microAppListenerRegistered;
    /**
     * 发布事件
     * @param {string} id - 事件 ID。
     * @param {any} [data] - 事件数据（可选）。
     * @returns {void}
     */
    emit(id: string, data?: any): void;
    /**
     * 订阅事件
     * @param {string} id - 事件 ID。
     * @param {EventHandler} handler - 事件处理器。
     * @returns {void}
     */
    on(id: string, handler: EventHandler): void;
    /**
     * 取消订阅事件
     * @param {string} id - 事件 ID。
     * @param {EventHandler} [handler] - 事件处理器（可选）。
     * @returns {void}
     */
    off(id: string, handler?: EventHandler): void;
  }
  /**
   * EF 微前端工具类，提供微前端环境判断和事件总线功能。
   * @class EFMicroUtils
   */
  class EFMicroUtils {
    private static microBusInstance;
    /**
     * 获取 EFMicroBus 实例，用于事件发布和订阅。
     * @returns {EFMicroBus} 返回 EFMicroBus 实例，包含以下方法：
     * - `emit(id: string, data?: any): void`：发布事件。
     * - `on(id: string, handler: EventHandler): void`：订阅事件。
     * - `off(id: string, handler?: EventHandler): void`：取消订阅事件。
     * @example
     * // 使用示例
     * EFMicroUtils.bus.on('event-id', (data) => {
     *   console.log('收到事件:', data);
     * });
     * EFMicroUtils.bus.emit('event-id', { message: 'Hello, Micro Frontend!' });
     */
    static get bus(): EFMicroBus;
    /**
     * 判断当前是否处于微前端环境。
     * @returns {boolean} 返回 `true` 表示当前处于微前端环境，否则返回 `false`。
     * @example
     * if (EFMicroUtils.isMicroEnv) {
     *   console.log('当前处于微前端环境');
     * }
     */
    static get isMicroEnv(): boolean;
    /**
     * 获取当前微前端环境类型。
     * @returns {string} 返回微前端环境类型：
     * - `'wujie'`：基于无界平台的微前端环境。
     * - `'micro-app'`：基于jd微应用的微前端环境。
     * - `'none'`：非微前端环境。
     */
    static get microEnv(): "none" | "wujie" | "micro-app";
    /**
     * 获取当前微前端环境中的应用id。
     * @returns {string} 返回当前微前端环境中的应用id。
     */
    static get microAppId(): any;
  }
  export default EFMicroUtils;
}
declare module "EFX/agMultiDropDownEditor" {
  const _default: import("vue").DefineComponent<
    Readonly<{
      params?: any;
    }>,
    {
      agLocaleText: {};
      isRtl: any;
      agWidth: import("vue").Ref<any>;
      agHeight: import("vue").Ref<any>;
      searchValue: import("vue").Ref<any>;
      columnDefs: import("vue").Ref<never[]>;
      rowData: import("vue").Ref<never[]>;
      defaultColDef: import("vue").Ref<{
        editable: boolean;
      }>;
      rowMultiSelect: import("vue").ComputedRef<"multiple" | "single">;
      rowClicked: () => void;
      cellClicked: () => void;
      onGridReady: (e: any) => void;
      firstDataRendered: (e: any) => void;
      getValue: () => any;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<
        Readonly<{
          params?: any;
        }>
      >
    >,
    {
      readonly params?: any;
    },
    {}
  >;
  export default _default;
}

declare module "EFX/agDateEditor" {
  const _default: import("vue").DefineComponent<
    Readonly<{
      params?: any;
    }>,
    {
      showTime: any;
      tI18n: {
        <
          Key extends string,
          DefinedLocaleMessage extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage> extends false
            ? import("vue-i18n").PickupPaths<{
                [K in keyof DefinedLocaleMessage]: DefinedLocaleMessage[K];
              }>
            : never,
          ResourceKeys extends Keys = import("vue-i18n").IsNever<Keys> extends false
            ? Keys
            : never
        >(
          key: string | Key | ResourceKeys
        ): string;
        <
          Key_1 extends string,
          DefinedLocaleMessage_1 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_1 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_1> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_1 in keyof DefinedLocaleMessage_1]: DefinedLocaleMessage_1[K_1];
              }>
            : never,
          ResourceKeys_1 extends Keys_1 = import("vue-i18n").IsNever<Keys_1> extends false
            ? Keys_1
            : never
        >(
          key: string | Key_1 | ResourceKeys_1
        ): string;
        <
          Key_2 extends string,
          DefinedLocaleMessage_2 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_2 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_2> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_2 in keyof DefinedLocaleMessage_2]: DefinedLocaleMessage_2[K_2];
              }>
            : never,
          ResourceKeys_2 extends Keys_2 = import("vue-i18n").IsNever<Keys_2> extends false
            ? Keys_2
            : never
        >(
          key: string | Key_2 | ResourceKeys_2,
          locale: string,
          list: unknown[]
        ): string;
        <
          Key_3 extends string,
          DefinedLocaleMessage_3 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_3 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_3> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_3 in keyof DefinedLocaleMessage_3]: DefinedLocaleMessage_3[K_3];
              }>
            : never,
          ResourceKeys_3 extends Keys_3 = import("vue-i18n").IsNever<Keys_3> extends false
            ? Keys_3
            : never
        >(
          key: string | Key_3 | ResourceKeys_3,
          locale: string,
          named: object
        ): string;
        <
          Key_4 extends string,
          DefinedLocaleMessage_4 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_4 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_4> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_4 in keyof DefinedLocaleMessage_4]: DefinedLocaleMessage_4[K_4];
              }>
            : never,
          ResourceKeys_4 extends Keys_4 = import("vue-i18n").IsNever<Keys_4> extends false
            ? Keys_4
            : never
        >(
          key: string | Key_4 | ResourceKeys_4,
          list: unknown[]
        ): string;
        <
          Key_5 extends string,
          DefinedLocaleMessage_5 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_5 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_5> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_5 in keyof DefinedLocaleMessage_5]: DefinedLocaleMessage_5[K_5];
              }>
            : never,
          ResourceKeys_5 extends Keys_5 = import("vue-i18n").IsNever<Keys_5> extends false
            ? Keys_5
            : never
        >(
          key: string | Key_5 | ResourceKeys_5,
          named: Record<string, unknown>
        ): string;
        <
          Key_6 extends string,
          DefinedLocaleMessage_6 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_6 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_6> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_6 in keyof DefinedLocaleMessage_6]: DefinedLocaleMessage_6[K_6];
              }>
            : never,
          ResourceKeys_6 extends Keys_6 = import("vue-i18n").IsNever<Keys_6> extends false
            ? Keys_6
            : never
        >(
          key: string | Key_6 | ResourceKeys_6
        ): string;
        <
          Key_7 extends string,
          DefinedLocaleMessage_7 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_7 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_7> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_7 in keyof DefinedLocaleMessage_7]: DefinedLocaleMessage_7[K_7];
              }>
            : never,
          ResourceKeys_7 extends Keys_7 = import("vue-i18n").IsNever<Keys_7> extends false
            ? Keys_7
            : never
        >(
          key: string | Key_7 | ResourceKeys_7,
          plural: number
        ): string;
        <
          Key_8 extends string,
          DefinedLocaleMessage_8 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_8 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_8> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_8 in keyof DefinedLocaleMessage_8]: DefinedLocaleMessage_8[K_8];
              }>
            : never,
          ResourceKeys_8 extends Keys_8 = import("vue-i18n").IsNever<Keys_8> extends false
            ? Keys_8
            : never
        >(
          key: string | Key_8 | ResourceKeys_8,
          plural: number,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_9 extends string,
          DefinedLocaleMessage_9 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_9 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_9> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_9 in keyof DefinedLocaleMessage_9]: DefinedLocaleMessage_9[K_9];
              }>
            : never,
          ResourceKeys_9 extends Keys_9 = import("vue-i18n").IsNever<Keys_9> extends false
            ? Keys_9
            : never
        >(
          key: string | Key_9 | ResourceKeys_9,
          defaultMsg: string
        ): string;
        <
          Key_10 extends string,
          DefinedLocaleMessage_10 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_10 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_10> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_10 in keyof DefinedLocaleMessage_10]: DefinedLocaleMessage_10[K_10];
              }>
            : never,
          ResourceKeys_10 extends Keys_10 = import("vue-i18n").IsNever<Keys_10> extends false
            ? Keys_10
            : never
        >(
          key: string | Key_10 | ResourceKeys_10,
          defaultMsg: string,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_11 extends string,
          DefinedLocaleMessage_11 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_11 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_11> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_11 in keyof DefinedLocaleMessage_11]: DefinedLocaleMessage_11[K_11];
              }>
            : never,
          ResourceKeys_11 extends Keys_11 = import("vue-i18n").IsNever<Keys_11> extends false
            ? Keys_11
            : never
        >(
          key: string | Key_11 | ResourceKeys_11,
          list: unknown[]
        ): string;
        <
          Key_12 extends string,
          DefinedLocaleMessage_12 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_12 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_12> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_12 in keyof DefinedLocaleMessage_12]: DefinedLocaleMessage_12[K_12];
              }>
            : never,
          ResourceKeys_12 extends Keys_12 = import("vue-i18n").IsNever<Keys_12> extends false
            ? Keys_12
            : never
        >(
          key: string | Key_12 | ResourceKeys_12,
          list: unknown[],
          plural: number
        ): string;
        <
          Key_13 extends string,
          DefinedLocaleMessage_13 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_13 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_13> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_13 in keyof DefinedLocaleMessage_13]: DefinedLocaleMessage_13[K_13];
              }>
            : never,
          ResourceKeys_13 extends Keys_13 = import("vue-i18n").IsNever<Keys_13> extends false
            ? Keys_13
            : never
        >(
          key: string | Key_13 | ResourceKeys_13,
          list: unknown[],
          defaultMsg: string
        ): string;
        <
          Key_14 extends string,
          DefinedLocaleMessage_14 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_14 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_14> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_14 in keyof DefinedLocaleMessage_14]: DefinedLocaleMessage_14[K_14];
              }>
            : never,
          ResourceKeys_14 extends Keys_14 = import("vue-i18n").IsNever<Keys_14> extends false
            ? Keys_14
            : never
        >(
          key: string | Key_14 | ResourceKeys_14,
          list: unknown[],
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
        <
          Key_15 extends string,
          DefinedLocaleMessage_15 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_15 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_15> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_15 in keyof DefinedLocaleMessage_15]: DefinedLocaleMessage_15[K_15];
              }>
            : never,
          ResourceKeys_15 extends Keys_15 = import("vue-i18n").IsNever<Keys_15> extends false
            ? Keys_15
            : never
        >(
          key: string | Key_15 | ResourceKeys_15,
          named: Record<string, unknown>
        ): string;
        <
          Key_16 extends string,
          DefinedLocaleMessage_16 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_16 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_16> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_16 in keyof DefinedLocaleMessage_16]: DefinedLocaleMessage_16[K_16];
              }>
            : never,
          ResourceKeys_16 extends Keys_16 = import("vue-i18n").IsNever<Keys_16> extends false
            ? Keys_16
            : never
        >(
          key: string | Key_16 | ResourceKeys_16,
          named: Record<string, unknown>,
          plural: number
        ): string;
        <
          Key_17 extends string,
          DefinedLocaleMessage_17 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_17 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_17> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_17 in keyof DefinedLocaleMessage_17]: DefinedLocaleMessage_17[K_17];
              }>
            : never,
          ResourceKeys_17 extends Keys_17 = import("vue-i18n").IsNever<Keys_17> extends false
            ? Keys_17
            : never
        >(
          key: string | Key_17 | ResourceKeys_17,
          named: Record<string, unknown>,
          defaultMsg: string
        ): string;
        <
          Key_18 extends string,
          DefinedLocaleMessage_18 extends import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }> = import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<
              import("vue-i18n").VueMessageType
            >;
          }>,
          Keys_18 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_18> extends false
            ? import("vue-i18n").PickupPaths<{
                [K_18 in keyof DefinedLocaleMessage_18]: DefinedLocaleMessage_18[K_18];
              }>
            : never,
          ResourceKeys_18 extends Keys_18 = import("vue-i18n").IsNever<Keys_18> extends false
            ? Keys_18
            : never
        >(
          key: string | Key_18 | ResourceKeys_18,
          named: Record<string, unknown>,
          options: import("vue-i18n").TranslateOptions<string>
        ): string;
      };
      localDateTime: any;
      getValue: () => any;
      onChange: (e: any) => Promise<void>;
      onOk: (e: any) => Promise<void>;
    },
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<
        Readonly<{
          params?: any;
        }>
      >
    >,
    {
      readonly params?: any;
    },
    {}
  >;
  export default _default;
}

declare module "EFX/useI18n" {
  export default function useI18n(): {
    $t: {
      <
        Key extends string,
        DefinedLocaleMessage extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage> extends false
          ? import("vue-i18n").PickupPaths<{
              [K in keyof DefinedLocaleMessage]: DefinedLocaleMessage[K];
            }>
          : never,
        ResourceKeys extends Keys = import("vue-i18n").IsNever<Keys> extends false
          ? Keys
          : never
      >(
        key: string | Key | ResourceKeys
      ): string;
      <
        Key_1 extends string,
        DefinedLocaleMessage_1 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_1 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_1> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_1 in keyof DefinedLocaleMessage_1]: DefinedLocaleMessage_1[K_1];
            }>
          : never,
        ResourceKeys_1 extends Keys_1 = import("vue-i18n").IsNever<Keys_1> extends false
          ? Keys_1
          : never
      >(
        key: string | Key_1 | ResourceKeys_1
      ): string;
      <
        Key_2 extends string,
        DefinedLocaleMessage_2 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_2 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_2> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_2 in keyof DefinedLocaleMessage_2]: DefinedLocaleMessage_2[K_2];
            }>
          : never,
        ResourceKeys_2 extends Keys_2 = import("vue-i18n").IsNever<Keys_2> extends false
          ? Keys_2
          : never
      >(
        key: string | Key_2 | ResourceKeys_2,
        locale: string,
        list: unknown[]
      ): string;
      <
        Key_3 extends string,
        DefinedLocaleMessage_3 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_3 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_3> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_3 in keyof DefinedLocaleMessage_3]: DefinedLocaleMessage_3[K_3];
            }>
          : never,
        ResourceKeys_3 extends Keys_3 = import("vue-i18n").IsNever<Keys_3> extends false
          ? Keys_3
          : never
      >(
        key: string | Key_3 | ResourceKeys_3,
        locale: string,
        named: object
      ): string;
      <
        Key_4 extends string,
        DefinedLocaleMessage_4 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_4 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_4> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_4 in keyof DefinedLocaleMessage_4]: DefinedLocaleMessage_4[K_4];
            }>
          : never,
        ResourceKeys_4 extends Keys_4 = import("vue-i18n").IsNever<Keys_4> extends false
          ? Keys_4
          : never
      >(
        key: string | Key_4 | ResourceKeys_4,
        list: unknown[]
      ): string;
      <
        Key_5 extends string,
        DefinedLocaleMessage_5 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_5 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_5> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_5 in keyof DefinedLocaleMessage_5]: DefinedLocaleMessage_5[K_5];
            }>
          : never,
        ResourceKeys_5 extends Keys_5 = import("vue-i18n").IsNever<Keys_5> extends false
          ? Keys_5
          : never
      >(
        key: string | Key_5 | ResourceKeys_5,
        named: Record<string, unknown>
      ): string;
      <
        Key_6 extends string,
        DefinedLocaleMessage_6 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_6 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_6> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_6 in keyof DefinedLocaleMessage_6]: DefinedLocaleMessage_6[K_6];
            }>
          : never,
        ResourceKeys_6 extends Keys_6 = import("vue-i18n").IsNever<Keys_6> extends false
          ? Keys_6
          : never
      >(
        key: string | Key_6 | ResourceKeys_6
      ): string;
      <
        Key_7 extends string,
        DefinedLocaleMessage_7 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_7 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_7> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_7 in keyof DefinedLocaleMessage_7]: DefinedLocaleMessage_7[K_7];
            }>
          : never,
        ResourceKeys_7 extends Keys_7 = import("vue-i18n").IsNever<Keys_7> extends false
          ? Keys_7
          : never
      >(
        key: string | Key_7 | ResourceKeys_7,
        plural: number
      ): string;
      <
        Key_8 extends string,
        DefinedLocaleMessage_8 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_8 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_8> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_8 in keyof DefinedLocaleMessage_8]: DefinedLocaleMessage_8[K_8];
            }>
          : never,
        ResourceKeys_8 extends Keys_8 = import("vue-i18n").IsNever<Keys_8> extends false
          ? Keys_8
          : never
      >(
        key: string | Key_8 | ResourceKeys_8,
        plural: number,
        options: import("vue-i18n").TranslateOptions<string>
      ): string;
      <
        Key_9 extends string,
        DefinedLocaleMessage_9 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_9 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_9> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_9 in keyof DefinedLocaleMessage_9]: DefinedLocaleMessage_9[K_9];
            }>
          : never,
        ResourceKeys_9 extends Keys_9 = import("vue-i18n").IsNever<Keys_9> extends false
          ? Keys_9
          : never
      >(
        key: string | Key_9 | ResourceKeys_9,
        defaultMsg: string
      ): string;
      <
        Key_10 extends string,
        DefinedLocaleMessage_10 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_10 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_10> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_10 in keyof DefinedLocaleMessage_10]: DefinedLocaleMessage_10[K_10];
            }>
          : never,
        ResourceKeys_10 extends Keys_10 = import("vue-i18n").IsNever<Keys_10> extends false
          ? Keys_10
          : never
      >(
        key: string | Key_10 | ResourceKeys_10,
        defaultMsg: string,
        options: import("vue-i18n").TranslateOptions<string>
      ): string;
      <
        Key_11 extends string,
        DefinedLocaleMessage_11 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_11 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_11> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_11 in keyof DefinedLocaleMessage_11]: DefinedLocaleMessage_11[K_11];
            }>
          : never,
        ResourceKeys_11 extends Keys_11 = import("vue-i18n").IsNever<Keys_11> extends false
          ? Keys_11
          : never
      >(
        key: string | Key_11 | ResourceKeys_11,
        list: unknown[]
      ): string;
      <
        Key_12 extends string,
        DefinedLocaleMessage_12 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_12 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_12> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_12 in keyof DefinedLocaleMessage_12]: DefinedLocaleMessage_12[K_12];
            }>
          : never,
        ResourceKeys_12 extends Keys_12 = import("vue-i18n").IsNever<Keys_12> extends false
          ? Keys_12
          : never
      >(
        key: string | Key_12 | ResourceKeys_12,
        list: unknown[],
        plural: number
      ): string;
      <
        Key_13 extends string,
        DefinedLocaleMessage_13 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_13 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_13> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_13 in keyof DefinedLocaleMessage_13]: DefinedLocaleMessage_13[K_13];
            }>
          : never,
        ResourceKeys_13 extends Keys_13 = import("vue-i18n").IsNever<Keys_13> extends false
          ? Keys_13
          : never
      >(
        key: string | Key_13 | ResourceKeys_13,
        list: unknown[],
        defaultMsg: string
      ): string;
      <
        Key_14 extends string,
        DefinedLocaleMessage_14 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_14 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_14> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_14 in keyof DefinedLocaleMessage_14]: DefinedLocaleMessage_14[K_14];
            }>
          : never,
        ResourceKeys_14 extends Keys_14 = import("vue-i18n").IsNever<Keys_14> extends false
          ? Keys_14
          : never
      >(
        key: string | Key_14 | ResourceKeys_14,
        list: unknown[],
        options: import("vue-i18n").TranslateOptions<string>
      ): string;
      <
        Key_15 extends string,
        DefinedLocaleMessage_15 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_15 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_15> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_15 in keyof DefinedLocaleMessage_15]: DefinedLocaleMessage_15[K_15];
            }>
          : never,
        ResourceKeys_15 extends Keys_15 = import("vue-i18n").IsNever<Keys_15> extends false
          ? Keys_15
          : never
      >(
        key: string | Key_15 | ResourceKeys_15,
        named: Record<string, unknown>
      ): string;
      <
        Key_16 extends string,
        DefinedLocaleMessage_16 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_16 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_16> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_16 in keyof DefinedLocaleMessage_16]: DefinedLocaleMessage_16[K_16];
            }>
          : never,
        ResourceKeys_16 extends Keys_16 = import("vue-i18n").IsNever<Keys_16> extends false
          ? Keys_16
          : never
      >(
        key: string | Key_16 | ResourceKeys_16,
        named: Record<string, unknown>,
        plural: number
      ): string;
      <
        Key_17 extends string,
        DefinedLocaleMessage_17 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_17 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_17> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_17 in keyof DefinedLocaleMessage_17]: DefinedLocaleMessage_17[K_17];
            }>
          : never,
        ResourceKeys_17 extends Keys_17 = import("vue-i18n").IsNever<Keys_17> extends false
          ? Keys_17
          : never
      >(
        key: string | Key_17 | ResourceKeys_17,
        named: Record<string, unknown>,
        defaultMsg: string
      ): string;
      <
        Key_18 extends string,
        DefinedLocaleMessage_18 extends import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }> = import("@intlify/core-base").RemoveIndexSignature<{
          [x: string]: import("vue-i18n").LocaleMessageValue<
            import("vue-i18n").VueMessageType
          >;
        }>,
        Keys_18 = import("vue-i18n").IsEmptyObject<DefinedLocaleMessage_18> extends false
          ? import("vue-i18n").PickupPaths<{
              [K_18 in keyof DefinedLocaleMessage_18]: DefinedLocaleMessage_18[K_18];
            }>
          : never,
        ResourceKeys_18 extends Keys_18 = import("vue-i18n").IsNever<Keys_18> extends false
          ? Keys_18
          : never
      >(
        key: string | Key_18 | ResourceKeys_18,
        named: Record<string, unknown>,
        options: import("vue-i18n").TranslateOptions<string>
      ): string;
    };
  };
}

declare module "EFX/locale" {
  import { Locale } from "ant-design-vue/es/locale";
  import "dayjs/locale/zh-cn";
  import "dayjs/locale/zh-hk";
  import "dayjs/locale/en";
  import "dayjs/locale/ar";
  /**
   * @description: 获取当前需要切换的语言类型
   * @param {*} string
   * @return {*}
   */
  export const getLocale: () => string;
  export let vueI18n: any;
  const getVueI18n: (
    messages: any
  ) => import("vue-i18n").I18n<any, {}, {}, string, false>;
  export const getVueI18nInstance: () => any;
  /**
   * @description: 切换语言
   * @param {*} locale "zh_Hans" | 'en' | 'ar'
   * @param {*} realReload
   * @return {*}
   */
  export const setI18nLanguage: (locale: string, realReload?: boolean) => void;
  export const getAgLocaleText: () => {};
  export const getAntdLocale: () => Locale;
  export const getDayjsLocale: () => string;
  /**
   * @description: 自定义dayjs本地化的语言配置formats
   * @param {any} dayjsUpdateLocale
   * @return {*}
   */
  export const customDayjsLocale: (dayjsUpdateLocale: any) => void;
  /**
   * @description: 获取当前语言模式下的画面布局方向
   * @return {*}
   */
  export const isRTL: () => any;
  export default getVueI18n;
}
declare module "EFX/efMessager" {
  const registerModuleMessage: (
    moduleName: string,
    topic: string,
    messageReceiveCallback: (
      topic: string,
      message: string,
      packet?: any
    ) => void
  ) => void;
}

declare module "EFX/xrEfExportJsonDialog" {
  /// <reference types="#/@mf-types/eix" />
  import { EI } from "EIX/ei";
  const _default: import("vue").DefineComponent<
    {
      visible: {
        type: BooleanConstructor;
        default: () => boolean;
      };
      exportDataInfo: {
        type: typeof EI.EIInfo;
        default: () => EI.EIInfo;
      };
      exportServiceName: {
        type: StringConstructor;
        default: () => string;
      };
      partition: {
        type: StringConstructor;
        default: () => string;
      };
      keyColumnNames: {
        type: ArrayConstructor;
        required: true;
        validator: (value: string[]) => boolean;
      };
      fileName: {
        type: StringConstructor;
        default: () => string;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      "update:visible": (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        visible: {
          type: BooleanConstructor;
          default: () => boolean;
        };
        exportDataInfo: {
          type: typeof EI.EIInfo;
          default: () => EI.EIInfo;
        };
        exportServiceName: {
          type: StringConstructor;
          default: () => string;
        };
        partition: {
          type: StringConstructor;
          default: () => string;
        };
        keyColumnNames: {
          type: ArrayConstructor;
          required: true;
          validator: (value: string[]) => boolean;
        };
        fileName: {
          type: StringConstructor;
          default: () => string;
        };
      }>
    > & {
      "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    },
    {
      visible: boolean;
      fileName: string;
      exportDataInfo: EI.EIInfo;
      exportServiceName: string;
      partition: string;
    },
    {}
  >;
  export default _default;
}
declare module "EFX/xrEfImportJsonDialog" {
  const _default: import("vue").DefineComponent<
    {
      visible: {
        type: BooleanConstructor;
        default: () => boolean;
      };
      importServiceName: {
        type: StringConstructor;
        default: () => string;
      };
      partition: {
        type: StringConstructor;
        default: () => string;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      "update:visible": (...args: any[]) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        visible: {
          type: BooleanConstructor;
          default: () => boolean;
        };
        importServiceName: {
          type: StringConstructor;
          default: () => string;
        };
        partition: {
          type: StringConstructor;
          default: () => string;
        };
      }>
    > & {
      "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    },
    {
      visible: boolean;
      partition: string;
      importServiceName: string;
    },
    {}
  >;
  export default _default;
}

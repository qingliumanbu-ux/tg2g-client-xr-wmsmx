///<reference types="../EIX" />
declare module "ERX/er-type" {
  export interface DialogResult {
    result: 'ok' | 'cancel' | 'yes' | 'no' | 'none';
    context?: any;
  }
  /**
   * ErPopFree组件返回参数
   */
  export interface PopFreeReturnInfo {
    sender: any;
    dialogResult: 'ok' | 'cancel' | 'none';
    dialogColseType?: string;
    formHelper: any;
    dataModel: any;
    modelId?: string;
    isModified: boolean;
    context?: any;
  }
  /**
   * ErPopQuery组件返回参数
   */
  export interface PopQueryReturnInfo {
    sender: any;
    dialogResult: 'ok' | 'cancel' | 'clear' | 'none';
    dialogColseType?: string;
    formHelper: any;
    modelId: string;
    checkedItem?: any;
    checkedItemArray?: any[];
    checkedCodes?: string;
    checkedDescs?: string;
    context?: any;
  }
  export interface PopFormReturnInfo {
    sender: any;
    dialogResult: 'ok' | 'cancel' | 'none';
    dialogColseType?: string;
    formHelper: any;
    dataModel: any;
    modelId?: string;
    isModified: boolean;
    context?: any;
  }
  /**
   * ErPopTree组件返回参数
   */
  export interface PopTreeReturnInfo {
    sender: any;
    dialogResult: 'ok' | 'cancel' | 'clear' | 'none';
    dialogColseType?: string;
    formHelper: any;
    modelId: string;
    data: any;
    checkedItem?: any;
    checkedItemArray?: any[];
    checkedCodes?: string;
    checkedDescs?: string;
    context?: any;
  }
  export interface PopWindowReturnInfo {
    sender: any;
    dialogResult: 'ok' | 'cancel' | 'close' | 'open';
    dialogColseType?: string;
    formHelper: any;
    context?: any;
  }
  export interface DataTableSchemaField {
    name: string | undefined;
    caption?: string | undefined;
    defaultValue?: any;
    editable?: boolean | undefined;
    nullable?: boolean | undefined;
    parse?: Function | undefined;
    type?: 'string' | 'boolean' | 'number' | 'datetime';
    required?: boolean | undefined;
    min?: any;
    max?: any;
    maxLength?: any;
    [rule: string]: any;
  }
  export interface DataTableSchemaFields {
    [index: string]: DataTableSchemaField;
  }
  export interface DataTableChangeEvent {
    sender: any;
    field?: string | undefined;
    value?: any;
    action?: string | undefined;
    index?: number | undefined;
    items?: any;
  }
  export interface DataTableOptions {
    data?: any;
    hierarchy?: {
      primaryField?: string | undefined;
      parentField?: string | undefined;
    };
    filter?: any;
    schema?: DataTableSchemaFields | undefined;
    change?(e: DataTableChangeEvent): void;
  }

}

declare module "ERX/ErFormToolbar" {
  const _default: import("vue").DefineComponent<{
    height: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    showPageButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPrintButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showRefreshButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddCopyButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showDeleteButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showSaveButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toolbarClick: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    showPageButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPrintButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showRefreshButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddCopyButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showDeleteButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showSaveButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }>> & {
    onToolbarClick?: ((...args: any[]) => any) | undefined;
  }, {
    height: string;
    showPageButton: boolean;
    showPrintButton: boolean;
    showRefreshButton: boolean;
    showAddButton: boolean;
    showAddCopyButton: boolean;
    showDeleteButton: boolean;
    showSaveButton: boolean;
  }, {}>;
  export default _default;

}
declare module "ERX/ErMemoEditor" {
  const _default: import("vue").DefineComponent<{
    modelValue: {
      type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
      default: undefined;
    };
    readonly: {
      type: BooleanConstructor;
      default: boolean;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    options: {
      type: any;
      default: () => void;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    pressEnter: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
      type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
      default: undefined;
    };
    readonly: {
      type: BooleanConstructor;
      default: boolean;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    options: {
      type: any;
      default: () => void;
    };
  }>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPressEnter?: ((...args: any[]) => any) | undefined;
  }, {
    disabled: boolean;
    readonly: boolean;
    modelValue: string | number | unknown[];
    options: any;
  }, {}>;
  export default _default;
}
declare module "ERX/ErGrid" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    erFormHelperProp: {
      type: typeof ER.FormHelper;
      default: null;
      require: boolean;
    };
    configId: {
      type: StringConstructor;
      default: string;
    };
    toolbarOptions: {
      type: any;
      default: () => void;
    };
    pageOptions: {
      type: any;
      default: () => void;
    };
    options: {
      type: any;
      default: () => void;
    };
  }, {
    erGrid: any;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    ErGridReady: (...args: any[]) => void;
    doubleClick: (...args: any[]) => void;
    focusChanged: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    erFormHelperProp: {
      type: typeof ER.FormHelper;
      default: null;
      require: boolean;
    };
    configId: {
      type: StringConstructor;
      default: string;
    };
    toolbarOptions: {
      type: any;
      default: () => void;
    };
    pageOptions: {
      type: any;
      default: () => void;
    };
    options: {
      type: any;
      default: () => void;
    };
  }>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onErGridReady?: ((...args: never) => any) | undefined;
    onDoubleClick?: ((...args: any[]) => any) | undefined;
    onFocusChanged?: ((...args: any[]) => any) | undefined;
  }, {
    toolbarOptions: any;
    configId: string;
    erFormHelperProp: ER.FormHelper;
    pageOptions: any;
    options: any;
  }, {}>;
  export default _default;

}
declare module "ERX/ErTree" {
  import { Component, VNode } from "vue";
  const _default: import("vue").DefineComponent<{
    dataSource: {
      type: () => any[];
      default: () => never[];
      require: boolean;
    };
    primaryField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    parentField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    displayField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    nodeRenderer: {
      type: () => Component;
      require: boolean;
    };
    getNodeStyle: {
      type: () => {} | ((params: any) => {});
      require: boolean;
    };
    getNodeHeight: {
      type: () => Number | ((params: any) => Number);
      require: boolean;
    };
    getNodeIconComponent: {
      type: FunctionConstructor;
      require: boolean;
    };
    getContextMenu: {
      type: FunctionConstructor;
      require: boolean;
    };
    options: {
      type: () => {
        [key: string]: any;
      };
      default: () => void;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    doubleClick: (...args: any[]) => void;
    focusChanged: (...args: any[]) => void;
    erTreeReady: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dataSource: {
      type: () => any[];
      default: () => never[];
      require: boolean;
    };
    primaryField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    parentField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    displayField: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    nodeRenderer: {
      type: () => Component;
      require: boolean;
    };
    getNodeStyle: {
      type: () => {} | ((params: any) => {});
      require: boolean;
    };
    getNodeHeight: {
      type: () => Number | ((params: any) => Number);
      require: boolean;
    };
    getNodeIconComponent: {
      type: FunctionConstructor;
      require: boolean;
    };
    getContextMenu: {
      type: FunctionConstructor;
      require: boolean;
    };
    options: {
      type: () => {
        [key: string]: any;
      };
      default: () => void;
    };
  }>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDoubleClick?: ((...args: any[]) => any) | undefined;
    onFocusChanged?: ((...args: any[]) => any) | undefined;
    onErTreeReady?: ((...args: any[]) => any) | undefined;
  }, {
    dataSource: any[];
    options: {
      [key: string]: any;
    };
    primaryField: string;
    parentField: string;
    displayField: string;
  }, {}>;
  export default _default;

}
declare module "ERX/ErLayout" {
  import { ER } from 'ERX/Er';
  const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    layoutName: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    erFormHelperProp: {
      type: typeof ER.FormHelper;
      default: null;
      require: boolean;
    };
    configId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    configCaption: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    options: {
      type: ObjectConstructor;
      default: () => void;
      require: boolean;
    };
    showGroupBorder: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    allowCollapse: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    isCollapsed: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    displayRows: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    showQueryButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showFormToolbar: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPageButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPrintButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showRefreshButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddCopyButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showDeleteButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showSaveButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    autoBind: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    bindModel: {
      type: any;
      default: undefined;
      require: boolean;
    };
    labelAlignTop: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    itemButtonClick: (...args: any[]) => void;
    pressEnter: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    toolbarClick: (...args: any[]) => void;
    dropdownOpen: (...args: any[]) => void;
    configUpdate: (...args: any[]) => void;
    QueryClick: (...args: any[]) => void;
    DisplayAllClick: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
    toolbarFirstClick: (...args: any[]) => void;
    toolbarPreClick: (...args: any[]) => void;
    toolbarNextClick: (...args: any[]) => void;
    toolbarLastClick: (...args: any[]) => void;
    toolbarPrintClick: (...args: any[]) => void;
    toolbarRefreshClick: (...args: any[]) => void;
    toolbarAddClick: (...args: any[]) => void;
    toolbarAddCopyClick: (...args: any[]) => void;
    toolbarDeleteClick: (...args: any[]) => void;
    toolbarSaveClick: (...args: any[]) => void;
    codeMirrorReady: (...args: any[]) => void;
    groupButtonClick: (...args: any[]) => void;
    itemClick: (...args: any[]) => void;
    itemDbclick: (...args: any[]) => void;
    valueChanged: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layoutName: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    erFormHelperProp: {
      type: typeof ER.FormHelper;
      default: null;
      require: boolean;
    };
    configId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    configCaption: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    options: {
      type: ObjectConstructor;
      default: () => void;
      require: boolean;
    };
    showGroupBorder: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    allowCollapse: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    isCollapsed: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    displayRows: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    showQueryButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showFormToolbar: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPageButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showPrintButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showRefreshButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showAddCopyButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showDeleteButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    showSaveButton: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    autoBind: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
    bindModel: {
      type: any;
      default: undefined;
      require: boolean;
    };
    labelAlignTop: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onQueryClick?: ((...args: never) => any) | undefined;
    onToolbarClick?: ((...args: any[]) => any) | undefined;
    onDropdownOpen?: ((...args: any[]) => any) | undefined;
    onPressEnter?: ((...args: any[]) => any) | undefined;
    onDisplayAllClick?: ((...args: never) => any) | undefined;
    onItemButtonClick?: ((...args: any[]) => any) | undefined;
    onConfigUpdate?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
    onToolbarFirstClick?: ((...args: any[]) => any) | undefined;
    onToolbarPreClick?: ((...args: any[]) => any) | undefined;
    onToolbarNextClick?: ((...args: any[]) => any) | undefined;
    onToolbarLastClick?: ((...args: any[]) => any) | undefined;
    onToolbarPrintClick?: ((...args: any[]) => any) | undefined;
    onToolbarRefreshClick?: ((...args: any[]) => any) | undefined;
    onToolbarAddClick?: ((...args: any[]) => any) | undefined;
    onToolbarAddCopyClick?: ((...args: any[]) => any) | undefined;
    onToolbarDeleteClick?: ((...args: any[]) => any) | undefined;
    onToolbarSaveClick?: ((...args: any[]) => any) | undefined;
    onCodeMirrorReady?: ((...args: any[]) => any) | undefined;
    onGroupButtonClick?: ((...args: any[]) => any) | undefined;
    onItemClick?: ((...args: any[]) => any) | undefined;
    onItemDbclick?: ((...args: any[]) => any) | undefined;
    onValueChanged?: ((...args: any[]) => any) | undefined;
  }, {
    options: Record<string, any>;
    showPageButton: boolean;
    showPrintButton: boolean;
    showRefreshButton: boolean;
    showAddButton: boolean;
    showAddCopyButton: boolean;
    showDeleteButton: boolean;
    showSaveButton: boolean;
    configId: string;
    erFormHelperProp: ER.FormHelper;
    displayRows: number;
    layoutName: string;
    configCaption: string;
    showGroupBorder: boolean;
    allowCollapse: boolean;
    isCollapsed: boolean;
    showQueryButton: boolean;
    showFormToolbar: boolean;
    autoBind: boolean;
    bindModel: any;
    labelAlignTop: boolean;
  }, {}>, {
    borderSlot?(_: {}): any;
  }>;
  export default _default;
  type __VLS_WithTemplateSlots<T, S> = T & {
    new(): {
      $slots: S;
    };
  };

}
declare module "ERX/ErApprovalSteps" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    approvalStepsHelperProp: {
      type: typeof ER.ApprovalStepsHelper;
      default: undefined;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    approvalStepsHelperProp: {
      type: typeof ER.ApprovalStepsHelper;
      default: undefined;
      require: boolean;
    };
  }>>, {
    approvalStepsHelperProp: ER.ApprovalStepsHelper;
  }, {}>;
  export default _default;
}
declare module "ERX/ErPopApprovalSteps" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    approvalStepsHelperProp: {
      type: typeof ER.ApprovalStepsHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    approvalStepsHelperProp: {
      type: typeof ER.ApprovalStepsHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }>>, {
    formWidth: number;
    formHeight: number;
    approvalStepsHelperProp: ER.ApprovalStepsHelper;
  }, {}>;
  export default _default;
}
declare module "ERX/ErMenuFormBase" {
  import { ER } from 'ERX/Er';
  const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    erFormOptions: {
      type: () => ER.FormHelperOptions | (() => ER.FormHelper);
      required: true;
      default: () => void;
    };
  }, {
    erFormHelper: ER.FormHelper;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    erFormOptions: {
      type: () => ER.FormHelperOptions | (() => ER.FormHelper);
      required: true;
      default: () => void;
    };
  }>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
  }, {
    erFormOptions: ER.FormHelperOptions | (() => ER.FormHelper);
  }, {}>, {
    default?(_: {}): any;
  }>;
  export default _default;
  type __VLS_WithTemplateSlots<T, S> = T & {
    new(): {
      $slots: S;
    };
  };
}
declare module "ERX/ErMenuDevPlat" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    options: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
  }, {
    erFormHelper: ER.FormHelper;
    queryInfo: (queryFilter: {
      [key: string]: any;
    }) => Promise<void>;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
  }>>, {
    options: Record<string, any>;
  }, {}>;
  export default _default;
}
declare module "ERX/ErPopRichEditor" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    popRichEditorProps: {
      type: typeof ER.PopRichEditor;
      default: null;
      require: boolean;
    };
    options: {
      type: () => {
        [key: string]: any;
      };
      default: {};
      require: boolean;
    };
    content: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popRichEditorProps: {
      type: typeof ER.PopRichEditor;
      default: null;
      require: boolean;
    };
    options: {
      type: () => {
        [key: string]: any;
      };
      default: {};
      require: boolean;
    };
    content: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
  }>>, {
    options: {
      [key: string]: any;
    };
    content: string;
    popRichEditorProps: ER.PopRichEditor;
  }, {}>;
  export default _default;
}
declare module "ERX/ErPopFree" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    popFreeHelperProp: {
      type: typeof ER.PopFreeHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    OkClick: (...args: any[]) => void;
    CancelClick: (...args: any[]) => void;
    Closed: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popFreeHelperProp: {
      type: typeof ER.PopFreeHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }>> & {
    onOkClick?: ((...args: never) => any) | undefined;
    onCancelClick?: ((...args: never) => any) | undefined;
    onClosed?: ((...args: never) => any) | undefined;
  }, {
    popFreeHelperProp: ER.PopFreeHelper;
    formWidth: number;
    formHeight: number;
  }, {}>;
  export default _default;

}
declare module "ERX/ErPopForm" {
  import "splitpanes/dist/splitpanes.css";
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    popFormHelperProp: {
      type: typeof ER.PopFormHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    SaveClick: (...args: any[]) => void;
    CloseClick: (...args: any[]) => void;
    Closed: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popFormHelperProp: {
      type: typeof ER.PopFormHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }>> & {
    onSaveClick?: ((...args: never) => any) | undefined;
    onCloseClick?: ((...args: never) => any) | undefined;
    onClosed?: ((...args: never) => any) | undefined;
  }, {
    formWidth: number;
    formHeight: number;
    popFormHelperProp: ER.PopFormHelper;
  }, {}>;
  export default _default;

}
declare module "ERX/ErPopQuery" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    popQueryHelperProp: {
      type: typeof ER.PopQueryHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    OkClick: (...args: any[]) => void;
    CancelClick: (...args: any[]) => void;
    ClearClick: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popQueryHelperProp: {
      type: typeof ER.PopQueryHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }>> & {
    onOkClick?: ((...args: never) => any) | undefined;
    onCancelClick?: ((...args: never) => any) | undefined;
    onClearClick?: ((...args: never) => any) | undefined;
  }, {
    popQueryHelperProp: ER.PopQueryHelper;
    formWidth: number;
    formHeight: number;
  }, {}>;
  export default _default;
}
declare module "ERX/ErPopTree" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    popTreeHelperProp: {
      type: typeof ER.PopTreeHelper;
      default: null;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popTreeHelperProp: {
      type: typeof ER.PopTreeHelper;
      default: null;
      require: boolean;
    };
  }>>, {
    popTreeHelperProp: ER.PopTreeHelper;
  }, {}>;
  export default _default;
}
declare module "ERX/ErAttachment" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    options: {
      type: () => ER.UploadOptions;
      default: () => {};
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
      type: () => ER.UploadOptions;
      default: () => {};
    };
  }>>, {
    options: ER.UploadOptions;
  }, {}>;
  export default _default;
}
declare module "ERX/ErPopAttachment" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    attachmentHelperProps: {
      type: typeof ER.AttachmentHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    attachmentHelperProps: {
      type: typeof ER.AttachmentHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
  }>>, {
    attachmentHelperProps: ER.AttachmentHelper;
    formWidth: number;
    formHeight: number;
  }, {}>;
  export default _default;

}
declare module "ERX/ErPopWindow" {
  import { ER } from 'ERX/Er';
  const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    popWindowHelperProp: {
      type: typeof ER.PopWindowHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    showFooter: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    OkClick: (...args: any[]) => void;
    CancelClick: (...args: any[]) => void;
    Closed: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popWindowHelperProp: {
      type: typeof ER.PopWindowHelper;
      default: null;
      require: boolean;
    };
    formWidth: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    formHeight: {
      type: NumberConstructor;
      default: number;
      require: boolean;
    };
    showFooter: {
      type: BooleanConstructor;
      default: boolean;
      require: boolean;
    };
  }>> & {
    onOkClick?: ((...args: never) => any) | undefined;
    onCancelClick?: ((...args: never) => any) | undefined;
    onClosed?: ((...args: never) => any) | undefined;
  }, {
    formWidth: number;
    formHeight: number;
    popWindowHelperProp: ER.PopWindowHelper;
    showFooter: boolean;
  }, {}>, {
    customComponent?(_: {}): any;
  }>;
  export default _default;
  type __VLS_WithTemplateSlots<T, S> = T & {
    new(): {
      $slots: S;
    };
  };
}
declare module "ERX/ErMenuQuery" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    formConfigId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    formParas: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
    override: {
      type: ArrayConstructor;
      default: () => never[];
      require: boolean;
    };
  }, {
    erFormHelper: ER.FormHelper;
    fnDoClick: (e: any) => Promise<void>;
    queryInfo: (msgFlag?: boolean) => void;
    queryClick: () => Promise<void>;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (...args: any[]) => void;
    "f1-do": (...args: any[]) => void;
    "f2-do": (...args: any[]) => void;
    "f3-do": (...args: any[]) => void;
    "f4-do": (...args: any[]) => void;
    "f5-do": (...args: any[]) => void;
    "f6-do": (...args: any[]) => void;
    "f7-do": (...args: any[]) => void;
    "f8-do": (...args: any[]) => void;
    "f9-do": (...args: any[]) => void;
    "f10-do": (...args: any[]) => void;
    "f11-do": (...args: any[]) => void;
    "f12-do": (...args: any[]) => void;
    "close-click": (...args: any[]) => void;
    mainGridReady: (...args: any[]) => void;
    mainGridClick: (...args: any[]) => void;
    mainGridDoubleClick: (...args: any[]) => void;
    mainGridFocusChanged: (...args: any[]) => void;
    mainGridToolbarClick: (...args: any[]) => void;
    mainGridCellButtonClick: (...args: any[]) => void;
    detailGridReady: (...args: any[]) => void;
    detailGridClick: (...args: any[]) => void;
    detailGridDoubleClick: (...args: any[]) => void;
    detailGridFocusChanged: (...args: any[]) => void;
    detailGridToolbarClick: (...args: any[]) => void;
    detailGridCellButtonClick: (...args: any[]) => void;
    filterButtonClick: (...args: any[]) => void;
    filterValueChanged: (...args: any[]) => void;
    detailButtonClick: (...args: any[]) => void;
    detailValueChanged: (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    formConfigId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    formParas: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
    override: {
      type: ArrayConstructor;
      default: () => never[];
      require: boolean;
    };
  }>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    "onF1-do"?: ((...args: any[]) => any) | undefined;
    "onF2-do"?: ((...args: any[]) => any) | undefined;
    "onF3-do"?: ((...args: any[]) => any) | undefined;
    "onF4-do"?: ((...args: any[]) => any) | undefined;
    "onF5-do"?: ((...args: any[]) => any) | undefined;
    "onF6-do"?: ((...args: any[]) => any) | undefined;
    "onF7-do"?: ((...args: any[]) => any) | undefined;
    "onF8-do"?: ((...args: any[]) => any) | undefined;
    "onF9-do"?: ((...args: any[]) => any) | undefined;
    "onF10-do"?: ((...args: any[]) => any) | undefined;
    "onF11-do"?: ((...args: any[]) => any) | undefined;
    "onF12-do"?: ((...args: any[]) => any) | undefined;
    "onClose-click"?: ((...args: any[]) => any) | undefined;
    onMainGridReady?: ((...args: any[]) => any) | undefined;
    onMainGridClick?: ((...args: any[]) => any) | undefined;
    onMainGridDoubleClick?: ((...args: any[]) => any) | undefined;
    onMainGridFocusChanged?: ((...args: any[]) => any) | undefined;
    onMainGridToolbarClick?: ((...args: any[]) => any) | undefined;
    onMainGridCellButtonClick?: ((...args: any[]) => any) | undefined;
    onDetailGridReady?: ((...args: any[]) => any) | undefined;
    onDetailGridClick?: ((...args: any[]) => any) | undefined;
    onDetailGridDoubleClick?: ((...args: any[]) => any) | undefined;
    onDetailGridFocusChanged?: ((...args: any[]) => any) | undefined;
    onDetailGridToolbarClick?: ((...args: any[]) => any) | undefined;
    onDetailGridCellButtonClick?: ((...args: any[]) => any) | undefined;
    onFilterButtonClick?: ((...args: any[]) => any) | undefined;
    onFilterValueChanged?: ((...args: any[]) => any) | undefined;
    onDetailButtonClick?: ((...args: any[]) => any) | undefined;
    onDetailValueChanged?: ((...args: any[]) => any) | undefined;
  }, {
    formConfigId: string;
    formParas: Record<string, any>;
    override: unknown[];
  }, {}>;
  export default _default;

}
declare module "ERX/ErMenuQueryEx" {
  import { ER } from 'ERX/Er';
  const _default: import("vue").DefineComponent<{
    formConfigId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    formParas: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
    override: {
      type: ArrayConstructor;
      default: () => never[];
      require: boolean;
    };
  }, {
    erFormHelper: ER.FormHelper;
    fnDoClick: (e: any) => Promise<false | undefined>;
    queryInfo: (msgFlag?: boolean) => void;
    queryClick: () => Promise<void>;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (...args: any[]) => void;
    "f1-do": (...args: any[]) => void;
    "f2-do": (...args: any[]) => void;
    "f3-do": (...args: any[]) => void;
    "f4-do": (...args: any[]) => void;
    "f5-do": (...args: any[]) => void;
    "f6-do": (...args: any[]) => void;
    "f7-do": (...args: any[]) => void;
    "f8-do": (...args: any[]) => void;
    "f9-do": (...args: any[]) => void;
    "f10-do": (...args: any[]) => void;
    "f11-do": (...args: any[]) => void;
    "f12-do": (...args: any[]) => void;
    "close-click": (...args: any[]) => void;
    mainGridReady: (...args: any[]) => void;
    mainGridClick: (...args: any[]) => void;
    mainGridDoubleClick: (...args: any[]) => void;
    mainGridFocusChanged: (...args: any[]) => void;
    mainGridToolbarClick: (...args: any[]) => void;
    mainGridCellButtonClick: (...args: any[]) => void;
    detailGridReady: (...args: any[]) => void;
    detailGridClick: (...args: any[]) => void;
    detailGridDoubleClick: (...args: any[]) => void;
    detailGridFocusChanged: (...args: any[]) => void;
    detailGridToolbarClick: (...args: any[]) => void;
    detailGridCellButtonClick: (...args: any[]) => void;
    filterButtonClick: (...args: any[]) => void;
    filterValueChanged: (...args: any[]) => void;
    detailButtonClick: (...args: any[]) => void;
    detailValueChanged: (...args: any[]) => void;
    "f1-pre-do": (...args: any[]) => void;
    "f2-pre-do": (...args: any[]) => void;
    "f3-pre-do": (...args: any[]) => void;
    "f4-pre-do": (...args: any[]) => void;
    "f5-pre-do": (...args: any[]) => void;
    "f6-pre-do": (...args: any[]) => void;
    "f7-pre-do": (...args: any[]) => void;
    "f8-pre-do": (...args: any[]) => void;
    "f9-pre-do": (...args: any[]) => void;
    "f10-pre-do": (...args: any[]) => void;
    "f11-pre-do": (...args: any[]) => void;
    "f12-pre-do": (...args: any[]) => void;
    "f1-cancel": (...args: any[]) => void;
    "f2-cancel": (...args: any[]) => void;
    "f3-cancel": (...args: any[]) => void;
    "f4-cancel": (...args: any[]) => void;
    "f5-cancel": (...args: any[]) => void;
    "f6-cancel": (...args: any[]) => void;
    "f7-cancel": (...args: any[]) => void;
    "f8-cancel": (...args: any[]) => void;
    "f9-cancel": (...args: any[]) => void;
    "f10-cancel": (...args: any[]) => void;
    "f11-cancel": (...args: any[]) => void;
    "f12-cancel": (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    formConfigId: {
      type: StringConstructor;
      default: string;
      require: boolean;
    };
    formParas: {
      type: ObjectConstructor;
      default: undefined;
      require: boolean;
    };
    override: {
      type: ArrayConstructor;
      default: () => never[];
      require: boolean;
    };
  }>> & {
    onLoad?: ((...args: any[]) => any) | undefined;
    "onF1-do"?: ((...args: any[]) => any) | undefined;
    "onF2-do"?: ((...args: any[]) => any) | undefined;
    "onF3-do"?: ((...args: any[]) => any) | undefined;
    "onF4-do"?: ((...args: any[]) => any) | undefined;
    "onF5-do"?: ((...args: any[]) => any) | undefined;
    "onF6-do"?: ((...args: any[]) => any) | undefined;
    "onF7-do"?: ((...args: any[]) => any) | undefined;
    "onF8-do"?: ((...args: any[]) => any) | undefined;
    "onF9-do"?: ((...args: any[]) => any) | undefined;
    "onF10-do"?: ((...args: any[]) => any) | undefined;
    "onF11-do"?: ((...args: any[]) => any) | undefined;
    "onF12-do"?: ((...args: any[]) => any) | undefined;
    "onClose-click"?: ((...args: any[]) => any) | undefined;
    onMainGridReady?: ((...args: any[]) => any) | undefined;
    onMainGridClick?: ((...args: any[]) => any) | undefined;
    onMainGridDoubleClick?: ((...args: any[]) => any) | undefined;
    onMainGridFocusChanged?: ((...args: any[]) => any) | undefined;
    onMainGridToolbarClick?: ((...args: any[]) => any) | undefined;
    onMainGridCellButtonClick?: ((...args: any[]) => any) | undefined;
    onDetailGridReady?: ((...args: any[]) => any) | undefined;
    onDetailGridClick?: ((...args: any[]) => any) | undefined;
    onDetailGridDoubleClick?: ((...args: any[]) => any) | undefined;
    onDetailGridFocusChanged?: ((...args: any[]) => any) | undefined;
    onDetailGridToolbarClick?: ((...args: any[]) => any) | undefined;
    onDetailGridCellButtonClick?: ((...args: any[]) => any) | undefined;
    onFilterButtonClick?: ((...args: any[]) => any) | undefined;
    onFilterValueChanged?: ((...args: any[]) => any) | undefined;
    onDetailButtonClick?: ((...args: any[]) => any) | undefined;
    onDetailValueChanged?: ((...args: any[]) => any) | undefined;
    "onF1-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF2-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF3-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF4-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF5-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF6-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF7-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF8-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF9-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF10-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF11-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF12-pre-do"?: ((...args: any[]) => any) | undefined;
    "onF1-cancel"?: ((...args: any[]) => any) | undefined;
    "onF2-cancel"?: ((...args: any[]) => any) | undefined;
    "onF3-cancel"?: ((...args: any[]) => any) | undefined;
    "onF4-cancel"?: ((...args: any[]) => any) | undefined;
    "onF5-cancel"?: ((...args: any[]) => any) | undefined;
    "onF6-cancel"?: ((...args: any[]) => any) | undefined;
    "onF7-cancel"?: ((...args: any[]) => any) | undefined;
    "onF8-cancel"?: ((...args: any[]) => any) | undefined;
    "onF9-cancel"?: ((...args: any[]) => any) | undefined;
    "onF10-cancel"?: ((...args: any[]) => any) | undefined;
    "onF11-cancel"?: ((...args: any[]) => any) | undefined;
    "onF12-cancel"?: ((...args: any[]) => any) | undefined;
  }, {
    formConfigId: string;
    formParas: Record<string, any>;
    override: unknown[];
  }, {}>;
  export default _default;
}
declare module "ERX/ErSelect" {
  const _default: import("vue").DefineComponent<{
    modelValue: {
      type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
      default: undefined;
    };
    dataSource: {
      type: any[];
      default: () => never[];
    };
    columns: {
      type: any[];
      default: () => never[];
    };
    readonly: {
      type: BooleanConstructor;
      default: boolean;
    };
    multiple: {
      type: BooleanConstructor;
      default: boolean;
    };
    options: {
      type: any;
      default: () => void;
    };
  }, {
    gridApi: any;
  }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    focus: (...args: any[]) => void;
    change: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    dropdownOpen: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
  }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
      type: (ArrayConstructor | StringConstructor | NumberConstructor)[];
      default: undefined;
    };
    dataSource: {
      type: any[];
      default: () => never[];
    };
    columns: {
      type: any[];
      default: () => never[];
    };
    readonly: {
      type: BooleanConstructor;
      default: boolean;
    };
    multiple: {
      type: BooleanConstructor;
      default: boolean;
    };
    options: {
      type: any;
      default: () => void;
    };
  }>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onDropdownOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  }, {
    readonly: boolean;
    columns: any;
    dataSource: any;
    multiple: boolean;
    modelValue: string | number | unknown[];
    options: any;
  }, {}>;
  export default _default;

}
declare module "ERX/ErI18n" {
  import { LocaleMessages, VueMessageType } from "vue-i18n";
  /**
   * 自动导入低代码框架国际化语言
   * @author Kimmy
   */
  export function importErxLocales(): LocaleMessages<VueMessageType>;
}
declare module "ERX/Er" {
  import { EI, ILoadingOptions } from 'EIX/ei';
  import { VNode } from 'vue';
  import { DataTableOptions, DataTableSchemaFields, DataTableSchemaField, PopQueryReturnInfo, PopFreeReturnInfo, PopTreeReturnInfo, PopFormReturnInfo, PopWindowReturnInfo, DialogResult } from 'ERX/er-type';
  import { Dayjs } from 'dayjs';
  import { ColumnApi, GridApi, ColDef, RowPinnedType } from '@ag-grid-community/core'
  export namespace ER {
    type GridCustomEvent = 'cellButtonClick' | 'cellProgressBarColor';
    interface Culture {
      ar: string;
      en: string;
      zh_Hans: string;
    }
    interface ErLayoutOptions {
      context?: {
        [key: string]: any;
      };
      itemButtonClick?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      itemValueChanged?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      itemDropdownOpen?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      itemPressEnter?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      itemFocus?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      itemBlur?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
    }
    interface ErGridOptions {
      context?: {
        [key: string]: any;
      };
      options?: {
        [key: string]: any;
      };
      focusChanged?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      click?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      doubleClick?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      toolbarClick?: {
        preventDefault?: string;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
    }
    interface FormHelperOptions {
      formName: string;
      configIds?: string | string[];
      partition?: string;
      initialService: string;
      initialParams?: {
        [key: string]: any;
      };
      context?: {
        [key: string]: any;
      };
    }
    interface MenuFormOptions {
      context?: {
        [key: string]: any;
      };
      formHelperOptions: FormHelperOptions;
      FormLoad: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F1_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F2_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F3_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F4_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F5_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F6_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F7_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F8_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F9_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F10_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F11_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
      F12_DO?: {
        preventDefault?: boolean;
        before?: (e: any) => boolean;
        after?: (e: any) => void;
      };
    }
    interface PopFreeEventType {
      initial: string;
      load: string;
      open: string;
      ok: string;
      cancel: string;
      close: string;
      itemValueChanged: string;
      itemButtonClick: string;
      pressEnter: string;
      focus: string;
      blur: string;
    }
    interface PopFormEventType {
      initial: string;
      load: string;
      query: string;
      open: string;
      save: string;
      close: string;
      itemValueChanged: string;
      itemButtonClick: string;
      pressEnter: string;
      focus: string;
      blur: string;
    }
    interface PopQueryEventType {
      initial: string;
      load: string;
      open: string;
      beforeQuery: string;
      query: string;
      ok: string;
      cancel: string;
      close: string;
      filterItemValueChanged: string;
      filterItemButtonClick: string;
      filterItemPressEnter: string;
      filterItemFocus: string;
      filterItemBlur: string;
      mainViewFocusChanged: string;
    }
    interface TranslateOptions {
      baseURL?: string;
      url?: string;
      method?: string;
      ocpApimSubscriptionKey?: string;
      ocpApimSubscriptionRegion?: string;
      contentType?: string;
      version?: string;
      from?: string;
      to?: string;
      responseType?: ResponseType;
    }
    interface DataTableEventType {
      initial: string;
      currentChanged: string;
      fieldAdded: string;
      fieldRemoved: string;
      dataRemoved: string;
      dataAdded: string;
      dataInserted: string;
      dataChanged: string;
      dataCleared: string;
      dataImported: string;
      dataMerged: string;
      rowStateChanged: string;
      cancelChanges: string;
    }
    interface UploadOptions {
      relationId?: string;
      systemCode?: string;
      url?: string;
      rootDirectory?: string;
      readonly?: boolean;
      multiple?: boolean;
      maxCount?: number;
      maxFileSize?: number;
      maxBlobSize?: number;
      allowDownload?: boolean;
      showFileDateTime?: boolean;
      showFileSize?: boolean;
      refreshKey?: string;
      beforeUpload?: (file: File) => boolean;
      afterUpload?: (file: File) => void;
      beforeRemove?: (file: File) => boolean;
      afterRemove?: (file: File) => void;
      beforeDownload?: (file: File) => boolean;
      afterDownload?: (file: File) => void;
      beforePreview?: (file: File) => boolean;
      afterPreview?: (file: File) => void;
    }
    class Class {
      protected _events: {};
      constructor();
    }
    class Core {
      /**
       * 生成guid
       * @returns string
       */
      static guid(): string;
      /**
       * jQuery
       * @returns jQuery
       */
      static jQuery(selector: any): any;
      /**
       * 创建基于iconfont的图标
       * @param iconType
       * @returns IconFont
       */
      static createErIconfont(iconType: string): any;
      /**
       * 创建基于ERX中iconfont图标库的虚拟DOM节点(CSS)
       * @param iconName icon名称
       * @param style style
       * @returns VNode
       */
      static createErIconVNode(iconName: string, style?: any): VNode;
      /**
       * 创建基于ERX中iconfont图标库的虚拟DOM节点(SVG)
       * @param iconName icon名称
       * @param props props
       * @returns VNode
       */
      static createErSvgVNode(iconName: string, props?: any): VNode;
      /**
       * 创建基于远程服务器图标库的虚拟IMG元素DOM节点
       * @param imgUrl 远程服务器上的图片相对地址
       * @param props props
       * @returns VNode
       */
      static createRemoteImgVNode(imgUrl: string, props?: any): VNode;
      /**
       * 创建基于远程服务器图标库的IMG元素
       * @param imgUrl 远程服务器上的图片相对地址
       * @param props props
       * @returns HTMLElement
       */
      static createRemoteImgElement(imgUrl: string, props?: any): HTMLElement;
      /**
       * 创建基于ERX中iconfont图标库的DOM元素(CSS)
       * @param iconName icon名称
       * @param style style
       * @returns HTMLElement
       */
      static createErIconElement(icon: string | VNode, style?: any): HTMLElement;
      /**
       * 创建基于ERX中iconfont图标库的DOM元素(SVG)
       * @param iconName icon名称
       * @param style style
       * @returns HTMLElement
       */
      static createErSvgElement(icon: string | VNode, props?: any): HTMLElement;
      /**
       * 创建基于VNode的DOM元素
       * @param vNode vNode
       * @param props style
       * @returns HTMLElement
       */
      static createVNodeElement(vNode: VNode): HTMLElement;
      /**
       * 获取基础路径
       * @returns VITE_BASE_URL
       */
      static getBaseUrl(): string;
      /**
       * 将对象类型转换成字符型，undefined及null及空数组返回空字符串，其他等于String(obj)
       * @param obj
       * @param trim 是否trim
       * @returns string
       */
      static toString(obj: any, trim?: boolean, caseType?: 'default' | 'toLower' | 'toUpper'): string;
      /**
       * 将对象类型转换成数值性
       * @param obj
       * @returns Number
       */
      static toNumber(obj: any): number;
      /**
       * 将对象类型转换成布尔值
       * @param obj
       * @returns Number
       */
      static toBoolean(obj: any): boolean;
      /**
       * 根据字符串获取日期时间(一般为[yyyyMMdd][yyyyMMddHHmmss]及类似[yyyy-MM-dd HH:mm:ss]的通用格式
       * @param obj 传入字符串或日期
       * @returns 转换后的日期
       */
      static toDateTime(obj: Date | String | Dayjs, type?: 'Date' | 'Dayjs'): any;
      /**
       * 获取日期格式化后的字符串
       * @param date 传入日期
       * @param formatString 格式化
       * @returns 格式化后的字符串
       */
      static getDateTimeFormatString(date: Date | Dayjs | String | undefined, formatString?: string): string;
      /**
       * 判断对象是否为空,字符串Trim()后lenght为零,数值型为0时,数组长度为0时
       * @param obj
       * @returns boolean
       */
      static isNullOrEmpty(obj: any): boolean;
      /**
       * 根据长度和精度获取最大数值
       * @param maxlength 长度
       * @param precision 精度
       * @returns 最大数值
       */
      static getMaxNumber(totalLength: number, decimalLength?: number): number;
      /**
       * 执行脚本代替eval
       * @param data 数据
       * @param expression 脚本
       * @returns 是否满足
       */
      static excuteScript(script: string): any;
      /**
       * 判断是不是有效的URL
       * @param url 数据
       * @returns boolean
       */
      static isUrl(url: string): boolean;
      /**
       * 获取国际化相关数据
       * @param key key
       * @param args 替换参数
       * @returns string
       */
      static $t(key: string, args?: any): string;
      /**
       * 将json对象转换成string并保存成文件
       * @param jsonObject json对象
       * @returns void
       */
      static saveAsJsonFile(jsonObject: any, fileName?: string): void;
      /**
       * 读取文件并调用回调函数
       * @param callBack 回调函数
       * @param options 选项[type, multiple, accept]
       * @returns void
       */
      static readFiles(callBack: (files: any[]) => void, options?: any): void;
      /**
       * 判断颜色是否为透明色
       * @param color 颜色
       * @returns boolean
       */
      static colorIsTransparentOrEmpty(color: string): boolean;
      /**
       * 把颜色转换成16进制颜色
       * @param obj 数据
       * @returns HexColor
       */
      static toHexColor(color: any): string;
      /**
       * 把16进制颜色转成RGBA颜色
       * @param hexColor 数据
       * @returns RGBA颜色
       */
      static hexToRgba(hexColor: string): string;
      /**
      * 获取grid列头自定义模版
      * @param header 列头配置信息
      * @returns 列头模版
      */
      static getGridHeaderTemplate(header: any): string;
      /**
       * 暂停当前线程一段时间
       * @param seconds 暂停时间(毫秒)
       * @returns Promise
       */
      static sleep(seconds: number): Promise<void>;
      /**
       * 根据数据及表达式脚本判断是否满足
       * @param data 数据
       * @param expression 脚本
       * @returns 是否满足
       */
      static checkExpressionValid(data: {
        [key: string]: any;
      }, expression: string): boolean;
      /**
       * 获取文本的长度
       * @param text 文本
       * @returns 长度
       */
      static getTextWidth(text: string, font?: string): number;
      /**
       * 根据传入的数组变量替换对应位置占位符{n}后的字符串
       * @param orginalString
       * @param args 替换占位符{n}的数组
       * @returns newString
       */
      static stringFormat(orginalString: string, ...args: any[]): string;
      /**
       * 设置全局样式值
       * @param property 全局变量名称
       * @param value 值
       * @returns void
       */
      static setGlobalStyleProperty(property: string, value: string | null, priority?: string): void;
      /**
       * 获取全局样式值
       * @param property
       * @returns string
       */
      static getGlobalStyleProperty(property: string): string;
      /**
      * 移除全局样式
      * @param property 全局变量名称
      * @returns string
      */
      static removeGlobalStyleProperty(property: string): string;
      /**
      * 设置Model的值
      * @param model Model
      * @param values 需要设置的值[单个值或Json]
      * @param itemCodes 需要设置的字段
      * @returns void
      */
      static setModelValue(model: ER.Model, values: any, ...itemCodes: string[]): void;
      /**
       * 判断Grid是否可见
       * @param grid grid对象或配置代码
       * @returns 是否可见
       */
      static isGridOnScreen(grid: any): boolean;
      /**
       * 获取Grid的列
       * @param grid grid
       * @param column的colId或者field 配置列的id或field(未传入时，返回焦点列)
       * @returns GridColumn
       */
      static getGridColumn(grid: any, col?: string): any;
      /**
       * 获取Grid的列定义
       * @param grid grid
       * @param column的colId或者field 配置列的id或field(未传入时，返回焦点列)
       * @returns ColumnDef
       */
      static getGridColumnDef(grid: any, col?: string): any;
      /**
       * 获取Grid的选中行[无勾选框时为当前行]
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns any[]
       */
      static getGridSelectRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的选中行[无勾选框时为当前行]EiBlock
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      static getGridSelectRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的当前焦点行
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns ER.Model or Json
       */
      static getGridCurrentRow(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any;
      /**
       * 获取Grid的当前焦点行Json
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns json
       */
      static getGridCurrentRowAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的选中行[必须在有勾选列的情况下]
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns ER.Model[]
       */
      static getGridCheckedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的选中行的数据Json格式[必须在有勾选列的情况下]
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Json array
       */
      static getGridCheckedRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已删除的行
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns Json array
       */
      static getGridDeletedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已删除的行Block
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Block
       */
      static getGridDeletedRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已修改的行Json
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns Json array
       */
      static getGridModifyRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已修改的行Block
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Block
       */
      static getGridModifyRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已新增的行
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns Json array
       */
      static getGridCreatedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已新增的行Block
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Block
       */
      static getGridCreatedRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已新增的行
       * @param grid
       * @param toJson 将对象转成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @returns Json array
       */
      static getGridAllRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已新增的行Block
       * @param grid
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Block
       */
      static getGridAllRowsAsBlock(grid: any, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的变更集并添加到EIInfo[块名分别为:{tableName}_DELETE,{tableName}_MODIFY,{tableName}_ADD]
       * @param grid
       * @param tableName 相关表名[必须项]
       * @param EIInfo
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EIInfo
       */
      static getGridChangedRowsAsEiInfo(grid: any, tableName?: string, inInfo?: EI.EIInfo, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EIInfo;
      /**
       * 获取Grid的的行
       * @param grid grid对象
       * @param type 行类型
       * @param toJson 是否将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns ObservableObject or Json array
       */
      static getGridRows(grid: any, type: 'current' | 'select' | 'checked' | 'add' | 'modify' | 'delete' | 'all', toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的的行
       * @param grid grid对象
       * @param type 行类型
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      static getGridRowsAsBlock(grid: any, type: 'current' | 'select' | 'checked' | 'add' | 'modify' | 'delete' | 'all', onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 从一个GridDataRow向另一个GridDataRow复制值
       * @param newDataRow
       * @param fromDataRow
       * @returns newDataRow
       */
      static mergeGridDataRow(newDataRow: Model, fromDataRow: any, ignoreWhenExistValue?: boolean, setAllDirty?: boolean): Model;
      /**
       * Merge数据到DataTable
       * @param data 原数据
       * @param dataTable DataTable
       * @param clearExistData 是否清空已有数据，默认为true
       * @returns total
       */
      static mergeDataToDataTable(data: any, dataTable: DataTable, clearExistData?: boolean): number;
      /**
       * 将数据绑定到Grid
       * @param data
       * @param grid
       * @returns rowsCount
       */
      static mergeDataToGrid(data: any, grid: any, clearExistData?: boolean): number;
      /**
       * EIInfo的数据绑定到Grid
       * @param grid
       * @param block EI.EiBlock
       * @returns rowsCount
       */
      static mergeEiBlockToGrid(block: EI.EiBlock, grid: any, clearExistData?: boolean): number;
      /**
       * 清除Grid的数据
       * @param grid
       * @param data
       * @returns this
       */
      static clearGridData(grid: any): Core;
      /**
       * 向Grid绑定数据
       * @param gridApi GridApi
       * @param rowData 数据
       * @param populateColumns 根据数据自动生成列信息
       * @param options 其他参数
       * @returns this
       */
      static setGridData(gridApi: GridApi, rowData: EI.EiBlock | Array<{
        [key: string]: any;
      }>, populateColumns?: boolean, options?: any): Core;
      /**
       * 根据日期通用格式及一些预置字符格式转换成日期
       * @param dateString 传入字符串或日期
       * @returns 转换后的日期
       */
      static getDateTimeByString(dateString?: any, type?: 'Date' | 'Dayjs'): any;
      /**
       * 根据系统预置字符替换特殊占位字符
       * @param formatString 传入字符串
       * @param companyCode 根据该账套替换相应的账套占位,为空时取默认当前账套
       * @returns 转换后的字符串
       */
      static getSystemFormatString(formatString: string, companyCode?: string, companyName?: string): string;
      /**
       * 数值格式化
       * @param value 传入值
       * @param formatString 格式化字符串
       * @param type type
       * @returns formatValue
       */
      static formatNumberValue(value: any, formatString: any, type?: 'toNumber' | 'toString'): any;
      /**
       * 数值格式化
       * @param value 传入值
       * @param formatType 格式化类型
       * @param formatString 格式化字符串
       * @param type type
       * @returns formatValue
       */
      static formatDateTimeValue(value: any, formatString?: 'yyyy-MM-dd' | 'yyyy-MM-dd HH:mm:ss', type?: 'toDate' | 'toString'): any;
      /**
       * 数据类型转换，根据datasource schema进行强类型弱类型互相转换
       * @param data 数据
       * @param dataTable DataTable
       * @param type 转换类型
       * @returns data
       */
      static convertDataType(data: EI.EiBlock | any[], dataTable: DataTable, type: 'strongly' | 'weakly', include?: 'datetime' | 'boolean' | 'all'): any;
      /**
       * 根据数据生成EiBlock对象
       * @param data 数据
       * @param tableName BlockName
       * @returns EiBlock
       */
      static buildEiBlock(data?: Array<{
        [key: string]: any;
      }> | {
        [key: string]: any;
      }, tableName?: string): EI.EiBlock;
      /**
       * 根据数据生成EiInfo对象
       * @param data 数据
       * @param tableName tableName
       * @returns EIInfo
       */
      static buildEiInfo(data?: Array<{
        [key: string]: any;
      }> | {
        [key: string]: any;
      }, tableName?: string): EI.EIInfo;
      /**
       * 将EJson对象数组添加到EiBlock
       * @param data
       * @param block
       * @returns EiBlock
       */
      static addJsonToEiBlock(data: {
        [key: string]: any;
      }[], block?: any): EI.EiBlock;
      /**
       * 动态SQL查询
       * @param partition 服务分区
       * @param svcName 自定义服务名称，传空时默认系统服务
       * @param sqlScriptArray SQL脚本数组
       * @returns Promise EI.EIInfo
       */
      static querySql(serverPartition: string, svcName: string, ...sqlScriptArray: string[]): Promise<EI.EIInfo>;
      /**
       * 根据SQL脚本获取前n条数据信息
       * @param partition 服务分区
       * @param sql 查询脚本
       * @param topRows 数据条数
       * @returns Promise EI.EIInfo
       */
      static queryTopRows(serverPartition: string, sql: string, topRows: number): Promise<EI.EIInfo>;
      /**
       * 根据后台服务及传入参数查询数据
       * @param partition 服务分区
       * @param svcName 服务名称
       * @param paras 参数数据
       * @param customFilter 自定义条件脚本
       * @param dataSourceSet 相关数据集
       * @param tableName 相关表
       * @returns Promise EI.EIInfo
       */
      static queryDataByService(partition: string, svcName: string, paras?: {
        queryFilter?: {
          ITEM_CODE: string;
          FIELD_NAME: string;
          ORIGIN_CODE: string;
          OPERATOR: string;
          PARA_GROUP: string;
          SQL_CONTENT: string;
          DATA_TYPE: string;
          OP_VALUE: string | number;
        }[];
        customFilter?: string;
        dataSet?: DataSet;
        tableName?: string;
      }): Promise<unknown>;
      /**
       * 删除Grid的选中行[无勾选框时为当前行]
       * @param grid Grid
       * @param confirmMsg 是否提示确认
       * @param rows 需要删除的行
       */
      static deleteGridRows(grid: any, confirmMsg?: boolean, rows?: any[]): Promise<boolean>;
      /**
       * 设置grid的焦点
       * @param grid Grid
       * @param rowIndex rowIndex
       * @param colKey colKey ｜ Column
       */
      static setGridFocusedCell(grid: any, rowIndex?: number, colKey?: any, rowPinned?: RowPinnedType): void;
      /**
       * 将数据合并到ER.Model
       * @param resultModel ER.Model
       * @param orgModel 传入数据
       * @param ignoreExistValue 是否忽略已存在的非空值
       * @param setAllDirty 是否记录所有的Dirty值
       * @returns ER.Model
       */
      static mergeModel(resultModel: Model, orgModel: {
        [key: string]: any;
      }, ignoreExistValue?: boolean, setAllDirty?: boolean): Model;
      /**
       * 重命名数据列名或键名
       * @param orgData 数据
       * @param rules 更改前后列名或键名
       * @returns 修改后的数据
       */
      static renameJsonKey(orgData: EI.EiBlock | Array<{
        [key: string]: any;
      }>, rules: Array<{
        oldKey: string;
        newKey: string;
      }>): EI.EiBlock | Array<{
        [key: string]: any;
      }>;
      /**
       * 在页面上侧中间显示信息栏,四种类型['success'|'info' | 'warning' | 'error']
       * autoHideAfter 秒后自动消失
       * @param info 显示内容
       * @param modal 显示类型
       */
      static message(info: {
        message: string;
        type: 'info' | 'success' | 'warning' | 'error';
        autoHideAfter?: number;
      }, modal?: boolean): void;
      /**
       * 在页面上侧中间显示提示信息栏[2000ms后自动消失]
       * @param text 显示文本内容
       * @param modal 显示类型
       */
      static messageInfo(text: string, modal?: boolean): void;
      /**
       * 在页面上侧中间显示提示信息栏[2000ms后自动消失]
       * @param text 显示文本内容,默认为[操作成功]
       * @param modal 显示类型
       */
      static messageSuccess(text?: string, modal?: boolean): void;
      /**
       * 在页面上侧中间显示警告信息栏[3000ms后自动消失]
       * @param text 显示文本内容
       * @param modal 显示类型
       */
      static messageWarning(text: string, modal?: boolean): void;
      /**
       * 在页面上侧中间显示错误信息栏[5000ms后自动消失]
       * @param text 显示文本内容
       * @param modal 显示类型
       */
      static messageError(text: string, modal?: boolean): void;
      /**
       * 弹出Confirm确认对话框
       * @param message 显示的对话内容，为空时默认[是否确认操作?]
       * @param confirmFunction 确认后的回调函数
       * @param cancelFunction 取消后的回调函数
       * @returns Promise boolean
       */
      static messageConfirm(message?: any | {
        message: string;
        content?: any;
        okType?: string;
        culture?: boolean;
      } | undefined, confirmFunction?: Function, cancelFunction?: Function): Promise<boolean>;
      /**
       * 四舍五入数值
       * @param num 原数值
       * @returns 四舍五入后的新数值
       */
      static round(num: number, decimals: number): number;
      /**
       * 判断对象是否是一个Jquery对象
       * @param obj 要判断的对象
       * @returns boolean
       */
      static isJQueryHTMLElement(obj: any): boolean;
      /**
       * 创建一个进度条div
       * @param value 当前值
       * @param max 最大值
       * @param labelText 显示的内容
       * @param progressColor 进度条颜色
       * @param labelColor 显示的内容颜色
       * @returns div
       */
      static createProgressBar(value: number, max: number, labelText?: string, progressColor?: string, labelColor?: string): any;
      /**
       * 设置localStorage
       * @param key 键
       * @param value json对象
       * @returns Storage
       */
      static setLocalStorage(key: string, value: any): Storage;
      /**
       * 通用防抖函数
       * @param func 需要执行的函数
       * @param delay 延迟执行的时间
       * @returns Function
       */
      static debounce<A extends any[], R>(func: (...args: A) => R, delay?: number): (...args: A) => void;
      /**
       * 获取localStorage
       * @param key 键
       * @param removeAfterGet 获取值后删除相应的key
       * @returns any
       */
      static getLocalStorage(key: string, removeAfterGet?: boolean): any;
      /**
       * 获取画面传递参数
       * @param formName 画面名
       * @param removeAfterGet 获取值后删除相应的参数缓存
       * @returns any
       */
      static getCallFormParas(formName: string, removeAfterGet?: boolean): any;
      /**
       * 打开新的主页面
       * @param formName 画面名称
       * @param paras 画面之间传递参数(获取时的key为formName画面名称)
       * @param useLocalStorageParams 是否使用LocalStorage传递参数(默认true)
       * @returns void
       */
      static callForm(formName: string, paras: any, useLocalStorageParams?: boolean): void;
      /**
       * 复制文本到粘贴板
       * @param text 文本
       * @returns Promise<void>
       */
      static copyText(text: any): void;
      /**
       * 读取粘贴板的文本
       * @returns Promise<string>
       */
      static readClipboardText(): Promise<string>;
      /**
       * 调用后台服务service
       * @param partition 服务分区
       * @param svcName 服务名称
       * @param data 传入数据
       * @param showLoading 是否显示loading
       * @param messageError 错误时是否显示Error信息
       * @param showLoadingAnimotion 是否显示loading动画
       * @param serviceTransformer 请求/响应数据处理回调函数
       * @returns Promise EI.EIInfo
       */
      static callService(partition: 'Master' | 'EP' | string, svcName: string, data: EI.EIInfo, showLoading?: boolean | ILoadingOptions, messageError?: boolean | 'modal', showLoadingAnimotion?: boolean, serviceTransformer?: any): Promise<EI.EIInfo>;
    }
    class SysInfo {
      /**
       * 当前应用名称
       * @returns AppName
       */
      static get AppName(): string;
      /**
       * 当前账套代码
       * @returns CompanyCode
       */
      static get CompanyCode(): string;
      /**
       * 当前账套名称
       * @returns CompanyName
       */
      static get CompanyName(): string;
      /**
       * 当前用户名
       * @returns UserId
       */
      static get UserId(): string;
      /**
       * 当前用户姓名
       * @returns UserName
       */
      static get UserName(): string;
      /**
       * 当前服务器分区
       * @returns Partiton
       */
      static get Partiton(): string;
      /**
       * 当前画面代码
       * @returns FormName
       */
      static get FormName(): string;
      /**
       * GridCheckColumnFieldName
       * @returns GridCheckColumnFieldName
       */
      static get GridCheckColumnFieldName(): string;
      /**
      * IdFieldName
      * @returns IdFieldName
      */
      static get IdFieldName(): string;
      /**
      * TreeHierarchyFieldName
      * @returns TreeHierarchyFieldName
      */
      static get TreeHierarchyFieldName(): string;
      /**
       * 当前画面参数
       * @returns FormParas
       */
      static get FormParas(): {};
    }
    /**
     * 翻译工具
     */
    class TranslateHelper extends Class {
      private translateOptions;
      constructor(options?: TranslateOptions);
      private setOptions;
      /**
       * 获取国际化文本
       * @param key 关键字
       * @param locale 语言[默认系统当前语言]
       * @returns 国际化文本
       */
      translate(data: string | string[], options?: TranslateOptions): Promise<{
        flag: boolean;
        message: string;
        result?: {
          [key: string]: string;
        } | Array<{
          [key: string]: string;
        }>;
      }>;
    }
    /**
     * 附件上传工具
     */
    class UploadHelper extends Class {
      private _uploadOptions;
      private _uploadConfigInfo;
      private _initialized;
      private _maxBlobSize;
      private _maxFileSize;
      get Initialized(): boolean;
      constructor(options?: UploadOptions);
      private getUploadConfigInfo;
      initialize(options?: UploadOptions): Promise<void>;
      getUploadUrl(systemCode?: string): Promise<string>;
      getFileList(relationId: string, systemCode?: string): Promise<{
        flag: boolean;
        message: string;
        result: any[];
      }>;
      downloadFile(fileInfo: any): Promise<{
        flag: boolean;
        message: string;
        result: any[];
      }>;
      previewFile(fileInfo: any): Promise<{
        flag: boolean;
        message: string;
        result: any[];
      }>;
      uploadFile(relationId: string, file: File, systemCode?: string): Promise<{
        flag: boolean;
        message: string;
      }>;
      removeFile(relationId: string, fileName?: string, systemCode?: string): Promise<{
        flag: boolean;
        message: string;
      }>;
    }
    class Be2SysParaInfo {
      private _partition;
      private _companyCode;
      private _serviceName;
      private _paraFilter?;
      private _initializeSuccessed;
      private _sysParasValue;
      get Partiton(): string;
      get CompanyCode(): string;
      get InitializeSuccessed(): boolean;
      get SysParasValue(): {
        [key: string]: any;
      };
      constructor(partition: string, paraFilter?: {
        ParaMoudule?: string;
        ParaCodes?: string | Array<string>;
      }, companyCode?: string, serviceName?: string);
      Initialize(serverPartition?: string, paraFilter?: {
        ParaMoudule?: string;
        ParaCodes?: string | Array<string>;
      }, companyCode?: string, serviceName?: string): Promise<unknown>;
      getParaValue(paraCode: string): string;
    }
    class SysGlobalVariables {
      /**
       * 设置系统全局变量[localStorage方式]
       * @param keyType 类型
       * @param key  键
       * @param value  值
       * @returns void
       */
      static setVariable(keyType: string, key: string, value: any): void;
      /**
       * 获取系统全局变量[localStorage方式]
       * @param keyType 类型
       * @param key  键
       * @param clearValue 获取完是否清空
       * @returns 值
       */
      static getVariable(keyType: string, key: string, clearValue?: boolean): any;
      /**
       * 清除系统全局变量[localStorage方式]
       * @param keyType 类型
       * @param key  键
       * @returns void
       */
      static clearVariable(keyType: string, key: string): void;
      /**
       * 判断系统全局变量是否存在[localStorage方式]
       * @param keyType 类型
       * @param key  键
       * @returns 是否为空
       */
      static isNullOrEmpty(keyType: string, key: string): boolean;
    }
    /**
     * 数据对象
     */
    class Model extends Class {
      [key: string]: any;
      get schemaFields(): any;
      get dataTable(): any;
      dirty: boolean;
      dirtyFields: {
        [key: string]: any;
      };
      uid: string;
      isNew: boolean;
      private _dataTable;
      private _schemaFields;
      constructor(jsonData?: {
        [key: string]: any;
      }, shcema?: any, table?: any);
      static getFieldDefaultValue(field: any): any;
      shouldSerialize(field: string): boolean;
      forEach(func: Function): void;
      toJSON(extendData?: {
        [key: string]: number | string;
      }): {
        [key: string]: any;
      };
      get(field: string): string extends infer T ? T extends string ? T extends keyof this ? this[T] : any : never : never;
      set(field: string, value: any, source?: string, setValueBySchemaFields?: boolean): Model;
      reset(): Model;
      setSchema(schema: DataTableSchemaFields, reset?: boolean): Model;
      setData(data: {
        [key: string]: any;
      }, source?: string, setValueBySchemaFields?: boolean): Model;
      addField(...fields: DataTableSchemaField[]): Model;
      reomveField(...fields: DataTableSchemaField[]): Model;
      accept(jsonData?: {
        [key: string]: any;
      }, schema?: DataTableSchemaFields): Model;
    }
    /**
     * 数据表
     */
    class DataTable extends Class {
      #private;
      tableName: string;
      get options(): DataTableOptions;
      get BingdingInfo(): any[];
      get rowCount(): number;
      get Current(): Model | undefined;
      get IsHierarchyTable(): boolean;
      constructor(options?: DataTableOptions);
      init(options: DataTableOptions): void;
      setBindingInfo(formHelper: any, configId: string, controlType: 'Layout' | 'Grid'): void;
      removeBindingInfo(formHelper: any, configId: string): void;
      setEvent(eventType: keyof DataTableEventType, event: Function): void;
      getEvent(eventType: keyof DataTableEventType): Function | undefined;
      setAllowCancelChanges(allowCancelChanges: boolean | undefined): DataTable;
      addField(...fields: DataTableSchemaField[]): DataTable;
      removeField(...fields: DataTableSchemaField[]): DataTable;
      get(uid: string): any;
      getRows(rowState: 'created' | 'updated' | 'removed' | 'unchanged' | 'original' | 'all', toJSON?: boolean | ((data: Model) => {
        [key: string]: any;
      })): {
        [key: string]: any;
      }[];
      at(index: number): Model | undefined;
      indexOf(model: Model): number;
      setCurrent(model: Model | undefined, source?: string): void;
      insert(index: number, data: {}, autoGuidField?: string): Model;
      add(data?: {}, autoGuidField?: string): Model;
      import(data: any[], index?: number, asNewState?: boolean, autoGuidField?: string): Model[];
      remove(data: {} | {}[]): void;
      setRowState(data: Model, state: 'added' | 'updated' | 'unchanged'): void;
      clear(): DataTable;
      merge(data: any[], clearExistData?: boolean, asNewState?: boolean): Array<Model>;
      hasChanges(): boolean;
      acceptChanges(): DataTable;
      cancelChanges(): DataTable;
      totalCount(): number;
      data(data?: any[]): Array<Model>;
      originalCopy(): Array<Model>;
      originalModel(uid: string): Model | undefined;
    }
    /**
     * 数据集
     */
    class DataSet {
      private dataSetName;
      dataTables: {
        [key: string]: DataTable;
      };
      relations: {
        [key: string]: any;
      };
      /**
       * 数据集名称
       * @returns Name
       */
      get Name(): string;
      constructor(name?: string);
      /**
       * 设置数据集名称
       * @param name 表名
       * @returns this
       */
      setName(name: string): DataSet;
      /**
       * 向数据集中添加数据表
       * @param tableName 表名
       * @param _dataTable 数据表
       * @returns this
       */
      addDataTable(tableName: string, _dataTable: DataTable): DataSet;
      /**
       * 根据表名移除数据集中的数据表
       * @param tableName 表名
       * @returns DataTable
       */
      removeDataTable(tableName: string): DataSet;
      /**
       * 重命名数据集中的数据表名称
       * @param oldTableName 原表名
       * @param newTableName 新表名
       * @returns this
       */
      renameDataTable(oldTableName: string, newTableName: string): DataSet;
      /**
       * Copy DataTable 包含数据
       * @param dataTable 数据表
       * @param newTableName 新表名
       * @returns DataTable
       */
      copyDataTable(dataTable: string | DataTable, newTableName?: string): DataTable;
      /**
       * Clone DataTable 不包含数据,只复制结构
       * @param dataTable 数据表
       * @param newTableName 新表名
       * @returns DataTable
       */
      cloneDataTable(dataTable: string | DataTable, newTableName?: string): DataTable;
      /**
       * 根据表名获取数据集中的数据表
       * @param tableName 表名
       * @returns DataTable
       */
      getDataTable(tableName: string): DataTable;
      /**
       * 根据DataTable获取对应的表名
       * @param tableName 表名
       * @returns DataTable
       */
      getTableName(dataTable: DataTable): string | undefined;
      /**
       * 清除数据表中的数据,不传表名时清除所有表的数据
       * @param tableNames 表名
       * @returns DataTable
       */
      clear(...tableNames: string[]): DataSet;
      /**
       * Merge数据
       * @param tableNames tableName
       * @param data 原数据
       * @param clearExistData 是否清空已有数据，默认为true
       * @returns this
       */
      mergeData(tableName: string, data: any, clearExistData?: boolean, asNewState?: boolean): DataSet;
      /**
       * 从EIInfo向DataSet Merge数据
       * @param inInfo tableName
       * @param tableName 为空时，按照表名进行Merge
       * @param clearExistData 是否清空已有数据，默认为true
       * @returns this
       */
      mergeDataFromEIInfo(inInfo: EI.EIInfo, tableName?: string, clearExistData?: boolean): DataSet;
      /**
       * 设置DataTable当前行对象
       * @param tableName 表名
       * @param dataObject 当前对象
       * @returns dataObject
       */
      getCurrentDataObject(tableName: string): Model | undefined;
      /**
       * 数据集包含的表数量
       * @returns 包含的表数量
       */
      tablesCount(): number;
      /**
       * 数据集中是否包含表tableName
       * @param tableName 表名
       * @returns 是否包含
       */
      contains(tableName: string): boolean;
      /**
       * 数据集是否为空
       * @returns 是否空
       */
      isEmpty(): boolean;
      /**
       * 数据集中的表是否有变动, 表名不传或者为空时表示所有表
       * @param tableName 表名
       * @returns 是否变动
       */
      hasChanges(tableName?: string): boolean;
      /**
       * 数据集中是否包含表关系
       * @param relationName 关系名称
       * @returns 是否包含
       */
      hasRelation(relationName: string): boolean;
      /**
       * 数据集中所有表接受变更
       * @returns this
       */
      acceptChanges(): DataSet;
    }
    /**
     * 低代码画面工具类
     */
    class FormHelper {
      /**
       * 工具类所属当前组件
       */
      get App(): undefined;
      /**
       * 当前语言环境
       */
      get Locale(): string;
      /**
       * 是否Rtl
       */
      get IsRtl(): any;
      /**
       * 画面配置所属一级模块代码[2位]
       */
      get ModuleName(): string;
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面配置代码
       */
      get FormName(): string;
      /**
       * 画面配置名称
       */
      get FormCaption(): string;
      /**
       * 画面配置宽度(弹出)
       */
      get FormWidth(): number;
      /**
       * 画面配置高度(弹出)
       */
      get FormHeight(): number;
      /**
       * 是否可以最大化(弹出)
       */
      get MaxmizeBox(): boolean;
      /**
       * 是否可以最小化(弹出)
       */
      get MinimizeBox(): boolean;
      /**
       * 是否可以拖动画面大小(弹出)
       */
      get Resizable(): boolean;
      /**
       * 画面初始化成功标志(1:成功;<=0:失败)
       */
      get InitializeFlag(): number;
      /**
       * 画面配置信息
       */
      get ConfigInfo(): {
        [key: string]: any;
      };
      /**
       * 系统配置信息
       */
      get SystemInfo(): {
        [key: string]: any;
      };
      get DropDownRefreshKey(): {
        [key: string]: any;
      };
      /**
       * 下拉框绑定信息
       */
      get DropDownBindSource(): {
        [key: string]: any;
      };
      /**
       * 下拉框联动信息
       */
      get DropDownCascader(): {
        [key: string]: any;
      };
      /**
       * 画面相关Grid的Options对象信息
       */
      get GridOptions(): {
        [key: string]: any;
      };
      /**
       * 画面相关Grid的ToolbarOptions对象信息
       */
      get GridToolbarOptions(): {
        [key: string]: any;
      };
      /**
       * 画面布局相关的必填项信息
       */
      get RequiredFields(): {
        [key: string]: any;
      };
      /**
       * 画面布局相关的条件必填项信息
       */
      get RequiredFieldsByCondition(): {
        [key: string]: any;
      };
      /**
      * Grid中允许合并的列信息
      */
      get AllowMergeColumnFields(): {
        [key: string]: any;
      };
      /**
       * 画面对应的数据集
       */
      get FormDataSet(): DataSet;
      /**
       * 画面数据集绑定关系信息
       */
      get FormBindingRelation(): {
        [key: string]: any;
      };
      /**
       * 画面授权按钮信息
       */
      get FormAuthButtons(): {
        [key: string]: any;
      };
      /**
       * 默认配置账套代码
       */
      get DefaultConfigCompanyCode(): string;
      /**
       * 默认配置账套名称
       */
      get DefaultConfigCompanyName(): string;
      /**
       * 画面注册服务分区
       */
      get ServerPartition(): string;
      /**
       * 自定义服务分区
       */
      get CustomPartition(): string;
      /**
       * 画面初始化自定义参数
       */
      get InitialConfiParas(): {
        [key: string]: string | number;
      } | undefined;
      /**
       * 布局配置对应的当前账套代码
       */
      get CurrentConfigCompanyCode(): {
        [key: string]: string;
      };
      /**
       * 系统集团账套代码
       */
      get GroupCompanyCode(): string;
      /**
       * 系统集团账套名称
       */
      get GroupCompanyName(): string;
      /**
       *  Layout控件信息
       */
      get WidgetInstanceInfo(): {
        [key: string]: any;
      };
      /**
       *  开发者权限
       */
      get DevelopPermisson(): string;
      /**
       *  LayoutBindModelUid
       */
      get LayoutBindModelUid(): {
        [key: string]: any;
      };
      /**
       * 系统配置参数
       */
      SysDefinedParas: {
        GroupCompanyCode: string;
        GroupCompanyName: string;
        DefaultRmbCode: string;
      };
      private _app;
      private _currentConfigCompanyCode;
      private _serverPartition;
      private _customPartition;
      private _moduleName;
      private _formId;
      private _formName;
      private _formCaption;
      private _formWidth;
      private _formHeight;
      private _maxmizeBox;
      private _minimizeBox;
      private _resizable;
      private _initializeFlag;
      private _layoutIds;
      private _dataSetName;
      private _tableNames;
      private _serviceName;
      private _initialConfiParas;
      private _configInfo;
      private _systemInfo;
      private _configDefautValues;
      private _customDefaultValues;
      private _dropDownRefreshKey;
      private _dropDownBindSource;
      private _dropDownCascader;
      private _gridOptions;
      private _gridReactiveOptions;
      private _gridToolbarOptions;
      private _hiddenFields;
      private _requiredFields;
      private _requiredFieldsByCondition;
      private _formDataSet;
      private _formBindingRelation;
      private _formAuthButtons;
      private _groupCompanyCode;
      private _groupCompanyName;
      private _formConfigLincens;
      private _developPermisson;
      private _tempSingleConfigInfo;
      private _gridInstanceInfo;
      private _gridColumnsInfo;
      private _gridColumnsConfigInfo;
      private _gridStyleInfo;
      private _allowMergeColumnFields;
      private _widgetInstanceInfo;
      private _layoutConditionStyleInfo;
      private _layoutConfigRelationInfo;
      private _sysParaInfo;
      private _gridCustomEvent;
      private _layoutOpitons;
      private _layoutItemOpitons;
      private _layoutBindModelUid;
      private _layoutBindModel;
      /**
       * 画面工具类构造函数
       * @param serverPartition 服务分区
       * @param formName 画面代码
       * @param serviceName 服务名称
       * @param layoutIds 区域配置代码
       * @param sysConfiParas 画面自定义参数
       */
      constructor(serverPartition?: string, formName?: string, serviceName?: string, layoutIds?: string | Array<string>, initialConfiParas?: {
        [key: string]: string | number;
      });
      /**
       * 调用后台服务service获取配置数据并实例化工具类
       * @param serverPartition 服务分区
       * @param formName 画面代码
       * @param layoutIds 区域配置代码
       * @param serviceName 初始化调用service
       * @param sysConfiParas 画面自定义参数
       * @returns Promise number 大于零表示实例化成功
       */
      Initialize(serverPartition?: string, formName?: string, layoutIds?: string | Array<string>, serviceName?: string, initialConfiParas?: {
        [key: string]: string | number;
      }): Promise<{
        flag: number;
        msg: string;
      }>;
      /**
       * 根据配置数据初始化工具类相关配置信息
       * @param data 配置信息
       */
      private InitializeWithData;
      /**
       * 动态追加获取相关配置信息
       * @param configIds 配置Id,多个配置Id时用逗号隔开
       * @param sysConfiParas 画面自定义参数
       * @returns Promise number 大于零表示实例化成功
       */
      loadConfig(configIds: string, initialConfiParas?: {
        [key: string]: string | number;
      }): Promise<{
        flag: number;
        msg: string;
      }>;
      /**
       * 获取多语言环境下对应的文本
       * @param key 关键字
       * @param locale 语言，不传时为当前系统语言
       * @returns 多语言环境下对应的文本
       */
      $t(key: string, args?: any): string;
      /**
       * 设置画面标题
       * @param caption 画面标题
       * @returns FormHelper
       */
      setFormCapiton(caption: string): FormHelper;
      /**
       * 设置下拉框绑定的数据源及必填项配置
       * @param viewConfig 配置信息
       */
      private setDropDownBindSourceAndRequiredFields;
      /**
       * 设置自定义业务分区
       * @param partition 分区
       */
      setCustomPartition(partition: string): string;
      /**
       * 设置Layout的显示标题
       * @param configId 配置Id
       * @param caption 显示标题
       */
      setLayoutCaption(configId: string, caption: string): void;
      /**
       * 设置Layout的显示标题
       * @param configId 配置Id
       * @param caption 显示标题
       */
      getLayoutCaption(configId: string): string;
      /**
       * 获取Layout绑定的Model
       * @param configId 配置Id
       * @returns Model
       */
      getLayoutBindModel(configId: string): Model | undefined;
      /**
       * 刷新Layout绑定的Model
       * @param configId 配置Id
       * @returns Model
       */
      refreshLayoutBindModel(configId: string): void;
      /**
       * 设置Layout绑定的Form表单
       * @param configId 配置Id
       * @param form Form
       */
      setLayoutBindForm(configId: string, form: any): void;
      /**
       * 设置Layout绑定的Form表单
       * @param configId 配置Id
       * @param form Form
       */
      getLayoutBindForm(configId: string): any;
      /**
       * 设置Layout的属性
       * @param configId 配置Id
       * @param attrName 属性名称
       * @param attrValue 属性值
       */
      setLayoutOptions(configId: string, attrName: string, attrValue: any): FormHelper;
      /**
       * 获取Layout绑定的属性
       * @param configId 配置Id
       * @param attrName 属性名称
       * @returns 属性值
       */
      getLayoutOptions(configId: string, attrName: string): any;
      /**
       * 设置LayoutItem的属性
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param attr 属性键值
       * @returns FormHelper
       */
      setLayoutItemOption(configId: string, itemCode: string, attr: {
        [key: string]: any;
      }): FormHelper;
      /**
       * 获取LayoutItem绑定的属性
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param attrName 属性名称
       * @returns 属性值
       */
      getLayoutItemOption(configId: string, itemCode: string, attrName: string): any;
      /**
       * 设置LayoutItem的属性
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param rules 输入校验规则
       * @param replaceExistRules 替换已有规则
       * @returns FormHelper
       */
      setLayoutItemValidateRules(configId: string, itemCode: string, rules: Array<{
        [key: string]: any;
      }>, replaceExistRules?: boolean): FormHelper;
      /**
       * 设置LayoutItem的标题的颜色
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param color 颜色
       * @returns FormHelper
       */
      setLayoutItemCaptionForeColor(configId: string, itemCode: string | Array<string>, color: any): FormHelper;
      /**
       * 设置LayoutItem的标题的背景色
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param color 颜色
       * @returns FormHelper
       */
      setLayoutItemCaptionBackColor(configId: string, itemCode: string | Array<string>, color: any): FormHelper;
      /**
       * 设置LayoutItem的组件内容的颜色
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param color 颜色
       * @returns FormHelper
       */
      setLayoutItemContentForeColor(configId: string, itemCode: string | Array<string>, color: any): FormHelper;
      /**
       * 设置LayoutItem的组件内容的背景色
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param color 颜色
       * @returns FormHelper
       */
      setLayoutItemContentBackColor(configId: string, itemCode: string | Array<string>, color: any): FormHelper;
      /**
       * 设置LayoutItem的组件内容的条件样式配置
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @param config 配置信息
       * @returns FormHelper
       */
      setLayoutConditionStyleConfigInfo(configId: string, itemCode: string, config: {
        [key: string]: any;
      }): FormHelper;
      /**
       * 设置LayoutItem的组件内容的条件样式
       * @param configId 区域配置代码
       * @param itemCode 配置项目代码
       * @returns FormHelper
       */
      setLayoutConditionStyle(configId: string, itemCode?: string | Array<string>): FormHelper;
      /**
      * 绑定grid的自定义事件
      * @param configId 配置Id
      * @param eventName 自定义事件名称
      * @param func 绑定的事件函数
      * @returns FormHelper
      */
      bindGridCustomEvent(configId: string, eventName: GridCustomEvent, func: Function): FormHelper;
      /**
      * 获取grid绑定的自定义事件
      * @param configId 配置Id
      * @param eventName 自定义事件名称
      * @returns 绑定的自定义事件
      */
      getGridCustomEvent(configId: string, eventName: GridCustomEvent): Function;
      /**
       * 根据账套代码获取账套名称
       * @param companyCode 账套代码
       * @returns 账套名称
       */
      getCompanyName(companyCode: string): string;
      /**
       * 为配置区域Clone表结构
       * @param orgTableName 原始表名或区域配置Id
       * @param cloneTableName 克隆的新表名
       * @param configId 区域配置ID
       * @returns FormHelper
       */
      cloneTableForLayoutOrGrid(orgTableName: string, cloneTableName: string, configId: string): FormHelper;
      /**
       * 画面配置中是否包含配置
       * @param configId 配置Id
       * @returns 是否包含
       */
      containsConfig(configId: string): boolean;
      /**
       * 画面配置中是否不包含配置或者配置明细为空
       * @param configId 配置Id
       * @returns 是否包含
       */
      isEmptyConfig(configId: string): boolean;
      /**
       * 获取画面配置中的特定区域所有配置信息
       * @param configId 配置Id
       * @param onlyVisible 仅可见控件配置
       * @returns 配置信息
       */
      getConfigInfo(configId: string, onlyVisible?: boolean): {
        [key: string]: any;
      };
      /**
       * 获取画面配置中的特定区域主项配置信息
       * @param configId 配置Id
       * @returns 配置信息
       */
      getSingleViewConfigInfo(configId: string): any;
      /**
       * 获取区域内单个数据项的配置信息
       * @param configId 配置Id
       * @param itemCode 配置项目代码
       * @param configCompanyCode 配置账套[通常情况下为空]
       * @returns 配置信息
       */
      getSingleItemConfigInfo(configId: string, itemCode: string, configCompanyCode?: string): any;
      /**
       * 获取配置区域内所有字段配置数组
       * @param configId 配置Id
       * @returns itemCode数组
       */
      getAllItemCodeArray(configId: string): string[];
      /**
       * 获取相关的配置id数组
       * @returns configId数组
       */
      getAllConfigIdArray(): string[];
      /**
       * 获取配置的原始下拉数据源
       * @param configId 配置区域Id
       * @param itemCode 配置项目代码
       * @returns 数据源数组
       */
      getItemDropDownDataSource(configId: string, itemCode: string): Array<{
        [key: string]: any;
      }>;
      /**
       * 设置单个配置项目的下来框配置信息
       * @param layoutType 配置类型
       * @param columnConfig 配置项目
       * @param dataSource 数据源[omitted时为配置数据源]
       * @returns 配置信息
       */
      setDropDownBindOptions(layoutType: string, columnConfig: any, dataSource?: any[] | Function): {
        [key: string]: any;
      };
      /**
       * 设置下拉框及联筛选
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param value 相关值
       */
      filterDropDownCascaderDataSource(dataSource: any, filter: string, value: string): any;
      /**
       * 设置下拉框及联配置
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param value 相关值
       */
      setDropDownCascaderDataSource(configId: string, itemCode: string, value: any): void;
      /**
       * 获取下拉框及联数据源
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param parentConfigId 及联区域配置代码
       * @param parentItemCode 及联项目配置代码
       */
      getDropDownCascaderDataTable(configId: string, itemCode: string, parentConfigId: string, parentItemCode: string): any;
      /**
       * 获取Grid的配置样式
       * @param configId 配置代码
       * @return 配置样式
       */
      getGridStyleConfig(configId: string): any;
      /**
       * 设置下拉框自动填充
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param value 相关值
       */
      setDropDownAutoFillFieldForLayout(configId: string, itemCode: string, value: any): void;
      /**
     * 设置Grid下拉框自动填充
     * @param configId 区域配置代码
     * @param itemCode 项目配置代码
     * @param rowNode 对应的rowNode对象
     */
      setDropDownAutoFillFieldsForGrid(grid: string, itemCode: string, rowNode: any): void;
      /**
       * 向已有配置下拉数据源中添加代码
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param codeList 添加的代码数组
       * @param type 添加类型[push:添加到最后;unshift:添加到最前]
       */
      addDropDownCode(configId: string, itemCode: string, codeList: {}[], type?: 'push' | 'unshift'): void;
      /**
       * 重新载入下拉框的选项数据源
       * @param configId 区域配置代码
       * @param itemCode 项目配置代码
       * @param dataSource 重新载入的数据源[json数组或EiBlock]
       */
      reloadDropDownDataSource(configId: string, itemCode: string, dataSource?: any | Function): Promise<void>;
      /**
       * 根据画面相关配置生成数据集
       * @returns DataTableSet
       */
      private createDataSet;
      /**
       * 根据画面相关配置生成数据表DataTable
       * @param tableName 表名
       * @returns DataTable
       */
      createDataTable(tableName: string, options?: DataTableOptions): DataTable | undefined;
      /**
       * 根据dataTable获取对应的表名
       * @param dataTable dataTable
       * @returns dataTable
       */
      getTableName(dataTable: DataTable): any;
      /**
       * 获取布局绑定的DataTable名称[表名]
       * @param configId 配置代码
       * @returns DataTable
       */
      getBindingTableName(configId: string): string;
      /**
       * 设置布局绑定的DataTable名称[表名]
       * @param configId 配置代码
       * @returns DataTable
       */
      setBindingTableName(configId: string): string;
      /**
       * 根据布局配置获取关联绑定的数据表DataTable
       * @param configId 配置代码
       * @returns DataTable
       */
      getBindingTable(configId: string): any;
      /**
       * 根据布局配置获取关联绑定的数据表DataTable并转换成EI.EiBlock
       * @param configId 配置代码
       * @returns DataTable
       */
      getBindingTableAsBlock(configId: string): EI.EiBlock;
      /**
       * 获取布局绑定相关的数据表DataTable是否有变动
       * @param configIds 配置代码数组
       * @returns boolean 是否变动
       */
      hasDataChange(...configIds: string[]): boolean;
      /**
       * 撤销grid的数据操作
       * @param grid grid实例或者grid的配置代码
       * @returns FormHelper
       */
      cancelGridChange(grid: any): FormHelper;
      /**
       * 将数据绑定到画面相关布局中
       * @param data 数据
       * @param clearExistData 清除已有数据
       * @param configIds 布局数组
       * @returns this
       */
      mergeDataToLayoutOrGrid(data: EI.EIInfo | EI.EiBlock | Array<{
        [key: string]: any;
      }>, clearExistData?: boolean, ...configIds: string[]): FormHelper;
      /**
       * 校验画面是否有数据变动,并弹出提示框确定是否继续
       * @param configIds 配置代码数组
       * @returns boolean 是否继续
       */
      checkFormChanged(...configIds: string[]): Promise<boolean>;
      /**
       * 根据布局配置向Grid增加一行
       * @param configId 配置代码
       * @param setDefaultValue 是否设置默认值[接收{setDefaultValue: true, data: {}}类型的数据]
       * @param insertAtTop 是否新增行在顶部(可接受的选项[true, false, 'default', 'afterCurrent', 'beforeCurrent'])
       * @returns Model
       */
      addRowToGrid(configId: string, setDefaultValue?: any, insertAtTop?: any, autoCheckRow?: boolean): any;
      /**
       * 根据布局配置向Grid复制增加一行
       * @param configId 配置代码
       * @param insertAtTop 是否新增行在顶部(可接受的选项[true, false, 'default', 'afterCurrent', 'beforeCurrent'])
       * @param autoCheckRow 是否自动勾选
       * @returns models
       */
      addCopyRowToGrid(configId: string, insertAtTop?: any, autoCheckRow?: boolean): any;
      /**
       * 根据布局配置向Grid导入数据
       * @param configId 配置代码
       * @param data 要导入的数据
       * @param autoCheckRow 是否自动勾选新增行
       * @param asNewState 是否默认新增状态
       * @returns models
       */
      importRowsToGrid(configId: string, data: any[], autoCheckRow?: boolean, asNewState?: boolean): any;
      /**
       * 根据布局配置获取Grid的aggregates信息
       * @param configId 配置代码
       * @returns Grid的aggregates信息
       */
      getGridAggregates(grid: any): any;
      /**
       * 根据配置代码获取绑定相关DataTable指定uid的单个对象[未传入uid时返回第一个对象]
       * @param configId 区域配置代码
       * @param uid uid
       * @param toJson 将对象转换成Json
       * @returns any
       */
      getModelFromGridOrLayout(configId: string, uid?: string, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), extendJsonData?: {
        [key: string]: any;
      }): any;
      /**
       * 根据配置代码获取绑定相关DataTable指定uid的单个对象[未传入uid时返回第一个对象]
       * @param configId 区域配置代码
       * @param uid uid
       * @returns any
       */
      getModelFromGridOrLayoutAsBlock(configId: string, uid?: string, extendJsonData?: {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取DataTable指定uid的单个对象[未传入uid时返回第一个对象]
       * @param dataTable 区域配置代码或DataTable对象
       * @param uid uid
       * @param toJson 将对象转换成Json
       * @returns any
       */
      getModelFromDataTable(dataTable: DataTable | string, uid?: string, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), extendJsonData?: {
        [key: string]: any;
      }): any;
      /**
       * 获取Grid关联的DataSource的总行数
       * @param dataSource 区域配置代码或DataSource对象
       * @param uid uid
       * @returns Count
       */
      getGridDataCount(grid: any): any;
      /**
       * 获取DataTable指定id的单个对象
       * @param dataTable 区域配置代码或DataTable对象
       * @param id id
       * @param toJson 将对象转换成Json
       * @returns any
       */
      getModelFromDataTableById(dataTable: any, id: string, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      })): any;
      /**
       * 将Model转换成EiBlock
       * @param dataModel 区域配置代码或DataTable对象
       * @param extendJsonData 扩展的属性
       * @returns EiBlock
       */
      convertModelAsBlock(dataModel: ER.Model, extendJsonData?: {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 向单记录配置区域增加一条初始记录
       * @param configId 配置区域
       * @param setDefaultValue 是否赋配置默认值
       * @param setReadOnly 设置只读
       * @returns Model
       */
      addModelToLayout(configId: string, setDefaultValue?: boolean, setReadOnly?: boolean | 'default'): any;
      /**
       * 获取DataTable中指定索引的数据转换成Json,并以此创建一个EiBlock
       * @param dataTable dataTable或布局配置代码
       * @param index 索引，默认0
       * @param extendJson 扩展属性
       * @returns EiBlock
       */
      getDataFromDataTableAsEiBlock(dataTable: DataTable | string, index?: number, extendJson?: {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 数据类型转换，根据datasource schema进行强类型弱类型互相转换
       * @param data 数据
       * @param dataTable DataTable
       * @param type 转换类型
       * @returns data
       */
      convertDataType(data: EI.EiBlock | any[], dataTable: DataTable, type: 'strongly' | 'weakly'): any;
      /**
       * 获取DataTable的SchemaModelFields
       * @param dataTable dataTable
       * @returns DataTableSchemaModelFields
       */
      getModelFields(dataTable: DataTable): DataTableSchemaFields;
      /**
       * 根据配置控件类型转换成对应的组件名称
       * @param configContrlType dataTable或布局配置代码
       * @param dateFormat 日期格式化[区分日期控件和时间控件]
       * @param configInfo 配置信息
       * @returns 组件名称
       */
      getControlName(contrlType: string, dateFormat: string, configInfo?: any): string;
      /**
      * 重置validator提示信息
      * @param configIds 配置区域代码[支持数组，逗号隔开的字符串，未传入或传入为空时，验证画面上所有布局]
      * @returns void
      */
      resetValidator(configIds?: string | Array<string>): void;
      /**
       * 获取Layout区域的Label(span元素)
       * @param configId 配置区域ID
       * @param itemCode 配置字段代码
       * @returns span jquery element
       */
      getLayoutLabelSpan(configId: string, itemCode: string): any;
      /**
       * 根据页面布局配置代码获取对象JQuery元素
       * @param configId 配置代码
       * @param itemCode 项目代码
       * @returns JQuery元素
       */
      getLayoutJqueryElement(configId: string, itemCode: string): any;
      /**
       * Grid自适应列宽
       * @param grid grid配置代码或者grid对象
       * @returns FormHelper
       */
      autoBestFit(grid: any): FormHelper;
      /**
       * 根据配置代码获取Grid对象
       * @param configId 配置代码
       * @returns Grid对象
       */
      getGrid(grid: any): any;
      /**
       * 获取Grid对象的Api
       * @param grid grid对象或配置代码
       * @returns Grid对象
       */
      getGridApi(grid: any): GridApi | undefined;
      /**
       * 判断Grid是否可见
       * @param grid grid对象或配置代码
       * @returns 是否可见
       */
      isGridOnScreen(grid: any): boolean;
      /**
       * 获取Grid对象的ColumnApi
       * @param grid grid对象或配置代码
       * @returns Grid对象
       */
      getGridColumnApi(grid: any): ColumnApi | undefined;
      /**
       * 获取grid的低代码配置
       * @param configId 配置代码
       * @returns grid的低代码配置
       */
      getGridConfig(grid: any): any;
      /**
       * 根据配置代码及列获取GridColumn
       * @param grid 配置代码或Grid对象
       * @param col 配置列的colId或者field
       * @returns GridColumn
       */
      getGridColumn(grid: any, col: string): any;
      /**
       * 根据配置代码及列获取ColumnDef
       * @param grid 配置代码或Grid对象
       * @param col 配置列的colId或者field
       * @returns ColumnDef
      */
      getGridColumnDef(grid: any, col: string): any;
      /**
       * 显示Grid的列
       * @param grid 配置代码或grid对象
       * @param column 列信息
       * @returns this
       */
      showGridColumn(grid: any, column: string | Array<string>): FormHelper;
      /**
       * 隐藏Grid的列
       * @param grid 配置代码或grid对象
       * @param column 列信息
       * @returns this
       */
      hideGridColumn(grid: any, column: string | Array<string>): FormHelper;
      /**
       * 显示Grid的选择列
       * @param grid 配置代码或grid对象
       * @returns this
       */
      showGridCheckColumn(grid: any): FormHelper;
      /**
       * 隐藏Grid的选择列
       * @param grid 配置代码或grid对象
       * @returns this
       */
      hideGridCheckColumn(grid: any): FormHelper;
      /**
       * 显示或隐藏Grid的选择列
       * @param grid 配置代码或grid对象
       * @param showOrHide 显示或隐藏
       * @returns this
       */
      showOrHideGridCheckColumn(grid: any, showOrHide?: 'show' | 'hide' | 'default'): FormHelper;
      /**
       * 设置Grid的选择模式
       * @param grid 配置代码或grid对象
       * @param mode 选择模式
       * @param showOrHide 显示或隐藏选择列
       * @returns this
       */
      setGridSelectMode(grid: any, mode: 'multiple' | 'single', showOrHide?: 'show' | 'hide' | 'none'): FormHelper;
      /**
       * 设置Grid是否允许拖拽行
       * @param grid 配置代码或grid对象
       * @param allowDrag 是否允许拖拽行
       * @returns this
       */
      setGridRowDrag(grid: any, allowDrag?: true | false | 'default'): FormHelper;
      /**
       * 增加Grid的列
       * @param grid 配置代码或grid对象
       * @param column 列信息
       * @returns this
       */
      addGridColumn(grid: any, column: {} | Array<{}>): FormHelper;
      /**
       * 删除Grid的列
       * @param grid 配置代码或grid对象
       * @param colId 列信息
       * @returns this
       */
      removeGridColumn(grid: any, colId: string | Array<string>): FormHelper;
      /**
       * 获取Grid的绑定的结构信息
       * @param grid 配置代码或grid对象
       * @param type 返回类型
       * @returns 列名的字符串或数组
       */
      getGridColumnFields(grid: any, type?: 'string' | 'Array'): any;
      /**
       * 设置Grid的Enable
       * @param grid 配置代码或grid对象
       * @param enabled 是否可用
       * @returns this
       */
      setGridEnable(grid: any, enabled?: boolean): FormHelper;
      /**
       * 设置Grid是否可编辑
       * @param grid Grid对象或配置代码
       * @param editable 是否可编辑
       * @returns this
       */
      setGridEditable(grid: any, editable: boolean): FormHelper;
      /**
       * 重新将Grid焦点定位到指定行
       * @param grid 配置代码或grid对象
       * @param keyfilter 需要定位的行数据的条件
       * @returns this
       */
      setGridIndicator(grid: any, keyfilter: {
        [key: string]: any;
      }): FormHelper;
      /**
      * 刷新grid的合计行信息
      * @param grid grid实例或配置代码
      * @returns this
      */
      refreshGridFooterData(grid: any): FormHelper;
      /**
      * 设置画面的Layout与配置Id的关系信息
      * @param configId 配置代码
      * @param layoutName layoutName
      * @returns this
      */
      setLayoutConfigRelationInfo(configId: string, layoutName: string): FormHelper;
      /**
      * 根据LayoutName获取配置Id
      * @param layoutName layoutName
      * @returns 配置Id
      */
      getConfigIdbyLayoutName(layoutName: string): string;
      /**
      * 根据Grid对象获取配置Id
      * @param grid grid
      * @returns 配置Id
      */
      getGridConfigId(grid: any): string;
      /**
      * 设置画面的单记录的控件实例信息
      * @param configId 配置代码
      * @param itemCode 控件配置代码
      * @param widget 控件信息
      * @returns this
      */
      setWidgetInstanceInfo(configId: string, itemCode: string, widget: any): FormHelper;
      /**
      * 设置Layout中配置的控件是否可见
      * @param configId 配置代码
      * @param visible 是否可见
      * @param itemCodes 控件配置代码[多个项目用逗号隔开]
      * @param resetValue 控件的值重置类型[none:不操作|default:设置成配置默认值|empty:清空值]
      * @returns this
      */
      setControlVisible(configId: string, visible: boolean, itemCodes: string, resetValue?: 'none' | 'default' | 'empty'): FormHelper;
      /**
       * 设置grid列的标题、字体颜色、背景颜色
       * @param grid grid对象
       * @param titleInfoSet 传入的标题信息
       * @returns FormHelper
       */
      setGridColumnTitle(grid: any, titleInfoSet: {
        colId: string;
        title: string;
        fontColor?: string;
        backgroundColor?: string;
      }[]): FormHelper;
      /**
       * 设置grid列的自定义属性
       * @param grid grid对象
       * @param callBack 回调函数处理列的属性信息
       * @returns FormHelper
       */
      setGridColumnOptions(grid: any, callBack: (colDef: ColDef) => void): FormHelper;
      /**
       * 设置Grid的运行时属性
       * @param configId 配置代码
       * @param key 属性代码
       * @param value 属性值
       * @returns this
       */
      setGridOptions(configId: string, key: string, value: any, isReactive?: boolean): FormHelper;
      /**
       * 获取Grid的运行时属性
       * @param configId 配置代码
       * @param key 属性代码
       * @returns 属性值
       */
      getGridOptions(configId: string, key: string, isReactive?: boolean): any;
      /**
       * 获取grid的editable属性
       * @param grid grid配置代码或grid对象
       * @returns boolean
       */
      getGridEditable(grid: any): boolean;
      /**
       * 根据配置代码获取组件
       * @param configId Grid配置Id
       * @param itemCode 字段配置代码
       * @param widgetType 组件类型
       * @returns 组件
       */
      getControl(configId: string, itemCode: string, widgetType?: string): any;
      /**
       * 低代码配置控件的值是否为空
       * @param configId Grid配置Id
       * @param itemCodes 字段配置代码[多个字段时用逗号隔开]
       * @param widgetType 组件类型
       * @returns 是否为空
       */
      isControlEmptyValue(configId: string, itemCodes: string, widgetType?: string): boolean;
      /**
       * 设置组件的条件属性
       * @param configId 配置区域代码
       * @param behaviorName 操作定义类型
       * @param propName 设置的属性名称[默认为ReadOnly]
       * @param propValue 设置的属性值[默认为true]
       * @param exceptItemCodes 排除的项目[可为空]
       * @returns this
       */
      setControlConditionProps(configId: string, behaviorName: string, propName?: string, propValue?: boolean | string, exceptItemCodes?: Array<string>): FormHelper;
      /**
       * 根据配置代码获取ErLayout组件项的值
       * @param configId 配置Id
       * @param itemCodes 字段配置代码[多个字段时用逗号隔开]
       * @returns 组件项的值
       */
      getControlValue(configId: string, itemCodes: string): any;
      /**
       * 根据配置代码获取Layout组件的显示文本
       * @param configId Grid配置Id
       * @param itemCodes 字段配置代码
       * @returns 组件的显示文本
       */
      getControlText(configId: string, itemCodes: string): string;
      /**
       * 根据配置代码设置ErLayout组件的值
       * @param configId Grid配置Id
       * @param itemCode 字段配置代码
       * @param editValue 需要设置的值
       * @param widgetType 组件类型
       * @returns this
       */
      setControlValue(configId: string, itemCode: string, editValue: any): FormHelper;
      /**
       * 根据配置代码设置ErLayout组件的值
       * @param configId 配置Id
       * @param editValue 需要设置的值
       * @param itemCodes 配置代码
       * @returns this
       */
      setControlValueEx(configId: string, values: any, ...itemCodes: string[]): FormHelper;
      /**
       * 根据配置代码设置ErLayout组件的样式
       * @param configId 配置Id
       * @param itemCodes 配置代码
       * @param cssInfo css信息
       * @returns this
       */
      setControlCss(configId: string, itemCodes: string | Array<string>, cssInfo: {
        property: string;
        value: any;
      }[]): FormHelper;
      /**
       * 根据配置代码设置Model的值
       * @param configId Grid配置Id
       * @param editValue 需要设置的值
       * @param itemCodes 配置代码
       * @param reserveValue 保留值
       * @returns this
       */
      setModelDefalutValue(dataModel: ER.Model, configId: string | Array<string>, itemCode?: string, reserveValue?: any): FormHelper;
      /**
       * 设置Model的值
       * @param dataModel Model
       * @param values 需要设置的值[单个值或Json]
       * @param itemCodes 需要设置的字段
       * @returns this
       */
      setModelValue(model: Model, values: any, ...itemCodes: string[]): FormHelper;
      /**
       * 设置Model的属性值为空
       * @param dataModel Model
       * @param values 需要设置的值[单个值或Json]
       * @param itemCodes 需要设置的字段
       * @returns this
       */
      setModelEmptyValue(dataModel: ER.Model, ...itemCodes: any[]): FormHelper;
      /**
       * 设置组件只读
       * @param configId 配置区域代码
       * @param readonly 字段只读信息
       * @returns this
       */
      setControlReadOnlyEx(configId: string, readonly: {
        [key: string]: boolean | 'default';
      } | undefined): FormHelper;
      /**
       * 设置ErLayout组件只读
       * @param configId 配置区域代码
       * @param readonly 是否只读或默认
       * @param itemCodes 需要设置的字段
       * @returns this
       */
      setControlReadOnly(configId: string, readOnly: boolean | 'default', ...itemCodes: string[]): FormHelper;
      /**
       * 设置ErLayout区域内所有组件只读属性
       * @param configId 配置区域代码或配置代码数组[支持逗号隔开的字符串]
       * @param readonly 是否只读或默认
       * @returns this
       */
      setAllControlReadOnly(configId: string | Array<string>, readOnly: boolean | 'default'): FormHelper;
      /**
       * 设置ErLayout区域组件enable属性
       * @param configId 配置区域代码或配置代码数组[支持逗号隔开的字符串]
       * @param enable 是否可用
       * @returns this
       */
      setControlEnable(configId: string, enable: boolean | 'default', ...itemCodes: string[]): FormHelper;
      /**
       * 设置ErLayout区域内所有组件enable属性
       * @param configId 配置区域代码或配置代码数组[支持逗号隔开的字符串]
       * @param enable 是否可编辑
       * @returns this
       */
      setAllControlEnable(configId: string | Array<string>, enable: boolean | 'default'): FormHelper;
      /**
       * 设置ErLayout区域内组件值为空
       * @param configId 配置区域代码
       * @param itemCodes 字段数组，不传入改参数时区域内所有
       * @returns this
       */
      setControlEmptyValue(configId: string, ...itemCodes: string[]): FormHelper;
      /**
       * 设置ErLayout组件内的控件的默认值
       * @param configId 配置区域代码或代码集合
       * @param ignoreExistValue 已存在值时是否忽略
       * @returns this
       */
      setAllControlDefalutValue(configId: string | Array<string>, ignoreExistValue?: boolean): FormHelper;
      /**
       * 设置ErLayout区域内控件的默认值
       * @param configId 配置区域代码
       * @param itemCodes 配置控件代码
       * @param ignoreExistValue 已存在值时是否忽略
       * @returns this
       */
      setControlDefalutValue(configId: string, itemCode: string, ignoreExistValue?: boolean): FormHelper;
      /**
       * 获取画面配置按钮信息
       * @param buttonName 按钮代码
       * @returns 配置信息
       */
      getFormButtonConfigInfo(buttonName: string): any;
      /**
       * 重置配置区域内所有控件的值
       * @param configId 配置区域代码
       * @returns this
       */
      resetLayout(configId: string | Array<string>): FormHelper;
      /**
       * 获取配置区域内所有控件的值
       * @param configId 配置区域代码或用逗号隔开的多个配置代码或配置代码数组
       * @param extendJson 扩展属性
       * @returns Json
       */
      getAllControlValue(configId: string | Array<string>, extendJson?: {
        [key: string]: any;
      }): {
        [key: string]: any;
      };
      /**
       * 获取配置区域内所有控件的值，并以此生成EiBlock
       * @param configId 配置区域代码
       * @param extendJson 扩展属性
       * @returns EiBlock
       */
      getAllControlValueAsEiBlock(configId: string | Array<string>, extendJson?: {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取配置区域内所有控件的值，并以此生成查询条件的结构[后台服务需支持]
       * @param configId 配置区域代码
       * @param extendJson 扩展属性
       * @returns EiBlock
       */
      getAllControlValueAsFilter(configId: string | Array<string>, extendJson?: {
        [key: string]: any;
      }): EI.EiBlock;
      /**
      * 展开LayoutGroup区域
      * @param configIds 配置区域代码
      * @returns EiBlock
      */
      expandLayoutGroup(configIds: string | Array<string>): FormHelper;
      /**
      * 收起LayoutGroup区域
      * @param configIds 配置区域代码
      * @returns EiBlock
      */
      collapseLayoutGroup(configIds: string | Array<string>): FormHelper;
      /**
       * 添加自定义查询条件配置[后台服务需支持]
       * @param customFilter 查询条件脚本
       * @param queryFilterBlock 查询条件配置
       * @returns EiBlock
       */
      addCustomFilterToQueryFilter(customFilter: string, queryFilterBlock: EI.EiBlock): FormHelper;
      /**
       * 根据画面配置按钮的服务查询数据
       * @param buttonName 按钮名称
       * @param filterConfigId 查询条件区域配置代码
       * @param customFilterString 附加用户自定义条件
       * @returns Promise<EI.EIInfo>
       */
      queryDataByButton(buttonName: string, filterConfigId: string, customFilterString?: string, customFilterJson?: {
        [key: string]: any;
      }): Promise<EI.EIInfo>;
      /**
       * 根据service查询数据
       * @param serviceName 服务名称
       * @param paras 附加参数
       * @returns Promise<EI.EIInfo>
       */
      queryDataByService(serviceName: string, paras?: {
        filterConfigId?: string;
        queryType?: {
          [key: string]: any;
        };
        customFilter?: string;
        dataTable?: string | DataTable;
        clearTable?: true;
      }): Promise<EI.EIInfo>;
      /**
     * 根据DataSource查询数据[当传入grid的配置ID时会根据配置获取数据查询并绑定到Grid]
     * @param DataSourceId 数据源ID或Grid的配置ID
     * @param paras 附加参数
     * @returns Promise<EI.EIInfo>
     */
      queryDataByDataSource(dataSourceId: string, paras?: {
        filterConfigId?: string;
        queryType?: {
          [key: string]: any;
        };
        customFilter?: string;
        dataTable?: string | DataTable;
        clearTable?: true;
      }, serviceName?: string): Promise<EI.EIInfo>;
      /**
       * 获取画面配置代码对应的SQL条件脚本
       * @param codeClass 代码定义
       * @param code 代码值
       * @returns SQL条件脚本
       */
      getFormCodeSetFilter(codeClass: string, code: string): string;
      /**
       * 获取格式化后的SQL脚本，自动替换系统预置的占位符
       * @param sqlScript SQL脚本
       * @param companyCode 账套代码
       * @returns 格式化后SQL脚本
       */
      getQuerySqlFormat(sqlScript: string, companyCode?: string): string;
      /**
       * 获取系统配置参数
       * @param sysInfoName 参数名称
       * @returns 参数值
       */
      getFormSysInfo(sysInfoName: string): string;
      /**
       * 获取系统配置参数
       * @param companyCode 账套代码
       * @param sysParaCode 参数代码
       * @param effectValue 影响因素值
       * @returns 参数值
       */
      getSysParaValue(companyCode: string, sysParaCode: string, effectValue?: string): Promise<string>;
      /**
       * 格式化系统配置的默认值
       * @param defaultValue 默认值
       * @returns 格式化后的默认值
       */
      getDefaultStringValue(defaultValue: string): string;
      /**
       * 自定义配置区域配置的默认值，单记录区域重置或Grid区域新增行时以次默认值合并低代码配置的默认值
       * @param configId 配置代码
       * @param data 默认值
       * @void
       */
      setCustomDefaultValue(configId: string, data: {
        [key: string]: any;
      }): void;
      /**
       * 获取Layout区域配置的默认值
       * @param configIds 配置代码
       * @returns 格式化后的默认值
       */
      getLayoutConfigDefaultValues(configIds: string | Array<string>): {
        [key: string]: any;
      };
      /**
       * 获取Grid区域配置的默认值
       * @param configId 配置代码
       * @returns 格式化后的默认值
       */
      getGridConfigDefaultValues(configId: string): {
        [key: string]: any;
      };
      /**
       * 根据配置设置Grid的Options
       * @param configId 配置代码
       * @param gridOptions 传入已有的Options
       * @returns Options
       */
      loadGrid(configId: string, gridInstance: any, options?: any, toolbarOptions?: any, pageOptions?: any): Promise<boolean>;
      /**
       * 根据配置设置Grid的Options
       * @param configId 配置代码
       * @param options 自定义options
       * @param toolbarOptions 工具栏选项
       * @param pageOptions 翻页选项
       * @returns Options
       */
      getGridConfigOptions(configId: string, options?: any, toolbarOptions?: any, pageOptions?: any): any;
      /**
       * 初始化grid的相关事件
       * @param gridInstance grid实例
       * @param options 自定义options
       * @returns Options
       */
      private setGridInitialEvent;
      private setGridContextMenu;
      /**
       * 根据配置获取grid的列定义
       * @param configId grid实例
       * @param gridConfigInfo grid配置信息
       * @param gridInstanceOptions grid实例选项
       * @param options 自定义options
       * @returns ColumnDefs
       */
      private getGridColumnDefs;
      /**
      * 获取grid列头自定义模版
      * @param header 列头配置信息
      * @returns 列头模版
      */
      getGridHeaderTemplate(header: any): string;
      /**
      * 获取grid分组显示时的分组名称
      * @param rowNode 分组结点
      * @param parentIndex 父分组名称
      * @returns 分组名称
      */
      private getGroupIndexName;
      /**
      * 执行Grid列配置的计算公式
      * @param data 相关行数据
      * @param expression 表达式
      * @returns result
      */
      private excuteGridColumnExpressions;
      /**
       * 根据配置生成BandColumn信息
       * @param bandConfigInfo GridBand配置信息
       * @param bandColumns 所有Band
       * @param finalBandColumns 叶子结点Band
       * @param fatherBand 父级Band
       * @param options grid组件传入的options
       * @returns BandColumn
       */
      private createGridBandColumn;
      /**
       * 设置Grid的列聚合函数
       * @param configId 配置代码
       * @param colDef 列定义
       * @param aggfunc 聚合函数
       * @param gridInstanceOptions grid属性
       * @param columnConfig 列配置
       * @returns colDef
       */
      private setGridColumnAggFunc;
      /**
       * 设置Grid的列下拉框绑定相关属性
       * @param configId Grid配置代码
       * @param colDef GridColumn
       * @param dropDownDataSource 绑定数据源
       * @param valueField 绑定值列
       * @param textField 绑定显示列
       * @param valueVisible 是否显示值
       * @returns this
       */
      private setGridColumnDropdown;
      /**
       * 设置Grid的列日期型控件相关属性
       * @param configId Grid配置代码
       * @param colDef GridColumn
       * @param format format
       * @returns this
       */
      private setGridColumnDateTimePicker;
      /**
       * 设置Grid的列数值型控件相关属性
       * @param configId Grid配置代码
       * @param colDef GridColumn
       * @param format format
       * @returns this
       */
      private setGridColumnNumberEditor;
      /**
       * 设置Grid的列头菜单信息
       * @param configId Grid配置代码
       * @param gridInstance grid实例
       * @param options grid组件传入的options
       * @returns FormHelper
       */
      private setGridMainMenuItems;
      /**
       * 设置Grid的行样式信息
       * @param configId Grid配置代码
       * @param gridInstance grid实例
       * @param options grid组件传入的options
       * @returns FormHelper
       */
      private setGridRowStyle;
      /**
       * 设置Grid的列是否可编辑
       * @param grid Grid对象或配置代码
       * @param editable 是否可编辑[]
       * @param ...colIds 列信息
       * @returns this
       */
      setGridColumnEditable(grid: any, editable: boolean | Function | 'default', ...colIds: string[]): FormHelper;
      /**
       * 设置Grid的Cell的RenderText
       * @param grid Grid对象或配置代码
       * @param col Grid列的colId或者field
       * @param cellValue cellValue
       * @param format format
       * @returns RenderText
       */
      getGridCellRenderText(grid: any, col: string, cellValue: any, format?: string): string;
      /**
       * 根据配置信息及选中代码获取选中行的数据
       * @param configId 布局配置代码
       * @param itemCode 字段配置代码
       * @param selectValue 选中值[未传入时取当前控件值|ErGrid组件中使用时,必须传入该值]
       * @returns 选中行数据
       */
      getDropDownSelectedData(configId: string, itemCode: string, selectValue?: any): any;
      /**
       * 根据配置信息及选中代码获取对应的中文名称
       * @param configId 布局配置代码
       * @param itemCode 字段配置代码
       * @param selectValue 选中值[未传入时取当前控件值]
       * @returns 中文名称
       */
      getDropDownSelectedText(configId: string, itemCode: string, selectValue?: any): string;
      /**
       * 同步Grid列顺序
       * @param configId 布局配置代码
       * @returns
       */
      uploadGridColumnSeq(configId: string): Promise<unknown>;
      /**
       * 同步Grid列属性
       * @param configId 布局配置代码
       * @param columnName 列配置代码
       * @param propName 属性名称
       * @param propValue 属性值
       * @returns
       */
      uploadGridColumnProps(configId: string, columnName: string, propName: string, propValue: any): Promise<unknown>;
      /**
       * 同步Grid列属性
       * @param columnConfigs 属性配置信息
       * @returns
       */
      uploadGridColumnPropsEx(columnConfigs: {
        COMPANY_CODE: string;
        FORM_NAME: string;
        FUNCTION_ID: string;
        ITEM_CODE: string;
        PROPERTY_NAME: string;
        PROPERTY_VALUE: any;
      }[]): Promise<unknown>;
      /**
       * 同步Grid属性
       * @param configId 布局配置代码
       * @param propName 属性名称
       * @param propValue 属性值
       * @returns
       */
      uploadGridViewProps(configId: string, propName: string, propValue: any): Promise<unknown>;
      /**
       * 同步Grid属性
       * @param viewConfigs 属性配置信息
       * @returns
       */
      uploadGridViewPropsEx(viewConfigs: {
        COMPANY_CODE: string;
        FORM_NAME: string;
        FUNCTION_ID: string;
        PROPERTY_NAME: string;
        PROPERTY_VALUE: any;
      }[]): Promise<unknown>;
      /**
       * 同步Grid列宽属性
       * @param configId 布局配置代码
       * @param fieldName 列配置代码[未传入时表示所有列]
       * @returns
       */
      uploadGridColumnWidth(configId: string, itemCode?: string): Promise<unknown>;
      /**
       * 同步Grid个人配置信息
       * @param grid 布局配置代码或低代码grid实例
       * @returns
       */
      uploadGridColumnCustomConfig(grid: any): Promise<unknown>;
      /**
       * 重置Grid个人配置信息
       * @param configId 布局配置代码
       * @param userId 用户代码[未传入时表示所有用户]
       * @returns
       */
      deleteGridColumnCustomConfig(configId: string, userId?: string): Promise<unknown>;
      /**
       * 验证必填项、输入校验及条件必填项
       * @param configIds 配置区域代码[支持数组，逗号隔开的字符串，未传入或传入为空时，验证画面上所有布局]
       * @returns 验证通过返回true，否则返回false
       */
      checkRequiredInput(configIds?: string | Array<string>, showMessage?: boolean): Promise<boolean>;
      /**
       * 验证Grid的必填项
       * @param grid grid对象或grid配置代码
       * @param checkRowType 验证类型
       * @param checkVisibleColumns 是否只验证可见列
       * @param showMessage 是否显示提示信息
       * @returns 验证通过返回true，否则返回false
       */
      checkGridInput(grid: string, checkRowType?: 'ChangedRows' | 'CheckedRows' | 'AllRows', checkVisibleColumns?: boolean, showMessage?: boolean): boolean;
      private checkGridRowInput;
      /**
       * 勾选指定的grid行[必须有勾选框的情况下]
       * @param grid any
       * @param rowData any[uid字符串,或者包含uid属性的对象以及对象数组]
       * @returns FormHelper
       */
      checkGridRow(grid: any, rowData: any, setChecked?: boolean): FormHelper;
      /**
      * 勾选grid的当前行[必须有勾选框的情况下]
      * @param grid grid配置代码或grid对像
      * @returns Grid实例
      */
      checkGridCurrentRow(grid: any): void;
      /**
       * 勾选所有的grid行[必须有勾选框的情况下]
       * @param grid grid
       * @param afterFilter 是否筛选排序以后的行[默认true]
       * @returns void
       */
      checkAllGridRow(grid: any, afterFilterAndSort?: boolean): void;
      /**
       * 取消勾选所有的grid行[必须有勾选框的情况下]
       * @param grid grid
       * @param afterFilter 是否筛选排序以后的行[默认true]
       * @returns void
       */
      unCheckAllGridRow(grid: any, afterFilterAndSort?: boolean): void;
      /**
      * 判断Grid的行是否被勾选中[必须有勾选框的情况下]
      * @param grid Grid
      * @param rowData Model或行数据的uid
      * @returns 行是否被选中
      */
      isGridRowChecked(grid: any, rowData: Model | string): boolean | undefined;
      /**
      * 判断Grid的当前行是否被勾选中[必须有勾选框的情况下]
      * @param grid Grid
      * @returns 行是否被选中
      */
      isGridCurrentRowChecked(grid: any): boolean | undefined;
      /**
       * 设置localStorage
       * @param key 键
       * @param value 值
       * @returns Storage
       */
      setLocalStorage(key: string, value: {
        [key: string]: any;
      }): Storage;
      /**
       * 获取localStorage
       * @param key 键
       * @param removeAfterGet 获取值后删除相应的key
       * @returns string
       */
      getLocalStorage(key: string, removeAfterGet?: boolean): string;
      /**
       * 获取画面传递参数
       * @param formName 画面名
       * @param removeAfterGet 获取值后删除相应的参数缓存
       * @returns any
       */
      getCallFormParas(formName: string, removeAfterGet?: boolean): any;
      /**
       * 打开新的主页面
       * @param formName 画面名称
       * @param paras 画面之间传递参数(获取时的key为formName画面名称)
       * @param useLocalStorageParams 是否使用LocalStorage传递参数(默认true)
       * @returns void
       */
      callForm(formName: string, paras: any, useLocalStorageParams?: boolean): void;
      /**
     * 复制文本到粘贴板
     * @param text 文本
     * @returns Promise<void>
     */
      copyText(text: string): void;
      /**
       * 读取粘贴板的文本
       * @returns Promise<string>
       */
      readClipboardText(): Promise<string>;
      /**
       * 获取文本的长度
       * @param text 文本
       * @returns 长度
       */
      getTextWidth(text: string): number;
      /**
       * 获取Guid String === uuidv4()
       * @returns GUID String
       */
      getGuid(): string;
      /**
       * 四舍五入数值
       * @param num 原数值
       * @returns 四舍五入后的新数值
       */
      round(num: number, decimals: number): number;
      /**
       * 在元素区域上显示loading，element参数为空时，覆盖整个页面区域
       * @param toggle （true：显示loading， false：关闭loading）
       * @param element 元素
       */
      loading(toggle: boolean, element?: JQuery<HTMLElement>): void;
      /**
       * 根据传入的数组变量替换对应位置占位符{n}后的字符串
       * @param orginalString
       * @param args 替换占位符{n}的数组
       * @returns newString
       */
      stringFormat(orginalString: string, ...args: any[]): string;
      /**
       * 判断对象是否为空,字符串Trim()后lenght为零,数组长度为0时
       * @param obj
       * @returns boolean
       */
      isNullOrEmpty(obj: any): boolean;
      /**
       * 校验对象是否为空，同时当[nullWarningMsg]参数不为空时提示警告信息
       * @param obj
       * @param nullWarningMsg 为空时提示警告信息
       * @returns boolean
       */
      checkNullOrEmpty(obj: any, nullWarningMsg?: string): boolean;
      /**
       *  调用后台服务
       * @param svcName 服务名称
       * @param data 传入EIInfo
       * @param showLoading 是否显示loading
       * @param messageError 调用后台报错时是否直接显示弹出错误信息
       * @param showLoadingAnimotion 是否显示loading动画
       * @param partition 分区
       * @returns Promise<EI.EIInfo>
       */
      callService(svcName: string, data: EI.EIInfo, showLoading?: boolean | ILoadingOptions, messageError?: boolean | 'modal', showLoadingAnimotion?: boolean, partition?: string): Promise<EI.EIInfo>;
      /**
       * 动态SQL查询
       * @param svcName 自定义服务名称，传空时默认系统服务
       * @param sqlScriptArray SQL脚本数组
       * @returns Promise EI.EIInfo
       */
      querySql(svcName: string, ...sqlScriptArray: string[]): Promise<EI.EIInfo>;
      /**
       * 弹出Confirm确认对话框
       * @param message 显示的对话内容，为空时默认[是否确认操作?]
       * @param confirmFunction 确认后的回调函数
       * @param cancelFunction 取消后的回调函数
       * @returns Promise boolean
       */
      messageConfirm(message?: string | undefined | {
        message: string;
        content?: any;
        okType?: string;
        culture?: boolean;
      }, confirmFunction?: Function, cancelFunction?: Function): Promise<boolean>;
      /**
       * 在页面上侧中间显示提示信息栏
       * @param text 显示文本内容,默认为[操作成功]
       */
      messageSuccess(message?: string | {
        message: string;
        modal?: boolean;
        culture?: boolean;
      }, ...args: any[]): void;
      /**
       * 在页面上侧中间显示提示信息栏
       * @param text 显示文本内容
       */
      messageInfo(message: string | {
        message: string;
        modal?: boolean;
        culture?: boolean;
      }, ...args: any[]): void;
      /**
       * 在页面上侧中间显示警告信息栏
       * @param text 显示文本内容
       */
      messageWarning(message: string | {
        message: string;
        modal?: boolean;
        culture?: boolean;
      }, ...args: any[]): void;
      /**
       * 在页面上侧中间显示错误信息栏
       * @param text 显示文本内容
       */
      messageError(message: string | {
        message: string;
        modal?: boolean;
        culture?: boolean;
      }, ...args: any[]): void;
      /**
       * 根据数据生成EiBlock对象
       * @param data 数据
       * @param tableName BlockName
       * @returns EiBlock
       */
      buildEiBlock(data?: any[], tableName?: string): EI.EiBlock;
      /**
       * 获取配置区域绑定的数据源的当前行数据
       * @param configId Grid
       * @returns Model | undefined
       */
      getCurrentDataObject(configId: string): Model | undefined;
      /**
       * 结束Grid编辑模式
       * @param grid grid[可传入多个grid配置代码的数组或用逗号隔开的字符串]
       * @param callBack 回调函数
       */
      stopGridEditing<T>(grid: any, callBack: () => T): Promise<T>;
      /**
       * 删除Grid的选中行[无勾选框时为当前行]
       * @param grid Grid
       * @param confirmMsg 是否提示确认
       * @param rows 需要删除的行
       */
      deleteGridRows(grid: any, confirmMsg?: boolean, rows?: any[]): Promise<boolean>;
      /**
       * 设置grid的焦点
       * @param grid Grid
       * @param rowIndex rowIndex
       * @param colKey colKey ｜ Column
       */
      setGridFocusedCell(grid: any, rowIndex?: number, colKey?: any, rowPinned?: RowPinnedType): void;
      /**
       * 更新Grid行的值
       * @param grid Grid或配置Id
       * @param row ER.Model或ER.Model的uid
       * @param newData 赋值数据Json
       * @param ignoreExistValue 忽略存在的值
       */
      setGridRowData(grid: any, row: any, newData: {
        [key: string]: any;
      }, ignoreExistValue?: boolean): FormHelper;
      /**
       * 更新Grid当前行的值
       * @param grid Grid或配置Id
       * @param newData 赋值数据Json
       * @param ignoreExistValue 忽略存在的值
       */
      setGridCurrentRowData(grid: any, newData: {
        [key: string]: any;
      }, ignoreExistValue?: boolean): FormHelper;
      /**
      * 设置Grid行数据的状态
      * @param grid Grid或配置Id
      * @param row ER.Model或ER.Model的uid
      * @param state 'added' | 'updated' | 'unchanged'
      */
      setGridRowState(grid: any, row: any, state: 'added' | 'updated' | 'unchanged'): FormHelper;
      /**
       * 获取Grid绑定的DataTable
       * @param grid
       * @returns DataTable | undefined
       */
      getGridBindingTable(grid: any): DataTable | undefined;
      /**
       * 获取Grid的选中行[无勾选框时为当前行]
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridSelectRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的选中行[无勾选框时为当前行]EiBlock
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridSelectRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的当前焦点行
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns Model or Json
       */
      getGridCurrentRow(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any;
      /**
       * 获取Grid的当前焦点行
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridCurrentRowAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的选中行[必须在有勾选列的情况下]
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridCheckedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的选中行的数据
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridCheckedRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已删除的行
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridDeletedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已删除的行Block
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns Block
       */
      getGridDeletedRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已修改的行
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridModifyRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已修改的行Block
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridModifyRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已新增的行Json
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridCreatedRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已新增的行Block
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridCreatedRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid已新增的行Json
       * @param grid
       * @param toJson 将对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridAllRows(grid: any, toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid已新增的行Block
       * @param grid
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EiBlock
       */
      getGridAllRowsAsBlock(grid: any, extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 获取Grid的变更集并添加到EIInfo[块名分别为:{tableName}_DELETE,{tableName}_MODIFY,{tableName}_ADD]
       * @param grid grid[可传入多个grid配置代码的数组或用逗号隔开的字符串]
       * @param EIInfo 传入的EiInfo
       * @param tableName 相关表名[当传入的grid参数为长度大于1的数组时该参数不起作用，使用默认的绑定表]
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @param customJsonFunction 自定义对象转Json方法
       * @returns EIInfo
       */
      getGridChangedRowsAsEiInfo(grid: any, inInfo?: EI.EIInfo, tableName?: string, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EIInfo;
      /**
       * 获取Grid的的行
       * @param grid grid对象
       * @param type 行类型
       * @param toJson 对象转换成Json
       * @param onlyGridColumns 是否仅获取Grid中存在的字段[toJson === true ]
       * @returns array
       */
      getGridRows(grid: any, type: 'current' | 'select' | 'checked' | 'add' | 'modify' | 'delete' | 'all', toJson?: boolean | ((data: Model) => {
        [key: string]: any;
      }), onlyGridColumns?: boolean): any[];
      /**
       * 获取Grid的的行
       * @param grid grid对象
       * @param type 行类型
       * @param extendJsonData 附加Json数据，只赋值到EiBlock的第一行数据
       * @param onlyGridColumns 是否仅获取Grid中存在的字段
       * @returns EiBlock
       */
      getGridRowsAsBlock(grid: any, type: 'current' | 'select' | 'checked' | 'add' | 'modify' | 'delete' | 'all', extendJsonData?: {
        [key: string]: any;
      }, onlyGridColumns?: boolean, customJsonFunction?: (data: Model) => {
        [key: string]: any;
      }): EI.EiBlock;
      /**
       * 设置工具栏Grid工具栏按钮是否可见
       * @param configId  Grid配置代码
       * @param buttonOptions  按钮选项[系统预置按钮'refresh' | 'addrow' | 'copyrow' | 'delete' | 'save' | 'cancel' | 'excel' | 'import']
       * @param commonOptions  通用选项[showToolBar, showIco, showText]
       * @returns this
       */
      initialGridToolbar(configId: string, buttonOptions: {
        [key: string]: {
          visible: boolean;
          caption?: string;
          ico?: any;
          action?: Function;
          preventDefault?: boolean;
          showIco?: boolean;
          showText?: boolean;
          messageConfirm?: boolean;
        };
      }, commonOptions?: {}): FormHelper;
      /**
       * 设置工具栏Grid工具栏按钮是否可见
       * @param configId  Grid配置代码
       * @param toolbarVisible  按钮是否可见
       * @returns this
       */
      setGridToolbarVisible(configId: string, toolbarVisible: {
        [key: 'refresh' | 'addrow' | 'copyrow' | 'delete' | 'save' | 'cancel' | 'excel' | 'import' | string]: boolean;
      }): FormHelper;
      /**
       * 获取工具栏Grid工具栏按钮是否可见
       * @param configId  Grid配置代码
       * @param name  按钮名称
       * @returns boolean
       */
      getGridToolbarVisible(configId: string, name: string): boolean;
      /**
       * 暂停当前线程一段时间
       * @param seconds 暂停时间(毫秒)
       * @returns Promise
       */
      sleep(seconds: number): Promise<void>;
      /**
       * 设置全局样式值
       * @param property 全局变量名称
       * @param value 值
       * @returns void
       */
      setGlobalStyleProperty(property: string, value: string | null, priority?: string): void;
      /**
       * 获取全局样式值
       * @param property
       * @returns string
       */
      getGlobalStyleProperty(property: string): string;
      /**
      * 移除全局样式
      * @param property 全局变量名称
      * @returns string
      */
      removeGlobalStyleProperty(property: string): string;
      /**
       * 从一个GridDataRow向另一个GridDataRow复制值
       * @param newDataRow
       * @param fromDataRow
       * @returns newDataRow
       */
      mergeGridDataRow(newDataRow: Model, fromDataRow: any, ignoreWhenExistValue?: boolean): Model;
      /**
       * 将EJson对象数组添加到EiBlock
       * @param data
       * @param block
       * @returns EiBlock
       */
      addJsonToEiBlock(data: {
        [key: string]: any;
      }[], block?: any): EI.EiBlock;
      /**
       * Merge数据到dataTable
       * @param data 原数据
       * @param dataTable dataTable
       * @param clearExistData 是否清空已有数据，默认为true
       * @returns total
       */
      mergeDataToDataTable(data: any, dataTable: DataTable, clearExistData?: boolean): number;
      /**
       * 将数据绑定到Grid
       * @param data
       * @param grid grid对象或配置代码[例如:'gridView1']
       * @returns rowsCount
       */
      mergeDataToGrid(data: any, grid: any, clearExistData?: boolean): number;
      /**
       * EiBlock的数据绑定到Grid
       * @param grid grid对象或配置代码[例如:'gridView1']
       * @param block EI.EiBlock
       * @returns rowsCount
       */
      mergeEiBlockToGrid(block: EI.EiBlock, grid: any, clearExistData?: boolean): number;
      /**
       * 将EIInfo的数据绑定到Grid
       * @param inInfo EI.EIInfo
       * @param grid grid对象或配置代码[例如:'gridView1']
       * @returns rowsCount
       */
      mergeEiInfoToGrid(inInfo: EI.EIInfo, ...grids: any[]): void;
      /**
       * 清空Grid数据
       * @param grid grid对象或配置代码数组[例如:'gridView1']
       * @returns void
       */
      clearGridData(...grids: any[]): void;
      /**
       * 清空Layout数据[当与Grid绑定同一张数据表时，需用clearGridData方法]
       * @param configs 区域配置代码数组,例如:[例如:'LayoutGroupMain']
       * @returns void
       */
      clearLayoutData(...configIds: string[]): void;
      /**
       * 清空Layout或Grid数据
       * @param configs 区域配置代码数组,例如:['LayoutGroupMain','gridView1']
       * @returns void
       */
      clearLayoutOrGridData(...configIds: string[]): void;
      /**
       * 获取表相关的配置区域代码
       * @param tableName 绑定表名
       * @returns 区域代码数组
       */
      private getRelationConfigIdsByTableName;
      /**
       * 设置Grid的服务器端分页查询方法
       * @param grid grid对象或者grid配置代码
       * @param serverPageFilter 查询条件
       * @param pageQuery 查询方法
       * @returns void
       */
      setGridServerPagingQuery<T extends Promise<any>>(grid: string, serverPageFilter: EI.EIInfo, pageQuery: (queryPage: number) => T, autoQuery?: boolean): void;
      /**
       * 设置Grid的服务器端分页查询服务
       * @param grid grid对象或者grid配置代码
       * @param serverPageFilter 查询条件
       * @param serviceName 查询服务
       * @returns void
       */
      setGridServerPagingService(grid: string, serverPageFilter: EI.EIInfo, serviceName: string, autoQuery?: boolean): void;
      /**
       * 设置Grid的服务器端分页查询服务
       * @param grid grid对象或者grid配置代码
       * @param serverPageFilter 查询条件
       * @param dataSourceId 数据源配置代码
       * @param serviceName 查询服务
       * @returns void
       */
      setGridServerPagingDataSource(grid: string, serverPageFilter: EI.EIInfo, dataSourceId: string, serviceName: string, autoQuery?: boolean): void;
      /**
       * 调用Grid分页查询方法[服务端分页]
       * @param configId Grid配置代码
       * @param readOptions 参数
       * @returns void
       */
      excuteGridServerPaging(grid: any, queryPage: number): Promise<any>;
    }
    class BillFormHelper {
      private _formHelper;
      /**
       * 画面工具类构造函数
       * @param serverPartition 服务分区
       * @param formName 画面代码
       * @param serviceName 服务名称
       */
      constructor(formHelper: FormHelper, options?: any);
    }
    /**
     * 通用弹出查询类
     */
    class PopQueryHelper {
      /**
       * 服务分区
       */
      get Partiton(): string;
      /**
       * 查询分区
       */
      get QueryPartiton(): string;
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面名称
       */
      get FormName(): string;
      /**
       * 初始化成功标志
       */
      get InitializeFlag(): number;
      /**
       * 画面工具类
       */
      get ErFormHelper(): FormHelper;
      /**
       * 画面返回信息
       */
      get DialogReturnInfo(): PopQueryReturnInfo;
      /**
       * MasterDetailView
       */
      MasterDetailView: boolean;
      /**
       * 画面配置查询服务
       */
      FormConfigQueryService: string;
      /**
       * 画面Caption
       */
      FormCaption: string;
      /**
       * 自定义查询条件脚本
       */
      CustomFilterString: string;
      /**
       * 自定义查询条件信息
       */
      CustomFilterJson: {
        [key: string]: any;
      };
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * app
       */
      app: any;
      /**
       * div
       */
      div: any;
      /**
       * 自定义查询条件信息
       */
      DefaultValues: {
        values: {
          [key: string]: any;
        };
        readonly?: {
          [key: string]: boolean;
        };
      };
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 获取画面是否打开状态
       */
      WindowOpened: import("vue").Ref<boolean>;
      DataModelId: string;
      ShowCheckBoxColumn: boolean;
      SelectMode: 'single' | 'multiple' | undefined;
      ShowQueryButton: boolean;
      ShowOkButton: boolean;
      ShowCancelButton: boolean;
      QueryButtonCaption: string;
      OkButtonCaption: string;
      CancelButtonCaption: string;
      CloseDialogWhenOkClick: boolean;
      ShowQueryNoDetailInfoMsg: boolean;
      ButtonPreventDefault: {
        ok: boolean;
        cancel: boolean;
        query: boolean;
        mainViewFocusChanged: boolean;
      };
      UnMountWhenCloseDialog: boolean;
      AutoQuery: boolean;
      AutoRefresh: boolean;
      KeyFieldName: string;
      DescFieldName: string;
      ChooseKeyValues: string;
      ReceiveJsonData: {
        [key: string]: any;
      }[];
      LayoutGroupFilterId: string;
      MainViewConfigId: string;
      DetailViewConfigId: string;
      LayoutFilterOptions: {};
      MainViewOptions: any;
      DetailViewOptions: any;
      MainInfoQueryMethod: Function | undefined;
      DetailInfoQueryMethod: Function | undefined;
      private _partition?;
      private _queryPartition?;
      private _formName;
      private _layoutConfigIds;
      private _sysConfiParas?;
      private _serviceName;
      private _initializeFlag;
      private _formHelper;
      private _dialogReturnInfo;
      private _mainTableame;
      private _detailTableame;
      private _queryService;
      private _serviceFilter;
      private _keyFieldValue;
      private _events;
      private _formOptions;
      private _resolveDialogResult;
      /**
       * 工具类构造函数
       * @param partition 分区
       * @param formName 配置画面名
       * @param configIds 配置区域代码
       * @param serviceName 初始化服务名
       * @param sysConfiParas 初始化参数
       */
      constructor(partition: string, formName: string, configIds?: string, serviceName?: string, sysConfiParas?: {
        [key: string]: string | number;
      });
      /**
       * 初始化工具类
       * @param partition 分区
       * @param serviceName 初始化的服务名
       * @returns Promise<Number> 成功标志
       */
      Initialize(partition?: string, serviceName?: string): Promise<Number>;
      /**
       * 设置画面属性信息
       * @param options 属性信息
       * @returns void
       */
      setFormOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取画面属性信息
       * @param options 属性信息
       * @returns void
       */
      getFormOption(key: string): any;
      /**
      * 设置画面查询分区
      * @param partition 分区信息
      * @returns void
      */
      setQueryPartition(partition: string): any;
      /**
       * 设置画面的相关事件
       * @param event 事件'pressEnter', 'focus', 'blur'
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns void
       */
      setEvent(type: keyof PopQueryEventType, event: Function | undefined): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: keyof PopQueryEventType): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: keyof PopQueryEventType, args?: any): any;
      /**
       * 通用弹出查询画面
       * @param compenent ErPopQuery组件(固定传入ErPopQuery)
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      show(compenent: any, okEvent?: Function, cancelEvent?: Function): Promise<PopQueryReturnInfo>;
      /**
       * 关闭弹出画面
       */
      CloseDialog(): void;
      queryMainGridInfo: () => void;
      /**
       * 自动勾选记录
       */
      private autoCheckRows;
      /**
       * 设置画面返回值
       */
      setDialogReturnInfo(returnInfo: any): void;
    }
    /**
     * 通用弹出单记录表单类
     */
    class PopFreeHelper {
      /**
       * 服务分区
       */
      get Partition(): string;
      /**
       * 保存分区
       */
      get SavePartiton(): string;
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面名称
       */
      get FormName(): string;
      /**
       * 初始化成功标志
       */
      get InitializeFlag(): number;
      /**
       * 画面工具类
       */
      get FormHelper(): FormHelper;
      /**
       * 画面布局配置代码信息
       */
      get LayoutConfigId(): string | Array<string>;
      /**
       * 画面绑定的数据集
       */
      get DataSet(): DataSet;
      /**
       * 画面绑定的数据表
       */
      get DataTable(): DataTable;
      /**
       * 画面绑定的表名
       */
      get TableName(): string;
      /**
       * 画面返回的数据对象
       */
      get DataModel(): any;
      /**
       * 画面返回信息
       */
      get DialogReturnInfo(): PopFreeReturnInfo;
      /**
       * 画面接收的可编辑信息
       */
      get ReadOnlys(): any;
      /**
       * 画面配置区域panel的描述
       */
      LayoutCaption: string | Array<string>;
      /**
       * 画面接收的是否可编辑属性
       */
      EditType: 'Query' | 'Add' | 'Modify';
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 获取画面是否打开状态
       */
      WindowOpened: import("vue").Ref<boolean>;
      /**
       * 是否显示确定按钮
       */
      ShowOkButton: boolean;
      /**
       * 是否显示取消按钮
       */
      ShowCancelButton: boolean;
      /**
       * 设置确定按钮的Caption信息
       */
      OkButtonCaption: string;
      /**
       * 设置取消按钮的Caption信息
       */
      CancelButtonCaption: string;
      /**
       * 点击确定按钮时弹出画面是否自动关闭
       */
      CloseDialogWhenOkClick: boolean;
      /**
       * 是否阻止确定按钮的默认事件
       */
      OkButtonPreventDefault: boolean;
      /**
       * 是否阻止取消按钮的默认事件
       */
      CancelButtonPreventDefault: boolean;
      /**
       * 接收确定按钮调用的后台服务service
       */
      OkButtonService: string;
      /**
       * 关闭窗口后是否卸载组件
       */
      UnMountWhenCloseDialog: boolean;
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * 调用服务时传入后台附加列数据
       */
      ExtendJsonData: {
        [key: string]: any;
      } | undefined;
      /**
       * 调用服务之前对EIInfo的处理
       */
      BeforeCallService?: (inInfo: EI.EIInfo) => EI.EIInfo;
      /**
       * app
       */
      app: any;
      /**
       * div
       */
      div: any;
      private _partition?;
      private _savePartition?;
      private _formName;
      private _tableName;
      private _layoutConfigId;
      private _layoutGroupIdArray;
      private _sysConfiParas?;
      private _serviceName;
      private _initializeFlag;
      private _formHelper;
      private _dataSet;
      private _dataTable;
      private _mainLayoutId;
      private _dialogReturnInfo;
      private _receiveData;
      private _readOnlys;
      private _events;
      private _formOptions;
      private _resolveDialogResult;
      /**
       * 工具类构造函数
       * @param partition 分区
       * @param formName 配置画面名
       * @param configIds 配置区域代码[单个或多个数组]
       * @param serviceName 初始化服务名
       * @param sysConfiParas 初始化参数
       */
      constructor(partition: string, formName: string, configIds?: string | Array<string>, serviceName?: string, sysConfiParas?: {
        [key: string]: string;
      });
      /**
       * 初始化工具类
       * @param partition 分区
       * @param serviceName 初始化的服务名
       * @returns Promise<Number> 成功标志
       */
      Initialize(partition?: string, serviceName?: string): Promise<Number>;
      /**
       * 设置画面属性信息
       * @param options 属性信息
       * @returns void
       */
      setFormOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取画面属性信息
       * @param options 属性信息
       * @returns void
       */
      getFormOption(key: string): any;
      /**
       * 设置画面保存分区
       * @param partition 保存分区
       * @returns void
       */
      setSavePartition(partition: string): void;
      /**
       * 传入数据并展示[画面初始时]
       * @param data 默认数据
       * @param readOnlys 只读设置
       * @returns
       */
      ReceiveData(data?: {
        [key: string]: any;
      } | Model, readOnlys?: {
        [key: string]: boolean;
      }): any;
      /**
       * 设置画面的相关事件
       * @param event 事件'pressEnter', 'focus', 'blur'
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns void
       */
      setEvent(type: keyof PopFreeEventType, event: Function | undefined): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: keyof PopFreeEventType): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: keyof PopFreeEventType, args?: any): any;
      /**
       * 对画面相关对象进行赋值[画面打开后]
       * @param data 字段值
       * @param setValueBySchemaFields 根据数据集字段赋值
       * @returns void
       */
      setValue(data: {
        [key: string]: any;
      }, setValueBySchemaFields?: boolean): PopFreeHelper;
      /**
       * 获取画面相关对象的属性值[画面打开后]
       * @param itemCode 字段代码
       * @returns 字段值
       */
      getValue(fieldName: string): any;
      /**
       * 通用弹出表单画面
       * @param compenent ErPopFree组件(固定传入ErPopFree)
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      show(compenent: any, okEvent?: Function, cancelEvent?: Function): Promise<PopFreeReturnInfo>;
      /**
       * 关闭弹出画面
       */
      CloseDialog(): void;
      /**
       * 设置画面返回值
       */
      setDialogReturnInfo(returnInfo: any): void;
    }
    /**
   * 通用弹出主子项表单类
   */
    class PopFormHelper {
      /**
       * 服务分区
       */
      get Partition(): string;
      /**
       * 保存分区
       */
      get SavePartiton(): string;
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面名称
       */
      get FormName(): string;
      /**
       * 初始化成功标志
       */
      get InitializeFlag(): number;
      /**
       * 画面工具类
       */
      get ErFormHelper(): FormHelper;
      /**
       * 单记录布局配置代码信息
       */
      get LayoutConfigId(): string;
      /**
       * Grid布局配置代码信息
       */
      get GridConfigId(): string;
      /**
       * 画面绑定的数据集
       */
      get DataSet(): DataSet;
      /**
       * 画面绑定的数据主表
       */
      get MainDataTable(): DataTable;
      /**
       * 画面绑定的主表名
       */
      get MainTableName(): string;
      /**
       * 画面绑定的子数据表
       */
      get DetailDataTable(): DataTable;
      /**
       * 画面绑定的子表名
       */
      get DetailTableName(): string;
      /**
       * 画面返回的数据对象
       */
      get DataModel(): any;
      /**
       * 画面返回信息
       */
      get DialogReturnInfo(): PopFreeReturnInfo;
      /**
       * 画面接收的可编辑信息
       */
      get ReadOnlys(): any;
      /**
       * 单记录区域Options
       */
      LayoutOptions: any;
      /**
       * Grid区域Options
       */
      GridOptions: any;
      /**
       * 画面配置区域panel的描述
       */
      LayoutCaption: string | Array<string>;
      /**
       * 画面接收的是否可编辑属性
       */
      EditType: 'Query' | 'Add' | 'Modify';
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 获取画面是否打开状态
       */
      WindowOpened: import("vue").Ref<boolean>;
      /**
       * 是否显示确定按钮
       */
      ShowSaveButton: boolean;
      /**
       * 是否显示取消按钮
       */
      ShowCloseButton: boolean;
      /**
       * 设置保存按钮的Caption信息
       */
      SaveButtonCaption: string;
      /**
       * 设置关闭按钮的Caption信息
       */
      CloseButtonCaption: string;
      /**
       * 点击确定按钮时弹出画面是否自动关闭
       */
      CloseDialogWhenSaveClick: boolean;
      /**
       * 阻止默认事件
       */
      PreventDefaultEvent: {
        [key: string]: boolean | undefined;
      };
      /**
       * 接收确定按钮调用的后台服务service
       */
      OkButtonService: string;
      /**
       * 关闭窗口后是否卸载组件
       */
      UnMountWhenCloseDialog: boolean;
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * 调用服务时传入后台附加列数据
       */
      ExtendJsonData: {
        [key: string]: any;
      } | undefined;
      /**
       * 调用服务之前对EIInfo的处理
       */
      BeforeCallService?: (inInfo: EI.EIInfo) => EI.EIInfo;
      /**
       * app
       */
      app: any;
      /**
       * div
       */
      div: any;
      private _partition?;
      private _savePartition?;
      private _formName;
      private _mainTableName;
      private _detailTableName;
      private _layoutConfigId;
      private _gridConfigId;
      private _sysConfiParas?;
      private _serviceName;
      private _initializeFlag;
      private _formHelper;
      private _dataSet;
      private _mainDataTable;
      private _detailDataTable;
      private _dialogReturnInfo;
      private _receiveData;
      private _readOnlys;
      private _events;
      private _formOptions;
      private _resolveDialogResult;
      /**
       * 工具类构造函数
       * @param partition 分区
       * @param formName 配置画面名
       * @param configIds 配置区域代码[单个或多个数组]
       * @param serviceName 初始化服务名
       * @param sysConfiParas 初始化参数
       */
      constructor(partition: string, formName: string, configId?: {
        layoutConfigId: string;
        gridConfigId: string;
      }, serviceName?: string, sysConfiParas?: {
        [key: string]: string;
      });
      /**
       * 初始化工具类
       * @param partition 分区
       * @param serviceName 初始化的服务名
       * @returns Promise<Number> 成功标志
       */
      Initialize(partition?: string, serviceName?: string): Promise<Number>;
      /**
       * 设置画面属性信息
       * @param options 属性信息
       * @returns void
       */
      setFormOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取画面属性信息
       * @param options 属性信息
       * @returns void
       */
      getFormOption(key: string): any;
      /**
       * 设置画面保存分区
       * @param partition 保存分区
       * @returns void
       */
      setSavePartition(partition: string): void;
      /**
       * 传入数据并展示[画面初始时]
       * @param data 默认数据
       * @param readOnlys 只读设置
       * @returns
       */
      ReceiveData(data: EI.EIInfo, readOnlys?: {
        [key: string]: boolean;
      }): void;
      /**
       * 设置画面的相关事件
       * @param event 事件类型
       * @param preventDefault 是否阻止默认事件处理
       * @returns void
       */
      setEvent(type: keyof PopFormEventType, event: Function | undefined, preventDefault?: boolean): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: keyof PopFormEventType): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: keyof PopFormEventType, args?: any): any;
      /**
       * 对画面相关对象进行赋值[画面打开后]
       * @param data 字段值
       * @param setValueBySchemaFields 根据数据集字段赋值
       * @returns void
       */
      setValue(data: {
        [key: string]: any;
      }, setValueBySchemaFields?: boolean): PopFormHelper;
      /**
       * 获取画面相关对象的属性值[画面打开后]
       * @param itemCode 字段代码
       * @returns 字段值
       */
      getValue(fieldName: string): any;
      /**
       * 通用弹出表单画面
       * @param compenent ErPopFree组件(固定传入ErPopFree)
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      show(compenent: any, saveEvent?: Function, closeEvent?: Function): Promise<PopFormReturnInfo>;
      /**
       * 关闭弹出画面
       */
      CloseDialog(): void;
      /**
       * 设置画面返回值
       */
      setDialogReturnInfo(returnInfo: any): void;
    }
    /**
     * 通用弹出树形查询类
     */
    class PopTreeHelper {
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面返回信息
       */
      get DialogReturnInfo(): any;
      /**
       * 获取画面是否打开状态
       */
      get WindowOpened(): any;
      /**
       * 接收的原始数据
       */
      get TreeOrgialData(): any[] | (() => any[]);
      /**
       * 节点主键字段
       */
      get PrimaryField(): string;
      /**
       * 节点父键字段
       */
      get ParentField(): string;
      /**
       * 节点显示字段
       */
      get DisplayField(): string;
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * 自动刷新画面
       */
      AutoRefresh: boolean;
      /**
       * 是否显示确定按钮
       */
      ShowOkButton: boolean;
      /**
       * 是否显示取消按钮
       */
      ShowCancelButton: boolean;
      /**
       * 设置确定按钮的Caption信息
       */
      OkButtonCaption: string;
      /**
       * 设置取消按钮的Caption信息
       */
      CancelButtonCaption: string;
      /**
       * 点击确定按钮时弹出画面是否自动关闭
       */
      CloseDialogWhenOkClick: boolean;
      /**
       * 是否阻止确定按钮的默认事件
       */
      OkButtonPreventDefault: boolean;
      /**
       * 是否阻止取消按钮的默认事件
       */
      CancelButtonPreventDefault: boolean;
      /**
       * 关闭窗口后是否卸载组件
       */
      UnMountWhenCloseDialog: boolean;
      /**
       * 确定按钮之前的数据校验计处理
       */
      BeforeOkButtonClick?: (treeNode: any) => boolean | {
        [key: string]: any;
      };
      private _app;
      private _dialogReturnInfo;
      private _receiveData;
      private _events;
      private _windowOpened;
      private _options;
      private _resolveDialogResult;
      private _primaryField;
      private _parentField;
      private _displayField;
      /**
       * 工具类构造函数
       * @param primaryField 主键字段
       * @param parentField 父键字段
       * @param displayField 显示字段
       * @param options 自定义选项
       */
      constructor(primaryField: string, parentField: string, displayField: string, options?: {
        [key: string]: any;
      });
      /**
       * 设置画面的相关事件
       * @param event 事件'ok', 'cancel'
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns void
       */
      setEvent(type: 'ok' | 'cancel' | 'close', event: Function | undefined): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: 'ok' | 'cancel' | 'close'): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: 'ok' | 'cancel' | 'close', args?: any): any;
      /**
       * 设置自定义选项
       * @param options 自定义选项
       * @returns void
       */
      setOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取自定义选项
       * @param key 选项key
       * @returns 选项值
       */
      getOptions(key?: string): any;
      /**
       * 传入数据并展示
       * @param data 数组或返回数组的函数
       * @returns
       */
      receiveData(data: any[] | (() => any[])): void;
      /**
       * 通用弹出表单画面
       * @param compenent ErPopFree组件(固定传入ErPopFree)
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      show(compenent: any, okEvent?: Function, cancelEvent?: Function): Promise<PopTreeReturnInfo>;
      close(): void;
      /**
       * 设置画面返回值
       */
      setDialogReturnInfo(returnInfo: any): void;
    }
    /**
     * 通用弹出富文本编辑器类
     */
    class PopRichEditor {
      /**
       * 获取画面是否打开状态
       */
      get WindowOpened(): any;
      /**
       * 编辑内容
       */
      Content: any;
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * 是否显示确定按钮
       */
      ShowOkButton: boolean;
      /**
       * 是否显示取消按钮
       */
      ShowCancelButton: boolean;
      /**
       * 设置确定按钮的Caption信息
       */
      OkButtonCaption: string;
      /**
       * 设置取消按钮的Caption信息
       */
      CancelButtonCaption: string;
      /**
       * 点击确定按钮时弹出画面是否自动关闭
       */
      CloseDialogWhenOkClick: boolean;
      /**
       * 关闭窗口后是否卸载组件
       */
      UnMountWhenCloseDialog: boolean;
      /**
       * 确定按钮之前的数据校验计处理
       */
      BeforeOkButtonClick?: (treeNode: any) => boolean | {
        [key: string]: any;
      };
      private _app;
      private _windowOpened;
      private _options;
      private _resolveDialogResult;
      private _dialogReturnInfo;
      private _events;
      /**
       * 工具类构造函数
       * @param primaryField 主键字段
       * @param parentField 父键字段
       * @param displayField 显示字段
       * @param options 自定义选项
       */
      constructor(options?: {
        [key: string]: any;
      });
      /**
       * 设置自定义选项
       * @param options 自定义选项
       * @returns void
       */
      setOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取自定义选项
       * @param key 选项key
       * @returns 选项值
       */
      getOptions(key?: string): any;
      /**
       * 设置画面的相关事件
       * @param event 事件'ok', 'cancel'
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns void
       */
      setEvent(type: 'open' | 'ok' | 'cancel', event: Function | undefined): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: 'open' | 'ok' | 'cancel'): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: 'open' | 'ok' | 'cancel', args?: any): any;
      /**
       * 通用弹出表单画面
       * @param compenent ErPopFree组件(固定传入ErPopFree)
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      show(component: any, content?: any, allowEdit?: boolean): Promise<DialogResult>;
      close(): void;
    }
    /**
     * 通用弹出组件类
     */
    class PopWindowHelper {
      /**
       * 服务分区
       */
      get Partiton(): string;
      /**
       * 画面ID[自动生成的唯一标识]
       */
      get FormId(): string;
      /**
       * 画面名称
       */
      get FormName(): string;
      /**
       * 画面接收需要显示的画面名称
       */
      FormCaption: string;
      /**
       * 初始化成功标志
       */
      get InitializeFlag(): number;
      /**
       * 画面工具类
       */
      get FormHelper(): any;
      /**
       * 画面返回信息
       */
      get DialogReturnInfo(): PopWindowReturnInfo;
      /**
       * 画面绑定的数据集
       */
      get DataSet(): DataSet;
      /**
       * 画面上下文
       */
      Context: any;
      /**
       * 获取画面是否打开状态
       */
      WindowOpened: import("vue").Ref<boolean>;
      /**
       * 是否显示确定按钮
       */
      ShowOkButton: boolean;
      /**
       * 是否显示取消按钮
       */
      ShowCancelButton: boolean;
      /**
       * 设置确定按钮的Caption信息
       */
      OkButtonCaption: string;
      /**
       * 设置取消按钮的Caption信息
       */
      CancelButtonCaption: string;
      /**
       * 点击确定按钮时弹出画面是否自动关闭
       */
      CloseDialogWhenOkClick: boolean;
      /**
       * 是否阻止确定按钮的默认事件
       */
      OkButtonPreventDefault: boolean;
      /**
       * 关闭窗口后是否卸载组件
       */
      UnMountWhenCloseDialog: boolean;
      /**
       * 弹出窗口类型
       */
      BordStyle: 'Fixed' | 'Sizable';
      /**
       * app
       */
      app: any;
      /**
       * div
       */
      private _partition?;
      private _formName;
      private _configIds;
      private _sysConfiParas?;
      private _serviceName;
      private _initializeFlag;
      private _formHelper;
      private _dataSet;
      private _dialogReturnInfo;
      private _events;
      private _formOptions;
      private _resolveDialogResult;
      /**
       * 工具类构造函数
       * @param partition 分区
       * @param formName 配置画面名
       * @param configIds 配置区域代码[单个或多个数组]
       * @param serviceName 初始化服务名
       * @param sysConfiParas 初始化参数
       */
      constructor(partition: string, formName: string, configIds?: string | Array<string>, serviceName?: string, sysConfiParas?: {
        [key: string]: string | number;
      });
      /**
       * 初始化工具类
       * @param partition 分区
       * @param serviceName 初始化的服务名
       * @returns Promise<Number> 成功标志
       */
      Initialize(partition?: string, serviceName?: string): Promise<Number>;
      /**
       * 设置画面属性信息
       * @param options 属性信息
       * @returns void
       */
      setFormOptions(options: {
        [key: string]: any;
      }): void;
      /**
       * 获取画面属性信息
       * @param options 属性信息
       * @returns void
       */
      getFormOption(key: string): any;
      /**
       * 设置画面的相关事件
       * @param event 事件'pressEnter', 'focus', 'blur'
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns void
       */
      setEvent(type: 'initial' | 'open' | 'ok' | 'cancel' | 'close', event: Function | undefined): void;
      /**
       * 获取画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      getEvent(type: 'initial' | 'open' | 'ok' | 'cancel' | 'close'): Function | undefined;
      /**
       * 执行画面的相关事件
       * @param type 事件类型[初始化/打开/确定/取消]
       * @returns event
       */
      doEvent(type: 'initial' | 'open' | 'ok' | 'cancel' | 'close', args?: any): any;
      /**
      * 打开弹出画面
      * @param okEvent 确认按钮后调用的事件
      * @param cancelEvent 取消按钮后调用事件
      * @returns void
      */
      show(okEvent?: Function, cancelEvent?: Function): Promise<PopFreeReturnInfo>;
      /**
      * 通用弹出画面
      * @param okEvent 确认按钮后调用的事件
      * @param cancelEvent 取消按钮后调用事件
      * @returns void
      */
      OpenDialog(okEvent?: Function, cancelEvent?: Function): Promise<PopFreeReturnInfo>;
      /**
       * 关闭弹出画面
       */
      CloseDialog(): void;
      /**
       * 设置画面返回值
       */
      setDialogReturnInfo(returnInfo: any): void;
    }
    /**
     * 通用弹出工具类
     */
    class PopUtils {
      /**
       * 通用弹出查询画面
       * @param compenent ErPopQuery组件
       * @param erPopQueryHelper 画面工具类
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      static showErPopQuery(compenent: any, erPopQueryHelper: PopQueryHelper, okEvent?: Function, cancelEvent?: Function): Promise<PopQueryReturnInfo>;
      /**
       * 通用弹出表单画面
       * @param compenent ErPopFree组件
       * @param erPopFreeHelper 画面工具类
       * @param okEvent 确认按钮后调用的事件
       * @param cancelEvent 取消按钮后调用事件
       * @returns void
       */
      static showErPopFree(compenent: any, erPopFreeHelper: PopFreeHelper, okEvent?: Function, cancelEvent?: Function): Promise<PopFreeReturnInfo>;
      /**
       * 通用弹出审批流程
       * @param compenent 组件[固定传入ErPopApprovalSteps]
       * @param erPopFreeHelper 画面工具类
       * @param params 参数[{partition, instanceId, companyCode, bizBillNo, tableName, bizData}]
       * @returns void
       */
      static showErPopApprovalSteps(compenent: any, erPopFreeHelper: ApprovalStepsHelper, params: {
        [key: string]: any;
      }): void;
    }
    /**
     * 通用审批流程工具类
     */
    class ApprovalStepsHelper {
      get Partition(): string;
      get InstanceId(): string;
      get CompanyCode(): string;
      get BizBillNo(): string;
      get TableName(): string;
      get SysInfoFlag(): number;
      get SysInfoMsg(): string;
      get HaveSteps(): import("vue").Ref<boolean>;
      get ActiveSteps(): import("vue").Ref<number>;
      get WorkStepsInfo(): any;
      get ApproveInfo(): any;
      get IsEmpty(): import("vue").Ref<boolean>;
      get PopWindowOpened(): import("vue").Ref<boolean>;
      private _app;
      private _partition;
      private _instanceId;
      private _companyCode;
      private _bizBillNo;
      private _tableName;
      private _sysInfoFlag;
      private _sysInfoMsg;
      private _popWindowOpened;
      private _isEmpty;
      private _haveSteps;
      private _activeSteps;
      private _workStepsInfo;
      private _approveInfo;
      private _approveResultMap;
      constructor();
      /**
       * 获取审批信息
       * @param partition 分区
       * @param instanceId 实例编号
       * @param companyCode 账套代码
       * @param billNo 业务单号
       * @param tableName 相关业务表名
       * @param bizData 相关业务数据
       * @return Promise<{ [key: string]: any }>
       */
      getApprovalInfo(partition: string, instanceId: string, companyCode: string, bizBillNo: string, tableName: string, bizData?: {
        [key: string]: any;
      }): Promise<{
        [key: string]: any;
      }>;
      /**
       * 重置审批流程信息
       */
      reset(): void;
      /**
       * 弹出单据审批详情信息
       * @param compenent 组件[固定传入ErPopApprovalSteps]
       * @param partition 分区
       * @param instanceId 实例编号
       * @param companyCode 账套代码
       * @param billNo 业务单号
       * @param tableName 相关业务表名
       * @param bizData 相关业务数据
       */
      showPopApprovalSteps(compenent: any, partition: string, instanceId: string, companyCode: string, bizBillNo: string, tableName: string, bizData?: {
        [key: string]: any;
      }): void;
    }
    /**
     * 通用附件管理工具类
     */
    class AttachmentHelper {
      get Options(): UploadOptions;
      get PopWindowOpened(): import("vue").Ref<boolean>;
      UnMountWhenCloseDialog: boolean;
      private _app;
      private _options;
      private _popWindowOpened;
      constructor(options?: UploadOptions);
      setOptions(options: UploadOptions): void;
      /**
       * 弹出附件管理页面
       * @param compenent 组件[固定传入ErPopAttachment]
       */
      showPopAttachment(compenent: any): void;
    }
  }
}
declare module "ERX/SiUtils" {
  import { EI } from 'EIX/ei';
  export class SiUtils {
    private static GroupCompanyCode;
    private static DefaultRmbCode;
    /**
     * 公用模块初始化画面service设置
     */
    static FormInitializeService: {
      SI00: string;
      SIFI: string;
      SIAC: string;
    };
    /**
     * 获取客商银行信息
     * @param partition 分区代码
     * @param customCode 客商代码
     * @returns Promise<EIInfo>
     */
    static getCustomBankInfo(parttion: string, customerCode: string): Promise<EI.EIInfo>;
    /**
     * 删除单据信息
     * @param partition 分区代码
     * @param billInfo 单据信息
     * @param svcName 调用后台服务信息
     * @param tableName 传入后台的块名称
     * @returns Promise<EIInfo>
     */
    static deleteBillInfo(partition: string, billInfo: EI.EiBlock | {}, svcName: string, tableName?: string): Promise<EI.EIInfo>;
    /**
     * 单据号查询，单据上翻下翻时使用  QueryType queryType, string companyCode, string tableName, string colName, string billNo, string filter
     * @param partition 分区代码
     * @param queryType 查询类型
     * @param tableName 表名
     * @param colName 列名
     * @param companyCode 公司账套
     * @param billNo 当前单据号
     * @param filter 条件脚本
     * @returns 单据号
     */
    static getBillNo(partition: string, queryType: 'first' | 'pre' | 'next' | 'last', tableName: string, colName: string, companyCode?: string, billNo?: string, filter?: string): Promise<{
      status: number;
      msg: string;
      billNo: string;
    }>;
    /**
     * 获取汇率信息
     * @param partition 分区代码
     * @param currencyCode 币种代码
     * @param accountPeriod 财务期间
     * @param accountPeriod 公司账套
     * @returns Promise<{ Rate: 月初汇率; AdjustRate: 调整汇率 }
     */
    static getCurrencyRate(partition: string, currencyCode: string, accountPeriod?: string, companyCode?: string): Promise<{
      Rate: number;
      AdjustRate: number;
    }>;
    /**
     * 格式化物料的规格信息
     * @param spec 规格信息{MAT_SPEC1:number,MAT_SPEC2:number,MAT_SPEC3:number,MAT_SPEC4:number,MAT_SPEC5:number,MAT_SPEC6:string}
     * @param formatString 格式化格式['{1}*{2}*{3}C', '1*2*3*4*5*6', {n[1-6]}]
     * @returns Promise<EIInfo>
     */
    static getMaterialSpecDesc(spec: {
      [key: string]: any;
    }, formatString?: string): string;
  }

}
declare module "ERX/FiUtils" {
  import { EI } from 'EIX/ei';
  export class FiUtils {
    /**
     * 财务模块初始化画面service设置
     */
    static FormInitializeService: {
      FI00: string;
      FIAP: string;
      FIAR: string;
      FIAN: string;
      FIAF: string;
    };
    /**
     * 获取付款申请信息中的最新客商银行信息
     * @param partition 分区代码
     * @param customerCode 客商代码
     * @returns Promise<EIInfo>
     */
    static getCustomerPayApplyBankInfo(partition: string, customerCode: string): Promise<EI.EIInfo>;
    /**
     * 获取总账核算项目配置信息
     * @param partition 分区代码
     * @param companyCode 公司账套
     * @param accountYear 会计年度
     * @returns Promise<EIInfo>
     */
    static getHoCodeTypeInfo(partition: string, companyCode: string, accountYear: string): Promise<EI.EIInfo>;
  }


}

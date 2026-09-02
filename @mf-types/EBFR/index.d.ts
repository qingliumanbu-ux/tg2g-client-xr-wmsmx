declare module "EBFR/eBFR" {
    const eBFR: {
        ExportReportFile: (reportInfodata: {
            [key: string]: any;
        },
            PartitionCode?: string) => Promise<any>;
        ExportReportSpecifyNameFile: (reportInfodata: {
            [key: string]: any;
        }
            , PartitionCode?: string) => Promise<any>;
        OpenReportFile: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ReportPrintInfo: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        GetReportViewInfo: (RENAME: string, PARAM: string, FILENAME: string, CERTIPRINTNO: string, UploadFileAddress: string, PartitionCode?: string) => Promise<any>;
        GetReportViewInfoInfo: (reportInfodata: {
            [key: string]: any;
        }) => Promise<any>;
        GetReportViewInfoAnsyBackService: (RENAME: string, PARAM: string, FILENAME: string, CERTIPRINTNO: string, UploadFileAddress: string, serviceName: string, PartitionCode?: string) => Promise<void>;
        SilentPrintingAnsy: (RENAME: string, PARAM: string, PRINTNAME: string, CONMPUTER_IP: string, PRINT_COUNT: Number, PartitionCode?: string) => Promise<any>;
        SilentPrinting: (RENAME: string, PARAM: string, PRINTNAME: string, PRINT_COUNT: Number, PartitionCode?: string) => Promise<any>;
        SilentPrintingfiletype: (RENAME: string, PARAM: string, PRINTNAME: string, FILETYPE: string, PartitionCode?: string) => Promise<any>;
        SilentPrintingMultiple: (RENAME: string, PARAM: string, PRINTNAME: string, PRINT_COUNT: Number, FILETYPE: string, PartitionCode?: string) => Promise<any>;
        CallReportPDFFrom: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        CallReportCheckTokenPDFFrom: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        CallReportPDFFromMap: (RENAME: string, PARAM: Map<string, any>, PartitionCode?: string) => Promise<void>;
        CallReportPDFJSFrom: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        CallReportCheckTokenPDFJSFrom: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        CallReportPDFJSFromMap: (RENAME: string, PARAM: Map<string, any>, PartitionCode?: string) => Promise<void>;
        CallReportXLSXFromMap: (RENAME: string, PARAM: Map<string, any>, PartitionCode?: string) => Promise<void>;
        CallReportXLSXFrom: (RENAME: string, PARAM: string, PartitionCode: string) => Promise<void>;
        CallReportXLSXFromReadOnly: (RENAME: string, PARAM: string, READONLY: string, PartitionCode?: string) => Promise<void>;
        CallReportPDF: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        CallReportXLSX: (RENAME: string, PARAM: string, PartitionCode?: string) => Promise<void>;
        DONWlOAdFILE: (FileName: string, PartitionCode?: string) => Promise<void>;
        SearchFile: (FileName: string, PartitionCode?: string) => Promise<void>;
        DeleteFtpFile: (ftpFileInfo: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ExportDataReportFile: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        PreviewlongparamPDF: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        PreviewlongparamXLSX: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        PreviewlongparamPDFJS: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ReportMergeFilesPDF: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ReportMergeFilesXLSX: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ReportMergeFilesPDFJS: (reportInfodata: {
            [key: string]: any;
        }, PartitionCode?: string) => Promise<void>;
        ViewReportByReportName: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNameMap: (RENAME: string, PARAM: Map<string, string>, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNamePrintName: (RENAME: string, PARAM: string, ReprotType: String, PrintName: string, PartitionCode?: string) => Promise<void>;
        ViewReportMergeFiles: (reportInfodata: { [key: string]: any }, ReprotType: string, PartitionCode?: string) => Promise<void>;
        GetReportViewInfoModelAllPathSpecifySheet: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<void>;
        GetListReportSpecifyName: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<void>;
        SilentPrintPGL: (PGLstrings: string[], PRINTNAME: string, SLEEP_TIME: Number, PartitionCode?: string) => Promise<void>;
        ViewReportGetUrl: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportGetUrlMap: (RENAME: string, PARAM: Map<string, string>, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportMergeFilesGetUrl: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<any>;
        SilentPrintMergeFiles: (
            RENAME: string,
            PARAM: string,
            PRINTNAME: string,
            PRINT_COUNT: Number,
            FILETYPE: string, PartitionCode?: string
        ) => Promise<void>;
        ViewReportFileGetUrl: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportMergeFilesBackTotalPageGetUrl: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNameRecordPrint: (RENAME: string, PARAM: string, ReprotType: String, serviceName: string, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNameScaling: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNameSpecifyFilename: (RENAME: string, PARAM: string, ReprotType: String, FILE_NAME: string, PartitionCode?: string) => Promise<void>;
        ViewReportByReportNameBWTY: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<void>;
        ViewReportMergeFilesBWTY: (reportInfodata: { [key: string]: any }, ReprotType: string, PartitionCode?: string) => Promise<void>;
        GetReportMergeFilesBackTotalPageGetUrl: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<void>;
        ExportMergeReportFile: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<any>;
        ViewReportCollectData: (RENAME: string, PARAM: string, ReprotType: String, PartitionCode?: string) => Promise<any>;
        ViewReportMergeFilesGetUrlBWTY: (reportInfodata: { [key: string]: any }, ReprotType: string, PartitionCode?: string) => Promise<any>;
        SilentPrintMergeFilesPRINTWHAT: (
            RENAME: string,
            PARAM: string,
            PRINTNAME: string,
            PRINT_COUNT: Number,
            FILETYPE: string,
            POSITION: string,
            PAGERULES: string,
            PRINTWHAT: string,
            PartitionCode?: string
        ) => Promise<any>;
        GenerateReportUpload: (RENAME: string, PARAM: string, ReprotType: String, FILE_NAME: string, ServePah: string, PartitionCode?: string) => Promise<any>;
        GetReportSetWatermarkToFilePath: (reportInfodata: { [key: string]: any }, PartitionCode?: string) => Promise<any>;
    }
    export default eBFR;
}

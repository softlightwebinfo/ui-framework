export declare const dateFormatAliases: {
    date: string;
    longDate: string;
    shortDate: string;
    dateTime: string;
    longDateTime: string;
    shortDateTime: string;
    dobShort: string;
    dobLong: string;
    iso8601: string;
    calendar: (value: any, options?: any) => any;
    calendarDateTime: (value: any, options: any) => any;
    calendarDate: (value: any, options: any) => any;
};
declare type DateFormat = keyof typeof dateFormatAliases;
interface FormatDateConfig {
    format: DateFormat;
    nil: string;
    options: any;
}
export declare const formatDate: (value?: any, dateFormatKeyOrConfig?: string | Partial<FormatDateConfig>) => any;
export {};

interface FormatNumberConfig {
    format: string;
    nil: string;
    round: boolean;
}
export declare const formatNumber: (value?: number, numberFormatOrConfig?: string | Partial<FormatNumberConfig>) => any;
export {};

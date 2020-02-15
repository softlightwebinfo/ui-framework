export declare class Random {
    rand: () => number;
    constructor(rand?: () => number);
    boolean: () => boolean;
    number: (options?: {
        min?: number;
        max?: number;
    }) => number;
    integer: (options?: {
        min?: number;
        max?: number;
    }) => number;
    oneOf: <T>(values: T[]) => T;
    oneToOne: <T>(values: T[], index: number) => T;
    setOf: <T>(values: T[], options?: {
        min?: number;
        max?: number;
    }) => T[];
    date: (options?: {
        min?: Date;
        max?: Date;
    }) => Date;
    moment: (options?: {
        min?: any;
        max?: any;
    }) => any;
}

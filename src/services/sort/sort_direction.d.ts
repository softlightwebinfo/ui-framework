declare const ASC: 'asc';
declare const DESC: 'desc';
export declare type Direction = typeof ASC | typeof DESC;
export declare const SortDirection: Readonly<{
    ASC: "asc";
    DESC: "desc";
    isAsc(direction: Direction): boolean;
    reverse(direction: Direction): Direction;
}>;
export declare const SortDirectionType: any;
export {};

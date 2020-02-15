export declare type Primitive = string | boolean | number | null | undefined;
declare type Comparator<T = Primitive> = (a: T, b: T) => number;
export declare const Comparators: Readonly<{
    default: (direction?: import("./sort_direction").Direction) => (v1: Primitive, v2: Primitive) => number;
    reverse: <T>(comparator: Comparator<T>) => Comparator<T>;
    value<T>(valueCallback: (value: T) => Primitive, comparator?: Comparator<Primitive>): Comparator<T>;
    property<T>(prop: string, comparator?: Comparator<Primitive>): Comparator<T>;
}>;
export {};

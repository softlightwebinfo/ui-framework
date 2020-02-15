export declare function times<T>(count: number): number[];
export declare function times<T>(count: number, iteratee: (index: number) => T): T[];
export declare function memoize<T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): (...args: Parameters<T>) => ReturnType<T>;
export declare const browserTick: (callback: FrameRequestCallback) => void;

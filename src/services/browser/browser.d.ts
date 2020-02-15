interface IBrowser {
    isEventSupported: (name: string, element: EventTarget) => boolean;
}
export declare const Browser: Readonly<IBrowser>;
export {};

export declare class Timer {
    id: any;
    callback: undefined | (() => void);
    finishTime: number | undefined;
    timeRemaining: number | undefined;
    constructor(callback: () => void, timeMs: number);
    pause: () => void;
    resume: () => void;
    clear: () => void;
    finish: () => void;
}

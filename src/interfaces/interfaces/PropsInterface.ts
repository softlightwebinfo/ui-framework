import {CSSProperties} from "react";

export interface PropsInterface {
    style?: CSSProperties;
    className?: string;

    [p: string]: any;
}

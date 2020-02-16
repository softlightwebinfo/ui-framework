import * as React from "react";

export interface LinkInterface {
    children: object | string;
    color?: string | undefined;
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
    type?: string;
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => any
}

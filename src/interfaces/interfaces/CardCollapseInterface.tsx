import {PropsInterface} from "./PropsInterface";
import {TitleSubtitleInterface} from "./TitleSubtitleInterface";

export interface CardCollapseInterface extends PropsInterface, TitleSubtitleInterface {
    card?: boolean;
    fluid?: boolean;
    title: string;
    options?: any;
    footer?: any;
    open?: boolean;
    icon?: string;
    onClickOpen?: (open: boolean) => void;
}

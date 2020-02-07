import {PropsInterface} from "./PropsInterface";
import {TitleSubtitleInterface} from "./TitleSubtitleInterface";

export interface CardHeaderInterface extends PropsInterface, TitleSubtitleInterface {
    isCollapse?: boolean;
    options?: any;
    open?: boolean;
    onClickOpen?: (open: boolean) => void;
}

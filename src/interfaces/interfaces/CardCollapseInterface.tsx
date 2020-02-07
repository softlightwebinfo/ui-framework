import {PropsInterface} from "./PropsInterface";
import {ProgressLabelInterfaceProps} from "../../components/Progress";
import {TitleSubtitleInterface} from "./TitleSubtitleInterface";

export interface CardCollapseInterface extends PropsInterface, TitleSubtitleInterface {
    card?: boolean;
    fluid?: boolean;
    progress: ProgressLabelInterfaceProps;
    title: string;
    options?: any;
    footer?: any;
    open?: boolean;
    onClickOpen?: (open: boolean) => void;
}

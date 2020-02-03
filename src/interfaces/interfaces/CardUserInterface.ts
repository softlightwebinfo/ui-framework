import {PropsInterface} from "./PropsInterface";
import {WidgetUserInterfaceProps} from "../../components/Widget/WidgetUser";
import {WidgetListHorizontalInterfaceProps} from "../../components/Widget";
import {OnClickEventType} from "../types/OnClickEventType";

export interface CardUserInterface extends PropsInterface, WidgetUserInterfaceProps, WidgetListHorizontalInterfaceProps {
    fluid?: boolean;
    onClickEdit?: OnClickEventType;
    onClickTrash?: OnClickEventType;
}


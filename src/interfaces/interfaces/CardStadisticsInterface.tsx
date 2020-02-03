import {PropsInterface} from "./PropsInterface";
import {ProgressLabelInterfaceProps} from "../../components/Progress";
import {WidgetSparkLineInterfaceProps} from "../../components/Widget";

export interface CardStadisticsInterface extends PropsInterface {
    progressBars: ProgressLabelInterfaceProps[];
    card?: boolean;
    fluid?: boolean;
    list: WidgetSparkLineInterfaceProps[];
}

import {TitleSubtitleOInterface} from "./TitleSubtitleInterface";
import {PropsInterface} from "./PropsInterface";
import {SocialInterfaceProps} from "../../components/Social";

export interface CardUserDescriptionInterface extends TitleSubtitleOInterface, PropsInterface {
    fluid?: boolean;
    card?: boolean;
    footer?: any;
    description: string;
    avatar: string;
    socials: SocialInterfaceProps[];
}

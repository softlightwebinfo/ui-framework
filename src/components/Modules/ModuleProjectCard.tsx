import {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {TitleSubtitleOBInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {CardCollapse} from "../Card";
import {Text} from "../Text";
import {ProgressLabel, ProgressLabelInterfaceProps} from "../Progress";
import * as React from "react";
import {Label, LabelInterfaceProps} from "../Label";
import {Spacer} from "../Spacer";
import {GroupTextSeparate, GroupTextSeparateInterfaceProps} from "../Group";
import {Separator} from "../Separator";

export interface ModuleProjectCardInterfaceProps extends PropsInterface, TitleSubtitleOBInterface {
    fluid?: boolean;
    card?: boolean;
    progress: ProgressLabelInterfaceProps;
    open?: boolean;
    onClickOpen?: (open: boolean) => void;
    tags: ModuleProjectCardInterfacePropsTag[];
    description: string;
    list: GroupTextSeparateInterfaceProps[];
}

export interface ModuleProjectCardInterfacePropsTag extends LabelInterfaceProps {
    label: string;
}

export class ModuleProjectCard extends PureComponent<ModuleProjectCardInterfaceProps> {
    constructor(props) {
        super(props);
    }

    public state = {
        open: this.props.open || true
    };

    onClickOpen = (e) => {
        this.setState({open: e});
        this.props.onClickOpen && this.props.onClickOpen(e);
    };

    render() {
        return (
            <CardCollapse
                footer={
                    <ProgressLabel
                        {...this.props.progress}
                        value={this.props.progress.value}
                        label={this.props.progress.label}
                    />
                }
                title={this.props.title}
                subTitle={this.props.subTitle}
                card={this.props.card}
                fluid={this.props.fluid}
                style={this.props.style}
                className={this.props.className}
                progress={this.props.progress}
                onClickOpen={this.onClickOpen}
                open={this.state.open}
            >
                <div>
                    {this.props.tags.map((tag, index) => (
                        <Label
                            key={index}
                            {...tag}
                            style={{
                                marginRight: 5,
                                ...(tag.style || {})
                            }}
                        >
                            {tag.label}
                        </Label>
                    ))}
                </div>
                <Spacer size={"s"}/>
                <Text style={{color: "rgb(32,33,33)"}}>{this.props.description}</Text>
                <Spacer size={"s"}/>
                {this.props.list.map((list, index) => (
                    <GroupTextSeparate
                        key={index}
                        {...list}
                        left={list.left}
                        right={list.right}
                        style={{marginBottom: 5}}
                        bold
                    />
                ))}
                <Separator style={{marginTop: 20, marginRight: -15, marginLeft: -15}}/>
            </CardCollapse>
        );
    }
}

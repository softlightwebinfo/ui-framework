import {PureComponent, ReactNode} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Page} from "../Page";
import {ModuleAuthRegister, ModuleAuthRegisterInterfaceProps} from "./ModuleAuthRegister";

export interface ModulePageAuthRegisterInterfaceProps extends PropsInterface, ModuleAuthRegisterInterfaceProps {
    authChildren?: ReactNode;
    right?: ReactNode;
}

export class ModulePageAuthRegister extends PureComponent<ModulePageAuthRegisterInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Page
                left={
                    <ModuleAuthRegister
                        title={this.props.title}
                        logo={this.props.logo}
                        allowFullScreen={this.props.allowFullScreen}
                        size={this.props.size}
                        onSubmit={this.props.onSubmit}
                        form={this.props.form}
                    >
                        {this.props.authChildren}
                    </ModuleAuthRegister>
                }
                right={this.props.right}
            >

            </Page>
        );
    }
}

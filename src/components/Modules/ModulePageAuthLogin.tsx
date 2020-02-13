import {PureComponent, ReactNode} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Page} from "../Page";
import {ModuleAuthLogin, ModuleAuthLoginInterfaceProps} from "./ModuleAuthLogin";


export interface ModulePageAuthLoginInterfaceProps extends PropsInterface, ModuleAuthLoginInterfaceProps {
    authChildren?: ReactNode;
    right?: ReactNode;
}

export class ModulePageAuthLogin extends PureComponent<ModulePageAuthLoginInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Page
                left={
                    <ModuleAuthLogin
                        title={this.props.title}
                        logo={this.props.logo}
                        allowFullScreen={this.props.allowFullScreen}
                        size={this.props.size}
                        onSubmit={this.props.onSubmit}
                        form={this.props.form}
                    >
                        {this.props.authChildren}
                    </ModuleAuthLogin>
                }
                right={this.props.right}
            >

            </Page>
        );
    }
}

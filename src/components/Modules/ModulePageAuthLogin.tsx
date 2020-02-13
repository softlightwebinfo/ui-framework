import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Page} from "../Page";


export interface ModuleAuthInterfaceProps extends PropsInterface {

}

export class ModuleAuth extends PureComponent<ModuleAuthInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Page
                left={this.props.left}
            >

            </Page>
        );
    }
}

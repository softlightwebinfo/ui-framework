import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Page} from "../Page";


export interface ModulePageAuthLoginInterfaceProps extends PropsInterface {

}

export class ModulePageAuthLogin extends PureComponent<ModulePageAuthLoginInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Page
                left={
                    <ModuleAuthLogin/>
                }
            >

            </Page>
        );
    }
}

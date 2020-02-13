import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Form, FormInterfaceProps} from "../Form";
import {Card} from "../Card";
import {Image} from "../Image";
import {Center} from "../Center";
import {Title} from "../Title";
import {Spacer} from "../Spacer";
import {FormGroup} from "../FormGroup";
import {Input} from "../Input";
import {OnChangeEventType} from "../../interfaces/types/OnChangeEventType";
import {Button, ButtonInterfaceProps} from "../Button";

export interface ModuleAuthLoginInterfacePropsInput {
    value: string;
    onChange: OnChangeEventType;
    placeholder: string;
}

export interface ModuleAuthLoginInterfaceProps extends PropsInterface, FormInterfaceProps {
    size?: string;
    logo: string;
    allowFullScreen?: boolean;
    title: string;
    form: {
        email: ModuleAuthLoginInterfacePropsInput;
        password: ModuleAuthLoginInterfacePropsInput;
        button: ButtonInterfaceProps;
        top?: any;
        bottom?: any;
    },
    fluid?: boolean;
}

export class ModuleAuthLogin extends PureComponent<ModuleAuthLoginInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card style={{padding: 20}} fluid={this.props.fluid}>
                <Center>
                    <Image
                        size={this.props.size}
                        url={this.props.logo}
                        allowFullScreen={this.props.allowFullScreen}
                    />
                </Center>
                <Spacer/>
                <Title size={"xs"}>
                    <h1>
                        {this.props.title}
                    </h1>
                </Title>
                <Spacer size={"s"}/>
                <Form onSubmit={this.props.onSubmit}>
                    {this.props.form.top}
                    <FormGroup label={this.props.form.email.placeholder}>
                        <Input
                            value={this.props.form.email.value}
                            placeholder={this.props.form.email.placeholder}
                            onChange={this.props.form.email.onChange}
                        />
                    </FormGroup>
                    <FormGroup label={this.props.form.password.placeholder}>
                        <Input
                            type={"password"}
                            value={this.props.form.password.value}
                            placeholder={this.props.form.password.placeholder}
                            onChange={this.props.form.password.onChange}
                        />
                    </FormGroup>
                    {this.props.form.bottom}
                    <Button
                        {...this.props.form.button}
                    />
                    {this.props.children}
                </Form>
            </Card>
        );
    }
}

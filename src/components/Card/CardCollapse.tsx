import {PureComponent} from "react";
import * as React from "react";
import {Card} from "./Card";
import {CardCollapseInterface} from "../../interfaces/interfaces/CardCollapseInterface";
import {CardHeader} from "./CardHeader";

export class CardCollapse extends PureComponent<CardCollapseInterface> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                open={this.props.open}
                style={this.props.style}
                className={this.props.className}
                fluid={this.props.fluid}
                footer={this.props.footer}
                header={(
                    <CardHeader
                        open={this.props.open}
                        onClickOpen={this.props.onClickOpen}
                        options={this.props.options}
                        title={this.props.title}
                        isCollapse
                    />
                )}
            >
                {this.props.children}
            </Card>
        );
    }
}

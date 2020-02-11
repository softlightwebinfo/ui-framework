import {PureComponent} from "react";
import * as React from "react";
import {CardHeaderInterface} from "../../interfaces/interfaces/CardHeaderInterface";

export class CardHeader extends PureComponent<CardHeaderInterface> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        open: true,
    };

    render() {
        return (
            <header className={"c-card-header"}>
                <h3 className={"c-card__title"}>
                    {this.props.icon && (
                        <i style={{marginRight: 5}} className={`icon ${this.props.icon}`}/>
                    )}
                    {this.props.title}
                </h3>
                {(this.props.options || this.props.isCollapse) && (
                    <div className={"c-card-header__options"}>
                        {this.props.options}
                        {this.props.isCollapse && this.props.open ? (
                            <i onClick={() => this.props.onClickOpen && this.props.onClickOpen(false)} className={"icon icon-up-open"}/>
                        ) : (
                            <i onClick={() => this.props.onClickOpen && this.props.onClickOpen(true)} className={"icon icon-down-open"}/>
                        )}
                    </div>
                )}
            </header>
        );
    }
}

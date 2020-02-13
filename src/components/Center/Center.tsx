import {PureComponent} from "react";
import * as React from "react";
import classNames from 'classnames';

export class Center extends PureComponent<{
    className?: string;
}> {
    constructor(props) {
        super(props);
    }

    render() {
        const classnames = classNames("c-center", this.props.className);
        return (
            <div className={classnames}>
                {this.props.children}
            </div>
        );
    }
}

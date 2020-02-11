import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {GenerateSizeObject} from "../../config";
import {SizeTypes} from "../../interfaces/types/SizeTypes";

export interface LoadingInterfaceProps extends PropsInterface {
    size?: SizeTypes;
}

const sizeToClassNameMap = GenerateSizeObject("c-loading");

export class Loading extends PureComponent<LoadingInterfaceProps> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {size: 'm'};

    render() {
        let {size = "m", className, ...rest} = this.props;
        const classes = classNames(
            'c-loading',
            sizeToClassNameMap[size],
            className
        );

        return <span className={classes} {...rest} />;
    }
}

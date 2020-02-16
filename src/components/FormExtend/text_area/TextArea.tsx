import React, {Component} from 'react';
import classNames from 'classnames';
import {ValidatableControl} from '../validatable_control';

const resizeToClassNameMap = {
    vertical: 'c-textArea--resizeVertical',
    horizontal: 'c-textArea--resizeHorizontal',
    both: 'c-textArea--resizeBoth',
    none: 'c-textArea--resizeNone',
};

export const RESIZE = Object.keys(resizeToClassNameMap);

export class TextArea extends Component<{
    name?: string,
    id?: string,
    placeholder?: string,
    rows?: number,
    isInvalid?: boolean,
    fullWidth?: boolean,
    compressed?: boolean,
    className?: string,
    inputRef?: string,
    onChange?: (e: any) => any;
    /**
     * Which direction, if at all, should the textarea resize
     */
    resize?: any,
    value?: string;
    [p: string]: any;
}> {
    static defaultProps = {
        fullWidth: false,
        resize: 'vertical',
    };
    static propTypes: {};

    render() {
        let {
            value,
            children,
            className,
            compressed,
            fullWidth,
            id,
            inputRef,
            isInvalid,
            name,
            placeholder,
            resize,
            rows,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-textArea',
            resizeToClassNameMap[resize],
            {
                'c-textArea--fullWidth': fullWidth,
                'c-textArea--compressed': compressed,
            },
            className
        );

        let definedRows;

        if (rows) {
            definedRows = rows;
        } else if (compressed) {
            definedRows = 3;
        } else {
            definedRows = 6;
        }

        return (
            <ValidatableControl isInvalid={isInvalid}>
              <textarea
                  className={classes}
                  {...rest}
                  rows={definedRows}
                  name={name}
                  id={id}
                  ref={inputRef}
                  placeholder={placeholder}
                  value={value}
              />
            </ValidatableControl>
        );
    }
}


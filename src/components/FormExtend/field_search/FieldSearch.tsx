import React, {Component} from 'react';
import classNames from 'classnames';
import {Browser} from '../../../services/browser';
import {ENTER} from '../../../services/key_codes';

import {
    FormControlLayout,
} from '../form_control_layout';

import {
    ValidatableControl,
} from '../validatable_control';

const defaultProps = {
    fullWidth: false,
    isLoading: false,
    incremental: false,
    compressed: false,
};

export class FieldSearch extends Component<{
    onChange?: any,
    onSearch?: any,
    modern?: boolean,
    title?: any,
    inputRef?: any;
    className?: any,
    id?: any,
    name?: any,
    placeholder?: any,
    value?: any,
    isInvalid?: any,
    fullWidth?: any,
    isLoading?: any,
    incremental?: any,
    compressed?: any,
    onKeyUp?: any,
    defaultValue?: any,
    disabled?: boolean,
    onKeyDown?: () => any
}> {

    static propTypes = propTypes;
    static defaultProps = defaultProps;
    private inputElement: any;
    private cleanups: any;

    constructor(props) {
        super(props);
        this.cleanups = [];
    }

    componentDidMount() {
        if (Browser.isEventSupported('search', this.inputElement)) {
            const onSearch = (event) => {
                if (this.props.onSearch) {
                    this.props.onSearch(event.target.value);
                }
            };
            this.inputElement.addEventListener('search', onSearch);
            this.cleanups.push(() => this.inputElement.removeEventListener('search', onSearch));
        }
    }

    componentWillUnmount() {
        this.cleanups.forEach(cleanup => cleanup());
    }

    setRef = inputElement => {
        this.inputElement = inputElement;
        if (this.props.inputRef) {
            this.props.inputRef(inputElement);
        }
    };

    onKeyUp = (incremental, onSearch, event) => {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
            if (event.defaultPrevented) {
                return;
            }
        }
        if (onSearch && (incremental || event.keyCode === ENTER)) {
            onSearch(event.target.value);
        }
    };

    onChange = (e, onChange) => {
        if (onChange) onChange(e);
    };

    render() {

        const {
            className,
            id,
            name,
            placeholder,
            value,
            isInvalid,
            fullWidth,
            isLoading,
            inputRef, // eslint-disable-line no-unused-vars
            incremental,
            compressed,
            onSearch,
            onChange,
            modern,
            ...rest
        } = this.props;

        const classes = classNames(
            'c-field-search',
            {
                'c-field-search--fullWidth': fullWidth,
                'c-field-search--compressed': compressed,
                'c-field-search-isLoading': isLoading,
                'c-field-search--modern': modern,
            },
            className
        );

        return (
            <FormControlLayout
                icon="search"
                fullWidth={fullWidth}
                isLoading={isLoading}
                compressed={compressed}
            >
                <ValidatableControl isInvalid={isInvalid}>
                    <input
                        onChange={e => this.onChange(e, onChange)}
                        type="search"
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        className={classes}
                        value={value}
                        onKeyUp={this.onKeyUp.bind(this, incremental, onSearch)}
                        ref={this.setRef}
                        {...rest}
                    />
                </ValidatableControl>
            </FormControlLayout>
        );
    }
}

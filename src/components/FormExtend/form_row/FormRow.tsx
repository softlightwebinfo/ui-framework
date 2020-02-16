import React, {
    cloneElement,
    Component,
} from 'react';
import classNames from 'classnames';
import {get} from '../../../services/objects';
import {FormHelpText} from '../form_help_text';
import {FormErrorText} from '../form_error_text';
import {FormLabel} from '../form_label';
import {FlexGroup, FlexItem} from '../../Flex';

import makeId from './make_id';

export class FormRow extends Component<{
    id?: any;
    helpText?: any,
    isInvalid?: any,
    error?: any,
    label?: any,
    labelType?: any,
    labelAppend?: any,
    hasEmptyLabelSpace?: any,
    fullWidth?: any,
    className?: any,
    describedByIds?: any,
    compressed?: any,
    displayOnly?: any,
    children?: any,
}> {
    state = {
        isFocused: false,
        id: this.props.id || makeId()
    };
    static propTypes: {};
    static defaultProps: {};

    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(...args) {
        // Doing this to allow onFocus to be called correctly from the child input element as this component overrides it
        const onChildFocus = get(this.props, 'children.props.onFocus');
        if (onChildFocus) {
            onChildFocus(...args);
        }

        this.setState({
            isFocused: true,
        });
    }

    onBlur(...args) {
        // Doing this to allow onBlur to be called correctly from the child input element as this component overrides it
        const onChildBlur = get(this.props, 'children.props.onBlur');
        if (onChildBlur) {
            onChildBlur(...args);

        }

        this.setState({
            isFocused: false,
        });
    }

    render() {
        const {
            children,
            helpText,
            isInvalid,
            error,
            label,
            labelType,
            labelAppend,
            hasEmptyLabelSpace,
            fullWidth,
            className,
            describedByIds,
            compressed,
            displayOnly,
            ...rest
        } = this.props;

        const {id} = this.state;

        const classes = classNames(
            'c-form-row',
            {
                'c-form-row--hasEmptyLabelSpace': hasEmptyLabelSpace,
                'c-form-row--fullWidth': fullWidth,
                'c-form-row--compressed': compressed,
            },
            className
        );

        let optionalHelpText;

        if (helpText) {
            optionalHelpText = (
                <FormHelpText id={`${id}-help`} className="c-form-row__text">
                    {helpText}
                </FormHelpText>
            );
        }

        let optionalErrors;

        if (error && isInvalid) {
            const errorTexts = Array.isArray(error) ? error : [error];
            optionalErrors = errorTexts.map((error, i) => {
                    const key = typeof error === 'string' ? error : i;
                    return (
                        <FormErrorText key={key} id={`${id}-error-${i}`} className="c-form-row__text">
                            {error}
                        </FormErrorText>
                    );
                }
            );
        }

        let optionalLabel;
        const isLegend = label && labelType === 'legend' ? true : false;
        const labelID = isLegend ? `${id}-${labelType}` : undefined;

        if (label) {
            optionalLabel = (
                // Outer div ensures the label is inline-block (only takes up as much room as it needs)
                <div>
                    <FormLabel
                        isFocused={!isLegend && this.state.isFocused}
                        isInvalid={isInvalid}
                        aria-invalid={isInvalid}
                        htmlFor={!isLegend ? id : undefined}
                        type={labelType}
                        id={labelID}
                    >
                        {label}
                    </FormLabel>
                </div>
            );
        }

        if (labelAppend) {
            optionalLabel = (
                <FlexGroup responsive={false} wrap={true} gutterSize="xs" justifyContent="spaceBetween">
                    <FlexItem grow={false}>{optionalLabel}</FlexItem>
                    <FlexItem grow={false}>{labelAppend}</FlexItem>
                </FlexGroup>
            );
        }

        const optionalProps = {};
        const describingIds = [...describedByIds];

        if (optionalHelpText) {
            describingIds.push(optionalHelpText.props.id);
        }

        if (optionalErrors) {
            optionalErrors.forEach(error => describingIds.push(error.props.id));
        }

        if (describingIds.length > 0) {
            optionalProps[`aria-describedby`] = describingIds.join(` `);
        }

        let field = cloneElement(children, {
            id,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            compressed: compressed,
            ...optionalProps
        });

        if (displayOnly) {
            // @ts-ignore
            field = (
                <div className="c-form-row__displayOnlyWrapper">
                    {field}
                </div>
            );
        }

        const Element = labelType === 'legend' ? 'fieldset' : 'div';

        return (
            <Element
                className={classes}
                {...rest}
                id={`${id}-row`}
                aria-labelledby={labelID} // Only renders a string if label type is 'legend'
            >
                {optionalLabel}
                {field}
                {optionalErrors}
                {optionalHelpText}
            </Element>
        );
    }
}

FormRow.defaultProps = {
    hasEmptyLabelSpace: false,
    fullWidth: false,
    describedByIds: [],
    labelType: 'label',
};

import React, {
    Component,
} from 'react';
import classNames from 'classnames';

import {Title} from '../../Title';
import {Text} from '../../Text';
import {FlexGroup, FlexItem} from '../../Flex';

import makeId from '../form_row/make_id';

const paddingSizeToClassNameMap = {
    xxxs: 'c-described-form-group__fieldPadding--xxxsmall',
    xxs: 'c-described-form-group__fieldPadding--xxsmall',
    xs: 'c-described-form-group__fieldPadding--xsmall',
    s: 'c-described-form-group__fieldPadding--small',
    m: 'c-described-form-group__fieldPadding--medium',
    l: 'c-described-form-group__fieldPadding--large',
};

export class DescribedFormGroup extends Component<{
    children?: any,
    className?: any,
    gutterSize?: any,
    fullWidth?: any,
    titleSize?: any,
    title?: any,
    description?: any,
    idAria?: any,
}> {
    private ariaId: any;
    static propTypes: {};
    static defaultProps: {};

    constructor(props) {
        super(props);
        this.ariaId = props.idAria || makeId();
    }

    render() {
        const {
            children,
            className,
            gutterSize,
            fullWidth,
            titleSize,
            title,
            description,
            idAria: userAriaId,
            ...rest
        } = this.props;

        const ariaId = this.ariaId;

        const classes = classNames(
            'c-described-form-group',
            {
                'c-described-form-group--fullWidth': fullWidth,
            },
            className,
        );

        const fieldClasses = classNames(
            'c-described-form-group__fields',
            paddingSizeToClassNameMap[titleSize],
        );

        const ariaProps = {
            'aria-labelledby': `${ariaId}-title`,
        };

        let renderedDescription;

        if (description) {
            renderedDescription = (
                <Text id={ariaId} size="s" color="subdued" className="c-described-form-group__description">
                    {description}
                </Text>
            );

            // If user has defined an aria ID, assume they have passed the ID to
            // the form row describedByIds and skip describedby here.
            ariaProps['aria-describedby'] = userAriaId ? null : ariaId;
        }

        return (
            <div
                role="group"
                className={classes}
                {...ariaProps}
                {...rest}
            >
                <FlexGroup gutterSize={gutterSize}>
                    <FlexItem>
                        <Title id={`${ariaId}-title`} size={titleSize} className="c-described-form-group__title">
                            {title}
                        </Title>

                        {renderedDescription}
                    </FlexItem>

                    <FlexItem className={fieldClasses}>
                        {children}
                    </FlexItem>
                </FlexGroup>
            </div>
        );
    }
}

DescribedFormGroup.defaultProps = {
    gutterSize: 'l',
    titleSize: 'xs',
    fullWidth: false,
};

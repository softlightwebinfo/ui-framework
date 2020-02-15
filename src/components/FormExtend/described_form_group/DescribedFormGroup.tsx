import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftTitle, SOFT_TITLE_SIZES as TITLE_SIZES} from '../../Title';
import {SoftText} from '../../Text';
import {SoftFlexGroup, SoftFlexItem} from '../../Flex';
import {GUTTER_SIZES} from '../../Flex/SoftFlexGroup';

import makeId from '../form_row/make_id';

const paddingSizeToClassNameMap = {
  xxxs: 'softDescribedFormGroup__fieldPadding--xxxsmall',
  xxs: 'softDescribedFormGroup__fieldPadding--xxsmall',
  xs: 'softDescribedFormGroup__fieldPadding--xsmall',
  s: 'softDescribedFormGroup__fieldPadding--small',
  m: 'softDescribedFormGroup__fieldPadding--medium',
  l: 'softDescribedFormGroup__fieldPadding--large',
};

export class SoftDescribedFormGroup extends Component<{
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
      'softDescribedFormGroup',
      {
        'softDescribedFormGroup--fullWidth': fullWidth,
      },
      className,
    );

    const fieldClasses = classNames(
      'softDescribedFormGroup__fields',
      paddingSizeToClassNameMap[titleSize],
    );

    const ariaProps = {
      'aria-labelledby': `${ariaId}-title`,
    };

    let renderedDescription;

    if (description) {
      renderedDescription = (
        <SoftText id={ariaId} size="s" color="subdued" className="softDescribedFormGroup__description">
          {description}
        </SoftText>
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
        <SoftFlexGroup gutterSize={gutterSize}>
          <SoftFlexItem>
            <SoftTitle id={`${ariaId}-title`} size={titleSize} className="softDescribedFormGroup__title">
              {title}
            </SoftTitle>

            {renderedDescription}
          </SoftFlexItem>

          <SoftFlexItem className={fieldClasses}>
            {children}
          </SoftFlexItem>
        </SoftFlexGroup>
      </div>
    );
  }
}

SoftDescribedFormGroup.propTypes = {
  /**
   * One or more `SoftFormRow`s
   */
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Passed to `SoftFlexGroup`
   */
  gutterSize: PropTypes.oneOf(GUTTER_SIZES),
  fullWidth: PropTypes.bool,
  titleSize: PropTypes.oneOf(TITLE_SIZES),
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  idAria: PropTypes.string,
};

SoftDescribedFormGroup.defaultProps = {
  gutterSize: 'l',
  titleSize: 'xs',
  fullWidth: false,
};

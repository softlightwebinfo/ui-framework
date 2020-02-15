import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftScreenReaderOnly} from '../../Accessibility';
import {SuperSelectControl} from './SoftSuperSelectControl';
import {SoftPopover} from '../../Popover';
import {SoftContextMenuItem} from '../../ContextMenu';
import {keyCodes} from '../../../services';
import {SoftI18n} from '../../I18n';

const SHIFT_BACK = 'back';
const SHIFT_FORWARD = 'forward';

export class SuperSelect extends Component<{
  isOpen?: boolean,
  options?: any[],
  valueOfSelected?: any,
  className?: string,
  onChange?: (value: any) => any,
  isInvalid?: boolean,
  hasDividers?: boolean,
  itemClassName?: string,
  itemLayoutAlign?: string,
  fullWidth?: boolean,
  popoverClassName?: string
}> {
  itemNodes: any[];
  private _isMounted: boolean;
  private popoverRef: any;
  state = {
    isPopoverOpen: this.props.isOpen || false,
    menuWidth: null,
  };
  static propTypes: {};
  static defaultProps: {};

  constructor(props) {
    super(props);

    this.itemNodes = [];
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setItemNode = (node, index) => {
    this.itemNodes[index] = node;
  };

  setPopoverRef = ref => {
    this.popoverRef = ref;
  };

  openPopover = () => {
    this.setState({
      isPopoverOpen: true,
    });

    const focusSelected = () => {
      const indexOfSelected = this.props.options.reduce(
        (indexOfSelected, option, index) => {
          if (indexOfSelected != null) return indexOfSelected;
          if (option == null) return null;
          return option.value === this.props.valueOfSelected ? index : null;
        },
        null
      );

      requestAnimationFrame(() => {
        if (!this._isMounted) {
          return;
        }
        this.setState({
          menuWidth: this.popoverRef.getBoundingClientRect().width - 2, // account for border not inner shadow
        });

        if (this.props.valueOfSelected != null) {
          if (indexOfSelected != null) {
            this.focusItemAt(indexOfSelected);
          } else {
            focusSelected();
          }
        }
      });
    };

    requestAnimationFrame(focusSelected);
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };

  itemClicked = (value) => {
    this.setState({
      isPopoverOpen: false,
    });
    this.props.onChange(value);
  };

  onSelectKeyDown = e => {
    if (e.keyCode === keyCodes.UP || e.keyCode === keyCodes.DOWN) {
      e.preventDefault();
      e.stopPropagation();
      this.openPopover();
    }
  };

  onItemKeyDown = e => {
    switch (e.keyCode) {
      case keyCodes.ESCAPE:
        // close the popover and prevent ancestors from handling
        e.preventDefault();
        e.stopPropagation();
        this.closePopover();
        break;

      case keyCodes.TAB:
        // no-op
        e.preventDefault();
        e.stopPropagation();
        break;

      case keyCodes.UP:
        e.preventDefault();
        e.stopPropagation();
        this.shiftFocus(SHIFT_BACK);
        break;

      case keyCodes.DOWN:
        e.preventDefault();
        e.stopPropagation();
        this.shiftFocus(SHIFT_FORWARD);
        break;
    }
  };

  focusItemAt(index) {
    const targetElement = this.itemNodes[index];
    if (targetElement != null) {
      targetElement.focus();
    }
  }

  shiftFocus(direction) {
    const currentIndex = this.itemNodes.indexOf(document.activeElement);
    let targetElementIndex;

    if (currentIndex === -1) {
      // somehow the select options has lost focus
      targetElementIndex = 0;
    } else {
      if (direction === SHIFT_BACK) {
        targetElementIndex = currentIndex === 0 ? this.itemNodes.length - 1 : currentIndex - 1;
      } else {
        targetElementIndex = currentIndex === this.itemNodes.length - 1 ? 0 : currentIndex + 1;
      }
    }

    this.focusItemAt(targetElementIndex);
  }

  render() {
    const {
      className,
      options,
      valueOfSelected,
      onChange,
      isOpen,
      isInvalid,
      hasDividers,
      itemClassName,
      itemLayoutAlign,
      fullWidth,
      popoverClassName,
      ...rest
    } = this.props;

    const popoverClasses = classNames(
      'softSuperSelect',
      {
        'softSuperSelect--fullWidth': fullWidth,
      },
      popoverClassName,
    );

    const buttonClasses = classNames(
      {
        'softSuperSelect--isOpen__button': this.state.isPopoverOpen,
      },
      className,
    );

    const itemClasses = classNames(
      'softSuperSelect__item',
      {
        'softSuperSelect__item--hasDividers': hasDividers,
      },
      itemClassName,
    );

    const button = (
      <SuperSelectControl
        options={options}
        value={valueOfSelected}
        onChange={onChange}
        onClick={this.state.isPopoverOpen ? this.closePopover : this.openPopover}
        onKeyDown={this.onSelectKeyDown}
        className={buttonClasses}
        fullWidth={fullWidth}
        isInvalid={isInvalid}
        {...rest}
      />
    );

    const items = options.map((option, index) => {
      const {
        value,
        dropdownDisplay,
        inputDisplay,
        ...optionRest
      } = option;

      return (
        <SoftContextMenuItem
          key={index}
          className={itemClasses}
          icon={valueOfSelected === value ? 'check' : 'empty'}
          onClick={() => this.itemClicked(value)}
          onKeyDown={this.onItemKeyDown}
          layoutAlign={itemLayoutAlign}
          buttonRef={node => this.setItemNode(node, index)}
          style={{width: this.state.menuWidth}}
          role="option"
          id={value}
          {...optionRest}
        >
          {dropdownDisplay || inputDisplay}
        </SoftContextMenuItem>
      );
    });

    return (
      <SoftPopover
        className={popoverClasses}
        anchorClassName="softSuperSelect__popoverAnchor"
        panelClassName="softSuperSelect__popoverPanel"
        button={button}
        isOpen={isOpen || this.state.isPopoverOpen}
        closePopover={this.closePopover}
        panelPaddingSize="none"
        anchorPosition="downCenter"
        ownFocus={false}
        popoverRef={this.setPopoverRef}
        hasArrow={false}
      >
        <SoftScreenReaderOnly>
          <p role="alert">
            <SoftI18n
              token="softSuperSelect.screenReaderAnnouncement"
              default="You are in a form selector of {optionsCount} items and must select a single option.
              Use the up and down keys to navigate or escape to close."
              values={{optionsCount: options.length}}
            />
          </p>
        </SoftScreenReaderOnly>
        <div role="listbox" aria-activedescendant={valueOfSelected}>
          {items}
        </div>
      </SoftPopover>
    );
  }
}

SuperSelect.propTypes = {
  /**
   * Classes (and `...rest`) will be applied to the control
   */
  className: PropTypes.string,
  /**
   * Classes for the context menu item
   */
  itemClassName: PropTypes.string,
  /**
   * You must pass an `onChange` function to handle the update of the value
   */
  onChange: PropTypes.func,
  /**
   * Pass an array of options that must at least include:
   * `value`: storing unique value of item,
   * `inputDisplay`: what shows inside the form input when selected
   * `dropdownDisplay` (optional): what shows for the item in the dropdown
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      inputDisplay: PropTypes.node,
      dropdownDisplay: PropTypes.node,
    }),
  ).isRequired,
  valueOfSelected: PropTypes.string,
  /**
   * Change to `true` if you want horizontal lines between options.
   * This is best used when options are multi-line.
   */
  hasDividers: PropTypes.bool,
  /**
   * Change `SoftContextMenuItem` layout position of icon
   */
  itemLayoutAlign: PropTypes.string,
  /**
   * Make it wide
   */
  fullWidth: PropTypes.bool,
  /**
   * Provides invalid styling
   */
  isInvalid: PropTypes.bool,
  /**
   * Make it short
   */
  compressed: PropTypes.bool,
  /**
   * Applied to the outermost wrapper (popover)
   */
  popoverClassName: PropTypes.string,
};

SuperSelect.defaultProps = {
  hasDividers: false,
  fullWidth: false,
  compressed: false,
  isInvalid: false,
  options: [],
};

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';

import {SoftScreenReaderOnly} from '../../Accessibility';
import {SoftFormControlLayout} from '../../Form';
import {ComboBoxPill} from './SoftComboBoxPill';
import {htmlIdGenerator} from '../../../services';

const makeId = htmlIdGenerator();

export class ComboBoxInput extends Component<{
  id?: string,
  placeholder?: string,
  selectedOptions?: any[],
  onRemoveOption?: (param1?: any) => any,
  onBlur?: (param1?: any) => any,
  onClick?: (param1?: any) => any,
  onFocus?: (param1?: any) => any,
  onChange?: (param1?: any) => any,
  value?: string,
  searchValue?: string,
  autoSizeInputRef?: (param1?: any) => any,
  inputRef?: (param1?: any) => any,
  updatePosition?: (param1?: any) => any,
  onClear?: (param1?: any) => any,
  hasSelectedOptions?: boolean,
  isListOpen?: boolean,
  noIcon?: boolean,
  onOpenListClick?: (param1?: any) => any,
  onCloseListClick?: (param1?: any) => any,
  singleSelection?: any,
  isDisabled?: boolean,
  toggleButtonRef?: (param1?: any) => any,
  fullWidth?: boolean,
  rootId?: (param1?: any) => any,
  focusedOptionId?: string,
  compressed?: boolean,
}> {
  static propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    selectedOptions: PropTypes.array,
    onRemoveOption: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
    searchValue: PropTypes.string,
    autoSizeInputRef: PropTypes.func,
    inputRef: PropTypes.func,
    updatePosition: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    hasSelectedOptions: PropTypes.bool.isRequired,
    isListOpen: PropTypes.bool.isRequired,
    noIcon: PropTypes.bool.isRequired,
    onOpenListClick: PropTypes.func.isRequired,
    onCloseListClick: PropTypes.func.isRequired,
    singleSelection: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        asPlainText: PropTypes.bool,
      }),
    ]),
    isDisabled: PropTypes.bool,
    toggleButtonRef: PropTypes.func,
    fullWidth: PropTypes.bool,
    rootId: PropTypes.func.isRequired,
    focusedOptionId: PropTypes.string,
    compressed: PropTypes.bool.isRequired,
  }
  state: any = {};

  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };
  }

  updatePosition = () => {
    // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
    requestAnimationFrame(() => {
      this.props.updatePosition();
    });
  };

  onFocus = () => {
    this.props.onFocus();
    this.setState({
      hasFocus: true,
    });
  };

  onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.setState({
      hasFocus: false,
    });
  };

  componentDidUpdate(prevProps) {
    const {searchValue} = prevProps;

    // We need to update the position of everything if the user enters enough input to change
    // the size of the input.
    if (searchValue !== this.props.searchValue) {
      this.updatePosition();
    }
  }

  render() {
    const {
      id,
      placeholder,
      selectedOptions,
      onRemoveOption,
      onClick,
      onChange,
      value,
      searchValue,
      autoSizeInputRef,
      inputRef,
      onClear,
      hasSelectedOptions,
      isListOpen,
      onOpenListClick,
      onCloseListClick,
      singleSelection,
      isDisabled,
      toggleButtonRef,
      fullWidth,
      noIcon,
      rootId,
      focusedOptionId,
      compressed,
    } = this.props;

    const pills = selectedOptions.map((option) => {
      const {
        label,
        color,
        onClick,
        ...rest
      } = option;

      const asPlainText = singleSelection && singleSelection.asPlainText;

      return (
        <ComboBoxPill
          option={option}
          onClose={(isDisabled || singleSelection || onClick) ? null : onRemoveOption}
          key={label.toLowerCase()}
          color={color}
          onClick={onClick}
          onClickAriaLabel={onClick ? 'Change' : null}
          asPlainText={asPlainText}
          {...rest}
        >
          {label}
        </ComboBoxPill>
      );
    });

    let removeOptionMessage;
    let removeOptionMessageId;

    if (this.state.hasFocus) {
      const readPlaceholder = (placeholder ? `${placeholder}.` : '');
      const removeOptionMessageContent =
        `Combo box. Selected. ${
          searchValue ? `${searchValue}. Selected. ` : ''
          }${selectedOptions.length ? `${value}. Press Backspace to delete ${selectedOptions[selectedOptions.length - 1].label}. ` : ''
          }Combo box input. ${readPlaceholder} Type some text or, to display a list of choices, press Down Arrow. ` +
        `To exit the list of choices, press Escape.`;

      removeOptionMessageId = makeId();

      // aria-live="assertive" will read this message aloud immediately once it enters the DOM.
      // We'll render to the DOM when the input gains focus and remove it when the input loses focus.
      // We'll use aria-hidden to prevent default aria information from being read by the screen
      // reader.
      removeOptionMessage = (
        <SoftScreenReaderOnly>
          <span aria-live="assertive" id={removeOptionMessageId}>
            {removeOptionMessageContent}
          </span>
        </SoftScreenReaderOnly>
      );
    }

    let placeholderMessage;

    if (placeholder && !selectedOptions.length && !searchValue) {
      placeholderMessage = (
        <p className="softComboBoxPlaceholder">{placeholder}</p>
      );
    }

    const clickProps: any = {};

    if (!isDisabled && onClear && hasSelectedOptions) {
      clickProps.clear = {
        onClick: onClear,
        'data-test-subj': 'comboBoxClearButton',
      };
    }

    let icon;
    if (!noIcon) {
      icon = {
        type: 'arrowDown',
        side: 'right',
        onClick: isListOpen && !isDisabled ? onCloseListClick : onOpenListClick,
        ref: toggleButtonRef,
        'aria-label': isListOpen ? 'Close list of options' : 'Open list of options',
        disabled: isDisabled,
        'data-test-subj': 'comboBoxToggleListButton',
      };
    }

    const wrapClasses = classNames('softComboBox__inputWrap', {
      'softComboBox__inputWrap--compressed': compressed,
      'softComboBox__inputWrap--fullWidth': fullWidth,
      'softComboBox__inputWrap--noWrap': singleSelection,
      'softComboBox__inputWrap-isClearable': onClear,
    });

    return (
      <SoftFormControlLayout
        icon={icon}
        {...clickProps}
        fullWidth={fullWidth}
        compressed={compressed}
      >
        <div
          className={wrapClasses}
          onClick={onClick}
          tabIndex={-1} // becomes onBlur event's relatedTarget, otherwise relatedTarget is null when clicking on this div
          data-test-subj="comboBoxInput"
        >
          {!singleSelection || !searchValue ? pills : null}
          {placeholderMessage}
          <AutosizeInput
            role="textbox"
            aria-controls={isListOpen ? rootId('listbox') : null}
            aria-activedescendant={focusedOptionId}
            id={id}
            style={{fontSize: 14}}
            className="softComboBox__input"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={(e) => onChange(e.target.value)}
            value={searchValue}
            ref={autoSizeInputRef}
            inputRef={inputRef}
            disabled={isDisabled}
            data-test-subj="comboBoxSearchInput"
          />
          {removeOptionMessage}
        </div>
      </SoftFormControlLayout>
    );
  }
}

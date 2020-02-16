import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {List} from 'react-virtualized';

import {SoftCode} from '../../Code';
import {SoftFlexGroup, SoftFlexItem} from '../../Flex';
import {SoftHighlight} from '../../Highlight';
import {SoftPanel} from '../../Panel';
import {SoftText} from '../../Text';
import {SoftLoadingSpinner} from '../../Loading';
import {ComboBoxTitle} from './SoftComboBoxTitle';
import {SoftI18n} from '../../I18n';
import {SoftFilterSelectItem} from '../../FilterGroup';

const positionToClassNameMap = {
  top: 'softComboBoxOptionsList--top',
  bottom: 'softComboBoxOptionsList--bottom',
};

const POSITIONS = Object.keys(positionToClassNameMap);

const OPTION_CONTENT_CLASSNAME = 'softComboBoxOption__content';

export class ComboBoxOptionsList extends Component<{
  options?: any[],
  isLoading?: boolean,
  selectedOptions?: any[],
  onCreateOption?: () => any,
  searchValue?: string,
  matchingOptions?: any[],
  optionRef?: any,
  onOptionClick?: (param1?: any) => any,
  onOptionEnterKey?: (param1?: any) => any,
  areAllOptionsSelected?: boolean,
  getSelectedOptionForSearchValue?: (param?: any, param2?: any) => any,
  updatePosition?: () => any,
  position?: any,
  listRef?: (param: any) => any,
  renderOption?: (param1?: any, param2?: any, param3?: any) => any,
  width?: number,
  scrollToIndex?: number,
  onScroll?: () => any,
  rowHeight?: number,
  fullWidth?: boolean,
  activeOptionIndex?: number,
  rootId?: (param?: any) => any,
  'data-test-subj'?: any
}> {
  static propTypes = {
    options: PropTypes.array,
    isLoading: PropTypes.bool,
    selectedOptions: PropTypes.array,
    onCreateOption: PropTypes.func,
    searchValue: PropTypes.string,
    matchingOptions: PropTypes.array,
    optionRef: PropTypes.func,
    onOptionClick: PropTypes.func,
    onOptionEnterKey: PropTypes.func,
    areAllOptionsSelected: PropTypes.bool,
    getSelectedOptionForSearchValue: PropTypes.func,
    updatePosition: PropTypes.func.isRequired,
    position: PropTypes.oneOf(POSITIONS),
    listRef: PropTypes.func.isRequired,
    renderOption: PropTypes.func,
    width: PropTypes.number,
    scrollToIndex: PropTypes.number,
    onScroll: PropTypes.func,
    rowHeight: PropTypes.number,
    fullWidth: PropTypes.bool,
    activeOptionIndex: PropTypes.number,
    rootId: PropTypes.func.isRequired,
  }

  static defaultProps = {
    rowHeight: 27, // row height of default option renderer
    'data-test-subj': '',
  }

  updatePosition = () => {
    // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
    requestAnimationFrame(() => {
      // @ts-ignore
      this.props.updatePosition(this.list);
    });
  };
  private list: any;

  componentDidMount() {
    // Wait a frame, otherwise moving focus from one combo box to another will result in the class
    // being removed from the body.
    requestAnimationFrame(() => {
      document.body.classList.add('softBody-hasPortalContent');
    });
    this.updatePosition();
    window.addEventListener('resize', this.updatePosition);
  }

  componentDidUpdate(prevProps) {
    const {options, selectedOptions, searchValue} = prevProps;

    // We don't compare matchingOptions because that will result in a loop.
    if (
      searchValue !== this.props.searchValue
      || options !== this.props.options
      || selectedOptions !== this.props.selectedOptions
    ) {
      this.updatePosition();
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('softBody-hasPortalContent');
    window.removeEventListener('resize', this.updatePosition);
  }

  listRef = node => {
    this.props.listRef(node);
    this.list = node;
  }

  render() {
    const {
      options,
      isLoading,
      selectedOptions,
      onCreateOption,
      searchValue,
      matchingOptions,
      optionRef,
      onOptionClick,
      onOptionEnterKey, // eslint-disable-line no-unused-vars
      areAllOptionsSelected,
      getSelectedOptionForSearchValue,
      position,
      renderOption,
      listRef, // eslint-disable-line no-unused-vars
      updatePosition, // eslint-disable-line no-unused-vars
      width,
      scrollToIndex,
      onScroll,
      rowHeight,
      fullWidth,
      'data-test-subj': dataTestSubj,
      activeOptionIndex,
      rootId,
      ...rest
    } = this.props;

    let emptyStateContent;

    if (isLoading) {
      emptyStateContent = (
        <SoftFlexGroup gutterSize="s" justifyContent="center">
          <SoftFlexItem grow={false}>
            <SoftLoadingSpinner size="m"/>
          </SoftFlexItem>
          <SoftFlexItem grow={false}>
            <SoftI18n token="softComboBoxOptionsList.loadingOptions" default="Loading options"/>
          </SoftFlexItem>
        </SoftFlexGroup>
      );
    } else if (searchValue && matchingOptions.length === 0) {
      if (onCreateOption) {
        const selectedOptionForValue = getSelectedOptionForSearchValue(searchValue, selectedOptions);
        if (selectedOptionForValue) {
          // Disallow duplicate custom options.
          emptyStateContent = (
            <p>
              <SoftI18n
                token="softComboBoxOptionsList.alreadyAdded"
                default="{label} has already been added"
                values={{label: <strong>{selectedOptionForValue.label}</strong>}}
              />
            </p>
          );
        } else {
          emptyStateContent = (
            <p>
              <SoftI18n
                token="softComboBoxOptionsList.createCustomOption"
                default="Hit {key} to add {searchValue} as a custom option"
                values={{key: <SoftCode>ENTER</SoftCode>, searchValue: <strong>{searchValue}</strong>}}
              />
            </p>
          );
        }
      } else {
        emptyStateContent = (
          <p>
            <SoftI18n
              token="softComboBoxOptionsList.noMatchingOptions"
              default="{searchValue} doesn't match any options"
              values={{searchValue: <strong>{searchValue}</strong>}}
            />
          </p>
        );
      }
    } else if (!options.length) {
      emptyStateContent = (
        <p>
          <SoftI18n token="softComboBoxOptionsList.noAvailableOptions" default="There aren't any options available"/>
        </p>
      );
    } else if (areAllOptionsSelected) {
      emptyStateContent = (
        <p>
          <SoftI18n token="softComboBoxOptionsList.allOptionsSelected" default="You've selected all available options"/>
        </p>
      );
    }

    const emptyState = emptyStateContent ? (
      <SoftText size="xs" className="softComboBoxOptionsList__empty">
        {emptyStateContent}
      </SoftText>
    ) : undefined;

    const numVisibleOptions = matchingOptions.length < 7 ? matchingOptions.length : 7;
    const height = numVisibleOptions * rowHeight;

    const optionsList = (
      <List
        id={rootId('listbox')}
        role="listbox"
        width={width}
        height={height}
        rowCount={matchingOptions.length}
        rowHeight={rowHeight}
        scrollToIndex={scrollToIndex}
        onScroll={onScroll}
        rowRenderer={({key, index, style}) => {
          const option = matchingOptions[index];
          const {
            value, // eslint-disable-line no-unused-vars
            label,
            isGroupLabelOption,
            ...rest
          } = option;

          if (isGroupLabelOption) {
            return (
              <div key={key} style={style}>
                <ComboBoxTitle>
                  {label}
                </ComboBoxTitle>
              </div>
            );
          }

          return (
            <SoftFilterSelectItem
              style={style}
              key={option.label.toLowerCase()}
              onClick={() => onOptionClick(option)}
              // onEnterKey={onOptionEnterKey}
              ref={optionRef.bind(this, index)}
              isFocused={activeOptionIndex === index}
              id={rootId(`_option-${index}`)}
              title={label}
              showIcons={false}
              {...rest}
            >
              {renderOption ? renderOption(option, searchValue, OPTION_CONTENT_CLASSNAME) : (
                <SoftHighlight search={searchValue} className={OPTION_CONTENT_CLASSNAME}>{label}</SoftHighlight>
              )}
            </SoftFilterSelectItem>
          );
        }}
      />
    );

    const classes = classNames('softComboBoxOptionsList', positionToClassNameMap[position], {
      'softComboBoxOptionsList--fullWidth': fullWidth,
    });

    return (
      <SoftPanel
        paddingSize="none"
        className={classes}
        panelRef={this.listRef}
        data-test-subj={`comboBoxOptionsList ${dataTestSubj}`}
        {...rest}
      >
        <div className="softComboBoxOptionsList__rowWrap">
          {emptyState || optionsList}
        </div>
      </SoftPanel>
    );
  }
}

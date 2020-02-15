import React, {Component} from 'react';
import classNames from 'classnames';

const {List, AutoSizer} = require('react-virtualized');
import {htmlIdGenerator} from '../../../services';
import {SelectableListItem} from './SoftSelectableListItem';
// @ts-ignore
import {SoftHighlight} from '../../Highlight';

export class SelectableList extends Component<{
  className?: any,
  options?: any,
  searchValue?: any,
  onOptionClick?: any,
  renderOption?: any,
  height?: any,
  virtualizedProps?: any,
  rowHeight?: any,
  activeOptionIndex?: any,
  rootId?: any,
  showIcons?: any,
  singleSelection?: any,
  visibleOptions?: any,
  allowExclusions?: any,
  bordered?: any,
}> {
  static defaultProps = {
    rowHeight: 32,
    searchValue: '',
  };

  rootId = this.props.rootId || htmlIdGenerator();

  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      options,
      searchValue,
      onOptionClick,
      renderOption,
      height: forcedHeight,
      virtualizedProps,
      rowHeight,
      activeOptionIndex,
      rootId,
      showIcons,
      singleSelection,
      visibleOptions,
      allowExclusions,
      bordered,
      ...rest
    } = this.props;

    const optionArray = visibleOptions || options;

    const heightIsFull = forcedHeight === 'full';

    let calculatedHeight = (heightIsFull ? false : forcedHeight);
    let isOverflowing = false;

    // If calculatedHeight is still undefined, then calculate it
    if (calculatedHeight === undefined) {
      const maxVisibleOptions = 7;
      const numVisibleOptions = optionArray.length;
      const numVisibleMoreThanMax = optionArray.length > maxVisibleOptions;

      if (numVisibleMoreThanMax) {
        // Show only half of the last one to indicate there's more to scroll to
        calculatedHeight = (maxVisibleOptions - 0.5) * rowHeight;
        isOverflowing = true;
      } else {
        calculatedHeight = numVisibleOptions * rowHeight;
      }
    }

    const classes = classNames(
      'softSelectableList',
      {
        'softSelectableList-fullHeight': heightIsFull,
        'softSelectableList-bordered': bordered,
        'softSelectableList-overflowing': heightIsFull || isOverflowing,
      },
      className
    );

    return (
      <div className={classes} {...rest}>
        <AutoSizer disableHeight={!heightIsFull}>
          {({width, height}) => (
            <List
              id={this.rootId('listbox')}
              role="listbox"
              width={width}
              height={calculatedHeight || height}
              rowCount={optionArray.length}
              rowHeight={rowHeight}
              scrollToIndex={activeOptionIndex}
              {...virtualizedProps}
              rowRenderer={({key, index, style}) => {
                const option = optionArray[index];
                const {
                  label,
                  isGroupLabel,
                  checked,
                  disabled,
                  prepend,
                  append,
                  ref,
                  ...optionRest
                } = option;
                if (isGroupLabel) {
                  return (
                    <div
                      className="softSelectableList__groupLabel"
                      key={key}
                      style={style}
                      {...optionRest}>
                      {prepend}
                      {label}
                      {append}
                    </div>
                  );
                }
                return (
                  <SelectableListItem
                    id={this.rootId(`_option-${index}`)}
                    style={style}
                    key={option.label.toLowerCase()}
                    onClick={() => this.onAddOrRemoveOption(option)}
                    ref={ref ? ref.bind(null, index) : undefined}
                    isFocused={activeOptionIndex === index}
                    title={label}
                    showIcons={showIcons}
                    checked={checked}
                    disabled={disabled}
                    prepend={prepend}
                    append={append}
                    {...optionRest}>
                    {renderOption ? (
                      renderOption(option, searchValue)
                    ) : (
                      <SoftHighlight search={searchValue}>{label}</SoftHighlight>
                    )}
                  </SelectableListItem>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    );
  }

  onAddOrRemoveOption = (option) => {
    if (option.disabled) {
      return;
    }

    const {allowExclusions} = this.props;

    if (option.checked === 'on' && allowExclusions) {
      this.onExcludeOption(option);
    } else if (option.checked === 'on' || option.checked === 'off') {
      this.onRemoveOption(option);
    } else {
      this.onAddOption(option);
    }
  };

  onAddOption = (addedOption) => {
    const {onOptionClick, options, singleSelection} = this.props;

    const updatedOptions = options.map(option => {
      // if singleSelection is enabled, uncheck any selected option(s)
      const updatedOption = {...option};
      if (singleSelection) {
        delete updatedOption.checked;
      }

      // if this is the now-selected option, check it
      if (option === addedOption) {
        updatedOption.checked = 'on';
      }

      return updatedOption;
    });

    onOptionClick(updatedOptions);
  };

  onRemoveOption = (removedOption) => {
    const {onOptionClick, singleSelection, options} = this.props;

    const updatedOptions = options.map(option => {
      const updatedOption = {...option};

      if (option === removedOption && singleSelection !== 'always') {
        delete updatedOption.checked;
      }

      return updatedOption;
    });

    onOptionClick(updatedOptions);
  };
  onExcludeOption = (excludedOption) => {
    const {onOptionClick, options} = this.props;
    excludedOption.checked = 'off';

    const updatedOptions = options.map(option => {
      const updatedOption = {...option};

      if (option === excludedOption) {
        updatedOption.checked = 'off';
      }

      return updatedOption;
    });

    onOptionClick(updatedOptions);
  };
}

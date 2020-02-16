import React, {Component} from 'react';
import classNames from 'classnames';
import {List} from 'react-virtualized';

import {Code} from '../../Code';
import {FlexGroup, FlexItem} from '../../Flex';
import {Highlight} from '../../Highlight';
import {Panel} from '../../Panel';
import {Text} from '../../Text';
import {Loading} from '../../Loading';
import {ComboBoxTitle} from './ComboBoxTitle';
import {I18n} from '../../I18n';
import {FilterSelectItem} from '../../FilterGroup';

const positionToClassNameMap = {
    top: 'c-combo-box-options-list--top',
    bottom: 'c-combo-box-options-list--bottom',
};
const OPTION_CONTENT_CLASSNAME = 'c-combo-box-option__content';

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
            document.body.classList.add('h-body-hasPortalContent');
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
        document.body.classList.remove('h-body-hasPortalContent');
        window.removeEventListener('resize', this.updatePosition);
    }

    listRef = node => {
        // @ts-ignore
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
                <FlexGroup gutterSize="s" justifyContent="center">
                    <FlexItem grow={false}>
                        <Loading size="m"/>
                    </FlexItem>
                    <FlexItem grow={false}>
                        <I18n token="ComboBoxOptionsList.loadingOptions" default="Loading options"/>
                    </FlexItem>
                </FlexGroup>
            );
        } else {
            // @ts-ignore
            if (searchValue && matchingOptions.length === 0) {
                if (onCreateOption) {
                    // @ts-ignore
                    const selectedOptionForValue = getSelectedOptionForSearchValue(searchValue, selectedOptions);
                    if (selectedOptionForValue) {
                        // Disallow duplicate custom options.
                        emptyStateContent = (
                            <p>
                                <I18n
                                    token="ComboBoxOptionsList.alreadyAdded"
                                    default="{label} has already been added"
                                    values={{label: <strong>{selectedOptionForValue.label}</strong>}}
                                />
                            </p>
                        );
                    } else {
                        emptyStateContent = (
                            <p>
                                <I18n
                                    token="ComboBoxOptionsList.createCustomOption"
                                    default="Hit {key} to add {searchValue} as a custom option"
                                    values={{key: <Code>ENTER</Code>, searchValue: <strong>{searchValue}</strong>}}
                                />
                            </p>
                        );
                    }
                } else {
                    emptyStateContent = (
                        <p>
                            <I18n
                                token="ComboBoxOptionsList.noMatchingOptions"
                                default="{searchValue} doesn't match any options"
                                values={{searchValue: <strong>{searchValue}</strong>}}
                            />
                        </p>
                    );
                }
            } else {
                // @ts-ignore
                if (!options.length) {
                    emptyStateContent = (
                        <p>
                            <I18n token="ComboBoxOptionsList.noAvailableOptions" default="There aren't any options available"/>
                        </p>
                    );
                } else if (areAllOptionsSelected) {
                    emptyStateContent = (
                        <p>
                            <I18n token="c-combo-box-options-list.allOptionsSelected" default="You've selected all available options"/>
                        </p>
                    );
                }
            }
        }

        const emptyState = emptyStateContent ? (
            <Text size="s" className="c-combo-box-options-list__empty">
                {emptyStateContent}
            </Text>
        ) : undefined;

        // @ts-ignore
        const numVisibleOptions = matchingOptions.length < 7 ? matchingOptions.length : 7;
        // @ts-ignore
        const height = numVisibleOptions * rowHeight;

        const optionsList = (
            <List
                // @ts-ignore
                id={rootId('listbox')}
                role="listbox"
                width={width}
                height={height}
                // @ts-ignore
                rowCount={matchingOptions.length}
                rowHeight={rowHeight}
                scrollToIndex={scrollToIndex}
                onScroll={onScroll}
                rowRenderer={({key, index, style}) => {
                    // @ts-ignore
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
                        <FilterSelectItem
                            style={style}
                            key={option.label.toLowerCase()}
                            // @ts-ignore
                            onClick={() => onOptionClick(option)}
                            // onEnterKey={onOptionEnterKey}
                            ref={optionRef.bind(this, index)}
                            isFocused={activeOptionIndex === index}
                            // @ts-ignore
                            id={rootId(`_option-${index}`)}
                            title={label}
                            showIcons={false}
                            {...rest}
                        >
                            {renderOption ? renderOption(option, searchValue, OPTION_CONTENT_CLASSNAME) : (
                                <Highlight search={searchValue} className={OPTION_CONTENT_CLASSNAME}>{label}</Highlight>
                            )}
                        </FilterSelectItem>
                    );
                }}
            />
        );

        const classes = classNames('c-combo-box-options-list', positionToClassNameMap[position], {
            'c-combo-box-options-list--fullWidth': fullWidth,
        });

        return (
            <Panel
                paddingSize="none"
                className={classes}
                panelRef={this.listRef}
                data-test-subj={`comboBoxOptionsList ${dataTestSubj}`}
                {...rest}
            >
                <div className="c-combo-box-options-list__rowWrap">
                    {emptyState || optionsList}
                </div>
            </Panel>
        );
    }
}

import React, {
    Component,
    createRef,
    Fragment
} from 'react';
import classNames from 'classnames';
import {SelectableSearch} from './selectable_search';
import {SelectableMessage} from './selectable_message';
import {SelectableList} from './selectable_list';
import {Loading} from '../Loading';
import {getMatchingOptions} from './matching_options';
import {comboBoxKeyCodes} from '../../services';
import {TAB} from '../../interfaces/enum';
import {I18n} from '../I18n';

export class Selectable extends Component<{
    id?: any,
    children?: any,
    className?: any,
    options?: any,
    onChange?: any,
    searchable?: any,
    searchProps?: any,
    singleSelection?: any,
    isLoading?: any,
    listProps?: any,
    renderOption?: any,
    height?: any,
    allowExclusions?: any,
    style?: any,
    onKeyDown?: any
}, {
    activeOptionIndex: any,
    searchValue: any,
    visibleOptions: any,
    onKeyDown: any
}> {
    static defaultProps = {
        options: [],
        singleSelection: false,
    };
    private optionsListRef: React.RefObject<any>;
    state = {
        activeOptionIndex: null,
        searchValue: null,
        visibleOptions: null,
        onKeyDown: null
    };

    constructor(props) {
        super(props);
        this.optionsListRef = createRef();

        const {options, singleSelection} = props;

        const initialSearchValue = '';

        // @ts-ignore
        const visibleOptions = getMatchingOptions(options, initialSearchValue);

        // ensure that the currently selected single option is active if it is in the visibleOptions
        const selectedOptions = options.filter(option => option.checked);
        let activeOptionIndex;
        if (singleSelection && selectedOptions.length === 1) {
            // @ts-ignore
            if (visibleOptions.includes(selectedOptions[0])) {
                // @ts-ignore
                activeOptionIndex = visibleOptions.indexOf(selectedOptions[0]);
            }
        }

        this.state = {
            activeOptionIndex,
            // @ts-ignore
            searchValue: initialSearchValue,
            // @ts-ignore
            visibleOptions,
            onKeyDown: null
        };
    }

    hasActiveOption = () => {
        return this.state.activeOptionIndex != null;
    };

    onKeyDown = (e) => {
        const optionsList = this.optionsListRef.current;

        switch (e.keyCode) {
            case comboBoxKeyCodes.UP:
                e.preventDefault();
                e.stopPropagation();
                this.incrementActiveOptionIndex(-1);
                break;

            case comboBoxKeyCodes.DOWN:
                e.preventDefault();
                e.stopPropagation();
                this.incrementActiveOptionIndex(1);
                break;

            case comboBoxKeyCodes.ENTER:
                e.stopPropagation();
                if (this.state.activeOptionIndex != null && optionsList) {
                    optionsList.onAddOrRemoveOption(
                        // @ts-ignore
                        this.state.visibleOptions[this.state.activeOptionIndex]
                    );
                }
                break;

            case TAB:
                // Disallow tabbing when the user is navigating the options.
                // TODO: Can we force the tab to the next sibling element?
                if (this.hasActiveOption()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;

            default:
                if (this.props.onKeyDown) {
                    this.props.onKeyDown(e);
                }
                this.clearActiveOption();
        }
    };

    incrementActiveOptionIndex = (amount) => {
        // If there are no options available, do nothing.
        // @ts-ignore
        if (!this.state.visibleOptions.length) {
            return;
        }

        // @ts-ignore
        this.setState(({activeOptionIndex, visibleOptions}) => {
            let nextActiveOptionIndex;

            if (activeOptionIndex == null) {
                // If this is the beginning of the user's keyboard navigation of the menu, then we'll focus
                // either the first or last item.
                nextActiveOptionIndex = amount < 0 ? visibleOptions.length - 1 : 0;
            } else {
                nextActiveOptionIndex = activeOptionIndex + amount;

                if (nextActiveOptionIndex < 0) {
                    nextActiveOptionIndex = visibleOptions.length - 1;
                } else if (nextActiveOptionIndex === visibleOptions.length) {
                    nextActiveOptionIndex = 0;
                }
            }

            // Group titles are included in option list but are not selectable
            // Skip group title options
            const direction = amount > 0 ? 1 : -1;
            while (visibleOptions[nextActiveOptionIndex].isGroupLabel) {
                nextActiveOptionIndex = nextActiveOptionIndex + direction;

                if (nextActiveOptionIndex < 0) {
                    nextActiveOptionIndex = visibleOptions.length - 1;
                } else if (nextActiveOptionIndex === visibleOptions.length) {
                    nextActiveOptionIndex = 0;
                }
            }

            return {activeOptionIndex: nextActiveOptionIndex};
        });
    };

    clearActiveOption = () => {
        this.setState({
            activeOptionIndex: undefined,
        });
    };

    onSearchChange = (visibleOptions, searchValue) => {
        this.setState({
            visibleOptions,
            searchValue,
        });
    };

    onContainerBlur = () => {
        this.clearActiveOption();
    };

    onOptionClick = (options) => {
        this.setState((state: any) => ({
            visibleOptions: getMatchingOptions(options, state.searchValue),
        }));
        if (this.props.onChange) {
            this.props.onChange(options);
        }
    };

    render() {
        const {
            id,
            children,
            className,
            options,
            onChange,
            searchable,
            searchProps,
            singleSelection,
            isLoading,
            listProps,
            renderOption,
            height,
            allowExclusions,
            ...rest
        } = this.props;

        const {searchValue, visibleOptions, activeOptionIndex} = this.state;

        let messageContent;

        if (isLoading) {
            messageContent = (
                <Fragment>
                    <Loading size="m" mono/>
                    <br/>
                    <p>
                        <I18n
                            token="euiSelectable.loadingOptions"
                            default="Loading options"
                        />
                    </p>
                </Fragment>
            );
        } else {
            // @ts-ignore
            if (searchValue && visibleOptions.length === 0) {
                messageContent = (
                    <p>
                        <I18n
                            token="euiSelectable.noMatchingOptions"
                            default="{searchValue} doesn't match any options"
                            values={{searchValue: <strong>{searchValue}</strong>}}
                        />
                    </p>
                );
            } else if (!options.length) {
                messageContent = (
                    <p>
                        <I18n
                            token="euiSelectable.noAvailableOptions"
                            default="No options available"
                        />
                    </p>
                );
            }
        }

        const classes = classNames(
            'euiSelectable',
            {
                'euiSelectable-fullHeight': height === 'full',
            },
            className
        );

        const search = searchable ? (
            <SelectableSearch
                key="listSearch"
                options={options}
                onChange={this.onSearchChange}
                {...searchProps}
            />
        ) : (
            undefined
        );

        const list = messageContent ? (
            <SelectableMessage key="listMessage">
                {messageContent}
            </SelectableMessage>
        ) : (
            <SelectableList
                key="list"
                options={options}
                visibleOptions={visibleOptions}
                searchValue={searchValue}
                activeOptionIndex={activeOptionIndex}
                onOptionClick={this.onOptionClick}
                singleSelection={singleSelection}
                ref={this.optionsListRef}
                renderOption={renderOption}
                height={height}
                allowExclusions={allowExclusions}
                {...listProps}
            />
        );

        return (
            <div
                className={classes}
                onKeyDown={this.onKeyDown}
                onBlur={this.onContainerBlur}
                {...rest}>
                {children && children(list, search)}
            </div>
        );
    }
}

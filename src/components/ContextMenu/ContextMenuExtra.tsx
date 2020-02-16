import React, {
    Component,
} from 'react';
import classNames from 'classnames';
import {ContextMenuExtraPanel} from './ContextMenuExtraPanel';
import {ContextMenuExtraItem} from './ContextMenuExtraItem';

function mapIdsToPanels(panels) {
    const map = {};

    panels.forEach(panel => {
        map[panel.id] = panel;
    });

    return map;
}

function mapIdsToPreviousPanels(panels) {
    const idToPreviousPanelIdMap = {};

    panels.forEach(panel => {
        if (Array.isArray(panel.items)) {
            panel.items.forEach(item => {
                const isCloseable = item.panel !== undefined;
                if (isCloseable) {
                    idToPreviousPanelIdMap[item.panel] = panel.id;
                }
            });
        }
    });

    return idToPreviousPanelIdMap;
}

function mapPanelItemsToPanels(panels) {
    const idAndItemIndexToPanelIdMap = {};

    panels.forEach(panel => {
        idAndItemIndexToPanelIdMap[panel.id] = {};

        if (panel.items) {
            panel.items.forEach((item, index) => {
                if (item.panel) {
                    idAndItemIndexToPanelIdMap[panel.id][index] = item.panel;
                }
            });
        }
    });

    return idAndItemIndexToPanelIdMap;
}

export class ContextMenuExtra extends Component<{
    panels?: any,
    className?: any,
    initialPanelId?: any,
}> {
    static defaultProps = {
        panels: [],
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const {panels} = nextProps;

        if (prevState.prevProps.panels !== panels) {
            return {
                prevProps: {panels},
                idToPanelMap: mapIdsToPanels(panels),
                idToPreviousPanelIdMap: mapIdsToPreviousPanels(panels),
                idAndItemIndexToPanelIdMap: mapPanelItemsToPanels(panels)
            };
        }

        return null;
    }

    state = {
        prevProps: {},
        idToPanelMap: {},
        idToPreviousPanelIdMap: {},
        idAndItemIndexToPanelIdMap: {},
        idToRenderedItemsMap: null,
        height: undefined,
        outgoingPanelId: undefined,
        incomingPanelId: this.props.initialPanelId,
        transitionDirection: undefined,
        isOutgoingPanelVisible: false,
        focusedItemIndex: undefined,
        isUsingKeyboardToNavigate: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            idToRenderedItemsMap: this.mapIdsToRenderedItems(this.props.panels),
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.panels !== this.props.panels) {
            this.setState({ // eslint-disable-line react/no-did-update-set-state
                idToRenderedItemsMap: this.mapIdsToRenderedItems(this.props.panels),
            });
        }
    }

    hasPreviousPanel = panelId => {
        const previousPanelId = this.state.idToPreviousPanelIdMap[panelId];
        return typeof previousPanelId !== 'undefined';
    };

    showPanel(panelId, direction) {
        this.setState({
            outgoingPanelId: this.state.incomingPanelId,
            incomingPanelId: panelId,
            transitionDirection: direction,
            isOutgoingPanelVisible: true,
        });
    }

    showNextPanel = itemIndex => {
        const nextPanelId = this.state.idAndItemIndexToPanelIdMap[this.state.incomingPanelId][itemIndex];
        if (nextPanelId) {
            if (this.state.isUsingKeyboardToNavigate) {
                this.setState({
                    focusedItemIndex: 0,
                });
            }

            this.showPanel(nextPanelId, 'next');
        }
    };

    showPreviousPanel = () => {
        // If there's a previous panel, then we can close the current panel to go back to it.
        if (this.hasPreviousPanel(this.state.incomingPanelId)) {
            const previousPanelId = this.state.idToPreviousPanelIdMap[this.state.incomingPanelId];

            // Set focus on the item which shows the panel we're leaving.
            const previousPanel = this.state.idToPanelMap[previousPanelId];
            const focusedItemIndex = previousPanel.items.findIndex(
                item => item.panel === this.state.incomingPanelId
            );

            if (focusedItemIndex !== -1) {
                this.setState({
                    focusedItemIndex,
                });
            }

            this.showPanel(previousPanelId, 'previous');
        }
    };

    onIncomingPanelHeightChange = height => {
        // @ts-ignore
        this.setState(({height: prevHeight}): any => {
            if (height === prevHeight) {
                return null;
            } else {
                return {height};
            }
        });
    };

    onOutGoingPanelTransitionComplete = () => {
        this.setState({
            isOutgoingPanelVisible: false,
        });
    };

    onUseKeyboardToNavigate = () => {
        if (!this.state.isUsingKeyboardToNavigate) {
            this.setState({
                isUsingKeyboardToNavigate: true,
            });
        }
    };

    mapIdsToRenderedItems = (panels): any => {
        const idToRenderedItemsMap = {};

        // Pre-rendering the items lets us check reference equality inside of SoftContextMenuPanel.
        panels.forEach(panel => {
            idToRenderedItemsMap[panel.id] = this.renderItems(panel.items);
        });

        return idToRenderedItemsMap;
    };

    renderItems(items = []): any {
        return items.map((item, index) => {
            const {
                panel,
                name,
                icon,
                onClick,
                toolTipTitle,
                toolTipContent,
                // @ts-ignore
                ...rest
            } = item;

            const onClickHandler = panel
                ? (event) => {
                    if (onClick && event) {
                        event.persist();
                    }
                    // This component is commonly wrapped in a SoftOutsideClickDetector, which means we'll
                    // need to wait for that logic to complete before re-rendering the DOM via showPanel.
                    window.requestAnimationFrame(() => {
                        if (onClick) {
                            // @ts-ignore
                            onClick(event);
                        }
                        this.showNextPanel(index);
                    });
                } : onClick;

            return (
                <ContextMenuExtraItem
                    key={name}
                    icon={icon}
                    onClick={onClickHandler}
                    hasPanel={Boolean(panel)}
                    toolTipTitle={toolTipTitle}
                    toolTipContent={toolTipContent}
                    {...rest}
                >
                    {name}
                </ContextMenuExtraItem>
            );
        });
    }

    renderPanel(panelId, transitionType) {
        const panel = this.state.idToPanelMap[panelId];

        if (!panel) {
            return;
        }

        // As above, we need to wait for SoftOutsideClickDetector to complete its logic before
        // re-rendering via showPanel.
        let onClose;
        if (this.hasPreviousPanel(panelId)) {
            onClose = () => window.requestAnimationFrame(this.showPreviousPanel);
        }

        return (
            <ContextMenuExtraPanel
                key={panelId}
                className="c-context-menu-extra__panel"
                onHeightChange={(transitionType === 'in') ? this.onIncomingPanelHeightChange : undefined}
                onTransitionComplete={(transitionType === 'out') ? this.onOutGoingPanelTransitionComplete : undefined}
                title={panel.title}
                onClose={onClose}
                transitionType={this.state.isOutgoingPanelVisible ? transitionType : undefined}
                transitionDirection={this.state.isOutgoingPanelVisible ? this.state.transitionDirection : undefined}
                hasFocus={transitionType === 'in'}
                // @ts-ignore
                items={this.state.idToRenderedItemsMap[panelId]}
                initialFocusedItemIndex={this.state.isUsingKeyboardToNavigate ? this.state.focusedItemIndex : undefined}
                onUseKeyboardToNavigate={this.onUseKeyboardToNavigate}
                showNextPanel={this.showNextPanel}
                showPreviousPanel={this.showPreviousPanel}
            >
                {panel.content}
            </ContextMenuExtraPanel>
        );
    }

    render() {
        const {
            panels, // eslint-disable-line no-unused-vars
            className,
            initialPanelId, // eslint-disable-line no-unused-vars
            ...rest
        } = this.props;

        const incomingPanel = this.renderPanel(this.state.incomingPanelId, 'in');
        let outgoingPanel;

        if (this.state.isOutgoingPanelVisible) {
            outgoingPanel = this.renderPanel(this.state.outgoingPanelId, 'out');
        }

        const width =
            this.state.idToPanelMap[this.state.incomingPanelId] &&
            this.state.idToPanelMap[this.state.incomingPanelId].width ?
                this.state.idToPanelMap[this.state.incomingPanelId].width : undefined;

        const classes = classNames('c-context-menu-extra', className);
        return (
            <div
                className={classes}
                style={{height: this.state.height, width: width}}
                {...rest}
            >
                {outgoingPanel}
                {incomingPanel}
            </div>
        );
    }
}

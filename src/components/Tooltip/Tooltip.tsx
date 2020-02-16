import React, {
    Component,
    cloneElement,
    Fragment,
} from 'react';
import classNames from 'classnames';
import {Portal} from '../Portal';
import {TooltipPopover} from './TooltipPopover';
import {findPopoverPosition} from '../../services';

import makeId from '../FormExtend/form_row/make_id';
import {ResizeObserver} from '../Observer/resize_observer';

const positionsToClassNameMap = {
    top: 'c-tooltip--top',
    right: 'c-tooltip--right',
    bottom: 'c-tooltip--bottom',
    left: 'c-tooltip--left',
};

export const POSITIONS = Object.keys(positionsToClassNameMap);

const delayToClassNameMap = {
    regular: null,
    long: 'c-tooltip--delayLong',
};

export const DELAY = Object.keys(delayToClassNameMap);

const DEFAULT_TOOLTIP_STYLES = {
    // position the tooltip content near the top-left
    // corner of the window so it can't create scrollbars
    // 50,50 because who knows what negative margins, padding, etc
    top: 50,
    left: 50,
    // just in case, avoid any potential flicker by hiding
    // the tooltip before it is positioned
    opacity: 0
};

export class ToolTip extends Component<{
    position?: any,
    id?: any,
    onMouseOut?: any,
    children?: any,
    className?: any,
    anchorClassName?: any,
    content?: any,
    title?: any,
    delay?: any,
    size?: any
}> {
    private _isMounted: boolean;
    private anchor: any;
    private popover: any;

    public state = {
        visible: false,
        hasFocus: false,
        calculatedPosition: this.props.position,
        toolTipStyles: DEFAULT_TOOLTIP_STYLES,
        arrowStyles: {},
        id: this.props.id || makeId(),
    };
    static propTypes: {};
    static defaultProps: {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // @ts-ignore
    componentDidUpdate(prevProps, prevState) {
        if (prevState.visible === false && this.state.visible) {
            requestAnimationFrame(this.testAnchor);
        }
    }

    testAnchor = () => {
        // when the tooltip is visible, this checks if the anchor is still part of document
        // this fixes when the react root is removed from the dom without unmounting
        // https://github.com/elastic/Soft/issues/1105
        if (document.body.contains(this.anchor) === false) {
            // the anchor is no longer part of `document`
            this.hideToolTip();
        } else {
            if (this.state.visible) {
                // if still visible, keep checking
                requestAnimationFrame(this.testAnchor);
            }
        }
    }

    setPopoverRef = ref => {
        this.popover = ref;

        // if the popover has been unmounted, clear
        // any previous knowledge about its size
        if (ref == null) {
            this.setState({
                toolTipStyles: DEFAULT_TOOLTIP_STYLES,
                arrowStyles: {}
            });
        }
    }

    showToolTip = () => {
        this.setState({visible: true});
    };

    positionToolTip = () => {
        const requestedPosition = this.props.position;

        // @ts-ignore
        const {position, left, top, arrow} = findPopoverPosition({
            anchor: this.anchor,
            popover: this.popover,
            position: requestedPosition,
            offset: 16, // offset popover 16px from the anchor
            arrowConfig: {
                arrowWidth: 12,
                arrowBuffer: 4
            }
        });

        // If encroaching the right edge of the window:
        // When `props.content` changes and is longer than `prevProps.content`, the tooltip width remains and
        // the resizeObserver callback will fire twice (once for vertical resize caused by text line wrapping,
        // once for a subsequent position correction) and cause a flash rerender and reposition.
        // To prevent this, we can orient from the right so that text line wrapping does not occur, negating
        // the second resizeObserver callback call.
        const windowWidth = document.documentElement.clientWidth || window.innerWidth;
        const useRightValue = (windowWidth / 2) < left;

        const toolTipStyles = {
            top,
            left: useRightValue ? 'auto' : left,
            right: useRightValue ? (windowWidth - left - this.popover.offsetWidth) : 'auto',
        };

        this.setState({
            visible: true,
            calculatedPosition: position,
            toolTipStyles,
            arrowStyles: arrow,
        });
    };

    hideToolTip = () => {
        if (this._isMounted) {
            this.setState({visible: false});
        }
    };

    onFocus = () => {
        this.setState({
            hasFocus: true,
        });
        this.showToolTip();
    };

    onBlur = () => {
        this.setState({
            hasFocus: false,
        });
        this.hideToolTip();
    };

    onMouseOut = (e) => {
        // Prevent mousing over children from hiding the tooltip by testing for whether the mouse has
        // left the anchor for a non-child.
        if (this.anchor === e.relatedTarget || !this.anchor.contains(e.relatedTarget)) {
            if (!this.state.hasFocus) {
                this.hideToolTip();
            }
        }

        if (this.props.onMouseOut) {
            this.props.onMouseOut();
        }
    };

    render() {
        const {
            children,
            className,
            anchorClassName,
            content,
            title,
            delay,
            ...rest
        } = this.props;

        const {arrowStyles, id, toolTipStyles, visible} = this.state;

        const classes = classNames(
            'c-tooltip',
            positionsToClassNameMap[this.state.calculatedPosition],
            delayToClassNameMap[delay],
            className
        );

        const anchorClasses = classNames(
            'c-tooltipAnchor',
            anchorClassName,
        );

        let tooltip;
        if (visible && (content || title)) {
            tooltip = (
                <Portal>
                    <TooltipPopover
                        className={classes}
                        style={toolTipStyles}
                        positionToolTip={this.positionToolTip}
                        popoverRef={this.setPopoverRef}
                        title={title}
                        id={id}
                        role="tooltip"
                        {...rest}
                    >
                        <div style={arrowStyles} className="c-tooltip__arrow"/>
                        <ResizeObserver
                            onResize={this.positionToolTip}
                        >
                            {resizeRef => <div ref={resizeRef}>{content}</div>}
                        </ResizeObserver>
                    </TooltipPopover>
                </Portal>
            );
        }

        const anchor = (
            <span
                ref={anchor => this.anchor = anchor}
                className={anchorClasses}
                onMouseOver={this.showToolTip}
                onMouseOut={this.onMouseOut}
            >
                {/**
                 * We apply onFocus, onBlur, etc to the children element because that's the element
                 * the user will be interacting with, as opposed to the enclosing anchor element.
                 * For example, if the inner component is a button and the user tabs to it, we want
                 * the enter key to trigger the button. That won't work if the enclosing anchor
                 * element has focus.
                 */}
                {cloneElement(children, {
                    onFocus: this.showToolTip,
                    onBlur: this.hideToolTip,
                    'aria-describedby': this.state.id,
                })}
            </span>
        );

        return (
            <Fragment>
                {anchor}
                {tooltip}
            </Fragment>
        );
    }
}

ToolTip.defaultProps = {
    position: 'top',
    delay: 'regular',
};

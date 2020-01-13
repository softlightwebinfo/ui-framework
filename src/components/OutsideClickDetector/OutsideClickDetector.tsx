import {Children, cloneElement, Component,} from 'react';
import {htmlIdGenerator} from "../../functions/generate";

export class OutsideClickDetector extends Component<{
    onMouseUp?: (param: any) => any,
    onMouseDown?: (param: any) => any,
    onTouchStart?: (param: any) => any,
    onTouchEnd?: (param: any) => any,
    children?: any,
    isDisabled?: boolean,
    onOutsideClick: (param: any) => any
}> {
    // We are working with the assumption that a click event is
    // equivalent to a sequential, compound press and release of
    // the pointing device (mouse, finger, stylus, etc.).
    // A click event's target can be imprecise, as the value will be
    // the closest common ancestor of the press (mousedown, touchstart)
    // and relase (mouseup, touchend) events (often <body />) if
    // the the target of each event differs.
    // We need the actual event targets to make the correct decisions
    // about user intention. So, consider the down/start and up/end
    // items below as the deconstruction of a click event.

    private capturedDownIds: any[];
    private id: any;

    constructor(...args) {
        // @ts-ignore
        super(...args);

        // the id is used to identify which SoftOutsideClickDetector
        // is the source of a click event; as the click event bubbles
        // up and reaches the click detector's child component the
        // id value is stamped on the event. This id is inspected
        // in the document's click handler, and if the id doesn't
        // exist or doesn't match this detector's id, then trigger
        // the outsideClick callback.
        //
        // Taking this approach instead of checking if the event's
        // target element exists in this component's DOM sub-tree is
        // necessary for handling clicks originating from children
        // rendered through React's portals (SoftPortal). The id tracking
        // works because React guarantees the event bubbles through the
        // virtual DOM and executes SoftClickDetector's onClick handler,
        // stamping the id even though the event originates outside
        // this component's reified DOM tree.
        this.id = htmlIdGenerator()();

        this.capturedDownIds = [];
    }

    onClickOutside = event => {
        const {
            isDisabled,
            onOutsideClick,
        } = this.props;

        if (isDisabled) {
            this.capturedDownIds = [];
            return;
        }

        if (
            (event.softGeneratedBy && event.softGeneratedBy.includes(this.id))
            || this.capturedDownIds.includes(this.id)
        ) {
            this.capturedDownIds = [];
            return;
        }

        this.capturedDownIds = [];
        return onOutsideClick(event);
    };

    componentDidMount() {
        document.addEventListener('mouseup', this.onClickOutside);
        document.addEventListener('touchend', this.onClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onClickOutside);
        document.removeEventListener('touchend', this.onClickOutside);
    }

    onChildClick = (event, cb) => {
        // to support nested click detectors, build an array
        // of detector ids that have been encountered
        if (event.nativeEvent.hasOwnProperty('softGeneratedBy')) {
            event.nativeEvent.softGeneratedBy.push(this.id);
        } else {
            event.nativeEvent.softGeneratedBy = [this.id];
        }
        if (cb) cb(event);
    }

    onChildMouseDown = event => {
        this.onChildClick(event, e => {
            this.capturedDownIds = e.nativeEvent.softGeneratedBy;
            if (this.props.onMouseDown) this.props.onMouseDown(e);
            if (this.props.onTouchStart) this.props.onTouchStart(e);
        });
    };

    onChildMouseUp = event => {
        this.onChildClick(event, e => {
            if (this.props.onMouseUp) this.props.onMouseUp(e);
            if (this.props.onTouchEnd) this.props.onTouchEnd(e);
        });
    };

    render(): any {
        const props = ({
            ...this.props.children.props, ...{
                onMouseDown: this.onChildMouseDown,
                onTouchStart: this.onChildMouseDown,
                onMouseUp: this.onChildMouseUp,
                onTouchEnd: this.onChildMouseUp,
            }
        });

        const child = Children.only(this.props.children);
        return cloneElement(child, props);
    }
}

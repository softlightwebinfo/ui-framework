import {Observer} from '../Observer';

class ResizeObserver extends Observer {
    private hasResizeObserver: any;

    constructor(...args) {
        super(...args);
        this.name = 'SoftResizeObserver';
        // Only Chrome and Opera support the `ResizeObserver` API at the time of writing
        // @ts-ignore
        this.hasResizeObserver = typeof ResizeObserver !== 'undefined';
    }

    onResize = () => {
        if (this.childNode != null) {
            // Eventually use `clientRect` on the `entries[]` returned natively
            // @ts-ignore
            const {height, width} = this.childNode.getBoundingClientRect();
            // @ts-ignore
            this.props.onResize({
                height,
                width
            });
        }
    }

    // @ts-ignore
    beginObserve = () => {
        let observerOptions;
        if (this.hasResizeObserver) {
            // @ts-ignore
            this.observer = new ResizeObserver(this.onResize);
        } else {
            // MutationObserver fallback
            observerOptions = {     // [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit)
                attributes: true,     // Account for style changes from `className` or `style`
                characterData: true,  // Account for text content size differences
                childList: true,      // Account for adding/removing child nodes
                subtree: true         // Account for deep child nodes
            };
            this.observer = new MutationObserver(this.onResize);
            requestAnimationFrame(this.onResize); // Mimic ResizeObserver behavior of triggering a resize event on init
        }
        this.observer.observe(this.childNode, observerOptions);
    }
}

export {ResizeObserver};

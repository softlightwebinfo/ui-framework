import {Observer} from '../Observer';

class MutationObserver extends Observer {
    // @ts-ignore
    private name: string;
    private observer: any;
    private childNode: any;
    static propTypes: {};

    constructor(...args) {
        super(...args);
        this.name = 'MutationObserver';
    }

    // @ts-ignore
    beginObserve = (): void => {
        // @ts-ignore
        this.observer = new MutationObserver(this.props.onMutation);
        this.observer.observe(this.childNode, this.props.observerOptions);
    }
}

export {MutationObserver};

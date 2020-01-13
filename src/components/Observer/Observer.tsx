import {Component} from 'react';

class Observer extends Component<{
    children?: any,
    observerOptions?: any,
    onMutation?: any,
    onResize?: any
}> {
    protected observer: any;
    protected childNode: null;
    protected name: string;
    static propTypes: {};

    constructor(...args) {
        // @ts-ignore
        super(...args);
        this.name = 'Observer';
        this.childNode = null;
        this.observer = null;
    }

    componentDidMount() {
        if (this.childNode == null) {
            throw new Error(`${this.name} did not receive a ref`);
        }
    }

    componentWillUnmount() {
        if (this.observer != null) {
            this.observer.disconnect();
        }
    }

    updateChildNode = ref => {
        if (this.childNode === ref) return; // node hasn't changed

        // if there's an existing observer disconnect it
        if (this.observer != null) {
            this.observer.disconnect();
            this.observer = null;
        }

        this.childNode = ref;

        if (this.childNode != null) {
            this.beginObserve();
        }
    }

    beginObserve = () => {
        throw new Error('Observer has no default observation method');
    }

    render() {
        return this.props.children(this.updateChildNode);
    }
}

export {Observer};

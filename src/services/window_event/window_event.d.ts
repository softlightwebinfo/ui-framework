import { Component } from 'react';
declare type EventNames = keyof WindowEventMap;
interface Props<Ev extends EventNames> {
    event: Ev;
    handler: (this: Window, ev: WindowEventMap[Ev]) => any;
}
export declare class EuiWindowEvent<E extends EventNames> extends Component<Props<E>> {
    private props;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props<E>): void;
    componentWillUnmount(): void;
    addEvent<Ev extends EventNames>({ event, handler }: Props<Ev>): void;
    removeEvent<Ev extends EventNames>({ event, handler }: Props<Ev>): void;
    render(): any;
}
export {};

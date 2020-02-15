import React, {Component, createContext, ReactChild} from 'react';

export interface RenderableValues {
    [key: string]: ReactChild;
}

export type Renderable<T> = ReactChild | ((values: T) => ReactChild);

export interface I18nShape {
    mapping?: {
        [key: string]: Renderable<object>;
    };
    mappingFunc?: (value: string) => string;
    formatNumber?: (x: number) => string;
    formatDateTime?: (x: Date) => string;
}

const I18nContext: React.Context<I18nShape> = createContext({});
const {Provider: I18nProvider, Consumer: I18nConsumer} = I18nContext;

class Context extends Component<{ i18n: {}, children: any }> {
    static defaultProps = {i18n: {}};

    render() {
        let {
            i18n,
            children,
        } = this.props;
        return <I18nProvider value={i18n}>{children}</I18nProvider>;
    }
}

export {Context, I18nConsumer};

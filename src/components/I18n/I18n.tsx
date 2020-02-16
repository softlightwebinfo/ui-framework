import React, {Fragment, ReactChild} from 'react';
import {I18nConsumer} from '../Context';
import {ExclusiveUnion} from '../common';
import {I18nShape, Renderable, RenderableValues} from '../Context/Context';
import {processStringToChildren} from './I18nUtil';

function throwError(): never {
    throw new Error('asdf');
}

function lookupToken<T extends RenderableValues,
    DEFAULT extends Renderable<T>,
    RESOLVED extends ResolvedType<DEFAULT>>(
    token: string,
    i18nMapping: I18nShape['mapping'],
    valueDefault: DEFAULT,
    i18nMappingFunc?: (token: string) => string,
    values?: I18nTokenShape<T, DEFAULT>['values']
): RESOLVED {
    let renderable = (i18nMapping && i18nMapping[token]) || valueDefault;
    if (typeof renderable === 'function') {
        if (values === undefined) {
            return throwError();
        } else {
            // @ts-ignore-next-line
            // TypeScript complains that `DEFAULT` doesn't have a call signature
            // but we verified `renderable` is a function
            return renderable(values);
        }
    } else if (values === undefined || typeof renderable !== 'string') {
        if (i18nMappingFunc && typeof valueDefault === 'string') {
            renderable = i18nMappingFunc(valueDefault);
        }
        // there's a hole in the typings here as there is no guarantee that i18nMappingFunc
        // returned the same type of the default value, but we need to keep that assumption
        return renderable as RESOLVED;
    }
    // @ts-ignore
    const children: any = processStringToChildren(renderable, values, i18nMappingFunc);
    if (typeof children === 'string') {
        // likewise, `processStringToChildren` returns a string or ReactChild[] depending on
        // the type of `values`, so we will make the assumption that the default value is correct.
        return children as RESOLVED;
    }

    const Component = () => {
        return <Fragment>{children}</Fragment>;
    };

    // same reasons as above, we can't promise the transforms match the default's type
    return React.createElement(Component, values) as RESOLVED;
}

type ResolvedType<T> = T extends (...args: any[]) => any ? ReturnType<T> : T;

interface I18nTokenShape<T, DEFAULT extends Renderable<T>> {
    token?: string;
    default?: DEFAULT;
    children?: (x: ResolvedType<DEFAULT>) => ReactChild;
    values?: T;
}

interface I18nTokensShape {
    tokens?: string[];
    defaults?: ReactChild[];
    children?: (x: ReactChild[]) => ReactChild;
}

type I18nProps<T, DEFAULT extends Renderable<T>> = ExclusiveUnion<I18nTokenShape<T, DEFAULT>,
    I18nTokensShape>;

function hasTokens(x: I18nProps<any, any>): x is I18nTokensShape {
    return x.tokens != null;
}

// Must use the generics <T extends {}>
// If instead typed with React.FunctionComponent there isn't feedback given back to the dev
// when using a `values` object with a renderer callback.
const I18n = <T extends {}, DEFAULT extends Renderable<T>>(
    props: I18nProps<T, DEFAULT>
) => (
    <I18nConsumer>
        {i18nConfig => {
            const {mapping, mappingFunc} = i18nConfig;
            if (hasTokens(props)) {
                // @ts-ignore
                return props.children(
                    // @ts-ignore
                    props.tokens.map((token, idx) =>
                        // @ts-ignore
                        lookupToken(token, mapping, props.defaults[idx], mappingFunc)
                    )
                );
            }

            const tokenValue = lookupToken(
                // @ts-ignore
                props.token,
                mapping,
                props.default,
                mappingFunc,
                props.values
            );
            if (props.children) {
                return props.children(tokenValue);
            } else {
                return tokenValue;
            }
        }}
    </I18nConsumer>
);

export {I18n};

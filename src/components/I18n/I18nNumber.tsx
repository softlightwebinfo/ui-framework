import React, {ReactChild, ReactElement} from 'react';
import {SoftI18nConsumer} from '../Context';
import {ExclusiveUnion} from '../common';

const defaultFormatter = new Intl.NumberFormat('en');

function defaultFormatNumber(value: number) {
  return defaultFormatter.format(value);
}

interface SoftI18nNumberValueShape {
  value: number;
  children?: (x: ReactChild) => ReactElement<any>;
}

interface SoftI18nNumberValuesShape {
  values: number[];
  children: (x: ReactChild[]) => ReactElement<any>;
}

type SoftI18nNumberProps = ExclusiveUnion<SoftI18nNumberValueShape,
  SoftI18nNumberValuesShape>;

function hasValues(x: SoftI18nNumberProps): x is SoftI18nNumberValuesShape {
  return x.values != null;
}

// @ts-ignore
const I18nNumber: SoftI18nNumberProps = props => (
  <SoftI18nConsumer>
    {i18nConfig => {
      const formatNumber = i18nConfig.formatNumber || defaultFormatNumber;

      if (hasValues(props)) {
        return props.children(props.values.map(value => formatNumber(value)));
      }

      const formattedValue = (formatNumber || defaultFormatNumber)(props.value);
      if (props.children) {
        return props.children(formattedValue);
      } else {
        return formattedValue;
      }
    }}
  </SoftI18nConsumer>
);

export {I18nNumber};

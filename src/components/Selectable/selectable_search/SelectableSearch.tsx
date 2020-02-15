import React, {Component} from 'react';
import classNames from 'classnames';
// @ts-ignore
import {Input} from '../../Input';
import {getMatchingOptions} from '../matching_options';

export class SelectableSearch extends Component<{
  onChange?: any,
  options?: any,
  searchValue?: any,
  defaultValue?: any,
  className?: any
}> {
  static defaultProps = {
    defaultValue: '',
  };
  state = {
    searchValue: null
  };

  constructor(props) {
    super(props);

    this.state = {
      searchValue: props.defaultValue,
    };
  }

  componentDidMount() {
    const {options} = this.props;
    const {searchValue} = this.state;
    const matchingOptions = getMatchingOptions(options, searchValue);
    this.passUpMatches(matchingOptions, searchValue);
  }

  onSearchChange = (value) => {
    this.setState({searchValue: value});
    const {options} = this.props;
    const matchingOptions = getMatchingOptions(options, value);
    this.passUpMatches(matchingOptions, value);
  };

  passUpMatches = (matches, searchValue) => {
    if (this.props.onChange) {
      this.props.onChange(matches, searchValue);
    }
  };

  render() {
    const {className, onChange, options, defaultValue, ...rest} = this.props;

    const classes = classNames('SelectableSearch', className);

    return (
      <Input
        className={classes}
        placeholder="Filter options"
        onChange={this.onSearchChange}
        incremental
        defaultValue={defaultValue}
        fullWidth
        {...rest}
      />
    );
  }
}

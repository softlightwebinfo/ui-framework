import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftButtonEmpty} from '../../ButtonEmpty';
import {SoftIcon} from '../../Icon';
import {SoftI18n} from '../../I18n';

export class FilePicker extends Component<{
  initialPromptText?: any,
  disabled?: boolean;
  onChange?: any;
  id?: any,
  name?: any,
  className?: any,
  compressed?: any,
  multiple?: boolean,
}> {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    /**
     * The content that appears in the dropzone if no file is attached
     */
    initialPromptText: PropTypes.node,
    /**
     * Use as a callback to access the HTML FileList API
     */
    onChange: PropTypes.func,
    /**
     * Reduces the size to a typical (compressed) input
     */
    compressed: PropTypes.bool,
  };

  static defaultProps = {
    initialPromptText: 'Select or drag and drop a file',
    compressed: false,
  };
  private fileInput: any;
  state = {
    promptText: this.props.initialPromptText,
    isHoveringDrop: false,
  };

  constructor(props) {
    super(props);
  }

  handleChange = (filesSelected) => {
    if (this.fileInput.files && this.fileInput.files.length > 1) {
      this.setState({promptText: `${this.fileInput.files.length} ${filesSelected}`});
    } else if (this.fileInput.files.length === 0) {
      this.setState({promptText: this.props.initialPromptText});
    } else {
      this.setState({promptText: this.fileInput.value.split('\\').pop()});
    }

    const {onChange} = this.props;

    if (onChange) {
      onChange(this.fileInput.files);
    }
  };

  removeFiles = e => {
    e.stopPropagation();
    e.preventDefault();
    this.fileInput.value = null;
    // @ts-ignore
    this.handleChange();
  };

  showDrop = () => {
    if (!this.props.disabled) {
      this.setState({isHoveringDrop: true});
    }
  };

  hideDrop = () => {
    this.setState({isHoveringDrop: false});
  };

  render() {
    return (
      <SoftI18n
        tokens={['softFilePicker.clearSelectedFiles', 'softFilePicker.filesSelected']}
        defaults={['Clear selected files', 'files selected']}
      >
        {([clearSelectedFiles, filesSelected]) => {
          const {
            id,
            name,
            initialPromptText,
            className,
            disabled,
            compressed,
            onChange, // eslint-disable-line no-unused-vars
            ...rest
          } = this.props;

          const classes = classNames(
            'softFilePicker',
            {
              'softFilePicker__showDrop': this.state.isHoveringDrop,
              'softFilePicker--compressed': compressed,
              'softFilePicker-hasFiles': this.state.promptText !== initialPromptText,
            },
            className
          );

          let clearButton;
          if (this.state.promptText !== initialPromptText) {
            if (compressed) {
              clearButton = (
                <button
                  type="button"
                  aria-label={clearSelectedFiles}
                  className="softFilePicker__clearButton"
                  onClick={this.removeFiles}
                >
                  <SoftIcon
                    className="softFilePicker__clearIcon"
                    type="cross"
                  />
                </button>
              );
            } else {
              clearButton = (
                <SoftButtonEmpty
                  aria-label={clearSelectedFiles}
                  className="softFilePicker__clearButton"
                  size="xs"
                  onClick={this.removeFiles}
                >
                  Remove
                </SoftButtonEmpty>
              );
            }
          } else {
            clearButton = null;
          }

          return (
            <div
              className={classes}
            >
              <div className="softFilePicker__wrap">
                <input
                  type="file"
                  id={id}
                  name={name}
                  className="softFilePicker__input"
                  onChange={() => this.handleChange(filesSelected)}
                  ref={(input) => {
                    this.fileInput = input;
                  }}
                  onDragOver={this.showDrop}
                  onDragLeave={this.hideDrop}
                  onDrop={this.hideDrop}
                  disabled={disabled}
                  {...rest}
                />
                <div className="softFilePicker__prompt">
                  <SoftIcon
                    className="softFilePicker__icon"
                    type="importAction"
                    size={compressed ? 'm' : 'l'}
                    aria-hidden="true"
                  />
                  <div
                    className="softFilePicker__promptText"
                  >
                    {this.state.promptText}
                  </div>
                  {clearButton}
                </div>
              </div>
            </div>
          );
        }}
      </SoftI18n>
    );
  }
}

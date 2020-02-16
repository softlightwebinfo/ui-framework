import React, {
    Component,
} from 'react';
import classNames from 'classnames';

import {Button} from '../../Button';
import {Icon} from '../../Icon';
import {I18n} from '../../I18n';

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
            <I18n
                tokens={['c-file-picker.clearSelectedFiles', 'c-file-picker.filesSelected']}
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
                        'c-file-picker',
                        {
                            'c-file-picker__showDrop': this.state.isHoveringDrop,
                            'c-file-picker--compressed': compressed,
                            'c-file-picker-hasFiles': this.state.promptText !== initialPromptText,
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
                                    className="c-file-picker__clearButton"
                                    onClick={this.removeFiles}
                                >
                                    <Icon
                                        className="c-file-picker__clearIcon"
                                        type="cross"
                                    />
                                </button>
                            );
                        } else {
                            clearButton = (
                                <Button
                                    empty
                                    aria-label={clearSelectedFiles}
                                    className="c-file-picker__clearButton"
                                    size="xs"
                                    onClick={this.removeFiles}
                                >
                                    Remove
                                </Button>
                            );
                        }
                    } else {
                        clearButton = null;
                    }

                    return (
                        <div
                            className={classes}
                        >
                            <div className="c-file-picker__wrap">
                                <input
                                    type="file"
                                    id={id}
                                    name={name}
                                    className="c-file-picker__input"
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
                                <div className="c-file-picker__prompt">
                                    <Icon
                                        className="c-file-picker__icon"
                                        type="importAction"
                                        size={compressed ? 'm' : 'l'}
                                        aria-hidden="true"
                                    />
                                    <div
                                        className="c-file-picker__promptText"
                                    >
                                        {this.state.promptText}
                                    </div>
                                    {clearButton}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </I18n>
        );
    }
}

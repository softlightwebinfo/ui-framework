import React, {
    Component,
} from 'react';
import classNames from 'classnames';
import hljs from 'highlight.js';
//
// import {
//   SoftCopy,
// } from '../Copy';
//
// import {
//   SoftButtonIcon,
// } from '../ButtonIcon';
//
// import {
//   SoftOverlayMask,
// } from '../OverlayMask';
//
// import {
//   SoftFocusTrap,
// } from '../FocusTrap';

import {keyCodes} from '../../services';
// import {SoftI18n} from '../I18n';

const fontSizeToClassNameMap = {
    s: 'c-code-block--fontSmall',
    m: 'c-code-block--fontMedium',
    l: 'c-code-block--fontLarge',
};

export const FONT_SIZES = Object.keys(fontSizeToClassNameMap);

const paddingSizeToClassNameMap = {
    none: '',
    s: 'c-code-block--paddingSmall',
    m: 'c-code-block--paddingMedium',
    l: 'c-code-block--paddingLarge',
};

export const PADDING_SIZES = Object.keys(paddingSizeToClassNameMap);

/**
 * This is the base component extended by SoftCode and SoftCodeBlock. These components
 * share the same propTypes definition with SoftCodeBlockImpl.
 */
export class CodeBlockImpl extends Component {
    static propTypes: any;
    static defaultProps: { transparentBackground: boolean; paddingSize: string; fontSize: string; isCopyable: boolean; };
    state: any = {
        isFullScreen: false,
    };
    private code: any;
    private codeFullScreen: any;

    constructor(props) {
        super(props);
    }

    highlight = () => {
        // @ts-ignore
        if (this.props.language) {
            hljs.highlightBlock(this.code);

            if (this.codeFullScreen) {
                hljs.highlightBlock(this.codeFullScreen);
            }
        }
    };

    onKeyDown = event => {
        if (event.keyCode === keyCodes.ESCAPE) {
            event.preventDefault();
            event.stopPropagation();
            this.closeFullScreen();
        }
    };

    toggleFullScreen = () => {
        this.setState((prevState: any) => ({
            isFullScreen: !prevState.isFullScreen,
        }));
    };

    closeFullScreen = () => {
        this.setState({
            isFullScreen: false,
        });
    };

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    render() {
        const {
            inline,
            children,
            className,
            fontSize,
            language,
            overflowHeight,
            paddingSize,
            transparentBackground,
            isCopyable,
            ...otherProps
        }: any = this.props;

        const classes = classNames(
            'c-code-block',
            fontSizeToClassNameMap[fontSize],
            paddingSizeToClassNameMap[paddingSize],
            {
                'c-code-block--transparentBackground': transparentBackground,
                'c-code-block--inline': inline,
                'c-code-block-isCopyable': isCopyable,
            },
            className
        );

        const codeClasses = classNames('c-code-block__code', language);

        const optionalStyles: any = {};

        if (overflowHeight) {
            optionalStyles.height = overflowHeight;
        }

        const codeSnippet = (
            <code
                ref={ref => {
                    this.code = ref;
                }}
                className={codeClasses}
                {...otherProps}
            >
                {children}
            </code>
        );

        const wrapperProps = {
            className: classes,
            style: optionalStyles
        };

        if (inline) {
            return (
                <span {...wrapperProps}>
          {codeSnippet}
        </span>
            );
        }

        let copyButton;

        // if (isCopyable) {
        //   copyButton = (
        //     <div className="c-code-block__copyButton">
        //       <SoftI18n token="c-code-block.copyButton" default="Copy">
        //         {copyButton => (
        //           <SoftCopy textToCopy={children}>
        //             {(copy) => (
        //               <SoftButtonIcon
        //                 size="s"
        //                 onClick={copy}
        //                 iconType="copy"
        //                 color="text"
        //                 aria-label={copyButton}
        //               />
        //             )}
        //           </SoftCopy>
        //         )}
        //       </SoftI18n>
        //     </div>
        //   );
        // }

        let fullScreenButton;

        // if (!inline && overflowHeight) {
        //   fullScreenButton = (
        //     <SoftI18n
        //       tokens={['c-code-block.fullscreenCollapse', 'c-code-block.fullscreenExpand']}
        //       defaults={['Collapse', 'Expand']}
        //     >
        //       {([fullscreenCollapse, fullscreenExpand]) => (
        //         <SoftButtonIcon
        //           className="c-code-block__fullScreenButton"
        //           size="s"
        //           onClick={this.toggleFullScreen}
        //           iconType={this.state.isFullScreen ? 'cross' : 'fullScreen'}
        //           color="text"
        //           aria-label={this.state.isFullScreen ? fullscreenCollapse : fullscreenExpand}
        //         />
        //       )}
        //     </SoftI18n>
        //   );
        // }

        let codeBlockControls;

        if (copyButton || fullScreenButton) {
            codeBlockControls = (
                <div className="c-code-block__controls">
                    {fullScreenButton}
                    {copyButton}
                </div>
            );
        }

        let fullScreenDisplay;

        // if (this.state.isFullScreen) {
        //   {/*
        //     Force fullscreen to use large font and padding.
        //   */
        //   }
        //   const fullScreenClasses = classNames(
        //     'c-code-block',
        //     fontSizeToClassNameMap[fontSize],
        //     'c-code-block-paddingLarge',
        //     'c-code-block-isFullScreen',
        //     className,
        //   );
        //
        //   fullScreenDisplay = (
        //     <SoftOverlayMask>
        //       <SoftFocusTrap clickOutsideDisables={true}>
        //         <div className={fullScreenClasses}>
        //           <pre className="c-code-block__pre">
        //             <code
        //               ref={ref => {
        //                 this.codeFullScreen = ref;
        //               }}
        //               className={codeClasses}
        //               tabIndex={0}
        //               onKeyDown={this.onKeyDown}
        //             >
        //               {children}
        //             </code>
        //           </pre>
        //
        //           {codeBlockControls}
        //         </div>
        //       </SoftFocusTrap>
        //     </SoftOverlayMask>
        //   );
        // }

        return (
            <div {...wrapperProps}>
                <pre className="c-code-block__pre">
                  {codeSnippet}
                </pre>

                {/*
          If the below fullScreen code renders, it actually attaches to the body because of
          SoftOverlayMask's React portal usage.
        */}
                {codeBlockControls}
                {fullScreenDisplay}
            </div>
        );
    }
}

CodeBlockImpl.defaultProps = {
    transparentBackground: false,
    paddingSize: 'l',
    fontSize: 's',
    isCopyable: false,
};

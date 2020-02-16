import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
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
  s: 'softCodeBlock--fontSmall',
  m: 'softCodeBlock--fontMedium',
  l: 'softCodeBlock--fontLarge',
};

export const FONT_SIZES = Object.keys(fontSizeToClassNameMap);

const paddingSizeToClassNameMap = {
  none: '',
  s: 'softCodeBlock--paddingSmall',
  m: 'softCodeBlock--paddingMedium',
  l: 'softCodeBlock--paddingLarge',
};

export const PADDING_SIZES = Object.keys(paddingSizeToClassNameMap);

/**
 * This is the base component extended by SoftCode and SoftCodeBlock. These components
 * share the same propTypes definition with SoftCodeBlockImpl.
 */
export class SoftCodeBlockImpl extends Component {
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
      'softCodeBlock',
      fontSizeToClassNameMap[fontSize],
      paddingSizeToClassNameMap[paddingSize],
      {
        'softCodeBlock--transparentBackground': transparentBackground,
        'softCodeBlock--inline': inline,
        'softCodeBlock-isCopyable': isCopyable,
      },
      className
    );

    const codeClasses = classNames('softCodeBlock__code', language);

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
    //     <div className="softCodeBlock__copyButton">
    //       <SoftI18n token="softCodeBlock.copyButton" default="Copy">
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
    //       tokens={['softCodeBlock.fullscreenCollapse', 'softCodeBlock.fullscreenExpand']}
    //       defaults={['Collapse', 'Expand']}
    //     >
    //       {([fullscreenCollapse, fullscreenExpand]) => (
    //         <SoftButtonIcon
    //           className="softCodeBlock__fullScreenButton"
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
        <div className="softCodeBlock__controls">
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
    //     'softCodeBlock',
    //     fontSizeToClassNameMap[fontSize],
    //     'softCodeBlock-paddingLarge',
    //     'softCodeBlock-isFullScreen',
    //     className,
    //   );
    //
    //   fullScreenDisplay = (
    //     <SoftOverlayMask>
    //       <SoftFocusTrap clickOutsideDisables={true}>
    //         <div className={fullScreenClasses}>
    //           <pre className="softCodeBlock__pre">
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
        <pre className="softCodeBlock__pre">
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

SoftCodeBlockImpl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  paddingSize: PropTypes.oneOf(PADDING_SIZES),

  /**
   * Sets the syntax highlighting for a specific language
   */
  language: PropTypes.string,
  overflowHeight: PropTypes.number,
  fontSize: PropTypes.oneOf(FONT_SIZES),
  transparentBackground: PropTypes.bool,

  /**
   * Displays the passed code in an inline format. Also removes any margins set.
   */
  inline: PropTypes.bool,

  /**
   * Displays an icon button to copy the code snippet to the clipboard.
   */
  isCopyable: PropTypes.bool,
};

SoftCodeBlockImpl.defaultProps = {
  transparentBackground: false,
  paddingSize: 'l',
  fontSize: 's',
  isCopyable: false,
};

import React, {
    Component,
} from 'react';
import classNames from 'classnames';

import {
    OverlayMask,
} from '../OverlayMask';

import {
    FocusTrap,
} from '../FocusTrap';

import {keyCodes} from '../../interfaces/enum';

const sizeToClassNameMap = {
    s: 'c-image--small',
    m: 'c-image--medium',
    l: 'c-image--large',
    xl: 'c-image--xlarge',
    fullWidth: 'c-image--fullWidth',
    original: '',
};

export const SIZES = Object.keys(sizeToClassNameMap);

const fullScreenIconColorMap = {
    light: 'ghost',
    dark: 'default',
};

export class Image extends Component<{
    className?: any,
    url?: any,
    size?: any,
    caption?: any,
    hasShadow?: any,
    allowFullScreen?: any,
    fullScreenIconColor?: any,
    alt?: any,
    styleImage?: any,
    style?: any
}> {
    state = {
        isFullScreen: false,
    };
    static defaultProps: { size: string; fullScreenIconColor: string };
    static propTypes: {};

    constructor(props) {
        super(props);
    }

    onKeyDown = event => {
        if (event.keyCode === keyCodes.ESCAPE) {
            event.preventDefault();
            event.stopPropagation();
            this.closeFullScreen();
        }
    };

    closeFullScreen = () => {
        this.setState({
            isFullScreen: false,
        });
    };

    openFullScreen = () => {
        this.setState({
            isFullScreen: true,
        });
    };

    render() {
        const {
            className,
            url,
            size,
            caption,
            hasShadow,
            allowFullScreen,
            fullScreenIconColor,
            alt,
            styleImage,
            ...rest
        } = this.props;

        const classes = classNames(
            'c-image',
            sizeToClassNameMap[size],
            {
                'c-image--hasShadow': hasShadow,
                'c-image--allowFullScreen': allowFullScreen,
            },
            className
        );

        let optionalCaption;
        if (caption) {
            optionalCaption = (
                <figcaption className="c-image__caption">
                    {caption}
                </figcaption>
            );
        }

        let optionalIcon;

        if (allowFullScreen) {
            optionalIcon = <i style={{color: fullScreenIconColorMap[fullScreenIconColor]}} className="c-image__icon icon icon-resize-full"/>;
        }

        let fullScreenDisplay;

        if (this.state.isFullScreen) {
            fullScreenDisplay = (
                <OverlayMask onClick={this.closeFullScreen}>
                    <FocusTrap clickOutsideDisables={true}>
                        <figure
                            className="c-imageFullScreen"
                            onClick={this.closeFullScreen}
                            tabIndex={0}
                            onKeyDown={this.onKeyDown}
                        >
                            <img src={url} className="c-imageFullScreen__img" alt={alt}/>
                            {optionalCaption}
                        </figure>
                    </FocusTrap>
                </OverlayMask>
            );
        }

        return (
            <figure
                className={classes}
                onClick={allowFullScreen ? this.openFullScreen : undefined}
                {...rest}
            >
                <img style={styleImage} src={url} className="c-image__img" alt={alt}/>
                {optionalCaption}

                {/*
          If the below fullScreen image renders, it actually attaches to the body because of
          SoftOverlayMask's React portal usage.
        */}
                {optionalIcon}
                {fullScreenDisplay}
            </figure>
        );
    }
}

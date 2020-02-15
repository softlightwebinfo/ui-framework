import React, {Component} from 'react';
import classNames from 'classnames';

export class TooltipPopover extends Component<{
  children?: any,
  title?: any,
  className?: any,
  positionToolTip?: any,
  popoverRef?: any,
  style?: object;
  id?: any;
  role?: any;
}> {
  updateDimensions = () => {
    requestAnimationFrame(() => {
      // Because of this delay, sometimes `positionToolTip` becomes unavailable.
      if (this.popover) {
        this.props.positionToolTip(this.popover.getBoundingClientRect());
      }
    });
  };

  setPopoverRef = (ref) => {
    this.popover = ref;
    if (this.props.popoverRef) {
      this.props.popoverRef(ref);
    }
  };
  private popover: any;

  componentDidMount() {
    document.body.classList.add('h-body-hasPortalContent');

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    document.body.classList.remove('h-body-hasPortalContent');
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const {
      children,
      title,
      className,
      positionToolTip,
      popoverRef,
      ...rest
    } = this.props;

    const classes = classNames('softToolTipPopover', className);

    let optionalTitle;
    if (title) {
      optionalTitle = <div className="softToolTip__title">{title}</div>;
    }

    return (
      <div className={classes} ref={this.setPopoverRef} {...rest}>
        {optionalTitle}
        {children}
      </div>
    );
  }
}

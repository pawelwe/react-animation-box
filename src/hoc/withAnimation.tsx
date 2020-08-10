import React, { Component } from 'react';
import styles from './withAnimation.scss';

interface Props {
  in: boolean;
}

interface State {
  show: boolean;
  mount: boolean;
}

export function withAnimation(WrappedComponent: any) {
  return class WithAnimation extends Component<Props, State> {
    public state = {
      show: true,
      mount: this.props.in,
    };

    wrapperRef: any = React.createRef();

    private unmountComp = (): void => {
      console.info('unmounted...');

      if (this.wrapperRef.current) {
        this.wrapperRef.current.removeEventListener(
          'animationend',
          this.unmountComp,
        );
      }

      this.setState({
        mount: false,
      });
    };

    componentDidUpdate(prevProps: any) {
      if (prevProps.in !== this.props.in) {
        if (!this.props.in) {
          console.info('unmounting...');

          if (this.wrapperRef.current) {
            this.wrapperRef.current.addEventListener(
              'animationend',
              this.unmountComp,
            );
          }

          this.setState({
            show: false,
          });
        } else {
          console.info('mounting...');
          this.setState({
            mount: true,
            show: true,
          });
        }
      }
    }

    public render() {
      return this.state.mount ? (
        <div
          ref={this.wrapperRef}
          className={this.state.show ? styles['fade-in'] : styles['fade-out']}
        >
          <WrappedComponent {...this.props} />
        </div>
      ) : null;
    }
  };
}

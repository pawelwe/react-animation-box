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
      mount: true,
    };

    wrapperRef: any = React.createRef();

    private unmountComp = (): void => {
      console.info('unmounted...');
      this.wrapperRef.current.removeEventListener(
        'animationend',
        this.unmountComp,
      );
      this.setState({
        mount: false,
      });
    };

    componentDidUpdate(prevProps: any) {
      if (prevProps.in !== this.props.in) {
        this.setState({
          show: !this.state.show,
        });

        if (!this.props.in) {
          console.info('unmounting...');
          this.wrapperRef.current.addEventListener(
            'animationend',
            this.unmountComp,
          );
        } else {
          console.info('mounting...');
          this.setState({
            mount: true,
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

import React, { Component } from 'react';
import styles from './withAnimation.scss';

interface StateProps {
  in: boolean;
}

export function withAnimation(WrappedComponent: any) {
  return class WithAnimation extends Component<StateProps> {
    state = {
      show: true,
      mount: true,
    };

    timeout: any;

    componentDidUpdate(prevProps: any) {
      if (prevProps.in !== this.props.in) {
        this.setState({
          show: !this.state.show,
        });

        if (!this.props.in) {
          this.timeout = setTimeout(() => {
            this.setState({
              mount: false,
            });
            clearTimeout(this.timeout);
          }, 400);
        } else {
          this.setState({
            mount: true,
          });
        }
      }
    }

    render() {
      return this.state.mount ? (
        <div
          className={this.state.show ? styles['fade-in'] : styles['fade-out']}
        >
          <WrappedComponent {...this.props} />
        </div>
      ) : null;
    }
  };
}

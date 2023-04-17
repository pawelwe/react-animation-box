import React, { Component } from "react";

interface StateProps {
  hasError: boolean;
}

class ErrorBoundary extends Component<any, StateProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong :(</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

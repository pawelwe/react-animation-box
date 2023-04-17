import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { AnimationTest } from "./components/AnimationTest/AnimationTest";
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AnimationTest />
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

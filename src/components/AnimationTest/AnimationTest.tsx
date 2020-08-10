import React, { useState } from 'react';

import { withAnimation } from '../../hoc/withAnimation';
import { Box } from '../Box/Box';
const ComponentWithAnimationTest = withAnimation(Box);

export const AnimationTest: React.FC = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  return (
    <div className="wrapper">
      <ComponentWithAnimationTest in={isHeaderVisible} />
      <button onClick={() => setHeaderVisibility(!isHeaderVisible)}>
        Toggle header
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import '../../styles/index.scss';

import { AnimationBox } from '../../hoc/AnimationBox';
import { Box } from '../Box/Box';

export const AnimationTest: React.FC = () => {
  const [isBox1Visible, setBox1Visibility] = useState(true);
  const [isBox2Visible, setBox2Visibility] = useState(false);

  return (
    <div className="container">
      <div>
        <AnimationBox in={isBox1Visible}>
          <Box>BOX 1</Box>
        </AnimationBox>
        <button onClick={() => setBox1Visibility(!isBox1Visible)}>
          Toggle Box 1
        </button>
      </div>
      <div>
        <AnimationBox in={isBox2Visible}>
          <Box>BOX 2</Box>
        </AnimationBox>
        <button onClick={() => setBox2Visibility(!isBox2Visible)}>
          Toggle Box 2
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import '../../styles/index.scss';

import { AnimationBox } from '../../hoc/AnimationBox';
import { Box } from '../Box/Box';

export const AnimationTest: React.FC = () => {
  const [isBox1Visible, setBox1Visibility] = useState(true);
  const [isBox2Visible, setBox2Visibility] = useState(false);
  const [isBox3Visible, setBox3Visibility] = useState(false);

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
        <AnimationBox in={isBox2Visible} timeouts={{ in: 1000, out: 700 }}>
          <Box>BOX 2</Box>
        </AnimationBox>
        <button onClick={() => setBox2Visibility(!isBox2Visible)}>
          Toggle Box 2
        </button>
      </div>
      <div>
        <AnimationBox in={isBox3Visible} timeouts={{ in: 3000, out: 2500 }}>
          <Box>BOX 3</Box>
        </AnimationBox>
        <button onClick={() => setBox3Visibility(!isBox3Visible)}>
          Toggle Box 3
        </button>
      </div>
    </div>
  );
};

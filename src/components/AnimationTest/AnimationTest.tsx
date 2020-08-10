import React, { useState } from 'react';
import '../../styles/index.scss';

import { withAnimation } from '../../hoc/withAnimation';
import { Box } from '../Box/Box';

const BoxWithText1 = () => {
  return <Box>BOX 1</Box>;
};

const BoxWithText2 = () => {
  return <Box>BOX 2</Box>;
};

const BoxWithAnimationTest1 = withAnimation(BoxWithText1);
const BoxWithAnimationTest2 = withAnimation(BoxWithText2);

export const AnimationTest: React.FC = () => {
  const [isBox1Visible, setBox1Visibility] = useState(true);
  const [isBox2Visible, setBox2Visibility] = useState(false);

  return (
    <div className="container">
      <div>
        <BoxWithAnimationTest1 in={isBox1Visible} />
        <button onClick={() => setBox1Visibility(!isBox1Visible)}>
          Toggle Box 1
        </button>
      </div>
      <div>
        <BoxWithAnimationTest2 in={isBox2Visible} />
        <button onClick={() => setBox2Visibility(!isBox2Visible)}>
          Toggle Box 2
        </button>
      </div>
    </div>
  );
};

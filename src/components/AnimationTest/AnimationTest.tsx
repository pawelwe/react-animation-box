import React, { useState } from "react";

import { AnimationBox } from "../../hoc/AnimationBox";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import "../../styles/index.scss";

export const AnimationTest: React.FC = () => {
  const [isBox1Visible, setBox1Visibility] = useState(true);
  const [isBox2Visible, setBox2Visibility] = useState(false);
  const [isBox3Visible, setBox3Visibility] = useState(false);

  return (
    <div className="container">
      <div className="box-wrapper">
        <div>
          <AnimationBox in={isBox1Visible}>
            <Box>BOX 1</Box>
          </AnimationBox>
          <Button
            text={isBox1Visible ? "Hide Box 1" : "Show Box 1"}
            handleClick={() => setBox1Visibility(!isBox1Visible)}
          />
        </div>
        <div>
          <AnimationBox in={isBox2Visible} timeouts={{ in: 1000, out: 700 }}>
            <Box>BOX 2</Box>
          </AnimationBox>
          <Button
            text={isBox2Visible ? "Hide Box 2" : "Show Box 2"}
            handleClick={() => setBox2Visibility(!isBox2Visible)}
          />
        </div>
        <div>
          <AnimationBox in={isBox3Visible} timeouts={{ in: 3000, out: 2500 }}>
            <Box>BOX 3</Box>
          </AnimationBox>
          <Button
            text={isBox3Visible ? "Hide Box 3" : "Show Box 3"}
            handleClick={() => setBox3Visibility(!isBox3Visible)}
          />
        </div>
      </div>
    </div>
  );
};

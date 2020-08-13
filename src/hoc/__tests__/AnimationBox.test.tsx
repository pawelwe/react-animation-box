import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AnimationBox, calculateAnimationDuration } from '../AnimationBox';
import styles from '../AnimationBox.scss';

describe('AnimationBox component', () => {
  it('should pass children', () => {
    const { getByTestId } = render(
      <AnimationBox in>
        <div data-testid="child-component">Child Component</div>
      </AnimationBox>,
    );
    const childComponent = getByTestId('child-component');

    expect(childComponent);
  });

  it('calculateAnimationDuration should return correct durations', () => {
    const durationIn = calculateAnimationDuration(true, { in: 200, out: 100 });
    const validInResult = { animationDuration: '200ms' };

    const durationOut = calculateAnimationDuration(false, {
      in: 200,
      out: 100,
    });
    const validOutResult = { animationDuration: '100ms' };

    expect(durationIn).toEqual(validInResult);
    expect(durationOut).toEqual(validOutResult);
  });

  it('should add correct animation in className', () => {
    const { getByTestId } = render(
      <AnimationBox in>
        <div>Child Component</div>
      </AnimationBox>,
    );
    const wrapper = getByTestId('animation-box');

    expect(wrapper).toHaveClass(styles['fade-in']);
  });
});

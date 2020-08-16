import React from 'react';
// @ts-ignore
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AnimationTest } from '../AnimationTest';

describe('Box component', () => {
  it('should have correct className', () => {
    const { container } = render(<AnimationTest />);

    expect(container.firstChild).toHaveClass('container');
  });

  it('should contain 3 box examples', () => {
    const { container } = render(<AnimationTest />);

    expect(container.querySelector('.box-wrapper').childNodes.length).toEqual(
      3,
    );
  });

  it('should contain 3 buttons', () => {
    const { container } = render(<AnimationTest />);

    expect(container.querySelectorAll('button').length).toBe(3);
  });
});

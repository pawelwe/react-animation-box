import React from 'react';
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

    expect(container.firstChild.childNodes.length).toEqual(3);
  });
});

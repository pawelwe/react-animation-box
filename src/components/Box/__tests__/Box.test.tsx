import React from 'react';
// @ts-ignore
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Box } from '../Box';
import styles from '../Box.scss';

describe('Box component', () => {
  it('should pass children', () => {
    const { getByTestId } = render(
      <Box>
        <div data-testid="child-component">Child Component</div>
      </Box>,
    );
    const childComponent = getByTestId('child-component');

    expect(childComponent);
  });

  it('should have correct className', () => {
    const { container } = render(
      <Box>
        <div>Child Component</div>
      </Box>,
    );

    expect(container.firstChild).toHaveClass(styles['box']);
  });
});

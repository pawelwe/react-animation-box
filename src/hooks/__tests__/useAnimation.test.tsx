import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAnimation } from '../useAnimation';

describe('useAnimation hook', () => {
  it('should indicate showing and mounting on component in', () => {
    const {
      result: { current },
    } = renderHook(() => useAnimation(true, useRef(null)));

    expect(current).toEqual({
      mount: true,
      show: true,
    });
  });

  it('should indicate showing and mounting on component out', () => {
    const {
      result: { current },
    } = renderHook(() => useAnimation(false, useRef(null)));

    expect(current).toEqual({
      mount: false,
      show: true,
    });
  });
});

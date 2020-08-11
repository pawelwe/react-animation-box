import React, { memo, useRef } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import styles from './AnimationBox.scss';

interface Props {
  in: boolean;
  children: any;
}

export const AnimationBox = memo<Props>(({ children, in: compIn }) => {
  const wrapperRef: any = useRef(null);
  const { mount, show } = useAnimation(compIn, wrapperRef);

  return mount ? (
    <div
      ref={wrapperRef}
      className={show ? styles['fade-in'] : styles['fade-out']}
    >
      {children}
    </div>
  ) : null;
});

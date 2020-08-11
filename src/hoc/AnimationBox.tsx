import React, { useState, useEffect, memo, useCallback, useRef } from 'react';
import styles from './AnimationBox.scss';

interface Props {
  in: boolean;
  children: any;
}

export const AnimationBox = memo<Props>(({ children, in: compIn }) => {
  const [show, setShow] = useState(true);
  const [mount, setMount] = useState(compIn);

  const wrapperRef: any = useRef(null);

  const unmountComp = useCallback((): void => {
    console.info('unmounted...');

    if (wrapperRef.current) {
      wrapperRef.current.removeEventListener('animationend', unmountComp);
    }

    setMount(false);
  }, [mount]);

  useEffect(() => {
    if (!compIn) {
      console.info('unmounting...');

      if (wrapperRef.current) {
        wrapperRef.current.addEventListener('animationend', unmountComp);
      }

      setShow(false);
    } else {
      console.info('mounting...');
      setShow(true);
      setMount(true);
    }
  }, [compIn]);

  return mount ? (
    <div
      ref={wrapperRef}
      className={show ? styles['fade-in'] : styles['fade-out']}
    >
      {children}
    </div>
  ) : null;
});

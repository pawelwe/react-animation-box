import React, {
  memo,
  MutableRefObject,
  useRef,
  ReactNode,
  useMemo,
} from 'react';
import { useAnimation } from '../hooks/useAnimation';
import styles from './AnimationBox.scss';

interface Props {
  in: boolean;
  children: ReactNode;
  timeouts?: Timeouts;
}

interface Timeouts {
  in: number;
  out: number;
}

const calculateAnimationDuration = (compIn: boolean, timeouts: Timeouts) => {
  return compIn
    ? { animationDuration: `${timeouts.in}ms` }
    : { animationDuration: `${timeouts.out}ms` };
};

export const AnimationBox = memo<Props>(
  ({ children, in: compIn, timeouts }) => {
    const wrapperRef: MutableRefObject<HTMLDivElement> = useRef(null);
    const { mount, show } = useAnimation(compIn, wrapperRef);
    let animationDuration;

    if (timeouts) {
      animationDuration = useMemo(
        () => calculateAnimationDuration(compIn, timeouts),
        [compIn, timeouts],
      );
    }

    return mount ? (
      <div
        ref={wrapperRef}
        className={show ? styles['fade-in'] : styles['fade-out']}
        style={timeouts ? animationDuration : null}
      >
        {children}
      </div>
    ) : null;
  },
);

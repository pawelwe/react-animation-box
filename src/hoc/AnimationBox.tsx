import React, {
  memo,
  useRef,
  useMemo,
  MutableRefObject,
  ReactNode,
} from "react";

import styles from "./AnimationBox.scss";

import { useAnimation } from "../hooks/useAnimation";

interface Props {
  in: boolean;
  children: ReactNode;
  timeouts?: Timeouts;
}

interface Timeouts {
  in: number;
  out: number;
}

interface AnimationDuration {
  animationDuration: string;
}

export const calculateAnimationDuration = (
  compIn: boolean,
  timeouts: Timeouts
): AnimationDuration => {
  return compIn
    ? { animationDuration: `${timeouts.in}ms` }
    : { animationDuration: `${timeouts.out}ms` };
};

export const AnimationBox = memo<Props>(
  ({ children, in: compIn, timeouts }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const { mount, show } = useAnimation(compIn, wrapperRef);
    let animationDuration;

    if (timeouts) {
      animationDuration = useMemo(
        () => calculateAnimationDuration(compIn, timeouts),
        [compIn, timeouts]
      );
    }

    return mount ? (
      <div
        ref={wrapperRef}
        className={show ? styles["fade-in"] : styles["fade-out"]}
        style={timeouts ? animationDuration : undefined}
        data-testid="animation-box"
      >
        {children}
      </div>
    ) : null;
  }
);

AnimationBox.displayName = "AnimationBox";

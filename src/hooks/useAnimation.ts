import { useState, useEffect, useCallback, MutableRefObject } from 'react';

function percentage(partialValue: number, totalValue: number) {
  return (100 * partialValue) / totalValue;
}

export const useAnimation = (
  compIn: boolean,
  ref: MutableRefObject<HTMLDivElement>,
) => {
  const [show, setShow] = useState(true);
  const [mount, setMount] = useState(compIn);

  const unmountComp = useCallback((): void => {
    console.info('unmounted...');

    ref.current.removeEventListener('animationend', unmountComp);

    setMount(false);
  }, [mount]);

  const handleCancel = useCallback(
    (e: AnimationEvent): void => {
      const animationDuration = parseFloat(
        window.getComputedStyle(ref.current).animationDuration,
      );
      const currentTime = e.elapsedTime;
      const newDuration = currentTime.toFixed(2);

      if (currentTime >= animationDuration) {
        ref.current.removeEventListener('animationcancel', handleCancel);
        return;
      }

      console.info('animation canceled...');

      let root = document.documentElement;
      const progressToOpacity =
        percentage(currentTime - currentTime * 0.33, animationDuration) / 100;

      ref.current.style.animationDuration = `${newDuration}s`;
      root.style.setProperty('--opacity', `${progressToOpacity}`);
      ref.current.removeEventListener('animationcancel', handleCancel);
    },
    [ref.current],
  );

  useEffect(() => {
    if (compIn) {
      console.info('mounting...');

      setShow(true);
      setMount(true);
    } else {
      console.info('unmounting...');

      if (ref.current) {
        ref.current.addEventListener('animationend', unmountComp);
        ref.current.addEventListener('animationcancel', handleCancel);
        setShow(false);
      }
    }
  }, [compIn]);

  return {
    mount,
    show,
  };
};

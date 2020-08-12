import { useState, useEffect, useCallback } from 'react';

export const useAnimation = (compIn: boolean, ref: any) => {
  const [show, setShow] = useState(true);
  const [mount, setMount] = useState(compIn);

  const unmountComp = useCallback((): void => {
    console.info('unmounted...');

    ref.current.removeEventListener('animationend', unmountComp);

    setMount(false);
  }, [mount]);

  useEffect(() => {
    if (compIn) {
      console.info('mounting...');

      setShow(true);
      setMount(true);
    } else {
      console.info('unmounting...');

      if (ref.current) {
        ref.current.addEventListener('animationend', unmountComp);
      }

      setShow(false);
    }
  }, [compIn]);

  return {
    mount,
    show,
  };
};

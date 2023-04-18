import { useState, useEffect, useCallback, MutableRefObject } from "react";
import { getPercentageFromPartialValue } from "../utils/utils";

export const useAnimation = (
  compIn: boolean,
  ref: MutableRefObject<HTMLDivElement | null>
) => {
  const [show, setShow] = useState(true);
  const [mount, setMount] = useState(compIn);

  const unmountComp = useCallback((): void => {
    console.info("unmounted...");

    if (ref.current !== null) {
      ref.current.removeEventListener("animationend", unmountComp);
    }

    setMount(false);
  }, [mount]);

  const handleCancel = useCallback(
    (e: AnimationEvent): void => {
      if (ref.current !== null) {
        const animationDuration = parseFloat(
          window.getComputedStyle(ref.current).animationDuration
        );
        const currentTime = e.elapsedTime;
        const newDuration = currentTime.toFixed(2);

        if (currentTime >= animationDuration) {
          ref.current.removeEventListener("animationcancel", handleCancel);
          return;
        }

        console.info("animation canceled...");

        const root = document.documentElement;
        const progressToOpacityDecimal = getPercentageFromPartialValue(
          currentTime,
          animationDuration
        );

        root.style.setProperty("--opacity", `${progressToOpacityDecimal}`);
        ref.current.style.animationDuration = `${newDuration}s`;
        ref.current.removeEventListener("animationcancel", handleCancel);
      }
    },
    [ref]
  );

  useEffect(() => {
    if (compIn) {
      console.info("mounting...");

      setShow(true);
      setMount(true);
    } else {
      console.info("unmounting...");

      if (ref.current) {
        ref.current.addEventListener("animationend", unmountComp);
        ref.current.addEventListener("animationcancel", handleCancel);
        setShow(false);
      }
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("animationend", unmountComp);
        ref.current.removeEventListener("animationcancel", handleCancel);
      }
    };
  }, [compIn, ref]);

  return {
    mount,
    show,
  };
};

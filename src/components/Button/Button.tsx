import React from "react";

import styles from "./Button.scss";

interface Props {
  handleClick: () => void;
  text: String;
}

export const Button: React.FC<Props> = ({ handleClick, text }) => {
  return (
    <button className={styles["button"]} onClick={handleClick}>
      {text}
    </button>
  );
};

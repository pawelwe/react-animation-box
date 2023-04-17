import React, { ReactNode } from "react";

import styles from "./Box.scss";

interface Props {
  children: ReactNode;
}

export const Box: React.FC<Props> = ({ children }) => {
  return <div className={styles["box"]}>{children}</div>;
};

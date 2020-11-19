import React, { ReactNode } from "react";
import styles from "./Box.module.scss";

import { DiceColor } from "../../model/colors";

interface Props {
  color: DiceColor;
  children: ReactNode;
}

function Box(props: Props) {
  const style = colorToStyle(props.color);

  return <div className={style}>{props.children}</div>;
}

function colorToStyle(color: DiceColor) {
  switch (color) {
    case "RED":
      return styles.red;
    case "YELLOW":
      return styles.yellow;
    case "GREEN":
      return styles.green;
    case "BLUE":
      return styles.blue;
  }
}

export default Box;

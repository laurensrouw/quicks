import React from "react";
import styles from "./Row.module.scss";

import { DiceColor } from "../../model/colors";

import Box from "./Box";
import Lock from "./Lock";

interface Props {
  color: DiceColor;
}

function Row(props: Props) {
  const style = colorsToStyle(props.color);

  return (
    <div className={style}>
      <div className={styles.inner}>
        {Array.from(Array(11).keys()).map((n) => (
          <Box color={props.color} index={n} key={n} />
        ))}
      </div>
      <div className={styles.spacer} />
      <Lock color={props.color} />
    </div>
  );
}

function colorsToStyle(color: DiceColor) {
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

export default Row;

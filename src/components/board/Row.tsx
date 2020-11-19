import React from "react";
import styles from "./Row.module.scss";

import { DiceColor } from "../../model/colors";

import Box from "./Box";

interface Props {
  color: DiceColor;
}

function Row(props: Props) {
  const style = colorsToStyle(props.color);

  return (
    <div className={style}>
      <div className={styles.inner}>
        <Box color={props.color}>2</Box>
        <Box color={props.color}>3</Box>
        <Box color={props.color}>4</Box>
        <Box color={props.color}>5</Box>
        <Box color={props.color}>6</Box>
        <Box color={props.color}>7</Box>
        <Box color={props.color}>8</Box>
        <Box color={props.color}>9</Box>
        <Box color={props.color}>10</Box>
        <Box color={props.color}>11</Box>
        <Box color={props.color}>12</Box>
      </div>
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

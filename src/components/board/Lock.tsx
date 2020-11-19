import React from "react";
import styles from "./Lock.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

import { DiceColor } from "../../model/colors";

interface Props {
  color: DiceColor;
}

function Lock(props: Props) {
  const style = colorsToStyle(props.color);

  return (
    <div className={style}>
      <FontAwesomeIcon icon={faLockOpen} />
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

export default Lock;

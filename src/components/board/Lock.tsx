import React from "react";
import styles from "./Lock.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

import { DiceColor } from "../../model/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  color: DiceColor;
}

function Lock(props: Props) {
  const checked = useSelector((state: RootState) => state[props.color].checked);

  const count = checked.reduce((prev, cur) => (cur ? prev + 1 : prev), 0);
  const bonus = count >= 5 && checked[10];

  const style = colorsToStyle(props.color, bonus);

  return (
    <div className={style}>
      <FontAwesomeIcon icon={bonus ? faLockOpen : faLock} />
    </div>
  );
}

function colorsToStyle(color: DiceColor, bonus: boolean) {
  switch (color) {
    case "RED":
      return bonus ? styles.redChecked : styles.red;
    case "YELLOW":
      return bonus ? styles.yellowChecked : styles.yellow;
    case "GREEN":
      return bonus ? styles.greenChecked : styles.green;
    case "BLUE":
      return bonus ? styles.blueChecked : styles.blue;
  }
}

export default Lock;

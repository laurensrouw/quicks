import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Box.module.scss";

import { DiceColor } from "../../model/colors";

import { check } from "../../redux/rows";
import { RootState } from "../../redux/store";

interface Props {
  color: DiceColor;
  index: number;
}

function Box(props: Props) {
  const dispatch = useDispatch();
  const row = useSelector((state: RootState) => state[props.color]);
  const number = row.numbers[props.index];
  const checked = row.checked[props.index];

  const style = colorToStyle(props.color, checked);

  const checkNumber = () => {
    dispatch(check({ color: props.color, index: props.index }));
  };

  return (
    <div className={style} onClick={checkNumber}>
      {number}
    </div>
  );
}

function colorToStyle(color: DiceColor, checked: boolean) {
  switch (color) {
    case "RED":
      return checked ? styles.redDisabled : styles.red;
    case "YELLOW":
      return checked ? styles.yellowDisabled : styles.yellow;
    case "GREEN":
      return checked ? styles.greenDisabled : styles.green;
    case "BLUE":
      return checked ? styles.blueDisabled : styles.blue;
  }
}

export default Box;

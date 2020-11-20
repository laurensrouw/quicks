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
  const disabled =
    props.index < row.checked.reduce((prev, cur, idx) => (cur ? idx : prev), 0);

  const style = colorToStyle(props.color, checked, disabled);

  const checkNumber = () => {
    dispatch(check({ color: props.color, index: props.index }));
  };

  return (
    <div className={style} onClick={checkNumber}>
      {number}
    </div>
  );
}

function colorToStyle(color: DiceColor, checked: boolean, disabled: boolean) {
  switch (color) {
    case "RED":
      return checked
        ? styles.redChecked
        : disabled
        ? styles.redDisabled
        : styles.red;
    case "YELLOW":
      return checked
        ? styles.yellowChecked
        : disabled
        ? styles.yellowDisabled
        : styles.yellow;
    case "GREEN":
      return checked
        ? styles.greenChecked
        : disabled
        ? styles.greenDisabled
        : styles.green;
    case "BLUE":
      return checked
        ? styles.blueChecked
        : disabled
        ? styles.blueDisabled
        : styles.blue;
  }
}

export default Box;

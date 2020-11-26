import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Box.module.scss";

import { DiceColor } from "../../model/colors";

import {
  check,
  countChecked,
  getChecked,
  getDiceNumber,
  maxChecked,
} from "../../redux/rows";

interface Props {
  color: DiceColor;
  index: number;
}

function Box(props: Props) {
  const dispatch = useDispatch();

  const number = useSelector(getDiceNumber(props.color, props.index));
  const checked = useSelector(getChecked(props.color, props.index));
  const count = useSelector(countChecked(props.color));
  const max = useSelector(maxChecked(props.color));

  const disabled = props.index < max;
  const bonusDisabled = props.index === 10 && count < 5;

  const style = colorToStyle(props.color, checked, disabled || bonusDisabled);

  const checkNumber = () => {
    if (!checked && !disabled && !bonusDisabled) {
      dispatch(check({ color: props.color, index: props.index }));
    }
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

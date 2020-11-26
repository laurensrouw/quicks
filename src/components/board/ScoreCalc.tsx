import React from "react";
import styles from "./ScoreCalc.module.scss";
import { useSelector } from "react-redux";

import { getScore } from "../../redux/rows";
import { getNegativeScore } from "../../redux/fails";

function ScoreCalc() {
  const { red, yellow, green, blue } = useSelector(getScore);
  const negativeScore = useSelector(getNegativeScore);

  const totalScore = red + yellow + green + blue - negativeScore;

  return (
    <div className={styles.scoreCalc}>
      Score
      <div className={styles.red}>{red}</div>+
      <div className={styles.yellow}>{yellow}</div>+
      <div className={styles.green}>{green}</div>+
      <div className={styles.blue}>{blue}</div>-
      <div className={styles.gray}>{negativeScore}</div>=
      <div className={styles.total}>{totalScore}</div>
    </div>
  );
}

export default ScoreCalc;

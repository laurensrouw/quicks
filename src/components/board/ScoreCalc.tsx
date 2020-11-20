import React from "react";
import styles from "./ScoreCalc.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function ScoreCalc() {
  const { RED, YELLOW, GREEN, BLUE } = useSelector((state: RootState) => state);

  const redScore = calcScore(RED.checked);
  const yellowScore = calcScore(YELLOW.checked);
  const greenScore = calcScore(GREEN.checked);
  const blueScore = calcScore(BLUE.checked);
  const totalScore = redScore + yellowScore + greenScore + blueScore;

  return (
    <div className={styles.scoreCalc}>
      Score
      <div className={styles.red}>{redScore}</div>+
      <div className={styles.yellow}>{yellowScore}</div>+
      <div className={styles.green}>{greenScore}</div>+
      <div className={styles.blue}>{blueScore}</div>
      -
      <div className={styles.gray} />=
      <div className={styles.total}>{totalScore}</div>
    </div>
  );
}

function calcScore(row: boolean[]) {
  const scores = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
  const count = row.reduce((prev, cur) => (cur ? prev + 1 : prev), 0);

  return scores[count];
}

export default ScoreCalc;

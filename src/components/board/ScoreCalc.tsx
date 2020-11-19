import React from "react";
import styles from "./ScoreCalc.module.scss";

function ScoreCalc() {
  return (
    <div className={styles.scoreCalc}>
      Score
      <div className={styles.red} />
      +
      <div className={styles.yellow} />
      +
      <div className={styles.green} />
      +
      <div className={styles.blue} />
      -
      <div className={styles.gray} />
      =
      <div className={styles.total} />
    </div>
  );
}

export default ScoreCalc;

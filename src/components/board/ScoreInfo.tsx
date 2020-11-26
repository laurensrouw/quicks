import React from "react";
import styles from "./ScoreInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { getFails, increment } from "../../redux/fails";

function ScoreInfo() {
  const fails = useSelector(getFails);
  const dispatch = useDispatch();

  const checkFail = () => {
    dispatch(increment());
  };

  return (
    <div className={styles.scoreInfo}>
      <div className={styles.labels}>
        Kruisjes
        <div className={styles.divider} />
        Punten
      </div>
      <div className={styles.score}>
        1x
        <div className={styles.divider} />1
      </div>
      <div className={styles.score}>
        2x
        <div className={styles.divider} />3
      </div>
      <div className={styles.score}>
        3x
        <div className={styles.divider} />6
      </div>
      <div className={styles.score}>
        4x
        <div className={styles.divider} />
        10
      </div>
      <div className={styles.score}>
        5x
        <div className={styles.divider} />
        15
      </div>
      <div className={styles.score}>
        6x
        <div className={styles.divider} />
        21
      </div>
      <div className={styles.score}>
        7x
        <div className={styles.divider} />
        28
      </div>
      <div className={styles.score}>
        8x
        <div className={styles.divider} />
        36
      </div>
      <div className={styles.score}>
        9x
        <div className={styles.divider} />
        45
      </div>
      <div className={styles.score}>
        10x
        <div className={styles.divider} />
        55
      </div>
      <div className={styles.score}>
        11x
        <div className={styles.divider} />
        66
      </div>
      <div className={styles.score}>
        12x
        <div className={styles.divider} />
        78
      </div>
      <div className={styles.fails}>
        <div>
          Elke mislukte worp <strong>-5</strong>
        </div>
        <div className={styles.failBoxes}>
          <div className={styles.failBox} onClick={checkFail}>
            {fails >= 1 ? "X" : ""}
          </div>
          <div className={styles.failBox} onClick={checkFail}>
            {fails >= 2 ? "X" : ""}
          </div>
          <div className={styles.failBox} onClick={checkFail}>
            {fails >= 3 ? "X" : ""}
          </div>
          <div className={styles.failBox} onClick={checkFail}>
            {fails >= 4 ? "X" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreInfo;

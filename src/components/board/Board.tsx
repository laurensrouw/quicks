import React from "react";
import styles from "./Board.module.scss";

import Row from "./Row";
import ScoreCalc from "./ScoreCalc";
import ScoreInfo from "./ScoreInfo";

function Board() {
  return (
    <div className={styles.board}>
      <Row color="RED" />
      <Row color="YELLOW" />
      <Row color="GREEN" />
      <Row color="BLUE" />
      <ScoreInfo />
      <ScoreCalc />
    </div>
  );
}

export default Board;

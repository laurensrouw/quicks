import React from "react";
import styles from "./Board.module.scss";

import Row from "./Row";
import ScoreInfo from "./ScoreInfo";

function Board() {
  return (
    <div className={styles.board}>
      <Row color="RED" />
      <Row color="YELLOW" />
      <Row color="GREEN" />
      <Row color="BLUE" />
      <ScoreInfo />
    </div>
  );
}

export default Board;

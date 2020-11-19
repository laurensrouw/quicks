import React from "react";
import styles from "./Board.module.scss";

import Row from "./Row";
import ScoreInfo from "./ScoreInfo";

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const reversed = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function Board() {
  return (
    <div className={styles.board}>
      <Row color="RED" numbers={numbers} />
      <Row color="YELLOW" numbers={numbers} />
      <Row color="GREEN" numbers={reversed} />
      <Row color="BLUE" numbers={reversed} />
      <ScoreInfo />
    </div>
  );
}

export default Board;

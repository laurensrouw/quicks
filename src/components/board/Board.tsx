import React from "react";
import styles from "./Board.module.scss";

import Row from "./Row";

function Board() {
  return (
    <div className={styles.board}>
      <Row color="RED" />
      <Row color="YELLOW" />
      <Row color="GREEN" />
      <Row color="BLUE" />
    </div>
  );
}

export default Board;

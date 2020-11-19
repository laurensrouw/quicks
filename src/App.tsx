import React from "react";
import styles from "./App.module.css";

import Board from "./components/board/Board";

function App() {
  return (
    <div className={styles.quicksApp}>
      <Board />
    </div>
  );
}

export default App;

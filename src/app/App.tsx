import { useEffect, useRef } from "react";
import styles from "./App.module.css";
import { Game } from "../pages/game";
import { useUnit } from "effector-react";
import {
  $scores,
  onBankClicked,
  onRightAnswer,
  onWrongAnswer,
} from "../pages/game/model";

function App() {
  const [{ start }, onBank, onRight, onWrong] = useUnit([
    $scores,
    onBankClicked,
    onRightAnswer,
    onWrongAnswer,
  ]);

  const af = useRef<HTMLDivElement>(null);

  useEffect(() => {
    af?.current?.focus();
  }, [start]);

  const keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (start) {
      switch (e.code) {
        case "KeyY":
          onRight();
          break;
        case "KeyN":
          onWrong();
          break;
        case "KeyB":
          onBank();
          break;
      }
    }
  };

  return (
    <div className={styles.app} tabIndex={0} onKeyUp={keyPressHandler} ref={af}>
      <div className={styles.container}>
        <h1 className={styles.title}>Слабое звено</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
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

  function keyPressHandler(e: KeyboardEvent) {
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

  useEffect(() => {
    if (start) document.addEventListener('keyup', keyPressHandler)
    return () => document.removeEventListener('keyup', keyPressHandler)
  }, [start]);


  return (
    <div className={styles.app} tabIndex={0}>
      <div className={styles.container}>
        <h1 className={styles.title}>Слабое звено</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;

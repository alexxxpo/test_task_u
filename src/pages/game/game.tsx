import { useUnit } from "effector-react";
import { Scale } from "../../widgets/scale";
import { $scores, onEnd, onStart, onTimerEnd, onTimerStart } from "./model";
import styles from "./game.module.css";
import { OutputWindow } from "../../shared/output_window";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";

export function Game() {
  const [{ bank, start, timer }, starting, end, timerStart, timerEnd] = useUnit(
    [$scores, onStart, onEnd, onTimerStart, onTimerEnd]
  );

  const [loaded, setLoaded] = useState(false);

  const ancEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (start) {
      const id = setInterval(timerStart, 1000);
      return () => clearInterval(id);
    }
  }, [start, timerStart]);

  useEffect(() => {
    if (!timer) {
      end();
      timerEnd();
    }
  }, [timer, timerEnd, end]);

  const onStartHandler = () => {
    starting();
  };

  return (
    <div className={styles.page} tabIndex={0} ref={ancEl}>
      <Popover
        open={!start && loaded}
        sx={{
          background: "rgba(0,0,0,.7)",
        }}
        anchorEl={document.body}
        anchorOrigin={{
          horizontal: "center",
          vertical: "center",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "center",
        }}
      >
        <div className={styles.inner}>
          <Typography sx={{ p: 2 }}>
            Нажмите на кнопку, чтобы начать.
          </Typography>
          <Typography sx={{ p: 2 }}>
            Y - верный ответ, N - неверный ответ, B - банк
          </Typography>
          <Typography sx={{ p: 2 }}>Последний результат: {bank}</Typography>
          <Button
            onClick={onStartHandler}
            variant="contained"
            className={styles.button}
          >
            Старт
          </Button>
        </div>
      </Popover>
      <Scale />
      <div className="">
        <OutputWindow value={timer} title="Оставшеся время"/>
        <OutputWindow value={bank} title="Банк" />
      </div>
    </div>
  );
}

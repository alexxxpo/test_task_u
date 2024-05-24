import { useUnit } from "effector-react";
import { Scale } from "../../widgets/scale"
import { $scores, onBankClicked, onRightAnswer, onWrongAnswer } from "./model";
import styles from './game.module.css'
import { OutputWindow } from "../../shared/output_window";

export function Game() {
    const [{bank}, onBank, onRight, onWrong] = useUnit([$scores, onBankClicked, onRightAnswer, onWrongAnswer])

    const keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {

        switch (e.code) {
            case 'KeyY':
                onRight()
                break;
            case 'KeyN':
                onWrong()
                break;
            case 'KeyB':
                onBank()
                break;
        }
    }
    return (
        <div
            className={styles.page}
            onKeyUp={keyPressHandler}
            tabIndex={0}
        >
            <Scale />
            <OutputWindow value={bank} title="Банк"/>
        </div>
    )
}
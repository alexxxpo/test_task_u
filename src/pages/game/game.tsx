import { useUnit } from "effector-react"
import { $scores, onBankClicked, onRightAnswer, onWrongAnswer } from "./model"
import { Ceil } from "../../shared/ceil/ceil"

export function Game() {
    const [{ bank, current, scale }, onBank, onRight, onWrong] = useUnit([$scores, onBankClicked, onRightAnswer, onWrongAnswer])

    const keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case 'y':
                onRight()
                break;
            case 'n':
                onWrong()
                break;
            case 'b':
                onBank()
                break;
            default:
                break;
        }
    }

    return (
        <div
            className=""
            tabIndex={0}
            onKeyUp={keyPressHandler}>
            {scale.map((score, index) => <Ceil score={score} active={current === index} key={index} />)}
            {bank}, {current}
        </div>
    )
}
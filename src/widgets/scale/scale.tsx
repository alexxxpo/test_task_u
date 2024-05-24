import { useUnit } from "effector-react";
import { $scores } from "../../pages/game/model";
import { Ceil } from "../../shared/ceil";
import styles from './scale.module.css'

export function Scale() {
    const [{ bank, current, scale }] = useUnit([$scores])

    return (
        <div
            className={styles.container}
        >
            {scale.map((score, index) => <Ceil score={score} active={current === index} key={index} />)}
        </div>
    )
}

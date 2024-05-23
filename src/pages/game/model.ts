import { createEvent, createStore } from "effector";

export const onRightAnswer = createEvent()
export const onWrongAnswer = createEvent()
export const onBankClicked = createEvent()

const createScale = (scores: number, initialValue = 2): number[] => {
    return Array.from({ length: scores }, (_, index) => {
        return index === 0 ? index : initialValue ** (index)
    })
}

const scale = createScale(8)

export const $scores = createStore({
    current: 0,
    scale,
    bank: 0
})

$scores.on(onRightAnswer, (scores) => scores.current < scores.scale.length - 1 ? { ...scores, current: scores.current + 1 } : scores)
$scores.on(onWrongAnswer, (scores) => ({ ...scores, current: 0 }))
$scores.on(onBankClicked, (scores) => ({ ...scores, bank: scores.bank + scores.scale[scores.current], current: 0 }))

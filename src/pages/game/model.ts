import { createEvent, createStore } from "effector";
import { TIMER_SP } from "../../shared/const";

export const onRightAnswer = createEvent();
export const onWrongAnswer = createEvent();
export const onBankClicked = createEvent();
export const onStart = createEvent();
export const onEnd = createEvent();
export const onTimerStart = createEvent();
export const onTimerEnd = createEvent();

const createScale = (scores: number, initialValue = 2): number[] => {
  return Array.from({ length: scores }, (_, index) => {
    return index === 0 ? index : initialValue ** index;
  });
};

const scale = createScale(8);

const defaultState = {
  current: 0,
  scale,
  bank: 0,
  start: false,
  timer: TIMER_SP
}

export const $scores = createStore(defaultState);

$scores.on(onRightAnswer, (scores) =>
  scores.current < scores.scale.length - 1
    ? { ...scores, current: scores.current + 1 }
    : scores
);
$scores.on(onWrongAnswer, (scores) => ({ ...scores, current: 0 }));
$scores.on(onBankClicked, (scores) => ({
  ...scores,
  bank: scores.bank + scores.scale[scores.current],
  current: 0,
}));
$scores.on(onStart, (scores) => ({
  ...scores,
  current: 0,
  bank: 0,
  start: true,
}));
$scores.on(onEnd, (scores) => ({
  ...scores,
  start: false,
}));
$scores.on(onTimerStart, (scores) => ({
	...scores,
	timer: scores.timer - 1
}) )
$scores.on(onTimerEnd, (scores) => ({
	...scores,
	timer: TIMER_SP
}) )

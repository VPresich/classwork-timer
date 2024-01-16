import { Timer } from './timer';

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const resetBtn = document.querySelector('button[data-action-reset]');

const timerInst = new Timer('.clockface');

startBtn.addEventListener('click', timerInst.start.bind(timerInst));
stopBtn.addEventListener('click', timerInst.stop.bind(timerInst));
resetBtn.addEventListener('click', timerInst.reset.bind(timerInst));

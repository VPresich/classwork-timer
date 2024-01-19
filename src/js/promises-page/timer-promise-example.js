import { timerPromise } from './timer-promise.js';
import { createErrMsg, createOkMsg } from '../common/create-msg.js';
import { STR_TIMER_START, STR_TIMER_STOP } from '../common/constants.js';

const asyncFn = async () => {
  console.log(STR_TIMER_START);
  const startTime = performance.now();
  createOkMsg(STR_TIMER_START + `${startTime}`);

  await timerPromise();

  const endTime = performance.now();
  console.log(STR_TIMER_STOP);
  createErrMsg(STR_TIMER_STOP + `${endTime - startTime}`);
};

asyncFn();

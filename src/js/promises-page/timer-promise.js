export const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

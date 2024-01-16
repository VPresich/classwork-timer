export class Timer {
  #timerElement = null;
  #localTime = 0;
  #timerInterval = null;
  constructor(selector) {
    this.#timerElement = document.querySelector(selector);
    this.#render();
  }

  start() {
    this.#timerInterval = setInterval(() => {
      this.#localTime += 1000;
      this.#render();
    }, 1000);
  }

  stop() {
    if (!this.#timerInterval) return;
    clearInterval(this.#timerInterval);
    this.#timerInterval = null;
  }

  reset() {
    this.#localTime = 0;
    this.#render();
  }

  #render() {
    if (!this.#timerElement) return;
    const { hours, mins, secs } = this.#getTimeComponents();
    this.#timerElement.textContent = `${hours}:${mins}:${secs}`;
  }

  #getTimeComponents() {
    const hours = this.#pad(
      Math.floor((this.#localTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.#pad(
      Math.floor((this.#localTime % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.#pad(Math.floor((this.#localTime % (1000 * 60)) / 1000));
    return { hours, mins, secs };
  }

  #pad(value) {
    return String(value).padStart(2, '0');
  }
}

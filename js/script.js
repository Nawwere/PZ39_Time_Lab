"use strict";

const delayButton = document.querySelector("#delay-button");
const delayedText = document.querySelector("#delayed-text");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const resetButton = document.querySelector("#reset-button");
const secondsText = document.querySelector("#seconds");
const status = document.querySelector("#status");

let seconds = 10;
let timeoutId = null;
let intervalId = null;

// TODO 1. После нажатия запланируйте сообщение через 2000 мс.
// Сохраните идентификатор setTimeout в timeoutId.
delayButton.addEventListener("click", () => {
  delayedText.textContent = "Ожидаем сообщение...";
});

// TODO 2. Запустите setInterval с интервалом 1000 мс.
// Каждую секунду уменьшайте seconds на 1 и обновляйте secondsText.
// При достижении 0 остановите интервал через clearInterval().
// Не допускайте запуска второго интервала, пока работает первый.
startButton.addEventListener("click", () => {});

// TODO 3. Остановите текущий интервал, но сохраните число секунд.
pauseButton.addEventListener("click", () => {});

// TODO 4. Отмените оба таймера и восстановите исходное состояние.
resetButton.addEventListener("click", () => {});

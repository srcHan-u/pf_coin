const days = document.querySelector(".timer__days > .timer__count");
const hour = document.querySelector(".timer__hour > .timer__count");
const minutes = document.querySelector(".timer__minutes > .timer__count");
const second = document.querySelector(".timer__second > .timer__count");

let counter = Number(second.innerHTML);

window.addEventListener("DOMContentLoaded", () => {
  second.innerHTML = counter;
  setInterval(() => {
    --counter;
    if (counter === 0) {
      minutes.innerHTML = Number(minutes.innerHTML - 1);
      counter = 59;
      second.innerHTML = counter;
    } else {
      second.innerHTML = counter;
    }
  }, 1000);
});



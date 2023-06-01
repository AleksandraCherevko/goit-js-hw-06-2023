const counterValue = {
  value: 0,
  incrementBtn() {
    console.log("increment -> this", this);
    this.value += 1;
  },

  decrement() {
    console.log("decremet -> this", this);
    this.value -= 1;
  },
};

const btnOne = document.querySelector("[data-action='increment']");
const btnTwo = document.querySelector("[data-action='decrement']");
const counterValueEl = document.querySelector("#value");

let value = 0;

const operationIncrease = () => {
  value += 1;
  counterValueEl.textContent = value;
};

const operationDecrease = () => {
  value -= 1;

  counterValueEl.textContent = value;
};

btnOne.addEventListener("click", operationIncrease);
btnTwo.addEventListener("click", operationDecrease);

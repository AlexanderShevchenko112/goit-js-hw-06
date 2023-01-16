const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const valueEl = document.getElementById("value");
let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

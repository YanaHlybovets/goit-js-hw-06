const counterValue = document.querySelector("span")
const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')
const click = 1


   decrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - click;
});

increment.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + click;
});


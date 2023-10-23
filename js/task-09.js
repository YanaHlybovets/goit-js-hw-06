function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button");
const color = document.querySelector("span");

btn.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  color.textContent = randomHexColor;

});

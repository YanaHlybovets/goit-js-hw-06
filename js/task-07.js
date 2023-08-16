const textInput = document.querySelector("input")
const text = document.querySelector("span")

textInput.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  text.style.fontSize = fontSize;
});
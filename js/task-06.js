// <input type="text" id="validation-input" data-length="6" placeholder="Please enter 6 symbols"  />

const textInput = document.querySelector("#validation-input");
const correctLength = textInput.getAttribute("data-length");

textInput.addEventListener("input", () => {
    const enteredLength = textInput.value.length;
    enteredLength >= correctLength ?
        textInput.classList.remove("invalid") & textInput.classList.add("valid") :
        textInput.classList.remove("valid") & textInput.classList.add("invalid")
});



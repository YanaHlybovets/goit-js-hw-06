

const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
    input.value.length === Number(input.dataset.length) ?
        input.classList.add("valid") & input.classList.remove("invalid") :
        input.classList.add("invalid") & input.classList.remove("valid");
});



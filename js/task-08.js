const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
    
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
    const user = email.value === "" || password.value === "" ?
    console.log("Please fill in all the fields!") :
    {
      email: email.value,
      password: password.value
    };
    
    console.log(user); 

  event.currentTarget.reset();
}

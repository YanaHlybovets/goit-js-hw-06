
const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;
const button = form.querySelector('button');

// to avoid this alarm: [DOM] Input elements should have autocomplete attributes 
// (suggested: "current-password"): (More info: https://goo.gl/9p2vKq) 
// <input type="password" name="password">​

password.setAttribute("autocomplete", "current-password"); 
email.setAttribute("autocomplete", "user-email")



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userEmail = email.value;
  const userPassword = password.value;
  let user = {}

  userEmail === "" || userPassword === "" ?
    alert("Please fill in all the fields!") :
    console.log(user = {
      email: userEmail,
      password: userPassword
    });
  
  form.reset();


});



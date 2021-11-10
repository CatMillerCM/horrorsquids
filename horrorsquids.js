const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("firstnameError");
const lastName = document.getElementById("lastname");
const lastNameError = document.getElementById("lastnameError");
const form = document.getElementById("entry-form");

firstName.addEventListener("blur", () => {
  if (!/[a-z]/i.test(firstName.value)) {
    firstName.classList.remove("valid");
    firstNameError.innerText = "First name can only use letters a-z";
  } else {
    firstName.classList.add("valid");
    firstNameError.innerText = "";
  }
});

lastName.addEventListener("blur", () => {
  if (!/[a-z]/i.test(lastName.value)) {
    lastName.classList.remove("valid");
    lastNameError.innerText = "Last name can only use letters a-z";
  } else {
    lastName.classList.add("valid");
    lastNameError.innerText = "";
  }
});

form.addEventListener("submit", (event) => {
  if (
    !firstName.classList.contains("valid") &&
    !lastName.classList.contains("valid")
  ) {
    event.preventDefault();
  }
});

const alert = document.getElementById("email-alert");
const emailInput = document.getElementById("email-input");
const btn = document.getElementById("btn-request");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (validateEmail(email)) {
    alert.innerHTML = "Hiya Cowboy, your email has been sent 🤠";
  } else {
    alert.innerHTML = "Sorry, this email is not cool enough 😩";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

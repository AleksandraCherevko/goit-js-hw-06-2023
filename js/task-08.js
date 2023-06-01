
const form = document.querySelector(".form");
const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { useremail, password },
  } = event.currentTarget;

  if (useremail.value === " " || password.value === " ") {
    return alert(`Please fill in all the fields!`);
  }

  console.log(`Email: ${useremail.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}


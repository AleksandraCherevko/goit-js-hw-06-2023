const ref = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
ref.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.target.value.trim();
  ref.output.textContent = inputValue ? inputValue : "Anonymous";
}

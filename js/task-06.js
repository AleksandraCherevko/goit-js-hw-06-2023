const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", onTargettextInputBlur);
function onTargettextInputBlur(event) {
  const inputValueLength = event.target.value.length;
  const validLength = Number(textInput.dataset.length);
  textInput.classList.remove("valid", "invalid");
  if (inputValueLength === validLength) {
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.add("invalid");
}

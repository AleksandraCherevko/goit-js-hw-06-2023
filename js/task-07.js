const rangeInput = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");
rangeInput.addEventListener("input", onRangeChange);
function onRangeChange(event) {
  textToChange.style.fontSize = `${event.currentTarget.value}px`;
}

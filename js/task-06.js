const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);
input.addEventListener(`blur`, blurInput);
function blurInput(event) {
  if (event.currentTarget.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

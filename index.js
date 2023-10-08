const submitButton = document.querySelector(".submit-button");
const inputField = document.querySelector(".input--text-area");
const outputField = document.querySelector(".output--text-area");

submitButton.addEventListener("click", function () {
  uncleanContent = inputField.value;

  // clean content
  outputField.value = uncleanContent;
});

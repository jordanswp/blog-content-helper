const submitButton = document.querySelector(".submit-button");
const inputField = document.querySelector(".input--text-area");
const outputField = document.querySelector(".output--text-area");

submitButton.addEventListener("click", function () {
  uncleanContent = inputField.value;

  // clean content
  splitContent = uncleanContent.split(/\r?\n/);

  const headers = ["H1", "H2", "H3", "H3"];

  splitContent.forEach((line) => {
    headers.forEach;
  });
  console.log(splitContent);

  // output cleaned content
  outputField.value = uncleanContent;
});

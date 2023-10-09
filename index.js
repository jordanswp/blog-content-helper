const submitButton = document.querySelector(".submit-button");
const inputField = document.querySelector(".input--text-area");
const outputField = document.querySelector(".output--text-area");

const message = document.querySelector(".message");

submitButton.addEventListener("click", function () {
  let uncleanContent = inputField.value;
  // clean content
  splitContent = uncleanContent.split(/\r?\n/);
  // console.log(splitContent);

  const headers = ["H1", "H2", "H3", "H4", "H5"];

  let cleanedContent = splitContent.map((line) => {
    headers.some((header) => {
      if (line.includes(header)) {
        // console.log(`${line} contains ${header}`);
        line = line
          .replace(/<strong>/g, "")
          .replace(/<\/strong>/g, "")
          .replace(`${header} `, "")
          .replace("<p>", `<${header.toLowerCase()}><strong>`)
          .replace("</p>", `</strong></${header.toLowerCase()}>`);

        // console.log(line);
      }
    });
    message.classList.remove("hide");
    return line;
  });

  // console.log(cleanedContent);

  cleanContentJoined = cleanedContent.join("\r\n");

  // output cleaned content
  outputField.value = cleanContentJoined;
});

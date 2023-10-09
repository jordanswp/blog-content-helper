const submitButton = document.querySelector(".submit-button");
const inputField = document.querySelector(".input--text-area");
const outputField = document.querySelector(".output--text-area");

submitButton.addEventListener("click", function () {
  let uncleanContent = inputField.value;
  // clean content
  splitContent = uncleanContent.split(/\r?\n/);
  console.log(splitContent);

  const headers = ["H1", "H2", "H3", "H4"];

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
    return line;
  });

  // console.log(cleanedContent);

  cleanContentJoined = cleanedContent.join("\r\n");

  // output cleaned content
  outputField.value = cleanContentJoined;

  // console.log(splitContent);

  // splitContent.forEach((line) => {
  //   headers.some((header) => {
  //     // check if line contains H1, H2, H3 or H4
  //     if (line.includes(header)) {
  //       console.log(line);
  //       // replace p tag with opening header tag and remove the header text
  //       line = line
  //         .replace(/<strong>/g, "")
  //         .replace(/<\/strong>/g, "")
  //         .replace("<p>", `<${header.toLowerCase()}><strong>`)
  //         .replace("</p>", `</strong></${header.toLowerCase()}>`);
  //     }
  //     return line;
  //   });
  //   return line;
  // });

  // console.log(cleanedContent);

  // cleanContentJoined = cleanedContent.join("\r\n");

  // output cleaned content
  // outputField.value = cleanContentJoined;
});

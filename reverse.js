function reverseText(text) {
  return [...text].reverse().join("");
}

function reverseTextarea() {
  let textarea = document.getElementById("myTextarea");
  let reversedText = reverseText(textarea.value);
  textarea.value = reversedText;
}

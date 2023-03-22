let reverse = document.querySelector("#reverse");
let rot13 = document.querySelector("#rot13");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

function reverseText(text) {
  let reversedText = text.split("").reverse().join("");
  return reversedText;
}

function rot13Text(text) {
  let rot13Text = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      rot13Text += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      rot13Text += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      rot13Text += text.charAt(i);
    }
  }
  return rot13Text;
}

function handleClickReverse() {
  let text = input.value;
  let reversed = reverseText(text);
  output.value = reversed;
}

function handleClickRot13() {
  let text = input.value;
  let rot13ed = rot13Text(text);
  output.value = rot13ed;
}

reverse.addEventListener('click', handleClickReverse);
rot13.addEventListener('click', handleClickRot13);

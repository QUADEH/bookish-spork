let reverse = document.querySelector("#reverse");
let rot13 = document.querySelector("#rot13");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let fromBinary = document.querySelector("#fromBinary");


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

function toBinaryText(text) {
  let binaryText = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let binaryChar = charCode.toString(2);
    binaryText += binaryChar.padStart(8, "0") + " ";
  }
  return binaryText.trim();
}

function toText(binaryText) {
  let text = "";
  let binaryChars = binaryText.trim().split(" ");
  for (let i = 0; i < binaryChars.length; i++) {
    let charCode = parseInt(binaryChars[i], 2);
    let char = String.fromCharCode(charCode);
    text += char;
  }
  return text;
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
function handleClickToBinary() {
  let text = input.value;
  let binary = toBinaryText(text);
  output.value = binary;
}

function handleClickBinaryfromBinary() {
  let text = input.value;
  let binaryToText = toText(text);
  output.value = binaryToText;
}

reverse.addEventListener('click', handleClickReverse);
rot13.addEventListener('click', handleClickRot13);
toBinary.addEventListener('click', let reverse = document.querySelector("#reverse");
let rot13 = document.querySelector("#rot13");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let fromBinary = document.querySelector("#fromBinary");


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

function toBinaryText(text) {
  let binaryText = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let binaryChar = charCode.toString(2);
    binaryText += binaryChar.padStart(8, "0") + " ";
  }
  return binaryText.trim();
}

function toText(binaryText) {
  let text = "";
  let binaryChars = binaryText.trim().split(" ");
  for (let i = 0; i < binaryChars.length; i++) {
    let charCode = parseInt(binaryChars[i], 2);
    let char = String.fromCharCode(charCode);
    text += char;
  }
  return text;
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
function handleClickToBinary() {
  let text = input.value;
  let binary = toBinaryText(text);
  output.value = binary;
}

function handleClickfromBinary() {
  let text = input.value;
  let binaryToText = toText(text);
  output.value = binaryToText;
}

reverse.addEventListener('click', handleClickReverse);
rot13.addEventListener('click', handleClickRot13);
toBinary.addEventListener('click', handleClickToBinary);
fromBinary.addEventListener('click', handleClickfromBinary);
fromBinary.addEventListener('click', handleClickBinaryfromBinary);

//My Query Selectors

let reverse = document.querySelector("#reverse"); // Refers to the the "reverse" ID in the HTML
let rot13 = document.querySelector("#rot13"); // "rot13" ID in the HTML
let input = document.querySelector("#input"); // "input" ID in the HTML
let output = document.querySelector("#output");// "output" ID in the HTML
let fromBinary = document.querySelector("#fromBinary"); // "fromBinary" ID in the HTML
let toHex = document.querySelector("#toHex"); // "toHex" ID in the HTML
let hexToBinary = document.querySelector("#binaryH"); // "hexToBinary" ID in the HTML


function reverseText(text) {
  let reversedText = text.split("").reverse().join(""); // Splits the string, reverses the characters, then rejoins them
  return reversedText; // Returns the the text reversed
}

function rot13Text(text) {
  let rot13Text = "";
  for (let i = 0; i < text.length; i++) { // For Loop that confirms the length of the text
    let charCode = text.charCodeAt(i); // Obtains the character codes
    if (charCode >= 65 && charCode <= 90) { 
      rot13Text += String.fromCharCode(((charCode - 65 + 13) % 26) + 65); // Checks for Upper Case
    } else if (charCode >= 97 && charCode <= 122) {
      rot13Text += String.fromCharCode(((charCode - 97 + 13) % 26) + 97); // Checks for Lower Case
    } else {
      rot13Text += text.charAt(i); // If not a letter, the character is left unchanged
    }
  }
  return rot13Text;
}

function toBinaryText(text) {
  let binaryText = "";
  for (let i = 0; i < text.length; i++) { // Confirms the length of the text
    let charCode = text.charCodeAt(i); // Obtains the character's code
    let binaryChar = charCode.toString(2); // Converts to Binary, "2"
    binaryText += binaryChar.padStart(8, "0") + " "; // Pads the resulting binary with 0's and concatenated by " " to separate the strings
  }
  return binaryText.trim(); //returns the text trimmed.
}

function toText(binaryText) {
  let text = "";
  let binaryChars = binaryText.trim().split(" "); //trims and splits the Binary text into characters
  for (let i = 0; i < binaryChars.length; i++) { // For Loop that makes sure the length of the binary is correct
    let charCode = parseInt(binaryChars[i], 2); // Parses the binary characters into unicode characters, hence the '2'
    let char = String.fromCharCode(charCode); //Converts the unicode characters into a string
    text += char; //Converts the string into text
  }
  return text; //returns the text
}

function binaryToHex(binaryText) {
  let binaryArray = binaryText.split(' ');
   let hexArray = binaryArray.map(binary => {
    let decimal = parseInt(binary, 2);
     let hex = decimal.toString(16);
     return hex.toUpperCase();
   });
   return hexArray.join(' ');
 }

function binaryFromHex(hexString) {
  let hexArray = hexString.split(' ');
    let binaryString = hexArray.map(hex => {
      let decimal = parseInt(hex, 16);
       let binary = decimal.toString(2);
       return binary.trim(' ');
    })
    return binaryString

// All the button functions for input and output

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

function handleClickBinarytoHex() {
	let binary = input.value;
  let hex = binaryToHex(binary);
  output.value = hex;
}

function handleClickHexToBinary() {
  let hex = input.value;
  let binary = binaryFromHex(hex);
  output.value = binary;
}

//All the Event Listeners

reverse.addEventListener('click', handleClickReverse);
rot13.addEventListener('click', handleClickRot13);
toBinary.addEventListener('click', handleClickToBinary);
fromBinary.addEventListener('click', handleClickfromBinary);
toHex.addEventListener('click', handleClickBinarytoHex);
binaryH.addEventListener('click', handleClickHexToBinary);

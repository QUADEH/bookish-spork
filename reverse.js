let reverse = document.querySelector("#reverse");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

function reverseText(text) {
  let reversedText = text.split("").reverse().join("");
  return reversedText
}

function handleClick () {
  let text = input.textContent;
  let reversed = reverseText(text);
  output.textContent = reversed;
}

reverse.addEventListener('click', handleClick);

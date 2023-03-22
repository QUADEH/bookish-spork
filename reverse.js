let input = document.querySelector('#input');
let output = document.querySelector('#output');

input.addEventListener('input', function(e) {
  output.textContent = e.target.value.split('').reverse().join('');
});

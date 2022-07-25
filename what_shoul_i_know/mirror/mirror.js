let input = document.querySelector('.input');
let button = document.querySelector('.button');
//
input.addEventListener('input', function(event) {
  button.innerText =
event.target.value.split('').join('');
});

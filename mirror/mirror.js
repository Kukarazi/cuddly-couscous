let input = document.querySelector('.firstBox');
let button = document.querySelector('.secondBox');
//
input.addEventListener('keyup', function(event) {
  button.value = event.target.value;
});

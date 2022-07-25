let button = document.querySelector('.button');
let input = document.querySelector('.input');
//
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//
input.addEventListener('keydown', function(evt){
  if(evt.keyCode>=48 && evt.keyCode<=90){
    button.style.backgroundColor = getRandomColor();
  }
});

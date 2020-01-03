const buttons = document.getElementsByName('color');

function setColor() {
  document.body.style.background = event.target.value;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('change', setColor);
}
const images = document.getElementsByName('image');
const inputs = document.getElementsByName('input');

function set() {
  if (!(inputs[0].value < 1 || inputs[0].value > 4 || inputs[1].value < 1 || inputs[1].value > 4)) {
    const bufer = images[inputs[0].value - 1].src;
    images[inputs[0].value - 1].src = images[inputs[1].value - 1].src;
    images[inputs[1].value - 1].src = bufer;
  }
}
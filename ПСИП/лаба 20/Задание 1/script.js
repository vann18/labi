const image = document.getElementById('image');

function set() {
  event.preventDefault();
  image.width = document.form.width.value;
  image.height = document.form.height.value;
  image.border = document.form.border.value;
  image.alt = document.form.alt.value;
}
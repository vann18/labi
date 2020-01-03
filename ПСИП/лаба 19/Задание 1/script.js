const list = document.getElementsByName('ListOfLinks')[0];
const button = document.getElementById('btn');

Array.from(document.links).forEach((value, index) => {
  list.options[index] = new Option(value.href, index, false, false);
});

console.log(list.selectedOptions[0].outerText);

button.addEventListener('click', () => {
  location.href = list.selectedOptions[0].outerText;
});
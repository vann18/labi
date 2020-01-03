// задание 1 и 2

const x = 5;

let sin = Math.sin(x);
let cos = Math.cos(x);
let abs = Math.abs(x);
let sqrt = Math.sqrt(x);

document.write(`Sin = ${sin}<br>`);
document.write(`Cos = ${cos}<br>`);
document.write(`Abs = ${cos}<br>`);
document.write(`Sqrt = ${sqrt}<br>`);

alert(`Sum = ${sin + cos + abs + sqrt}`);

document.write('<br><br>Задание 3<br>');

const quadX = Number.parseInt(prompt('Введите X'));
const quadY = Number.parseInt(prompt('Введите Y'));

document.write(`X = ${quadX}  Y = ${quadY}<br>`);

let result = '';

if (quadX > 0 && quadY > 0) {
  result = '1 квадрант<br>';
}

if (quadX > 0 && quadY < 0) {
  result = '2 квадрант<br>';
}

if (quadX < 0 && quadY < 0) {
  result = '3 квадрант<br>';
}

if (quadX < 0 && quadY > 0) {
  result = '4 квадрант<br>';
}

document.write(result);


document.write('<br><br>Задание 4<br>');

if (confirm('Задание 4: Вывести результат?')) {
  document.write(result);
} else {
  document.write('Вы нажали "Отмена"<br>');
}

function foo() {
  let str = 'произошла замена';
  document.getElementById('text').innerHTML = str;
}
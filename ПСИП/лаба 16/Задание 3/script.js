let result = 0;

function getResult() {

  const answersA = [...document.getElementsByClassName('a')];
  const answersB = [...document.getElementsByClassName('b')];
  const answersC = [...document.getElementsByClassName('c')];

  result = 0;

  answersA.forEach((element) => {
    if (element.checked) result += 6;
  });

  answersB.forEach((element) => {
    if (element.checked) result += 4;
  });

  answersC.forEach((element) => {
    if (element.checked) result += 2;
  });

  open('result.html', 'Result', config='width=400,height=400');
  
  localStorage.setItem('result', result);
}

function get() {
  const result = localStorage.getItem('result');
  if (result >= 12 && result < 18) document.body.innerText = 'Ваша бездеятельность тоже может стать причиной стресса. Вы, наверное очень раздражаете ею ближних. Побольше уверенности в себе! Вам стоит составить перечень своих положительных качеств и совершенствовать каждое из них';
  if (result >= 18 && result < 24) document.body.innerText = 'Вы человек спокойный и неподверженный стрессу. Если вы набрали ненамного больше 18 очков, то вам можно посоветовать быть терпимее к окружающим. Это позволит вам добиться большего.';
  if (result >= 24 && result <= 36) document.body.innerText = 'Вы в высшей степени подвержены стрессу, у вас даже могут появиться симптомы болезней, вызванных стрессом,— сердечная недостаточность, язвенная болезнь, болезни кишечника. С вами, должно быть, очень трудно ужиться. Самое главное для вас сейчас — научиться успокаиваться, это нужно вам самим, и вашей жене (мужу), и детям';
}
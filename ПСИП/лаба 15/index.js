const firstString = document.getElementById('first');
const secondString = document.getElementById('second');
const threeString = document.getElementById('three');
const parentElement = document.getElementById('parentElement');

firstString.addEventListener('click', firstClick);

secondString.addEventListener('mousedown', secondMouseDown);
secondString.addEventListener('mouseup', secondMouseUp);

threeString.addEventListener('mouseover', threeMouseOver);
threeString.addEventListener('mouseout', threeMouseOut);

parentElement.addEventListener('click', parentClick);

let click = true;
let flag = false;

function firstClick() {

  if (click) {
    click = false;
    firstString.style.fontSize = '48px';
    firstString.style.color = '#FFF';
    firstString.style.backgroundColor = '#0FF';
  } else {
    click = true;
    firstString.style.fontSize = '16px';
    firstString.style.color = '#000';
    firstString.style.backgroundColor = '#FFF';
  }

}

function secondMouseDown() {
  secondString.style.backgroundColor = 'green';
}

function secondMouseUp() {
  secondString.style.backgroundColor = 'yellow';
}

function threeMouseOver() {
  threeString.style.backgroundColor = 'red'; 
}

function threeMouseOut() {
  threeString.style.backgroundColor = '#0FF'; 
}

function parentClick(event) {
  let elementId = event.target.id;

  console.log(elementId);

  switch(elementId) {
    case 'firstChildElement':
      if (flag) {
        parentElement.childNodes[1].style.color = '#354';
        flag = false;
      } else {
        parentElement.childNodes[1].style.color = '#914';
        flag = true;
      }
      break;

    case 'secondChildElement':
      if (flag) {
        parentElement.childNodes[1].style.color = `rgb(${Math.random() * 160}, ${Math.random() * 160}, ${Math.random() * 160})`;
        parentElement.childNodes[3].src = 'https://s1.1zoom.ru/b5050/261/348938-sepik_2560x1440.jpg';
        flag = false;
      } else {
        parentElement.childNodes[1].style.color = `rgb(${Math.random() * 160}, ${Math.random() * 160}, ${Math.random() * 160})`;
        parentElement.childNodes[3].src = 'https://avatars.mds.yandex.net/get-pdb/1819331/9c7dc434-a58e-4e4f-95ef-0164517e32bd/s1200?webp=false';
        flag = true;
      }
      break;
  }

  console.dir(parentElement.childNodes[3]);
}
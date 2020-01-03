document.getElementById('date').innerText = new Date();

function foo1() {
  const arr1 = [];
  const arr2 = [];

  const table1 = document.getElementById('tbl1');
  const table2 = document.getElementById('tbl2');

  for (let i = 0; i < 5; i++) {
    arr1.push(Math.round(Math.random() * 30));
    arr2.push(Math.round(Math.random() * 30));
  }

  console.log(arr1);
  console.log(arr2);

  fillTable(table1, arr1, arr2);

  let minEl = arr1[0];
  let minElId = 0;

  arr1.forEach((v, i) => {
    if (v < minEl) {
      minEl = v;
      minElId = i;
    }
  });

  const newArr1 = [...arr1.slice(0, minElId + 1), ...arr1.slice(minElId + 1).sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })];

  const newArr2 = arr2.map((v, i) => v *= newArr1[i]);
  console.log(newArr2);
  fillTable(table2, newArr1, newArr2);
}

function foo2() {
  const img = document.getElementById('img1');
  const body = document.getElementById('right-content');

  const imgSrc = img.src;
  const lastModified = document.lastModified;
  const location = document.location;
  
  body.innerHTML += `Источник картинки: ${imgSrc}<br>Последнее изменение: ${lastModified}<br>Расположение: ${location}<br>`;
}

function fillTable(table, arr1, arr2) {
  arr1.forEach((v, i) => {
    table.innerHTML += `<tr><td>${v}</td><td>${arr2[i]}</td></tr>`;
  });
}
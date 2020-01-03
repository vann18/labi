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
  
  function fillTable(table, arr1, arr2) {
    arr1.forEach((v, i) => {
      table.innerHTML += `<tr><td>${v}</td><td>${arr2[i]}</td></tr>`;
    });
  }
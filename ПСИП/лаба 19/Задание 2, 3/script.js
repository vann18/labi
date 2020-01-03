function register() {
  event.preventDefault();
  const lastName = document.form.lastName.value;
  const firstName = document.form.firstName.value;
  const age = document.form.age.value;
  const phone = document.form.phone.value;

  const errorArr = [];

  if (lastName === '') errorArr.push('Введите фамилию');
  if (firstName === '') errorArr.push('Введите имя');
  if (age === '') errorArr.push('Введите возраст');
  if (phone === '') errorArr.push('Введите телефон');

  if (errorArr.length === 0) {
    alert(`
      Фамилия: ${lastName}\n
      Имя: ${firstName}\n
      Возраст: ${age}\n
      Телефон: ${phone}\n
    `);
  } else {
    let resultError = '';

    errorArr.forEach(value => resultError += `${value}\n`);
    alert(resultError);
  }
}
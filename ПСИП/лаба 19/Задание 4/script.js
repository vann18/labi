function check() {
  event.preventDefault();

  if (document.form.pass.value === document.form.checkPass.value) {
    alert(`
      Логин: ${document.form.login.value}\n
      Пароль: ${document.form.pass.value}
    `);
  } else {
    alert('Неверный пароль');
  }
}
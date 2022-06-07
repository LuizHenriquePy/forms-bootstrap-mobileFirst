function getValues() {
  const inputEmail = document.getElementById('header-email');
  const inputPassword = document.getElementById('header-password');
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  inputEmail.value = '';
  inputPassword.value = '';
}

const headerButton = document.getElementById('header-button');
headerButton.addEventListener('click', getValues);

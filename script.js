function getValues() {
  const inputEmail = document.getElementById('header-email');
  const inputPassword = document.getElementById('header-password');
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    inputEmail.value = '';
    inputPassword.value = '';
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const headerButton = document.getElementById('header-button');
headerButton.addEventListener('click', getValues);

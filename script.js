function getValues() {
  const inputEmail = document.getElementById('header-email');
  const inputSenha = document.getElementById('header-password');
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const headerButton = document.getElementById('header-button');
headerButton.addEventListener('click', getValues);

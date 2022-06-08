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

const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function createNameField(form) {
  let nameField = document.createElement('h3');
  nameField.innerText = `Nome: ${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`;
  form.appendChild(nameField);
}

function createEmailField(form) {
  let emailField = document.createElement('h3');
  emailField.innerText = `Email: ${document.getElementById('input-email').value}`;
  form.appendChild(emailField);
}

function createHouseField(form) {
  let houseField = document.createElement('h3');
  houseField.innerText = `Casa: ${document.getElementById('house').value}`;
  form.appendChild(houseField);
}

function createFamilyField(form) {
  let familyField = document.createElement('h3');
  familyField.innerText = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  form.appendChild(familyField);
}

function getCheckedSubjects(list) {
  let subs = [];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].checked) {
      subs.push(list[i].name);
    }
  }
  let concatenatedSubs = subs.join(', ');
  return concatenatedSubs;
}

function createSubjectField(form) {
  let subjects = document.getElementsByClassName('subject');
  let checkedSubjects = getCheckedSubjects(subjects);
  let subjectField = document.createElement('h3');
  subjectField.innerText = `Matérias: ${checkedSubjects}`;
  form.appendChild(subjectField);
}

function createAvalField(form) {
  let avalField = document.createElement('h3');
  avalField.innerText = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
  form.appendChild(avalField);
}

function createObsField(form) {
  let obsField = document.createElement('h3');
  obsField.innerText = `Observações: ${document.getElementById('textarea').value}`;
  form.appendChild(obsField);
}

function createForm(parent) {
  let newForm = document.createElement('form');
  newForm.setAttribute('id', 'form-data');
  createNameField(newForm);
  createEmailField(newForm);
  createHouseField(newForm);
  createFamilyField(newForm);
  createSubjectField(newForm);
  createAvalField(newForm);
  createObsField(newForm);
  parent.appendChild(newForm);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const container = document.getElementById('form-container');
  createForm(container);
  container.firstElementChild.style.display = 'none';
});

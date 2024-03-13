let form_input_group = document.querySelector('.form__input__group');
let error_message = document.querySelector('.error_message');
let input_email = document.querySelector('.form__input');

let container_subscribe = document.querySelector('.card__subscribe_container');
let success_message = document.querySelector('.success_message');
let email_success_message = document.getElementById('email_success_message');

function submitForm() {

  if(input_email.value === '') {
    error_message.textContent = "Whoops! It looks like you forgot to add your email";
    errorAction();
    return;
  }

  if (validateEmail(input_email.value)) {
    email_success_message.textContent = input_email.value;
    showSuccessMessage();
    clearError();
    input_email.value = '';
  } else {
    error_message.textContent = "Valid email is required";
    errorAction();
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function errorAction() {
  form_input_group.classList.add('error');
  input_email.classList.add('error');
  error_message.classList.add('active');

  setTimeout(() => {
    form_input_group.classList.remove('error');
  }, 500);
}

function clearError() {
  form_input_group.classList.remove('error');
  input_email.classList.remove('error');
  error_message.classList.remove('active');
}

function showSuccessMessage() {
  container_subscribe.classList.add('success');
  success_message.classList.add('active');
}

function hideSuccessMessage() {
  container_subscribe.classList.remove('success');
  success_message.classList.remove('active');
}
const form = document.getElementById('personForm');
const pristine = new Pristine(form);
const submitButton = form.querySelector('button[type="submit"]');

if (pristine.validate()) {
  submitButton.removeAttribute('disabled');
} else {
  submitButton.setAttribute('disabled', true);
}

const validateForm = (event) => {
  const element = event.target;

  if (
    ['INPUT', 'SELECT', 'TEXTAREA'].includes(element.nodeName) &&
    element.name.length > 0
  ) {
    if (pristine.validate()) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', true);
    }
  }
};

form.addEventListener('blur', validateForm, true);
form.addEventListener('input', validateForm, true);

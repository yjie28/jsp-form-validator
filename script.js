/* Notes:
 *      1. HTML built-in validations will prevent the form from being submitted if any criteria is not met,
 *      2. Customize further validations with JS (e.g. password match, styling to display message if form is not valid)
 */

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
  // Using Constraint API
  isValid = form.checkValidity();

  // Style main message for an error
  if (!isValid) {
    message.textContent = 'Please fill out all fields. ';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    // no need to run remaining of code if failed at this check
    return;
  }

  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Please make sure passwords match. ';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    // no need to run remaining of code if failed at this check
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
};

const storeFormData = () => {
  // normally would be sent to a server
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // console.log(user);
};

// 1 - validate the form
// 2 - store data
const processFormData = (e) => {
  e.preventDefault();

  // Validate Form
  validateForm();

  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

// Event Listener
form.addEventListener('submit', processFormData);

const toggleButton = document.getElementById('toggleButton');
const links = document.getElementById('links');

toggleButton.addEventListener('click', () => {
  links.classList.toggle('active');
});


// testimonial sliders//
const container = document.querySelector('.testimonial-container');
const boxes = document.querySelectorAll('.testimonial-box');

const maxIndex = boxes.length - 2;   // show 2 at a time
let current = 0;

function slideTo(index) {
  current = Math.max(0, Math.min(index, maxIndex));
  const cardWidth = boxes[0].offsetWidth + 20;  // width + margin
  container.style.transform = `translateX(-${current * cardWidth}px)`;
}

function showNext() { slideTo(current + 1); }
function showPrevious() { slideTo(current - 1); }



// FORM VALIDATION FOR BOOKING FORM
// error spans
document.addEventListener('DOMContentLoaded', function () {

  // error spans
  const nameError = document.getElementById('nameError');
  const lastError = document.getElementById('lastError');
  const emailError = document.getElementById('emailError');
  const locationError = document.getElementById('locationError');
  const phoneError = document.getElementById('phoneError');
  const textareaError = document.getElementById('textareaError');

  // inputs
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const locationInput = document.getElementById('location');
  const message = document.getElementById('message');


  const regEx_Name = /^[a-zA-Z\s]+$/;
  const regEx_Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regEx_Phone = /^\d{8,11}$/;


  // this makes the error message disappear when the right value is written
  // first name
  firstName.addEventListener('input', function () {
    const val = firstName.value.trim();
    if (val === '') {
      nameError.innerHTML = 'First name is required';
    } else if (!regEx_Name.test(val)) {
      nameError.innerHTML = 'Only letters are allowed';
    } else {
      nameError.innerHTML = '';
    }
  });
  // last name
  lastName.addEventListener('input', function () {
    const val = lastName.value.trim();
    if (val === '') {
      lastError.innerHTML = 'First name is required';
    } else if (!regEx_Name.test(val)) {
      lastError.innerHTML = 'Only letters are allowed';
    } else {
      lastError.innerHTML = '';  // clears error — span becomes empty and hides
    }
  });
  // email
  email.addEventListener('input', function () {
    const val = email.value.trim();
    if (val === '') {
      emailError.innerHTML = 'First name is required';
    } else if (!regEx_Email.test(val)) {
      emailError.innerHTML = 'Only letters are allowed';
    } else {
      emailError.innerHTML = '';  // clears error — span becomes empty and hides
    }
  });
  // phone
  phone.addEventListener('input', function () {
    const val = phone.value.trim();
    if (val === '') {
      phoneError.innerHTML = 'Phone No. is required';
    } else if (!regEx_Phone.test(val)) {
      phoneError.innerHTML = 'Only numbers are allowed';
    } else {
      phoneError.innerHTML = '';  // clears error — span becomes empty and hides
    }
  });
  // location
  locationInput.addEventListener('input', function () {
    const val = locationInput.value.trim();
    if (val === '') {
      locationError.innerHTML = 'First name is required';
    } else if (!regEx_Name.test(val)) {
      locationError.innerHTML = 'Only letters are allowed';
    } else {
      locationError.innerHTML = '';  // clears error — span becomes empty and hides
    }
  });
  // message
  message.addEventListener('input', function () {
    const val = message.value.trim();
    if (val === '') {
      textareaError.innerHTML = 'First name is required';
    } else if (!regEx_Name.test(val)) {
      textareaError.innerHTML = 'Only letters are allowed';
    } else {
      textareaError.innerHTML = '';  // clears error — span becomes empty and hides

    }
  });

  window.ValidateForm = function () {
    let isValid = true;

    const firstNameVal = firstName.value.trim();
    if (firstNameVal === '') {
      nameError.innerHTML = 'First name is required';
      isValid = false;
    } else if (!regEx_Name.test(firstNameVal)) {
      nameError.innerHTML = 'Only letters are allowed';
      isValid = false;
    } else {
      nameError.innerHTML = '';

    }

    const lastNameVal = lastName.value.trim();
    if (lastNameVal === '') {
      lastError.innerHTML = 'Last name is required';
      lastName.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Name.test(lastNameVal)) {
      lastError.innerHTML = 'Only letters are allowed';
      lastName.classList.add('notValid');
      isValid = false;
    } else {
      lastError.innerHTML = '';
      lastName.classList.remove('notValid');
    }

    const emailVal = email.value.trim();
    if (emailVal === '') {
      emailError.innerHTML = 'Email is required';
      email.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Email.test(emailVal)) {
      emailError.innerHTML = 'Enter a valid email';
      email.classList.add('notValid');
      isValid = false;
    } else {
      emailError.innerHTML = '';
      email.classList.remove('notValid');
    }

    const phoneVal = phone.value.trim();
    if (phoneVal === '') {
      phoneError.innerHTML = 'Phone number is required';
      phone.classList.add('notValid');
      isValid = false;
    } else {
      phoneError.innerHTML = '';
      phone.classList.remove('notValid');
    }

    const locationVal = locationInput.value.trim();
    if (locationVal === '') {
      locationError.innerHTML = 'Location is required';
      locationInput.classList.add('notValid');
      isValid = false;
    } else {
      locationError.innerHTML = '';
      locationInput.classList.remove('notValid');
    }

    const messageVal = message.value.trim();
    if (messageVal === '') {
      textareaError.innerHTML = 'Message is required';
      message.classList.add('notValid');
      isValid = false;
    } else {
      textareaError.innerHTML = '';
      message.classList.remove('notValid');
    }

    return isValid;
  };

});







// FORM VALIDATION FOR CONTACT FORM


document.addEventListener('DOMContentLoaded', function () {

  const regEx_Name = /^[A-Za-z\s]+$/;
  const regEx_Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regEx_Phone = /^\d{8,10}$/;

  const cFirstName = document.getElementById('c-firstName');
  const cLastName = document.getElementById('c-lastName');
  const cEmail = document.getElementById('c-email');
  const cPhone = document.getElementById('c-phone');
  const cMessage = document.getElementById('c-message');

  const cNameError = document.getElementById('c-nameError');
  const cLastError = document.getElementById('c-lastError');
  const cEmailError = document.getElementById('c-emailError');
  const cPhoneError = document.getElementById('c-phoneError');
  const cMessageError = document.getElementById('c-messageError');



  // re-validate on input as user types
  cFirstName.addEventListener('input', function () {
    const val = cFirstName.value.trim();
    if (val === '' || !regEx_Name.test(val)) {
      cNameError.innerHTML = val === '' ? 'First name is required' : 'Only letters are allowed';
    } else {
      cNameError.innerHTML = '';
    }
  });

  cLastName.addEventListener('input', function () {
    const val = cLastName.value.trim();
    if (val === '' || !regEx_Name.test(val)) {
      cLastError.innerHTML = val === '' ? 'Last name is required' : 'Only letters are allowed';
      cLastName.classList.add('notValid');
    } else {
      cLastError.innerHTML = '';
      cLastName.classList.remove('notValid');
    }
  });

  cEmail.addEventListener('input', function () {
    const val = cEmail.value.trim();
    if (val === '' || !regEx_Email.test(val)) {
      cEmailError.innerHTML = val === '' ? 'Email is required' : 'Enter a valid email';
      cEmail.classList.add('notValid');
    } else {
      cEmailError.innerHTML = '';
      cEmail.classList.remove('notValid');
    }
  });

  cPhone.addEventListener('input', function () {
    const val = cPhone.value.trim();

    if (val === '') {
      cPhoneError.innerHTML = 'Phone number is required';
      cPhone.classList.add('notValid');
    } else if (!regEx_Phone.test(val)) {
      cPhoneError.innerHTML = 'Enter a valid phone number';
      cPhone.classList.add('notValid');
    } else {
      cPhoneError.innerHTML = '';
      cPhone.classList.remove('notValid');
    }
  });

  cMessage.addEventListener('input', function () {
    const val = cMessage.value.trim();
    if (val === '') {
      cMessageError.innerHTML = 'Message is required';
      cMessage.classList.add('notValid');
    } else {
      cMessageError.innerHTML = '';
      cMessage.classList.remove('notValid');
    }
  });
  // this is to validate the input when the right value is typed in

  window.ValidateContactForm = function () {
    let isValid = true;

    // First Name
    const firstVal = cFirstName.value.trim();
    if (firstVal === '') {
      cNameError.innerHTML = 'First name is required';
      cFirstName.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Name.test(firstVal)) {
      cNameError.innerHTML = 'Only letters are allowed';
      cFirstName.classList.add('notValid');
      isValid = false;
    } else {
      cNameError.innerHTML = '';
      cFirstName.classList.remove('notValid');
    }

    // Last Name
    const lastVal = cLastName.value.trim();
    if (lastVal === '') {
      cLastError.innerHTML = 'Last name is required';
      cLastName.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Name.test(lastVal)) {
      cLastError.innerHTML = 'Only letters are allowed';
      cLastName.classList.add('notValid');
      isValid = false;
    } else {
      cLastError.innerHTML = '';
      cLastName.classList.remove('notValid');
    }

    // Email
    const emailVal = cEmail.value.trim();
    if (emailVal === '') {
      cEmailError.innerHTML = 'Email is required';
      cEmail.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Email.test(emailVal)) {
      cEmailError.innerHTML = 'Enter a valid email';
      cEmail.classList.add('notValid');
      isValid = false;
    } else {
      cEmailError.innerHTML = '';
      cEmail.classList.remove('notValid');
    }

    // Phone
    const phoneVal = cPhone.value.trim();
    if (phoneVal === '') {
      cPhoneError.innerHTML = 'Phone number is required';
      cPhone.classList.add('notValid');
      isValid = false;
    } else if (!regEx_Phone.test(phoneVal)) {
      cPhoneError.innerHTML = 'Enter a valid phone number';
      isValid = false;
    } else {
      cPhoneError.innerHTML = '';
    }

    // Message
    const messageVal = cMessage.value.trim();
    if (messageVal === '') {
      cMessageError.innerHTML = 'Message is required';
      cMessage.classList.add('notValid');
      isValid = false;
    } else {
      cMessageError.innerHTML = '';
      cMessage.classList.remove('notValid');
    }

    return isValid;
  };
});

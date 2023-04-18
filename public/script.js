// Login and registration functionality
const loginForm = document.getElementById('login-form');
// const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // TODO: Implement login functionality
});

// registerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // TODO: Implement registration functionality
// });

// Form validation
// const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
// const confirmPasswordInput = document.getElementById('confirm-password');

function validateForm() {
//   const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
//   const confirmPassword = confirmPasswordInput.value.trim();

//   if (username === '') {
//     alert('Please enter a username.');
//     return false;
//   }

  if (email === '') {
    alert('Please enter an email address.');
    return false;
  }

  if (password === '') {
    alert('Please enter a password.');
    return false;
  }

//   if (confirmPassword === '') {
    // alert('Please confirm your password.');
    // return false;
//   }

//   if (password !== confirmPassword) {
    // alert('Passwords do not match.');
    // return false;
//   }

  return true;
}

loginForm.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// registerForm.addEventListener('submit', (event) => {
//   if (!validateForm()) {
//     event.preventDefault();
//   }
// });

// Sidebar functionality
const sidebarLinks = document.querySelectorAll('.sidebar li a');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    // TODO: Display selected contact's chat history
  });
});
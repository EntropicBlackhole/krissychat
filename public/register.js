// Get the form element
const form = document.querySelector('form');

// Get the input elements
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Add event listener to form
form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the input values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  
  // Validate input values
  if (username === '') {
    alert('Please enter a username.');
    return;
  }
  
  if (email === '') {
    alert('Please enter an email address.');
    return;
  }
  
  if (password === '') {
    alert('Please enter a password.');
    return;
  }
  
  if (confirmPassword === '') {
    alert('Please confirm your password.');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  
  // Submit the form
  form.submit();
});
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (usernameInput.value !== '' && emailInput.value !== '' && passwordInput.value !== '' && confirmPasswordInput.value !== '') {
		if (passwordInput.value === confirmPasswordInput.value) {
			alert('Account created successfully!');
			form.reset();
		} else {
			alert('Passwords do not match!');
			passwordInput.value = '';
			confirmPasswordInput.value = '';
			passwordInput.focus();
		}
	}
});
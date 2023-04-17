const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (usernameInput.value !== '' && passwordInput.value !== '') {
		alert('Logged in successfully!');
		form.reset();
		window.location.href = '../../index.html'
		
	}
});
// Button
const button = document.getElementById('button');

// Input
const input = document.getElementById('email');

// Form
const form = document.querySelector('.input-group');

// Error Message
const message = document.querySelector('.error-message');

form.addEventListener('submit', validate);
button.addEventListener('click', validate);

function validate(e) {
	e.preventDefault();

	const inputValue = document.getElementById('email').value;

	if (isEmail(inputValue)) {
		input.style.border = '1px solid var(--Pale-Blue)';
		message.style.display = 'none';
		alert('Success');
	} else {
		input.style.border = '2px solid var(--Light-Red)';
		message.style.display = 'block';
	}
}

function isEmail(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

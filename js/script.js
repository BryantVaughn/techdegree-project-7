// Gather elements
const alertContainer = document.querySelector('.alert-container');

const alertItem = document.createElement('div');
// generateAlert(alertItem);

alertContainer.appendChild(alertItem);

function generateAlert(parentElement) {
	const span = document.createElement('span');
	const p = document.createElement('p');

	span.textContent = 'Alert';
	p.innerText = 'This is a test';

	parentElement.appendChild('span');
	parentElement.appendChild('p');
}

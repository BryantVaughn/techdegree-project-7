// Gather elements
const alertContainer = document.querySelector('.alert-container');
const msgForm = document.querySelector('.msg-form');
const msgFormSubmit = document.querySelector('#send');

// Functions
function generateAlert(parentElement, alertMsg) {
	// Create 3 elements used in alert
	const alertItem = document.createElement('div');
	const span = document.createElement('span');
	const p = document.createElement('p');

	// Add alert class to each alert div
	alertItem.classList.add('alert');

	// Add text and append to div
	span.textContent = 'Alert';
	alertItem.appendChild(span);

	// Add text and append to div
	p.innerText = alertMsg;
	alertItem.appendChild(p);

	// Create close button, add class, and append
	const closeBtn = addButtonToElement(alertItem, 'x');
	closeBtn.classList.add('alert-close');

	// Append div to passed in parent element
	parentElement.appendChild(alertItem);
}

function addButtonToElement(parentElement, buttonContent) {
	const button = document.createElement('button');
	button.textContent = buttonContent;
	parentElement.appendChild(button);
	return button;
}

function removeAlert(evt) {
	const { target } = evt;

	if (target.tagName === 'BUTTON') {
		const alertDiv = target.parentNode;
		const alertContainer = alertDiv.parentNode;

		setTimeout(() => {
			alertContainer.removeChild(alertDiv);
		}, 1000);
		alertDiv.style.opacity = 0;
	}
}

function submitFormData() {
	let userInput = msgForm.querySelector('input');
	let user = userInput.value;

	let msgInput = msgForm.querySelector('textarea');
	let msg = msgInput.value;

	if (user === '' && msg === '') {
		alert('Error: User and Message Required');
	} else if (user === '') {
		alert('Error: User is required');
	} else if (msg === '') {
		alert('Error: Message is required');
	} else {
		alert(`Success: Your message has been sent to ${user}`);
		userInput.value = '';
		msgInput.value = '';
	}
}

// Build alerts
const alertMessages = [
	'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.',
	'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.'
];

for (let message of alertMessages) {
	generateAlert(alertContainer, message);
}

// Event Listeners
alertContainer.addEventListener('click', (evt) => {
	removeAlert(evt);
});

msgFormSubmit.addEventListener('click', (evt) => {
	evt.preventDefault();
	submitFormData();
});

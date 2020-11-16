// Gather elements
const alertContainer = document.querySelector('.alert-container');

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

// Build alerts
const alertMessages = [
	'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.',
	'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.'
];

for (let message of alertMessages) {
	generateAlert(alertContainer, message);
}

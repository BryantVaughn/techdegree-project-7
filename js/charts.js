// Gather charts
const webTraffic = document.getElementById('webTraffic');
const dailyTraffic = document.getElementById('dailyTraffic');
const mobileUsers = document.getElementById('mobileUsers');

// Gather duration buttons div
const durationBtnsDiv = document.querySelector('.duration-btns');

// Variables
const label = 'Traffic';
const fill = true;
const lineTension = 0;
const backgroundColor = 'rgba(109,105,195,0.3)';
const borderColor = 'rgba(109,105,195,0.9)';
const borderWidth = 2;

// Build Line Chart
function buildLineChart(duration) {
	const webTrafficChart = new Chart(webTraffic, {
		type: 'line',
		data: buildLineChartData(duration),
		options: {
			legend: {
				display: false
			}
		}
	});
}

// Build Bar Chart
const dailyTrafficChart = new Chart(dailyTraffic, {
	type: 'bar',
	data: {}
});

function buildLineChartData(duration) {
	const data = {};
	data.datasets = [];

	// Temp obj used for dataset
	const config = {
		label: 'Traffic',
		fill,
		lineTension,
		backgroundColor,
		borderColor,
		borderWidth
	};

	// Dataset Labels
	const labels = {
		hourlyWebTrafficLabels: [
			'0000',
			'0200',
			'0400',
			'0600',
			'0800',
			'1000',
			'1200',
			'1400',
			'1600',
			'1800',
			'2000',
			'2200'
		],
		dailyWebTrafficLabels: [
			'21st',
			'22nd',
			'23rd',
			'24th',
			'25th',
			'26th',
			'27th',
			'28th',
			'29th',
			'30th',
			'31st'
		],
		weeklyWebTrafficLabels: [
			'16-22',
			'23-29',
			'30-5',
			'6-12',
			'13-19',
			'20-26',
			'27-3',
			'4-10',
			'11-17',
			'18-24',
			'25-31'
		],
		monthlyWebTrafficLabels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		]
	};

	// Dataset Values
	const datasets = {
		hourlyWebTrafficData: [2, 1, 3, 8, 25, 35, 41, 47, 43, 36, 23, 10],
		dailyWebTrafficData: [
			250,
			275,
			300,
			225,
			300,
			325,
			275,
			250,
			300,
			350,
			400
		],
		weeklyWebTrafficData: [
			500,
			1000,
			750,
			1250,
			1700,
			1250,
			1500,
			1000,
			1500,
			2000,
			2200
		],
		monthlyWebTrafficData: [
			2200,
			3750,
			4200,
			4050,
			3950,
			4100,
			4600,
			4750,
			4925,
			5350,
			5700,
			6700
		]
	};

	// Add dynamic labels and data
	data.labels = labels[`${duration}WebTrafficLabels`];
	config.data = datasets[`${duration}WebTrafficData`];
	data.datasets.push(config);

	// Return data obj
	return data;
}

function handleDurationButtonUpdate(buttons, target) {
	for (let button of buttons) {
		button.classList.remove('active-btn');
		button.disabled = false;
	}
	target.classList.add('active-btn');
	target.disabled = true;
	buildLineChart(target.textContent.toLowerCase());
}

// Event Listeners
durationBtnsDiv.addEventListener('click', (evt) => {
	const { target } = evt;
	if (target.tagName === 'BUTTON') {
		const buttons = durationBtnsDiv.children;
		handleDurationButtonUpdate(buttons, target);
	}
});

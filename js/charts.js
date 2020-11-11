// Gather charts
const webTraffic = document.getElementById('webTraffic');

// Variables
const label = 'Traffic';
const fill = true;
const lineTension = 0;
const backgroundColor = 'rgba(109,105,195,0.3)';
const borderColor = 'rgba(109,105,195,0.9)';
const borderWidth = 2;
const pointRadius = 4;
const pointBackgroundColor = 'rgb(255,255,255)';

// Dataset Labels
const hourlyWebTrafficLabels = [
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
];
const dailyWebTrafficLabels = [
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
];
const weeklyWebTrafficLabels = [
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
];

// Dataset Values
const hourlyWebTrafficData = [2, 1, 3, 8, 25, 35, 41, 47, 43, 36, 23, 10];
const dailyWebTrafficData = [
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
];
const weeklyWebTrafficData = [
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
];

const webTrafficChart = new Chart(webTraffic, {
	type: 'line',
	data: {
		labels: weeklyWebTrafficLabels,
		datasets: [
			{
				label: 'Traffic',
				data: weeklyWebTrafficData,
				fill: true,
				lineTension,
				backgroundColor,
				borderColor,
				borderWidth
			}
		]
	}
});

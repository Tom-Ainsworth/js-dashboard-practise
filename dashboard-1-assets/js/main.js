// Get CSS Variables

const getColorVariable = (color) => {
	return getComputedStyle(document.documentElement)
		.getPropertyValue(`--color-${color}`)
		.trim();
};

const colorPrimary = getColorVariable('primary');
const colorAccent = getColorVariable('accent');
const colorDefault = getColorVariable('default');
const colorCard = getColorVariable('card');
const colorLabel = getColorVariable('label');

// Declare Default Chart Options
const defaultOptions = {
	chart: {
		height: 136,
		width: '100%',
	},
	tooltip: {
		enabled: true,
		style: {
			fontFamily: 'Sora',
		},
	},
};
// Create sparklines bar chart
const sparklineBarOptions = {
	series: [
		{
			data: [12, 24, 12, 35, 64, 32, 33, 15],
		},
	],
	...defaultOptions,
	chart: {
		type: 'bar',
		width: 80,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	colors: [colorPrimary],
	plotOptions: {
		bar: {
			columnWidth: '80%',
		},
	},
	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	xaxis: {
		crosshairs: {
			width: 0,
		},
	},
	tooltip: {
		enabled: false,
	},
};

const sparklineBarChart = new ApexCharts(
	document.querySelector('#sparklinesBar'),
	sparklineBarOptions
);

sparklineBarChart.render();

// Create radial bar chart

// Create bar Chart

// Create gauge Chart

// Create area chart

// Create line Chart

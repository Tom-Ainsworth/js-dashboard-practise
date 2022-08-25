// Get CSS Variables

const getColorVariable = (color) =>
	getComputedStyle(document.documentElement)
		.getPropertyValue(`--color-${color}`)
		.trim();

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
		toolbar: {
			show: false,
		},
	},
	tooltip: {
		enabled: true,
		fillSeriesColor: false,
		style: {
			fontFamily: 'Sora',
		},
	},
	legend: {
		show: false,
	},
	selection: {
		enabled: false,
	},
	states: {
		hover: {
			filter: {
				type: 'none',
			},
		},
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			type: 'vertical',
			shadeIntensity: 0.2,
			gradientToColors: undefined,
			inverseColors: true,
			stops: [0, 50, 100],
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
	selection: {
		enabled: true,
	},
};

const sparklineBarChart = new ApexCharts(
	document.querySelector('#sparklinesBar'),
	sparklineBarOptions
);

sparklineBarChart.render();

// Create radial bar chart
const radialBarOptions = {
	...defaultOptions,
	chart: {
		...defaultOptions.chart,
		type: 'radialBar',
	},
	series: [33],
	labels: ['Usage'],
	colors: [colorPrimary],
	grid: {
		show: false,
		padding: { left: -30, right: -30, top: -15, bottom: -15 },
	},
	stroke: {
		lineCap: 'round',
	},
	plotOptions: {
		radialBar: {
			hollow: {
				size: '60%',
			},
			dataLabels: {
				show: false,
			},
			track: {
				background: colorDefault,
			},
		},
	},
};

const radialBarChart = new ApexCharts(
	document.querySelector('#radialBarChart'),
	radialBarOptions
);

radialBarChart.render();

// Create bar Chart

const barChartOptions = {
	series: [
		{
			name: 'Y1',
			data: [12, 24, 12, 35, 64, 32, 33, 15],
		},
		{
			name: 'Y2',
			data: [19, 21, 22, 49, 80, 11, 23, 77],
		},
	],
	...defaultOptions,
	chart: {
		...defaultOptions,
		type: 'bar',
	},
	colors: [colorPrimary, colorDefault],
	plotOptions: {
		bar: {
			columnWidth: '50%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	grid: {
		strokeDashArray: 3,
		borderColor: 'rgba(255, 255, 255, 0.05)',
		padding: { left: 20, right: 20, top: -16, bottom: -12 },
	},
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		labels: {
			style: {
				fontFamily: 'Sora',
				colors: colorLabel,
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		crosshairs: {
			show: false,
		},
	},
	yaxis: {
		show: false,
	},
};

const barChart = new ApexCharts(
	document.querySelector('#barChart'),
	barChartOptions
);

barChart.render();
// Create gauge Chart

// Create area chart

// Create line Chart

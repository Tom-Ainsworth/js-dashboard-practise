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

// Create sparklines bar chart

// Create radial bar chart

// Create bar Chart

// Create gauge Chart

// Create area chart

// Create line Chart

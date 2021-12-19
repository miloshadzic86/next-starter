module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				backgroundDark: '#141517',
				backgroundLighter: '#1a1b1e',
				fontCream: '#FFECD6',
				accent: '#A3E635',
			},
		},
		fontFamily: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

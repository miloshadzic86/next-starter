const colors = require('tailwindcss/colors');

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
				orange: colors.orange,
				amber: colors.amber,
				emerald: colors.emerald,
				lime: colors.lime,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				rose: colors.rose,
			},
		},
		fontFamily: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

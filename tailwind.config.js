const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
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
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

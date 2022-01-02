module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				backgroundDark: '#141517',
				backgroundLighter: '#1a1b1e',
				accent: '#A3E635',
				// accent: '#A3E635', // lime-400
				primary: '#1e40af', // indigo-800
				// accent: '#86198f', // fuchsia-800
				// secondary: '#9f1239', // rose-800
				secondary: '#f43f5e', // rose-500

				// LightMode colors
				grayBorder: '#DCDDE0',
				grayText: '#525866',
				darkerText: '#0E1217', // selected
				cardColor: '#F5F8FC',
			},
		},
		fontFamily: {
			poppins: "'Poppins', sans-serif",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

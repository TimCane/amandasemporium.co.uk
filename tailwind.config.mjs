/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
				serif: ['Bitter Variable', ...defaultTheme.fontFamily.serif],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',

			'mandy': {
				'50': '#fef2f3',
				'100': '#fde6e7',
				'200': '#fbd0d5',
				'300': '#f7aab2',
				'400': '#f27a8a',
				'500': '#ea546c',
				'600': '#d5294d',
				'700': '#b31d3f',
				'800': '#961b3c',
				'900': '#811a39',
				'950': '#48091a',
			},

		}
	},
	plugins: [],
}

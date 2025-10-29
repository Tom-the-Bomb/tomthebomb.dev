const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'zh': ['Long Cang', ...defaultTheme.fontFamily.serif],
				'sans': ['Titillium Web', ...defaultTheme.fontFamily.sans],
				'mono': ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
				'nexa-black-italic': ['Nexa Black Italic', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}

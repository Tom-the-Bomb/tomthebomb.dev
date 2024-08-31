const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'SC': ['Arsenal SC', ...defaultTheme.fontFamily.sans],
				'sans': ['Titillium Web', ...defaultTheme.fontFamily.sans],
				'mono': ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
			}
		},
	},
	plugins: [],
}

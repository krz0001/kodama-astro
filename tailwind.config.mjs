import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'release': ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
		  },
		  boxShadow: {
			'inner-xl': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.5)',
		  }
		}
	},
	plugins: [require('@tailwindcss/typography')],
}

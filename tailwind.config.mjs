/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'release': ['var(--font-noto)', 'sans-serif'],
		  },
		  boxShadow: {
			'inner-xl': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.5)',
		  }
		}
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'forum-bg': '#1F1F1F',
				'forum-text': '#FFFFFF',
				'forum-accent-green': '#06FF93',
				'forum-accent-yellow': '#FFCC00',
				'forum-divider': '#626262',
				'forum-shadow': 'rgba(0, 0, 0, 0.25)'
			},
			fontFamily: {
				'anybody': ['Anybody', 'sans-serif']
			},
			borderRadius: {
				'forum': '16px'
			},
			boxShadow: {
				'forum': '0 0 11px 3px rgba(0, 0, 0, 0.25)'
			}
		}
	},
	plugins: []
};

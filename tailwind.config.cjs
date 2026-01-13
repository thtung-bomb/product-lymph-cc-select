module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{js,ts,jsx,tsx,html}'
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				scroll: 'scroll 10s linear infinite',
			},
		},
	},
	plugins: [],
}

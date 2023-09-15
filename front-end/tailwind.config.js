/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#edf9ff",
					100: "#d6f0ff",
					200: "#b5e6ff",
					300: "#83d8ff",
					400: "#48c1ff",
					500: "#1ea0ff",
					600: "#0681ff",
					700: "#006cfd",
					800: "#0853c5",
					900: "#0d499b",
					950: "#0e2d5d",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};

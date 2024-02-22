/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      small: "500px",
      medium: "700px",
      large: "900px",
      xlarge: "1024",
      "2xlarge": "1280",
      "3xlarge": "1536",
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
      pizza: "Roboto Mono,monospace/s",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

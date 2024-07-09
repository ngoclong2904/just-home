/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                btnPrimary: "#E7C873",
                btnGreen: "#1F4B43",
                primary: "#372f2f",
            },
        },
    },
    plugins: [],
};

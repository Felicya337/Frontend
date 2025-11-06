/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                merah: {
                    50: '#fef2f2',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                },
            },
        },
    },
    plugins: [],
};

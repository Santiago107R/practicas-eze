/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                light: {
                    primaryColor: '#818cf8', 
                    primaryColorHover: '#6366f1',   
                },
                dark: {
                    primaryColor: '#4f46e5', 
                    primaryColorHover: '#4338ca',
                },
            },
        },
    },
    plugins: [],
}
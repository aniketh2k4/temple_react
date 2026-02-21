/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                maroon: {
                    DEFAULT: '#800000',
                    light: '#A52A2A',
                    dark: '#4A0000'
                },
                gold: {
                    DEFAULT: '#FFD700',
                    light: '#FCE670',
                    dark: '#B8860B'
                },
                cream: '#FFFDD0',
                sandal: '#E6C280',
                offwhite: '#FAF9F6'
            },
            fontFamily: {
                display: ['Cinzel', 'serif'],
                serif: ['"Playfair Display"', 'serif'],
                script: ['Laila', 'sans-serif'],
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                }
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [],
}

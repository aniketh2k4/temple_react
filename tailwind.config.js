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
                    50: '#fdf2f2',
                    100: '#fde8e8',
                    200: '#fbd5d5',
                    300: '#f8b4b4',
                    400: '#f98080',
                    500: '#f05252',
                    600: '#e02424',
                    700: '#c81e1e',
                    800: '#9b1c1c',
                    900: '#570000',
                    950: '#2A0A0A',
                },
                gold: {
                    300: '#fceeb5',
                    400: '#faca15',
                    500: '#e3a008',
                    600: '#c27803',
                    700: '#9f580a',
                },
                cream: '#FFFDD0',
                offwhite: '#FAF9F6',
                sandal: '#f4ecd8',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                display: ['Cinzel', 'serif'],
                script: ['Laila', 'serif'],
            },
            backgroundImage: {
                'mandala-pattern': "url('https://www.transparenttextures.com/patterns/black-linen.png')",
            },
            animation: {
                'slow-pan': 'pan 20s infinite alternate',
                'fade-in-down': 'fadeInDown 1s ease-out forwards',
            },
            keyframes: {
                pan: {
                    '0%': { transform: 'scale(1.0)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}

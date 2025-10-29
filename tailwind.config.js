/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                blink: 'blink 1s steps(16) infinite'
            },
            keyframes: {
                blink: {
                    '0%': {
                        opacity: '0'
                    },
                    '0.1%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '1'
                    },
                    '50.1%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '0'
                    }
                }
            },
            colors: {
                // Primary brand colors
                primary: '#02161F',
                secondary: '#010C11',
                accent: '#6B81FA',

                // Text colors
                foreground: '#FFFFFF',

                // Interactive elements
                'button-primary': '#6B81FA',
                'button-hover': '#A8B5FF'
            },
            fontFamily: {
                // Override default font families to use DM Mono
                sans: ['var(--font-dm-mono)'],
                serif: ['var(--font-dm-mono)'],
                mono: ['var(--font-dm-mono)'],
                // Custom font families
                'dm-mono': ['var(--font-dm-mono)']
            }
        }
    },
    plugins: []
}

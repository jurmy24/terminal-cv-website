/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                typewriter: 'typewriter 1.5s steps(16) forwards',
                caret: 'typewriter 1.5s steps(16) forwards, blink 1s steps(16) infinite 2s'
            },
            keyframes: {
                typewriter: {
                    to: {
                        left: '100%'
                    }
                },
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
                mainBgLight: '#f3f3fb',
                mainBgDark: '#36393f',
                mainTextLight: '#141619',
                mainTextDark: '#f3f3fb',
                terminalBgDark: '#202225',
                terminalBgLight: '#f3f3fb',
                terminalTextDark: '#f3f3fb',
                terminalTextLight: '#141619',
                buttonText: '#7e41e4',
                buttonBgLight: '#d7dbe6',
                buttonBgDark: '#1f2937',
                buttonBgHoverLight: '#C6AAE8',
                buttonBgHoverDark: '#4b3e5a',
                gray: {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5'
                }
            },
            fontFamily: {
                BigBlueTermMono: ['BigBlueTermMonoRegular'],
                ProFontIIxNerdFontRegular: ['ProFontIIxNerdFontRegular'],
                mono: ['Monaco']
            }
        }
    },
    plugins: []
}

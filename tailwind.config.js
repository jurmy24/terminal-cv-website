/** @type {import('tailwindcss').Config} */
export default {
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
                terminalBgDark: '#141619',
                terminalBgLight: '#f3f3fb',
                terminalTextDark: '#f3f3fb',
                terminalTextLight: '#141619',
                aboutBg: '#f3f3fb',
                buttonBgDark: '#c6aae8',
                buttonBgLight: '#b3b4bd'
            },
            fontFamily: {
                BigBlueTermMono: ['BigBlueTermMonoRegular'],
                ProFontIIxNerdFontRegular: ['ProFontIIxNerdFontRegular']
            }
        }
    },
    plugins: []
}

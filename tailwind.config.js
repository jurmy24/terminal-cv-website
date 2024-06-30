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
                mainBgDark: '#303338',
                mainTextLight: '#141619',
                mainTextDark: '#f3f3fb',
                terminalBgDark: '#1E1F22',
                terminalBgLight: '#E2E5E8',
                terminalTextDark: '#f3f3fb',
                terminalTextLight: '#141619',
                buttonText: '#7e41e4',
                buttonBgLight: '#d7dbe6',
                buttonBgDark: '#34373C',
                buttonBgHoverLight: '#C6AAE8',
                buttonBgHoverDark: '#4b3e5a',
                textboxBgLight: '#FFFFFF',
                textboxBgDark: '#34373C'
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

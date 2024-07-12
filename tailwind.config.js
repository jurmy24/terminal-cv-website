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
                typewriterSmall: 'typewriter 1.5s steps(12) forwards',
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
                mainBgLight: '#FFFFFF',
                mainBgDark: '#0E1117',
                terminalBgDark: '#161B22',
                terminalBgLight: '#F5F8FA',
                terminalTextDark: '#f3f3fb',
                terminalTextLight: '#636C76',
                purpleHighlight: '#7E41E4',
                buttonBgLight: '#d7dbe6',
                buttonBgDark: '#34373C',
                buttonBgHoverLight: '#C6AAE8',
                buttonBgHoverDark: '#4b3e5a',
                borderDark: '#30363C',
                borderLight: '#CFD7DE',
                markdownBgDark: '#0E1117',
                markdownBgLight: '#FFFFFF',
                markdownTextDark: '#E5EDF2',
                markdownTextLight: '#1F2328',
                markdownTopBarDark: '#161B22',
                markdownTopBarLight: '#F5F8FA',
                // Markdown Contents
                mdCodeBgLight: '#F2F2F2',
                mdCodeBgDark: '#343941'
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

import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            maxWidth: {
                custom: 'var(--max-width)'
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                    nav: 'rgba(98, 155, 197, 0.5)'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--secondary-foreground)'
                },
                black: {
                    DEFAULT: 'var(--black)'
                },
                white: {
                    DEFAULT: 'var(--white)',
                    bright: '#ffffff'
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)'
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)'
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)'
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                chart: {
                    '1': 'var(--chart-1)',
                    '2': 'var(--chart-2)',
                    '3': 'var(--chart-3)',
                    '4': 'var(--chart-4)',
                    '5': 'var(--chart-5)'
                }
            },
            borderRadius: {
                xl: 'calc(var(--border-radius) + 2px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
                montserrat: [
                    'var(--font-montserrat)',
                    'system-ui',
                    'sans-serif'
                ],
                poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif']
            },
            fontSize: {
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '22px',
                '2xl': '26px',
                '3xl': '30px',
                '4xl': '36px',
                '5xl': '40px',
                '6xl': '44px'
            }
        }
    },
    plugins: [tailwindcssAnimate]
}
export default config

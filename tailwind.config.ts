import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)'
                }
            },
            borderRadius: {
                xl: 'calc(var(--border-radius) + 2px)',
                lg: 'var(--border-radius)',
                md: 'calc(var(--border-radius) - 2px)',
                sm: 'calc(var(--border-radius) - 4px)'
            }
        }
    },
    plugins: [tailwindcssAnimate]
}
export default config

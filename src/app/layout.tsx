import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import FloatingHeader from '@/components/nav/floating-header'
import Footer from '@/components/nav/footer'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-montserrat',
    display: 'swap'
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    variable: '--font-poppins',
    display: 'swap'
})

import './styles/globals.css'

export const metadata = {
    title: 'Tampa Aquatic',
    description:
        'A trusted youth swim team, aiming to grow, based in the Tampa Florida area.',
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        shortcut: '/favicon.ico'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-96x96.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffffff" />
                <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="294e23a1-9df5-4288-8e8b-5369bdd476bf"
                ></script>
            </head>
            <body
                className={`${poppins.variable} ${montserrat.variable} antialiased`}
            >
                <FloatingHeader />
                {children}
                <Footer />
            </body>
        </html>
    )
}

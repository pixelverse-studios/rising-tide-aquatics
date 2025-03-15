import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import FloatingHeader from '@/components/header/FloatingHeader'

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

export const metadata: Metadata = {
    title: 'Tampa Aquatics',
    description:
        'A trusted youth swim team, aiming to grow, based in the Tampa Florida area.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${montserrat.variable} antialiased`}
            >
                <FloatingHeader />
                {children}
            </body>
        </html>
    )
}

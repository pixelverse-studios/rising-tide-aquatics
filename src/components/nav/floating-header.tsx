'use client'

import Link from 'next/link'
import { useState } from 'react'
import { pageRoutes } from '@/lib/routes'
import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'
import CallToAction from '../call-to-action'
import NavItems from './nav-items'

export default function FloatingHeader() {
    const { handleNavClick } = useSmoothScroll()

    const [hoveredIndex, setHoveredIndex] = useState<any>(null)

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        to: string
    ) => {
        handleNavClick(e, to, {
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <header className="fixed top-6 right-0 left-0 w-fit z-50 py-4 px-6 bg-secondary-nav m-auto rounded-lg flex gap-6 items-center shadow-xl backdrop-blur-xl border-1 border-primary">
            <NavItems items={pageRoutes} footer={false} />
            <CallToAction
                buttonLabel="Contact"
                buttonClass="text-white text-xl"
                variant="cta"
            />
        </header>
    )
}

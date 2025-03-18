'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { pageRoutes } from '@/lib/routes'
import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'
import CallToAction from '../call-to-action'
import NavItems from './nav-items'
import { Menu, X } from 'lucide-react'

export default function FloatingHeader() {
    const { handleNavClick } = useSmoothScroll()
    const [hoveredIndex, setHoveredIndex] = useState<any>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        to: string
    ) => {
        handleNavClick(e, to, {
            behavior: 'smooth',
            block: 'start'
        })
        setIsMenuOpen(false)
    }

    // Close menu when resizing to desktop or clicking outside
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            // Check if menu is open and the click is outside the menu
            if (isMenuOpen) {
                const target = event.target as HTMLElement
                // Close if we didn't click on menu toggle button (which has its own handler)
                if (
                    !target.closest('.mobile-menu') &&
                    !target.closest('.menu-toggle')
                ) {
                    setIsMenuOpen(false)
                }
            }
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <header className="fixed top-0 md:top-6 right-0 left-0 w-full md:w-fit z-50 py-4 px-6 bg-secondary-nav m-auto rounded-lg flex justify-end md:justify-start gap-6 items-center shadow-xl backdrop-blur-xl border-1 border-primary">
            {/* Logo or brand element could go here */}

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
                <NavItems items={pageRoutes} footer={false} />
                <CallToAction
                    buttonLabel="Contact"
                    buttonClass="text-white text-xl"
                    variant="cta"
                />
            </div>

            {/* Mobile hamburger button */}
            <button
                className="md:hidden flex items-center justify-center p-2 rounded-md transition-colors duration-200 hover:bg-opacity hover:bg-primary menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
                <Menu className="w-6 h-6 text-white" />
            </button>

            {/* Mobile navigation overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile navigation menu */}
            <div
                className={`md:hidden fixed top-0 right-0 bg-secondary rounded-lg shadow-2xl p-6 transition-all duration-300 ease-in-out transform mobile-menu w-full ${
                    isMenuOpen
                        ? 'translate-y-0 opacity-100 z-50'
                        : 'translate-y-full opacity-0 -z-10'
                }`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-end items-end mb-4">
                    <button
                        className="p-1 rounded-full hover:bg-primary hover:bg-opacity-10 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <NavItems
                        items={pageRoutes}
                        containerClass="flex-col"
                        itemClass="w-fit"
                        footer={false}
                    />
                    <div className="mt-2">
                        <CallToAction
                            buttonLabel="Contact"
                            buttonClass="text-white text-xl w-full"
                            variant="cta"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

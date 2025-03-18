'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'

interface NavItemProps {
    items: { destination: string; label: string }[]
    containerClass?: string
    itemClass?: string
    footer: boolean
}

export default function NavItems({
    items,
    containerClass,
    itemClass,
    footer
}: NavItemProps) {
    const { handleNavClick } = useSmoothScroll()
    const [hoveredIndex, setHoveredIndex] = useState<any>(null)

    return (
        <ul className={cn('flex gap-10', containerClass ?? '')}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={cn(
                        'text-xl text-white font-bold relative',
                        itemClass ?? ''
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Link
                        href={item.destination}
                        onClick={e =>
                            handleNavClick(e, item.destination, {
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                        className="block py-1 transition-colors duration-300 ease-in-out"
                    >
                        {item.label}
                    </Link>
                    {!footer ? (
                        <div
                            className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out"
                            style={{
                                width: hoveredIndex === index ? '100%' : '0%'
                            }}
                        />
                    ) : null}
                </li>
            ))}
        </ul>
    )
}

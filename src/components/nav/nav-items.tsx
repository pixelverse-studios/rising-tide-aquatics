'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavItemProps {
    items: { destination: string; label: string }[]
    containerClass?: string
    itemClass?: string
    footer: boolean
    handleClick?: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void
}

export default function NavItems({
    items,
    containerClass,
    itemClass,
    footer,
    handleClick
}: NavItemProps) {
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
                        onClick={e => {
                            if (handleClick) handleClick(e, item.destination)
                        }}
                        className={cn(
                            'block py-1 transition-scale duration-300 ease-in-out',
                            footer ? 'hover:scale-125' : ''
                        )}
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

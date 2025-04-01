'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import AnimatedSection from './animated-section'

interface TeamLevelProps {
    img: string
    difficulty: string
    title: string
    description: string
    bullets: string[]
    invert: boolean
}

export default function TeamLevel({
    img,
    difficulty,
    title,
    description,
    bullets,
    invert
}: TeamLevelProps) {
    return (
        <section id="teams" className={invert ? 'bg-white-bright' : 'bg-white'}>
            <AnimatedSection animation="fadeIn">
                <div
                    className={cn(
                        'max-w-custom mx-auto px-6 py-12 items-center grid grid-cols-1 lg:grid-cols-2 gap-6',
                        invert ? 'lg:grid-cols-[1fr_1fr]' : ''
                    )}
                >
                    <div className={invert ? 'lg:order-2' : ''}>
                        <h4>{difficulty}</h4>
                        <h2>{title}</h2>
                        <p className="font-semibold">{description}</p>
                        <ul className="grid grid-cols-2 pt-4">
                            {bullets.map(bullet => (
                                <li
                                    className="flex gap-4 items-center"
                                    key={bullet}
                                >
                                    <Check className="text-accent" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cn(invert ? 'lg:order-1' : '', 'pt-6')}>
                        <img
                            className={cn(
                                'h-[12rem] w-auto m-auto',
                                invert ? 'col-start-1' : 'col-start-2'
                            )}
                            src={img}
                            alt={`${title} background wave image`}
                        />
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}

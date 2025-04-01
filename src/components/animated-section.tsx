import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode, useMemo, useEffect, useState } from 'react'

type AnimationVariant = 'fadeIn' | 'slideLeft' | 'slideUp' | 'zoom'

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    animation?: AnimationVariant
    delay?: number
    duration?: number
    threshold?: number
    rootMargin?: string // Must be in pixel format like "-92px 0px -100px 0px"
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'slideLeft',
    delay = 0.2,
    duration = 0.4,
    threshold = 0.1,
    rootMargin = '0px 0px 0px 0px'
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useReducedMotion()
    const [hasAnimated, setHasAnimated] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    // Set mounted state after component mounts to ensure we're on client-side
    useEffect(() => {
        setHasMounted(true)
    }, [])

    // Use provided threshold, the rootMargin is handled manually below
    const isInView = useInView(ref, {
        once: true,
        amount: threshold
        // rootMargin is not supported in Framer Motion's useInView type
    })

    // Check if element is visible on initial load, accounting for header height
    useEffect(() => {
        if (hasMounted && !hasAnimated && ref.current) {
            const checkVisibility = () => {
                const rect = ref.current?.getBoundingClientRect()
                if (!rect) return false

                // Get header height
                const header = document.querySelector('header')
                let headerHeight = 0

                if (header) {
                    const headerStyles = window.getComputedStyle(header)
                    headerHeight = header.getBoundingClientRect().height
                }

                // Parse rootMargin values
                const margins = rootMargin
                    .split(' ')
                    .map(margin => parseInt(margin))
                const topMargin = margins[0] || 0

                // Element is visible if it's in viewport and below header
                const isInitiallyVisible =
                    rect.top < window.innerHeight + topMargin &&
                    rect.top > headerHeight &&
                    rect.bottom > headerHeight &&
                    rect.left < window.innerWidth &&
                    rect.right > 0

                if (isInitiallyVisible) {
                    setHasAnimated(true)
                }
            }

            // Check visibility immediately and after a short delay
            checkVisibility()

            // Additional checks to handle different loading scenarios
            const timeouts = [
                setTimeout(checkVisibility, 100),
                setTimeout(checkVisibility, 500)
            ]

            return () => {
                timeouts.forEach(clearTimeout)
            }
        }
    }, [hasMounted, hasAnimated, rootMargin])

    // Memoize animations to prevent recreation on each render
    const animations = useMemo(
        () => ({
            fadeIn: {
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            },
            slideLeft: {
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
            },
            slideUp: {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            },
            zoom: {
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
            }
        }),
        []
    )

    // Respect user's reduced motion preferences
    const selectedAnimation = prefersReducedMotion
        ? animations.fadeIn
        : animations[animation]

    // Determine if animation should play
    const shouldAnimate = isInView || hasAnimated

    // Optimize with hardware acceleration and better transition values
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
            variants={selectedAnimation}
            transition={{
                duration: prefersReducedMotion ? duration * 0.5 : duration,
                delay,
                ease: 'easeOut',
                staggerChildren: 0.1
            }}
            style={{
                willChange: 'opacity, transform',
                backfaceVisibility: 'hidden'
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

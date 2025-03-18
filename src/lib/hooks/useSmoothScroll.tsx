import { useCallback } from 'react'

/**
 * Custom hook that provides smooth scrolling functionality to elements by ID
 * without changing the URL hash
 *
 * @returns Object with utility functions for smooth scrolling
 */
export const useSmoothScroll = () => {
    /**
     * Scrolls smoothly to an element with the specified ID
     *
     * @param elementId - The ID of the element to scroll to
     * @param options - Optional scroll behavior options
     */
    const scrollToElement = useCallback(
        (
            elementId: string,
            options: ScrollIntoViewOptions = {
                behavior: 'smooth',
                block: 'start'
            }
        ): void => {
            const element = document.getElementById(elementId)
            if (element) {
                element.scrollIntoView(options)
            }
        },
        []
    )

    /**
     * Handles click events on navigation links, preventing default behavior
     * and scrolling smoothly to the target element
     *
     * @param e - The click event
     * @param elementId - The ID of the element to scroll to
     * @param options - Optional scroll behavior options
     */
    const handleNavClick = useCallback(
        (
            e: React.MouseEvent<HTMLAnchorElement>,
            elementId: string,
            options?: ScrollIntoViewOptions
        ): void => {
            e.preventDefault()
            scrollToElement(elementId, options)
        },
        [scrollToElement]
    )

    /**
     * Scrolls to a specific Y position on the page
     *
     * @param y - The Y position to scroll to in pixels
     * @param options - Optional scroll behavior options
     */
    const scrollToPosition = useCallback(
        (
            y: number,
            options: ScrollToOptions = { behavior: 'smooth' }
        ): void => {
            window.scrollTo({
                top: y,
                ...options
            })
        },
        []
    )

    return {
        scrollToElement,
        handleNavClick,
        scrollToPosition
    }
}

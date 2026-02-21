import { useEffect, useRef } from 'react'

/**
 * A hook that uses IntersectionObserver to add an 'active' class to elements when they enter the viewport.
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0 to 1) before triggering
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} triggerOnce - If true, the animation only happens once. If false, it repeats on scroll.
 * @returns {React.MutableRefObject} A ref to attach to the element you want to animate
 */
export const useRevealOnScroll = (options = { threshold: 0.1, rootMargin: '0px' }, triggerOnce = true) => {
    const ref = useRef(null)

    useEffect(() => {
        const currentRef = ref.current
        if (!currentRef) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the active class when the element comes into view
                    entry.target.classList.add('active')

                    // If we only want to trigger the animation once, unobserve after it's active
                    if (triggerOnce) {
                        observer.unobserve(entry.target)
                    }
                } else if (!triggerOnce) {
                    // Optional: Remove active class when out of view if we want repeatable animations
                    entry.target.classList.remove('active')
                }
            })
        }, options)

        observer.observe(currentRef)

        // Cleanup observer on unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [options, triggerOnce])

    return ref
}

export default useRevealOnScroll

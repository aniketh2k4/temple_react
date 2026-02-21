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
        // Disabled globally to avoid DOM render halting bugs
        if (ref.current) {
            ref.current.classList.add('active');
        }
    }, [])

    return ref
}

export default useRevealOnScroll

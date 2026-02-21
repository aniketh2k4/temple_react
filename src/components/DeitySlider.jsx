import { useState, useEffect, useCallback } from 'react'
import { DEITIES } from '../data/deities'

const ANIMATION_DURATION = 600 // ms matching transition-duration

const DeitySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [slideDirection, setSlideDirection] = useState('right') // 'right' | 'left'

    const handleNext = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlideDirection('right')
        setCurrentIndex((prev) => (prev + 1) % DEITIES.length)
    }, [isAnimating])

    const handlePrev = useCallback(() => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlideDirection('left')
        setCurrentIndex((prev) => (prev - 1 + DEITIES.length) % DEITIES.length)
    }, [isAnimating])

    const handleDotClick = (index) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)
        setSlideDirection(index > currentIndex ? 'right' : 'left')
        setCurrentIndex(index)
    }

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                handleNext()
            } else if (e.key === 'ArrowLeft') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleNext, handlePrev])

    // Animation Lock Timer
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false)
            }, ANIMATION_DURATION)
            return () => clearTimeout(timer)
        }
    }, [isAnimating])

    return (
        <section className="py-20 bg-cream relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-widest text-maroon uppercase mb-2">Divine Presence</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Our Presiding Deities</h3>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                </div>

                <div className="relative h-[600px] w-full rounded-2xl shadow-2xl bg-white overflow-hidden">
                    {/* Slider Items Container */}
                    {DEITIES.map((deity, idx) => {
                        const isActive = idx === currentIndex

                        // Adjust starting translation based on sliding direction
                        const translateInactive = slideDirection === 'right' ? 'translate-x-12' : '-translate-x-12'

                        return (
                            <div
                                key={deity.id}
                                className={`absolute inset-0 flex flex-col md:flex-row w-full h-full transition-all duration-700 ease-in-out ${isActive
                                    ? 'opacity-100 translate-x-0 z-10'
                                    : `opacity-0 ${translateInactive} z-0`
                                    }`}
                                // Using hidden when entirely faded out to avoid click interception from invisible slides
                                style={{ visibility: isActive || isAnimating ? 'visible' : 'hidden' }}
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-maroon/20 z-10 mix-blend-multiply"></div>
                                    <img
                                        src={deity.image}
                                        alt={deity.name}
                                        className={`w-full h-full object-cover transition-transform duration-[2000ms] ${isActive ? 'scale-105' : 'scale-100'}`}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-offwhite">
                                    <span className="text-gold-dark font-script text-2xl mb-2 block">{deity.subtitle}</span>
                                    <h4 className="text-3xl md:text-4xl font-display font-bold text-maroon mb-4">{deity.name}</h4>
                                    <h5 className="text-xl text-gray-700 font-serif font-medium mb-6 pb-6 border-b border-gray-200">
                                        {deity.title}
                                    </h5>
                                    <p className="text-gray-600 leading-relaxed font-serif text-lg">
                                        {deity.description}
                                    </p>

                                    <button className="mt-8 border-2 border-maroon text-maroon hover:bg-maroon hover:text-white px-8 py-3 rounded uppercase tracking-wider font-bold transition-colors w-max">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    {/* Controls Container */}
                    <div className="absolute inset-x-0 top-1/2 md:top-auto md:bottom-8 transform -translate-y-1/2 md:translate-y-0 z-20 px-4 md:px-8 flex justify-between md:justify-end md:gap-4 pointer-events-none">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-maroon shadow-lg hover:bg-maroon hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
                            aria-label="Previous Deity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-maroon shadow-lg hover:bg-maroon hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
                            aria-label="Next Deity"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-8 gap-3">
                    {DEITIES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            disabled={isAnimating}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'w-10 bg-maroon'
                                : 'w-3 bg-gray-300 hover:bg-gray-400'
                                } ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeitySlider

import { useState, useEffect } from 'react'
import { images } from '../data/images'

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0)

    // Handle scroll for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY)
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Clean up
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll to content function
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gray-900">
            {/* Parallax Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 h-[120%] w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${images.templeBg})`,
                    transform: `translateY(${offsetY * 0.4}px)`,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">

                {/* Deity Ornaments/Image Placeholder */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold bg-maroon/20 backdrop-blur-sm mb-6 flex items-center justify-center overflow-hidden animate-pulse shadow-lg shadow-gold/20">
                    <span className="text-gold font-display text-4xl">ॐ</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight drop-shadow-lg">
                    Divine Sri <span className="text-gold">Temple</span> Name
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-2xl font-serif text-offwhite mb-10 max-w-2xl text-shadow-sm font-medium">
                    A place of spiritual awakening, peace, and eternal devotion
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-maroon hover:bg-maroon-dark text-white font-serif tracking-widest px-8 py-3 rounded uppercase transition-all duration-300 border border-maroon hover:border-maroon-dark shadow-lg">
                        Darshan Timings
                    </button>
                    <button className="bg-transparent hover:bg-white/10 text-white font-serif tracking-widest px-8 py-3 rounded uppercase transition-all duration-300 border border-gold shadow-lg backdrop-blur-sm">
                        Make Donation
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
                <span className="text-white/70 text-sm font-serif mb-2 tracking-widest uppercase">Scroll</span>
                <button
                    onClick={scrollToContent}
                    className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1 cursor-pointer hover:border-gold transition-colors focus:outline-none focus:border-gold group"
                    aria-label="Scroll down"
                >
                    <div className="w-1.5 h-3 bg-white/70 group-hover:bg-gold rounded-full animate-bounce mt-1"></div>
                </button>
            </div>
        </section>
    )
}

export default HeroSection

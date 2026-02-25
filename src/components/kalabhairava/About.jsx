import { useState, useEffect, useCallback } from 'react';
import { DEITIES } from '../../data/deities';

const ANIMATION_DURATION = 500;

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % DEITIES.length);
            setIsAnimating(false);
        }, ANIMATION_DURATION / 2);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + DEITIES.length) % DEITIES.length);
            setIsAnimating(false);
        }, ANIMATION_DURATION / 2);
    }, [isAnimating]);

    const handleDotClick = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, ANIMATION_DURATION / 2);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    const currentDeity = DEITIES[currentIndex];
    const contentOpacityClass = isAnimating ? 'opacity-0' : 'opacity-100';

    return (
        <section id="about-deity" className="py-24 relative overflow-hidden reveal" style={{ backgroundColor: '#111111' }}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 rounded-tl-3xl m-8 hidden md:block transition-all hover:scale-110" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 rounded-br-3xl m-8 hidden md:block transition-all hover:scale-110" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Navigation Buttons */}
                <button
                    id="prev-deity"
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border"
                    style={{ backgroundColor: 'transparent', color: '#cfcfcf', borderColor: '#2a2a2a' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1f1f1f'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#cfcfcf'; }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    id="next-deity"
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border"
                    style={{ backgroundColor: 'transparent', color: '#cfcfcf', borderColor: '#2a2a2a' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1f1f1f'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#cfcfcf'; }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                <div className={`flex flex-col lg:flex-row items-center gap-16 transition-opacity duration-500 ${contentOpacityClass}`} id="deity-content-wrapper">
                    {/* Image Wrapper */}
                    <div className="lg:w-1/2 relative group perspective-1000">
                        <div className="absolute inset-0 rounded-t-full transform translate-x-4 translate-y-4 opacity-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" style={{ backgroundColor: '#ffffff' }}></div>
                        <div className="relative rounded-t-full overflow-hidden border-8 shadow-2xl aspect-[3/4] transform transition-transform duration-500 group-hover:-translate-y-2" style={{ borderColor: '#1a1a1a' }}>
                            <img
                                id="deity-image"
                                src={currentDeity.image}
                                alt={currentDeity.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                            <div className="absolute bottom-8 left-0 right-0 text-center transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                                <span id="deity-subtitle" className="text-2xl font-display font-bold drop-shadow-md tracking-wider uppercase tracking-[0.2em]" style={{ color: '#cfcfcf' }}>
                                    {currentDeity.subtitle}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-3 mt-6" id="deity-dots">
                        {DEITIES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 border ${index === currentIndex ? 'w-6' : 'hover:opacity-80'
                                    }`}
                                style={{ backgroundColor: index === currentIndex ? '#cfcfcf' : 'transparent', borderColor: '#cfcfcf' }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block mb-4 transform hover:rotate-12 transition-transform duration-500">
                            <span className="text-3xl" style={{ color: '#ffffff' }}>ॐ</span>
                        </div>
                        <h2 id="deity-title" className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight" style={{ color: '#ffffff' }}>
                            The Divine Grace of <br />
                            <span className="inline-block hover:scale-105 transition-transform origin-left" style={{ color: '#cfcfcf' }}>
                                {currentDeity.name}
                            </span>
                        </h2>
                        <div id="deity-desc" className="text-lg leading-loose mb-6 font-serif" style={{ color: '#a0a0a0' }}>
                            <p className="mb-4">
                                {currentDeity.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div className="p-6 rounded-lg shadow-sm border transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a' }}>
                                <h3 className="font-display font-bold mb-2 flex items-center text-lg transition-colors" style={{ color: '#cfcfcf' }}>
                                    <span className="mr-2 text-2xl group-hover:scale-125 transition-transform opacity-70" style={{ color: '#ffffff' }}>✦</span>
                                    Devotion
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>Immerse yourself in Bhajans and Kirtans that cleanse the heart.</p>
                            </div>
                            <div className="p-6 rounded-lg shadow-sm border transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#1a1a1a', borderColor: '#2a2a2a' }}>
                                <h3 className="font-display font-bold mb-2 flex items-center text-lg transition-colors" style={{ color: '#cfcfcf' }}>
                                    <span className="mr-2 text-2xl group-hover:scale-125 transition-transform opacity-70" style={{ color: '#ffffff' }}>✦</span>
                                    Sewa
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>Participate in Annadanam and community service as worship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

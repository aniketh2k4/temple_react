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
        <section id="about-deity" className="py-24 relative overflow-hidden reveal" style={{ backgroundColor: '#071a4d' }}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 rounded-tl-3xl m-8 hidden md:block transition-all hover:scale-110" style={{ borderColor: 'rgba(30, 58, 138, 0.5)' }}></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 rounded-br-3xl m-8 hidden md:block transition-all hover:scale-110" style={{ borderColor: 'rgba(30, 58, 138, 0.5)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Navigation Buttons */}
                <button
                    id="prev-deity"
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                    style={{ backgroundColor: '#020c2b', color: '#7f9cff', border: '1px solid #1e3a8a' }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(127, 156, 255, 0.39)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    id="next-deity"
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                    style={{ backgroundColor: '#020c2b', color: '#7f9cff', border: '1px solid #1e3a8a' }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(127, 156, 255, 0.39)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                <div className={`flex flex-col lg:flex-row items-center gap-16 transition-opacity duration-500 ${contentOpacityClass}`} id="deity-content-wrapper">
                    {/* Image Wrapper */}
                    <div className="lg:w-1/2 relative group perspective-1000">
                        <div className="absolute inset-0 rounded-t-full transform translate-x-4 translate-y-4 opacity-30 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" style={{ backgroundColor: '#0c225a' }}></div>
                        <div className="relative rounded-t-full overflow-hidden border-8 shadow-2xl aspect-[3/4] transform transition-transform duration-500 group-hover:-translate-y-2" style={{ borderColor: '#0c225a' }}>
                            <img
                                id="deity-image"
                                src={currentDeity.image}
                                alt={currentDeity.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="absolute bottom-8 left-0 right-0 text-center transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                                <span id="deity-subtitle" className="text-2xl font-display font-bold drop-shadow-md tracking-wider" style={{ color: '#7f9cff' }}>
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
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6' : 'hover:opacity-80'
                                    }`}
                                style={{ backgroundColor: index === currentIndex ? '#7f9cff' : '#0c225a' }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block mb-4 transform hover:rotate-12 transition-transform duration-500">
                            <span className="text-3xl" style={{ color: '#7f9cff' }}>ॐ</span>
                        </div>
                        <h2 id="deity-title" className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight" style={{ color: '#d7dbe6' }}>
                            The Divine Grace of <br />
                            <span className="inline-block hover:scale-105 transition-transform origin-left" style={{ color: '#7f9cff' }}>
                                {currentDeity.name}
                            </span>
                        </h2>
                        <div id="deity-desc" className="text-lg leading-loose mb-6 font-serif" style={{ color: '#d7dbe6' }}>
                            <p className="mb-4">
                                {currentDeity.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div className="p-6 rounded-lg shadow-sm border transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#0c225a', borderColor: '#1e3a8a' }}>
                                <h3 className="font-display font-bold mb-2 flex items-center text-lg transition-colors" style={{ color: '#d7dbe6' }}>
                                    <span className="mr-2 text-2xl group-hover:scale-125 transition-transform" style={{ color: '#7f9cff' }}>✦</span>
                                    Devotion
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#d7dbe6', opacity: 0.8 }}>Immerse yourself in Bhajans and Kirtans that cleanse the heart.</p>
                            </div>
                            <div className="p-6 rounded-lg shadow-sm border transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#0c225a', borderColor: '#1e3a8a' }}>
                                <h3 className="font-display font-bold mb-2 flex items-center text-lg transition-colors" style={{ color: '#d7dbe6' }}>
                                    <span className="mr-2 text-2xl group-hover:scale-125 transition-transform" style={{ color: '#7f9cff' }}>✦</span>
                                    Sewa
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#d7dbe6', opacity: 0.8 }}>Participate in Annadanam and community service as worship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

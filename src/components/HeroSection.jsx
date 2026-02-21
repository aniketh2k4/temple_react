import { useState, useEffect } from 'react';
import { images } from '../data/images';

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        // Disabled global scroll
        // const handleScroll = () => {
        //     setOffsetY(window.scrollY);
        // };

        // window.addEventListener('scroll', handleScroll, { passive: true });
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
            {/* Parallax Background Image Wrapper */}
            <div
                id="hero-bg"
                className="absolute inset-0 z-0 bg-maroon-950 will-change-transform"
                style={{ transform: `translateY(0px)` }}
            >
                <img src={images.templeBg} alt="Temple Background"
                    className="w-full h-[120%] object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-900/40 to-maroon-950/80"></div>
            </div>

            <div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto reveal active transition-opacity duration-1000 delay-300">
                {/* Centered Deity Image */}
                <div className="mb-8 relative group inline-block">
                    <div
                        className="absolute inset-0 bg-gold-500 blur-xl opacity-20 rounded-full animate-pulse transition-opacity duration-500 group-hover:opacity-40">
                    </div>
                    <img src={images.deities.panduranga} alt="Lord Panduranga"
                        className="relative w-48 h-64 md:w-56 md:h-72 object-cover rounded-t-full rounded-b-lg border-4 border-gold-400 shadow-2xl transform hover:scale-105 transition-transform duration-500 mx-auto" />
                </div>

                <div className="mb-4 animate-fade-in-down">
                    <span className="inline-block h-px w-16 bg-gold-400 align-middle mr-2 opacity-70"></span>
                    <span className="text-gold-300 font-display tracking-[0.3em] uppercase text-sm md:text-base">Welcome to the
                        Divine Abode</span>
                    <span className="inline-block h-px w-16 bg-gold-400 align-middle ml-2 opacity-70"></span>
                </div>

                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white text-shadow-hero leading-tight tracking-tight">
                    Rukmini <span className="text-gold-400 relative inline-block">Panduranga <span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gold-500/50 blur-sm rounded-full"></span></span>
                    <br /> Swamy Temple
                </h1>

                <p
                    className="text-xl md:text-2xl mb-12 text-gray-200 font-script italic drop-shadow-md max-w-3xl mx-auto opacity-90">
                    "In the silence of the heart, God speaks."
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#about-deity"
                        className="group relative px-8 py-4 bg-maroon-800/80 hover:bg-maroon-700 backdrop-blur-sm text-gold-100 font-display tracking-widest text-sm uppercase transition-all duration-500 border border-gold-600/30 overflow-hidden shadow-lg hover:shadow-gold-500/20 rounded-sm">
                        <span className="relative z-10 group-hover:text-white flex items-center transition-colors">
                            Discover More
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </span>
                        <div
                            className="absolute inset-0 bg-gold-600/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                        </div>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <a href="#about-deity" className="text-gold-400 hover:text-white transition-colors p-4 block">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

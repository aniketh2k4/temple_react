import { useState, useEffect } from 'react';
import { images } from '../../data/images';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
            {/* Cosmic Star Background Wrapper */}
            <div
                id="hero-bg"
                className="absolute inset-0 z-0 bg-gradient-to-b from-[#020c2b] via-[#071a4d] to-[#01091f]"
            >
                {/* Subtle star background pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-opacity duration-1000 delay-300">
                {/* Centered Deity Image */}
                <div className="mb-8 relative group inline-block">
                    {/* Soft radial glow behind deity image (opacity 20%) */}
                    <div
                        className="absolute inset-0 blur-3xl opacity-20 rounded-full animate-pulse transition-opacity duration-500 group-hover:opacity-40"
                        style={{ backgroundColor: '#7f9cff' }}>
                    </div>
                    <img src={images.deities.panduranga} alt="Lord Sangameshwara"
                        className="relative w-48 h-64 md:w-56 md:h-72 object-cover rounded-t-full rounded-b-lg border-4 shadow-2xl transform hover:scale-105 transition-transform duration-500 mx-auto"
                        style={{ borderColor: '#7f9cff' }} />
                </div>

                <div className="mb-4 animate-fade-in-down">
                    <span className="inline-block h-px w-16 align-middle mr-2 opacity-70" style={{ backgroundColor: '#7f9cff' }}></span>
                    <span className="font-display tracking-[0.3em] uppercase text-sm md:text-base" style={{ color: '#d7dbe6' }}>Welcome to the
                        Divine Abode</span>
                    <span className="inline-block h-px w-16 align-middle ml-2 opacity-70" style={{ backgroundColor: '#7f9cff' }}></span>
                </div>

                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white text-shadow-hero leading-tight tracking-tight">
                    Sri <span className="relative inline-block" style={{ color: '#7f9cff' }}>Sangameshwara <span
                        className="absolute -bottom-2 left-0 w-full h-1 blur-sm rounded-full" style={{ backgroundColor: 'rgba(127, 156, 255, 0.5)' }}></span></span>
                    <br /> Swamy Temple
                </h1>

                <p
                    className="text-xl md:text-2xl mb-12 font-script italic drop-shadow-md max-w-3xl mx-auto opacity-90" style={{ color: '#d7dbe6' }}>
                    "In the silence of the heart, God speaks."
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#about-deity"
                        className="group relative px-8 py-4 backdrop-blur-sm font-display tracking-widest text-sm uppercase transition-all duration-500 overflow-hidden rounded-sm"
                        style={{ backgroundColor: '#020c2b', border: '1px solid #1e3a8a', color: '#d7dbe6' }}
                        onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(127, 156, 255, 0.39)'; e.currentTarget.style.color = '#ffffff'; }}
                        onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.color = '#d7dbe6'; }}>
                        <span className="relative z-10 flex items-center transition-colors">
                            Discover More
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </span>
                        <div
                            className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" style={{ backgroundColor: 'rgba(127, 156, 255, 0.1)' }}>
                        </div>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <a href="#about-deity" className="transition-colors p-4 block" style={{ color: '#7f9cff' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#7f9cff'}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;

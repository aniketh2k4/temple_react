import { useState, useEffect } from 'react';
import { images } from '../../data/images';
import kalabhairavaImage from "../../assets/deities/kalabhairava.jpg";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 bg-gradient-to-b from-red-950 via-red-900 to-red-800">
            <div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-opacity duration-1000 delay-300">
                {/* Centered Deity Image */}
                <div className="mb-8 relative group inline-block">
                    {/* Soft radial glow behind deity image (opacity 10%) */}
                    <div
                        className="absolute inset-0 blur-3xl opacity-10 rounded-full animate-pulse transition-opacity duration-500 group-hover:opacity-20 bg-yellow-400">
                    </div>
                    <img src={kalabhairavaImage} alt="Lord Kalabhairava"
                        className="relative w-48 h-64 md:w-56 md:h-72 object-cover rounded-t-full rounded-b-lg border-4 shadow-2xl transform hover:scale-105 transition-transform duration-500 mx-auto border-yellow-500/40"
                    />
                </div>

                <div className="mb-4 animate-fade-in-down">
                    <span className="inline-block h-px w-16 align-middle mr-2 opacity-50 bg-[#d4a017]"></span>
                    <span className="font-display tracking-[0.3em] uppercase text-sm md:text-base text-[#d4a017]">Welcome to the
                        Divine Abode</span>
                    <span className="inline-block h-px w-16 align-middle ml-2 opacity-50 bg-[#d4a017]"></span>
                </div>

                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-[#f5d26a] text-shadow-hero leading-tight tracking-tight">
                    Sri <span className="relative inline-block text-[#f5d26a]">Kalabhairava <span
                        className="absolute -bottom-2 left-0 w-full h-1 blur-sm rounded-full bg-yellow-500/40"></span></span>
                    <br /> Swamy Temple
                </h1>

                <p
                    className="text-xl md:text-2xl mb-12 font-script italic drop-shadow-md max-w-3xl mx-auto opacity-80 text-[#f5d26a]">
                    "In the silence of the heart, God speaks."
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#about-deity"
                        className="group relative px-8 py-4 backdrop-blur-sm font-display tracking-widest text-sm uppercase transition-all duration-300 overflow-hidden rounded-sm border-yellow-500/40 bg-[#d4a017] text-red-900 hover:bg-yellow-400 hover:text-red-950 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]">
                        <span className="relative z-10 flex items-center transition-colors">
                            Discover More
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <a href="#about-deity" className="transition-colors p-4 block text-[#d4a017] hover:text-[#f5d26a]">
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

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar"
            className={`glass-nav fixed w-full z-50 border-b border-gold-600/30 transition-all duration-500 top-0 ${isScrolled ? 'shadow-xl bg-maroon-950/95 py-1' : 'shadow-lg py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center transition-all duration-300" id="nav-container">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        {/* Simple SVG Logo Placeholder */}
                        <div
                            className="h-10 w-10 bg-gold-400 rounded-full flex items-center justify-center mr-3 border-2 border-gold-200 shadow-md group-hover:scale-105 transition-transform duration-300">
                            <span className="text-maroon-900 font-bold text-xl font-display">ॐ</span>
                        </div>
                        <span
                            className="font-display font-bold text-xl md:text-2xl text-gold-300 tracking-wide group-hover:text-white transition-colors">Panduranga
                            Temple</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home"
                            className="text-gold-300 hover:text-gold-400 font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-gold-400 transition-all duration-300 relative group">
                            Home
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about-deity"
                            className="text-gold-300 hover:text-gold-400 font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-gold-400 transition-all duration-300 relative group">
                            Deity
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#temple-info"
                            className="text-gold-300 hover:text-gold-400 font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-gold-400 transition-all duration-300 relative group">
                            Info
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#gallery"
                            className="text-gold-300 hover:text-gold-400 font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-gold-400 transition-all duration-300 relative group">
                            Gallery
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#gurus"
                            className="text-gold-300 hover:text-gold-400 font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-gold-400 transition-all duration-300 relative group">
                            Gurus
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#donation"
                            className="px-5 py-2 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-maroon-900 font-display text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-gold-500/20 transform hover:-translate-y-1">Donate</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button id="mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-gold-300 hover:text-white focus:outline-none p-2 transition-all transform duration-500 ${isOpen ? 'rotate-90' : 'hover:rotate-90'}`}>
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu"
                className={`md:hidden bg-maroon-900 border-t border-gold-600/30 absolute w-full shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-2 invisible'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#home" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors">Home</a>
                    <a href="#about-deity" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors">Deity</a>
                    <a href="#temple-info" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors">Info</a>
                    <a href="#gallery" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors">Gallery</a>
                    <a href="#gurus" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors">Gurus</a>
                    <a href="#donation" onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gold-300 hover:text-white hover:bg-maroon-800 rounded-md font-display text-sm tracking-widest uppercase transition-colors font-bold">Donate</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

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

    const navBase = isScrolled
        ? "bg-gradient-to-b from-red-900 via-red-800 to-red-950 shadow-[0_0_15px_rgba(212,160,23,0.6)] py-2"
        : "bg-transparent py-4";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 top-0 border-b border-yellow-500/40 ${navBase}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 border-2 border-yellow-500/40 shadow-md group-hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,160,23,0.6)] bg-transparent">
                            <span className="font-bold text-xl font-display text-[#f5d26a]">ॐ</span>
                        </div>
                        <span className="font-display font-bold text-xl md:text-2xl tracking-wide group-hover:text-[#f5d26a] transition-colors text-[#f5d26a]">
                            Kalabhairava Temple
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['HOME', 'DEITY', 'INFO', 'GALLERY', 'GURUS', 'TEMPLES'].map((item) => (
                            <a key={item} href={item === 'INFO' ? '#temple-info' : item === 'DEITY' ? '#about-deity' : `#${item.toLowerCase()}`}
                                className="font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-yellow-500/40 transition-all duration-300 relative group text-[#d4a017] hover:text-[#f5d26a]"
                            >
                                {item === 'DEITY' ? 'Deity' : item === 'INFO' ? 'Info' : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5d26a] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]"></span>
                            </a>
                        ))}
                        <a href="#donation"
                            className="px-5 py-2 rounded-full border border-yellow-500/40 text-sm tracking-wider uppercase shadow-lg transform hover:-translate-y-1 font-display bg-[#d4a017] text-red-900 hover:bg-yellow-400 hover:text-red-950 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]"
                        >
                            Donate
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 transition-all transform duration-500 hover:rotate-90 text-[#f5d26a]">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-gradient-to-b from-red-900 via-red-800 to-red-950 border-t border-yellow-500/40 absolute w-full shadow-[0_0_15px_rgba(212,160,23,0.6)] transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-2 invisible'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['HOME', 'DEITY', 'INFO', 'GALLERY', 'GURUS', 'TEMPLES', 'DONATE'].map((item) => (
                        <a key={item} href={item === 'INFO' ? '#temple-info' : item === 'DEITY' ? '#about-deity' : item === 'DONATE' ? '#donation' : `#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-md font-display text-sm tracking-widest uppercase transition-colors hover:bg-red-950 ${item === 'DONATE' ? 'font-bold border border-yellow-500/40 mt-2 bg-[#d4a017] text-red-900 hover:bg-yellow-400 hover:text-red-950' : 'text-[#d4a017] hover:text-[#f5d26a]'}`}
                        >
                            {item === 'DEITY' ? 'Deity' : item === 'INFO' ? 'Info' : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

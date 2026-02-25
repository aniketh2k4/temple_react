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
        ? "bg-gradient-to-b from-[#020c2b] via-[#071a4d] to-[#01091f] shadow-xl py-2"
        : "bg-transparent py-4";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 top-0 border-b border-[#1e3a8a] ${navBase}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 border-2 shadow-md group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#7f9cff', borderColor: '#d7dbe6' }}>
                            <span className="font-bold text-xl font-display" style={{ color: '#020c2b' }}>ॐ</span>
                        </div>
                        <span className="font-display font-bold text-xl md:text-2xl tracking-wide group-hover:text-white transition-colors" style={{ color: '#d7dbe6' }}>
                            Sangameshwara Temple
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['HOME', 'DEITY', 'INFO', 'GALLERY', 'GURUS', 'TEMPLES'].map((item) => (
                            <a key={item} href={item === 'INFO' ? '#temple-info' : item === 'DEITY' ? '#about-deity' : `#${item.toLowerCase()}`}
                                className="font-display text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-[#7f9cff] transition-all duration-300 relative group"
                                style={{ color: '#d7dbe6' }}>
                                {item === 'DEITY' ? 'Deity' : item === 'INFO' ? 'Info' : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7f9cff] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#donation"
                            className="px-5 py-2 rounded-full border text-sm tracking-wider uppercase transition-all duration-300 shadow-lg transform hover:-translate-y-1 font-display"
                            style={{ borderColor: '#1e3a8a', color: '#d7dbe6', backgroundColor: '#020c2b' }}
                            onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(127, 156, 255, 0.39)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            Donate
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 transition-all transform duration-500 hover:rotate-90"
                            style={{ color: '#d7dbe6' }}>
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-gradient-to-b from-[#020c2b] via-[#071a4d] to-[#01091f] border-t border-[#1e3a8a] absolute w-full shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-2 invisible'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['HOME', 'DEITY', 'INFO', 'GALLERY', 'GURUS', 'TEMPLES', 'DONATE'].map((item) => (
                        <a key={item} href={item === 'INFO' ? '#temple-info' : item === 'DEITY' ? '#about-deity' : item === 'DONATE' ? '#donation' : `#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-md font-display text-sm tracking-widest uppercase transition-colors hover:bg-[#0c225a] ${item === 'DONATE' ? 'font-bold' : ''}`}
                            style={{ color: '#d7dbe6' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#d7dbe6'}>
                            {item === 'DEITY' ? 'Deity' : item === 'INFO' ? 'Info' : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

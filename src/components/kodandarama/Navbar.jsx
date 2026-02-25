import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        if (window.location.pathname !== "/temple/kodandarama") {
            navigate("/temple/kodandarama");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBase = isScrolled
        ? "bg-gradient-to-b from-[#6b2f08] via-[#8a3b0f] to-[#4a1f06] shadow-xl py-2"
        : "bg-transparent py-4";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 top-0 border-b border-[#d4a017]/30 ${navBase}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        <span className="font-serif font-bold text-xl md:text-2xl tracking-wide transition-colors" style={{ color: '#d4a017' }}>
                            SRI KODANDA RAMA
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {[
                            { label: 'HOME', id: 'home' },
                            { label: 'DEITY', id: 'about' },
                            { label: 'INFO', id: 'schedule' },
                            { label: 'GALLERY', id: 'gallery' },
                            { label: 'GURUS', id: 'gurus' },
                            { label: 'TEMPLES', id: 'temples' }
                        ].map((item) => (
                            <a key={item.label} onClick={() => handleNavigation(item.id)}
                                className="cursor-pointer font-serif text-sm tracking-wider uppercase py-2 border-b-2 border-transparent hover:border-[#d4a017] transition-all duration-300 relative group"
                                style={{ color: '#f3e9dc' }}>
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a017] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a onClick={() => handleNavigation("donation")}
                            className="cursor-pointer px-5 py-2 rounded-full border text-sm tracking-wider uppercase transition-all duration-300 shadow-lg transform hover:-translate-y-1 font-serif"
                            style={{ borderColor: '#d4a017', color: '#d4a017', backgroundColor: 'transparent' }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#d4a017'; e.currentTarget.style.color = '#4a1f06'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d4a017'; }}
                        >
                            DONATE
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 transition-all transform duration-500"
                            style={{ color: '#d4a017' }}>
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-gradient-to-b from-[#6b2f08] via-[#8a3b0f] to-[#4a1f06] border-t border-[#d4a017]/30 absolute w-full shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-2 invisible'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {[
                        { label: 'HOME', id: 'home' },
                        { label: 'DEITY', id: 'about' },
                        { label: 'INFO', id: 'schedule' },
                        { label: 'GALLERY', id: 'gallery' },
                        { label: 'GURUS', id: 'gurus' },
                        { label: 'TEMPLES', id: 'temples' },
                        { label: 'DONATE', id: 'donation' }
                    ].map((item) => (
                        <a key={item.label} onClick={() => { handleNavigation(item.id); setIsOpen(false); }}
                            className="cursor-pointer block px-4 py-3 rounded-md font-serif text-sm tracking-widest uppercase transition-colors"
                            style={{ color: '#d4a017' }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#f3e9dc'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#d4a017'}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

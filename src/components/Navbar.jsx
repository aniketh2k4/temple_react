import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const menuRef = useRef(null)

    // Handle scroll event to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle click outside to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
                : 'bg-white py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center relative">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-display font-bold text-maroon hover:text-maroon-dark transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    Temple Logo
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className="text-gray-800 font-medium hover:text-maroon transition-colors duration-200 uppercase tracking-wider text-sm"
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-800 hover:text-maroon focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-center">
                        <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>

                {/* Mobile Menu Dropdown */}
                <div
                    ref={menuRef}
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="flex flex-col py-4 px-4 space-y-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                className="text-gray-800 hover:text-maroon font-medium py-2 border-b border-gray-100 transition-colors uppercase tracking-wider text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar

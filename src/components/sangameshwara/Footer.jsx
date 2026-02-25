const Footer = () => {
    return (
        <footer id="contact" className="pt-20 pb-10 border-t-4 reveal" style={{ backgroundColor: '#01091f', borderColor: '#1e3a8a', color: '#d7dbe6' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-display font-bold text-3xl mb-6 flex items-center gap-3" style={{ color: '#d7dbe6' }}>
                            <span className="text-4xl" style={{ color: '#7f9cff' }}>ॐ</span> Sangameshwara
                        </h3>
                        <p className="text-sm leading-relaxed font-serif mb-6 opacity-80" style={{ color: '#d7dbe6' }}>
                            Sanctifying souls since 1974. A place where architecture meets divinity.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer transform hover:rotate-12 duration-300"
                                style={{ borderColor: 'rgba(127, 156, 255, 0.5)' }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#7f9cff'; e.currentTarget.style.color = '#020c2b'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d7dbe6'; }}>
                                F</div>
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer transform hover:rotate-12 duration-300"
                                style={{ borderColor: 'rgba(127, 156, 255, 0.5)' }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#7f9cff'; e.currentTarget.style.color = '#020c2b'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d7dbe6'; }}>
                                T</div>
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer transform hover:rotate-12 duration-300"
                                style={{ borderColor: 'rgba(127, 156, 255, 0.5)' }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#7f9cff'; e.currentTarget.style.color = '#020c2b'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#d7dbe6'; }}>
                                I</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest" style={{ color: '#7f9cff' }}>
                            Quick Links</h4>
                        <ul className="space-y-3 text-sm font-serif" style={{ color: 'rgba(215, 219, 230, 0.8)' }}>
                            <li><a href="#home" className="transition-all duration-300 hover:ml-1" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Home
                                page</a></li>
                            <li><a href="#about-deity"
                                className="transition-all duration-300 hover:ml-1" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Deity History</a>
                            </li>
                            <li><a href="#temple-info"
                                className="transition-all duration-300 hover:ml-1" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Darshan Timings</a>
                            </li>
                            <li><a href="#donation"
                                className="transition-all duration-300 hover:ml-1" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Online Donation</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest" style={{ color: '#7f9cff' }}>
                            Find Us</h4>
                        <ul className="space-y-4 text-sm font-serif" style={{ color: 'rgba(215, 219, 230, 0.8)' }}>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1" style={{ color: '#7f9cff' }}>📍</span>
                                <span>Main Road, Spiritual Town,<br />District Name, 500001</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3" style={{ color: '#7f9cff' }}>📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3" style={{ color: '#7f9cff' }}>✉️</span>
                                <span>contact@temple.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest" style={{ color: '#7f9cff' }}>
                            Newsletter</h4>
                        <div className="flex flex-col space-y-3">
                            <input type="email" placeholder="Email Address"
                                className="border px-4 py-3 rounded focus:outline-none transition-colors font-serif text-sm"
                                style={{ backgroundColor: 'rgba(2, 12, 43, 0.5)', borderColor: '#1e3a8a', color: '#d7dbe6' }}
                                onFocus={(e) => e.currentTarget.style.borderColor = '#7f9cff'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#1e3a8a'} />
                            <button
                                className="font-bold py-3 px-4 rounded font-display uppercase text-xs tracking-widest transition-all duration-300 shadow-lg active:scale-95"
                                style={{ backgroundColor: '#020c2b', color: '#7f9cff', border: '1px solid #1e3a8a' }}
                                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(127, 156, 255, 0.39)'; e.currentTarget.style.color = '#ffffff'; }}
                                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.color = '#7f9cff'; }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-serif" style={{ borderColor: '#1e3a8a', color: 'rgba(215, 219, 230, 0.6)' }}>
                    <p>&copy; {new Date().getFullYear()} Sri Sangameshwara Swamy Temple Trust.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="transition-colors" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Privacy Policy</a>
                        <a href="#" className="transition-colors" onMouseOver={(e) => e.currentTarget.style.color = '#7f9cff'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

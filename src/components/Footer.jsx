const Footer = () => {
    return (
        <footer id="contact" className="bg-maroon-950 text-gold-100 pt-20 pb-10 border-t-4 border-gold-600 reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-display font-bold text-3xl text-white mb-6">Panduranga</h3>
                        <p className="text-sm leading-relaxed text-maroon-200 font-serif mb-6 opacity-80">
                            Sanctifying souls since 1974. A place where architecture meets divinity.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div
                                className="w-8 h-8 rounded-full border border-gold-600/50 flex items-center justify-center hover:bg-gold-600 hover:text-maroon-900 transition-colors cursor-pointer transform hover:rotate-12 duration-300">
                                F</div>
                            <div
                                className="w-8 h-8 rounded-full border border-gold-600/50 flex items-center justify-center hover:bg-gold-600 hover:text-maroon-900 transition-colors cursor-pointer transform hover:rotate-12 duration-300">
                                T</div>
                            <div
                                className="w-8 h-8 rounded-full border border-gold-600/50 flex items-center justify-center hover:bg-gold-600 hover:text-maroon-900 transition-colors cursor-pointer transform hover:rotate-12 duration-300">
                                I</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest text-gold-500">
                            Quick Links</h4>
                        <ul className="space-y-3 text-sm font-serif text-maroon-100">
                            <li><a href="#home" className="hover:text-gold-400 transition-all duration-300 hover:ml-1">Home
                                page</a></li>
                            <li><a href="#about-deity"
                                className="hover:text-gold-400 transition-all duration-300 hover:ml-1">Deity History</a>
                            </li>
                            <li><a href="#temple-info"
                                className="hover:text-gold-400 transition-all duration-300 hover:ml-1">Darshan Timings</a>
                            </li>
                            <li><a href="#donation"
                                className="hover:text-gold-400 transition-all duration-300 hover:ml-1">Online Donation</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest text-gold-500">
                            Find Us</h4>
                        <ul className="space-y-4 text-sm font-serif text-maroon-100">
                            <li className="flex items-start">
                                <span className="text-gold-500 mr-3 mt-1">📍</span>
                                <span>Main Road, Spiritual Town,<br />District Name, 500001</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gold-500 mr-3">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gold-500 mr-3">✉️</span>
                                <span>contact@temple.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-display font-bold mb-6 uppercase text-sm tracking-widest text-gold-500">
                            Newsletter</h4>
                        <div className="flex flex-col space-y-3">
                            <input type="email" placeholder="Email Address"
                                className="bg-maroon-900/50 border border-maroon-800 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors font-serif text-sm" />
                            <button
                                className="bg-gold-600 hover:bg-gold-500 text-maroon-900 font-bold py-3 px-4 rounded font-display uppercase text-xs tracking-widest transition-all duration-300 shadow-lg hover:shadow-gold-500/20 active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="border-t border-maroon-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-maroon-300 font-serif">
                    <p>&copy; {new Date().getFullYear()} Rukmini Panduranga Swamy Temple Trust.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

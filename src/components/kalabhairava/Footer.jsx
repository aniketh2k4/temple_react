const Footer = () => {
    return (
        <footer id="contact" className="pt-20 pb-10 border-t-2 reveal bg-red-950 border-yellow-500/40 text-[#f5d26a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-display font-bold text-3xl mb-6 flex items-center gap-3 text-[#f5d26a]">
                            <span className="text-4xl text-yellow-400">ॐ</span> Kalabhairava
                        </h3>
                        <p className="text-sm leading-relaxed font-serif mb-6 opacity-80 text-red-100">
                            Sanctifying souls since 1974. A place where architecture meets divinity.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer transform hover:rotate-12 duration-300 border-yellow-500/40 text-[#d4a017] hover:bg-[#d4a017] hover:text-red-950">
                                F</div>
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer transform hover:rotate-12 duration-300 border-yellow-500/40 text-[#d4a017] hover:bg-[#d4a017] hover:text-red-950">
                                T</div>
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer transform hover:rotate-12 duration-300 border-yellow-500/40 text-[#d4a017] hover:bg-[#d4a017] hover:text-red-950">
                                I</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest text-[#f5d26a]">
                            Quick Links</h4>
                        <ul className="space-y-3 text-sm font-serif text-[#d4a017]">
                            <li><a href="#home" className="transition-all duration-300 hover:ml-1 hover:text-white">Home
                                page</a></li>
                            <li><a href="#about-deity"
                                className="transition-all duration-300 hover:ml-1 hover:text-white">Deity History</a>
                            </li>
                            <li><a href="#temple-info"
                                className="transition-all duration-300 hover:ml-1 hover:text-white">Darshan Timings</a>
                            </li>
                            <li><a href="#donation"
                                className="transition-all duration-300 hover:ml-1 hover:text-white">Online Donation</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest text-[#f5d26a]">
                            Find Us</h4>
                        <ul className="space-y-4 text-sm font-serif text-[#d4a017]">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 text-yellow-400">📍</span>
                                <span>Main Road, Spiritual Town,<br />District Name, 500001</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-yellow-400">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-yellow-400">✉️</span>
                                <span>contact@temple.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-display font-bold mb-6 uppercase text-sm tracking-widest text-[#f5d26a]">
                            Newsletter</h4>
                        <div className="flex flex-col space-y-3">
                            <input type="email" placeholder="Email Address"
                                className="border px-4 py-3 rounded focus:outline-none transition-colors font-serif text-sm bg-red-900/30 border-yellow-500/40 text-yellow-400 focus:border-yellow-500 placeholder-yellow-500/50" />
                            <button
                                className="font-bold py-3 px-4 rounded font-display uppercase text-xs tracking-widest transition-all duration-300 border border-yellow-500/40 cursor-pointer bg-[#d4a017] text-red-900 hover:bg-yellow-400 hover:text-red-950">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-serif border-yellow-500/40 text-red-100">
                    <p>&copy; {new Date().getFullYear()} Sri Kalabhairava Swamy Temple Trust.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
                        <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

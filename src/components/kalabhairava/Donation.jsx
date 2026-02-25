const Donation = () => {
    return (
        <section id="donation" className="py-24 relative overflow-hidden reveal" style={{ backgroundColor: '#000000' }}>
            {/* Background Elements */}
            <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ backgroundColor: '#ffffff' }}>
            </div>
            <div
                className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[100px] opacity-10 animate-pulse delay-700" style={{ backgroundColor: '#ffffff' }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div
                    className="border p-8 md:p-12 rounded-2xl shadow-2xl text-center transform hover:scale-[1.01] transition-transform duration-500"
                    style={{ background: 'linear-gradient(to bottom right, #111111, #0a0a0a)', borderColor: '#2a2a2a' }}>
                    <span className="font-script text-2xl mb-2 block" style={{ color: '#ffffff' }}>Dāna</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6" style={{ color: '#ffffff' }}>Support the Divine Cause</h2>
                    <p className="mb-10 font-serif leading-relaxed max-w-2xl mx-auto" style={{ color: '#a0a0a0' }}>
                        "The act of giving is the path to spiritual abundance." Your contributions help us maintain the
                        temple, feed the needy (Annadanam), and preserve our heritage.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                        <div
                            className="bg-white/5 border border-white/10 p-6 rounded-xl w-full md:w-auto text-left min-w-[300px] backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer group">
                            <h4
                                className="font-display font-bold mb-4 uppercase text-sm tracking-wider border-b pb-2 transition-colors uppercase" style={{ color: '#ffffff', borderColor: '#2a2a2a' }}>
                                Bank Transfer</h4>
                            <div
                                className="space-y-2 text-sm font-mono transition-colors" style={{ color: '#a0a0a0' }}>
                                <p>ACC: <span className="select-all" style={{ color: '#cfcfcf' }}>1234 5678 9012</span></p>
                                <p>IFSC: <span className="select-all" style={{ color: '#cfcfcf' }}>SBIN0001234</span></p>
                                <p>NAME: <span style={{ color: '#cfcfcf' }}>Temple Trust</span></p>
                            </div>
                        </div>

                        <div className="h-12 w-px hidden md:block" style={{ backgroundColor: '#2a2a2a' }}></div>
                        <div className="w-full md:w-auto h-px md:hidden" style={{ backgroundColor: '#2a2a2a' }}></div>

                        <div className="text-center group cursor-pointer">
                            <div
                                className="w-32 h-32 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-2" style={{ backgroundColor: '#cfcfcf' }}>
                                {/* QR Placeholder with icon */}
                                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#111111' }}>
                                    <path fillRule="evenodd"
                                        d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                                        clipRule="evenodd"></path>
                                    <path
                                        d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v2a1 1 0 11-2 0V8a1 1 0 011-1zM16 10a1 1 0 10-2 0v1a1 1 0 002 0v-1zM10 14a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM16 14a1 1 0 10-2 0v1a1 1 0 002 0v-1z">
                                    </path>
                                </svg>
                            </div>
                            <span
                                className="text-xs uppercase tracking-widest font-bold transition-colors" style={{ color: '#a0a0a0' }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                                onMouseOut={(e) => e.currentTarget.style.color = '#a0a0a0'}>Scan
                                to Donate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;

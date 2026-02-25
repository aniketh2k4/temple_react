const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 reveal" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16" style={{ color: '#ffffff' }}>
                    Voices of <span style={{ color: '#cfcfcf' }}>Devotion</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Cards */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2" style={{ backgroundColor: '#1a1a1a', borderColor: '#4a4a4a' }}>
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none" style={{ color: 'rgba(255, 255, 255, 0.1)' }}>"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4" style={{ color: '#a0a0a0' }}>The peace I felt here is
                            indescribable. The early morning Kakad Aarti is a must-experience.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#cfcfcf' }}>
                                RK</div>
                            <div>
                                <p className="font-bold text-sm font-display" style={{ color: '#ffffff' }}>Rajesh Kumar</p>
                                <p className="text-xs uppercase tracking-wide" style={{ color: '#a0a0a0' }}>Devotee</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2" style={{ backgroundColor: '#1a1a1a', borderColor: '#4a4a4a' }}>
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none" style={{ color: 'rgba(255, 255, 255, 0.1)' }}>"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4" style={{ color: '#a0a0a0' }}>Immaculate architecture and
                            organization. A spiritual haven in the chaos of life.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#cfcfcf' }}>
                                SP</div>
                            <div>
                                <p className="font-bold text-sm font-display" style={{ color: '#ffffff' }}>Sneha Patil</p>
                                <p className="text-xs uppercase tracking-wide" style={{ color: '#a0a0a0' }}>Visitor</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2" style={{ backgroundColor: '#1a1a1a', borderColor: '#4a4a4a' }}>
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none" style={{ color: 'rgba(255, 255, 255, 0.1)' }}>"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4" style={{ color: '#a0a0a0' }}>The Annadanam service is truly
                            noble. It feels like a home away from home.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#cfcfcf' }}>
                                VR</div>
                            <div>
                                <p className="font-bold text-sm font-display" style={{ color: '#ffffff' }}>Venkatesh Rao</p>
                                <p className="text-xs uppercase tracking-wide" style={{ color: '#a0a0a0' }}>Volunteer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

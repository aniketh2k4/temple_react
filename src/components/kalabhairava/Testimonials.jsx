const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 reveal bg-[#3b0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-[#f5d26a]">
                    Voices of <span className="text-[#d4a017]">Devotion</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Cards */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative transition-all duration-300 hover:transform hover:-translate-y-2 bg-red-900/70 backdrop-blur-sm border-yellow-500/40 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]">
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none text-yellow-500/20">"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4 text-red-100">The peace I felt here is
                            indescribable. The early morning Kakad Aarti is a must-experience.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display bg-yellow-500/10 text-yellow-400">
                                RK</div>
                            <div>
                                <p className="font-bold text-sm font-display text-[#f5d26a]">Rajesh Kumar</p>
                                <p className="text-xs uppercase tracking-wide text-[#d4a017]">Devotee</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative transition-all duration-300 hover:transform hover:-translate-y-2 bg-red-900/70 backdrop-blur-sm border-yellow-500/40 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]">
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none text-yellow-500/20">"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4 text-red-100">Immaculate architecture and
                            organization. A spiritual haven in the chaos of life.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display bg-yellow-500/10 text-yellow-400">
                                SP</div>
                            <div>
                                <p className="font-bold text-sm font-display text-[#f5d26a]">Sneha Patil</p>
                                <p className="text-xs uppercase tracking-wide text-[#d4a017]">Visitor</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="p-8 rounded-xl shadow-lg border-t-2 relative transition-all duration-300 hover:transform hover:-translate-y-2 bg-red-900/70 backdrop-blur-sm border-yellow-500/40 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)]">
                        <span className="absolute top-4 left-4 text-6xl font-serif leading-none text-yellow-500/20">"</span>
                        <p className="mb-6 italic font-serif relative z-10 pt-4 text-red-100">The Annadanam service is truly
                            noble. It feels like a home away from home.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 font-display bg-yellow-500/10 text-yellow-400">
                                VR</div>
                            <div>
                                <p className="font-bold text-sm font-display text-[#f5d26a]">Venkatesh Rao</p>
                                <p className="text-xs uppercase tracking-wide text-[#d4a017]">Volunteer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

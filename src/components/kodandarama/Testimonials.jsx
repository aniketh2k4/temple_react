const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#f2e4cf] reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-[#6b2f08] mb-16">
                    Voices of <span className="text-[#8a3b0f]">Devotion</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Cards */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#d4a017] relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                        <span className="absolute top-4 left-4 text-6xl text-[#d4a017]/40 font-serif leading-none">"</span>
                        <p className="text-gray-600 mb-6 italic font-serif relative z-10 pt-4">The peace I felt here is
                            indescribable. The early morning Kakad Aarti is a must-experience.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#6b2f08] font-bold mr-3 font-display">
                                RK</div>
                            <div>
                                <p className="font-bold text-[#6b2f08] text-sm font-display">Rajesh Kumar</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Devotee</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#d4a017] relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                        <span className="absolute top-4 left-4 text-6xl text-[#d4a017]/40 font-serif leading-none">"</span>
                        <p className="text-gray-600 mb-6 italic font-serif relative z-10 pt-4">Immaculate architecture and
                            organization. A spiritual haven in the chaos of life. Jai Panduranga!</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#6b2f08] font-bold mr-3 font-display">
                                SP</div>
                            <div>
                                <p className="font-bold text-[#6b2f08] text-sm font-display">Sneha Patil</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Visitor</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#d4a017] relative hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                        <span className="absolute top-4 left-4 text-6xl text-[#d4a017]/40 font-serif leading-none">"</span>
                        <p className="text-gray-600 mb-6 italic font-serif relative z-10 pt-4">The Annadanam service is truly
                            noble. It feels like a home away from home.</p>
                        <div className="flex items-center mt-auto">
                            <div
                                className="w-10 h-10 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#6b2f08] font-bold mr-3 font-display">
                                VR</div>
                            <div>
                                <p className="font-bold text-[#6b2f08] text-sm font-display">Venkatesh Rao</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Volunteer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

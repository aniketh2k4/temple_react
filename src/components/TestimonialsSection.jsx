const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24 bg-offwhite reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-maroon-900 mb-16">
                    Voices of <span className="text-maroon-600">Devotion</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Card 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

        <div>
            <span className="text-5xl text-gold-300 font-serif">“</span>

            <p className="text-gray-700 mt-3 leading-relaxed font-serif italic">
                One of the oldest and finest temples in the Sangareddy district.
                The place is peaceful and calm. Must visit.
            </p>
        </div>

        <div className="flex items-center mt-6">
            <div className="w-10 h-10 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 font-bold mr-3">
                AJ
            </div>

            <div>
                <p className="font-semibold text-maroon-900 text-sm">Aditya Jeevanmuktha</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Devotee</p>
            </div>
        </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

        <div>
            <span className="text-5xl text-gold-300 font-serif">“</span>

            <p className="text-gray-700 mt-3 leading-relaxed font-serif italic">
                Ancient temple of Panduranga Swamy built around 700 years ago.
                The murthi was installed after appearing in a dream to the temple caretaker.
                A must-visit place for peace and tranquility.
            </p>
        </div>

        <div className="flex items-center mt-6">
            <div className="w-10 h-10 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 font-bold mr-3">
                SK
            </div>

            <div>
                <p className="font-semibold text-maroon-900 text-sm">Sandeep Kamthankar</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Devotee</p>
            </div>
        </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

        <div>
            <span className="text-5xl text-gold-300 font-serif">“</span>

            <p className="text-gray-700 mt-3 leading-relaxed font-serif italic">
                A spiritually rejuvenating place away from city noise.
                Kalabhairava vigraham here is believed to be swayambhu and powerful.
                Perfect place for dhyana and mantra jap.
            </p>
        </div>

        <div className="flex items-center mt-6">
            <div className="w-10 h-10 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-700 font-bold mr-3">
                NSA
            </div>

            <div>
                <p className="font-semibold text-maroon-900 text-sm">Narsing Shah Arsid</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Devotee</p>
            </div>
        </div>
    </div>

</div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

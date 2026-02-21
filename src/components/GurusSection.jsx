import { images } from '../data/images';

const GurusSection = () => {
    return (
        <section id="gurus" className="py-24 bg-amber-50/50 reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-maroon-600 font-display tracking-widest text-sm uppercase block mb-3">Spiritual Lineage</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-900 mb-6">Guiding Lights</h2>
                    <div className="w-24 h-px bg-gold-500 mx-auto"></div>
                    <p className="text-maroon-700 font-serif italic max-w-2xl mx-auto mt-4">"The Guru is the beacon that dispels the darkness of ignorance."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Guru 1 */}
                    <div className="group bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-700 hover:-translate-y-2 border border-gold-100/50 hover:border-gold-400/50 reveal delay-100 overflow-hidden relative">
                        {/* Halo Background */}
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gold-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="p-8 text-center relative z-10">
                            {/* Image Frame */}
                            <div className="w-48 h-48 mx-auto rounded-full border-4 border-gold-100 group-hover:border-gold-400 shadow-xl overflow-hidden transition-colors duration-700 relative mb-6">
                                <img src={images.gurus.guru1} alt="Sri Sadguru Udhava Ramachandra Maharaj" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                            </div>

                            <div className="relative">
                                <h3 className="font-display font-bold text-maroon-900 text-xl mb-3 group-hover:text-maroon-700 transition-colors">Sri Sadguru Udhava Ramachandra Maharaj</h3>
                                <div className="w-12 h-px bg-gold-300 mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-maroon-800/80 font-serif italic text-sm">"Service to man is service to God."</p>
                            </div>
                        </div>
                    </div>

                    {/* Guru 2 */}
                    <div className="group bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-700 hover:-translate-y-2 border border-gold-100/50 hover:border-gold-400/50 reveal delay-200 overflow-hidden relative">
                        {/* Halo Background */}
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gold-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="p-8 text-center relative z-10">
                            {/* Image Frame */}
                            <div className="w-48 h-48 mx-auto rounded-full border-4 border-gold-100 group-hover:border-gold-400 shadow-xl overflow-hidden transition-colors duration-700 relative mb-6">
                                <img src={images.gurus.guru2} alt="Sri Vithala Bhava Maharaj" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                            </div>

                            <div className="relative">
                                <h3 className="font-display font-bold text-maroon-900 text-xl mb-3 group-hover:text-maroon-700 transition-colors">Sri Vithala Bhava Maharaj</h3>
                                <div className="w-12 h-px bg-gold-300 mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-maroon-800/80 font-serif italic text-sm">"Bhakti is the easiest path to liberation."</p>
                            </div>
                        </div>
                    </div>

                    {/* Guru 3 */}
                    <div className="group bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-700 hover:-translate-y-2 border border-gold-100/50 hover:border-gold-400/50 reveal delay-300 overflow-hidden relative">
                        {/* Halo Background */}
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gold-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="p-8 text-center relative z-10">
                            {/* Image Frame */}
                            <div className="w-48 h-48 mx-auto rounded-full border-4 border-gold-100 group-hover:border-gold-400 shadow-xl overflow-hidden transition-colors duration-700 relative mb-6">
                                <img src={images.gurus.guru3} alt="Sri Udhavabhava Maharaj" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                            </div>

                            <div className="relative">
                                <h3 className="font-display font-bold text-maroon-900 text-xl mb-3 group-hover:text-maroon-700 transition-colors">Sri Udhavabhava Maharaj</h3>
                                <div className="w-12 h-px bg-gold-300 mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-maroon-800/80 font-serif italic text-sm">"Chant the name of the Lord with love."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GurusSection;

import { images } from '../../data/images';
import { gurus } from '../../data/gurus';
import { Link } from 'react-router-dom';

const Gurus = () => {
    return (
        <section id="gurus" className="py-24 bg-[#f2e4cf] reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6b2f08] font-display tracking-widest text-sm uppercase block mb-3">Spiritual Lineage</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#6b2f08] mb-6">Guiding Lights</h2>
                    <div className="w-24 h-px bg-[#d4a017] mx-auto"></div>
                    <p className="text-[#8a3b0f] font-serif italic max-w-2xl mx-auto mt-4">"The Guru is the beacon that dispels the darkness of ignorance."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gurus.map((guru, index) => (
                        <Link to={`/guru/${guru.id}`} key={guru.id} className="group block bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-[#d4a017]/10 transition-all duration-700 hover:-translate-y-2 border border-[#d4a017]/20 hover:border-[#d4a017]/50 reveal overflow-hidden relative" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                            {/* Halo Background */}
                            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-[#d4a017]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="p-8 text-center relative z-10">
                                {/* Image Frame */}
                                <div className="w-48 h-48 mx-auto rounded-full border-4 border-[#d4a017]/30 group-hover:border-[#d4a017] shadow-xl overflow-hidden transition-colors duration-700 relative mb-6">
                                    <img src={guru.image} alt={guru.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                                </div>

                                <div className="relative">
                                    <h3 className="font-display font-bold text-[#6b2f08] text-xl mb-3 group-hover:text-[#8a3b0f] transition-colors">{guru.name}</h3>
                                    <div className="w-12 h-px bg-[#d4a017] mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
                                    <p className="text-[#6b2f08]/80 font-serif italic text-sm">"{guru.quote}"</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gurus;

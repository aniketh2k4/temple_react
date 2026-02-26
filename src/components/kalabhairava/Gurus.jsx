import { images } from '../../data/images';
import { gurus } from '../../data/gurus';
import { Link } from 'react-router-dom';

const Gurus = () => {
    return (
        <section id="gurus" className="py-24 reveal bg-[#3b0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="font-display tracking-widest text-sm uppercase block mb-3 text-[#d4a017]">Spiritual Lineage</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#f5d26a]">Guiding Lights</h2>
                    <div className="w-24 h-px mx-auto opacity-30 bg-yellow-500"></div>
                    <p className="font-serif italic max-w-2xl mx-auto mt-4 text-[#d4a017]">"The Guru is the beacon that dispels the darkness of ignorance."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gurus.map((guru, index) => (
                        <Link to={`/guru/${guru.id}`} key={guru.id} className="group block rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(212,160,23,0.6)] transition-all duration-700 hover:-translate-y-2 border border-yellow-500/40 bg-red-900/70 backdrop-blur-sm reveal overflow-hidden relative" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-yellow-500"></div>

                            <div className="p-8 text-center relative z-10">
                                {/* Image Frame */}
                                <div className="w-48 h-48 mx-auto rounded-full border-4 shadow-xl overflow-hidden transition-colors duration-700 relative mb-6 border-yellow-500/40">
                                    <img src={guru.image} alt={guru.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                                </div>

                                <div className="relative">
                                    <h3 className="font-display font-bold text-xl mb-3 transition-colors text-[#f5d26a]">{guru.name}</h3>
                                    <div className="w-12 h-px mx-auto mb-3 group-hover:w-24 transition-all duration-500 bg-yellow-500/40"></div>
                                    <p className="font-serif italic text-sm text-[#d4a017]">"{guru.quote}"</p>
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

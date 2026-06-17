import { images } from '../../data/images';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 reveal" style={{ backgroundColor: '#071a4d' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: '#d7dbe6' }}>Temple Gallery</h2>
                    <p className="font-serif italic max-w-2xl mx-auto" style={{ color: '#7f9cff' }}>"Architecture is a visual art, and the
                        buildings speak for themselves."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Large Item */}
                    <div
                        className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <img src={images.templeBg} alt="Temple Main"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <h3 className="font-display font-bold text-2xl" style={{ color: '#d7dbe6' }}>Main Gopuram</h3>
                                <p className="text-sm mt-1" style={{ color: '#7f9cff' }}>Evening View</p>
                            </div>
                        </div>
                    </div>

                    {/* Regular Items */}
                    <div
                        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <img src={images.deities.panduranga} alt="Deity"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <h3 className="font-display font-bold text-lg" style={{ color: '#d7dbe6' }}>Sanctum Sanctorum</h3>
                            </div>
                        </div>
                    </div>

                    <div
                        className="lg:row-span-2 group relative overflow-hidden rounded-xl shadow-lg flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: '#0c225a' }}>
                        <div
                            className="text-center p-8 transition-transform duration-500 group-hover:scale-110" style={{ color: '#7f9cff' }}>
                            <span
                                className="block text-4xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">📷</span>
                            <p className="font-display uppercase tracking-wider text-sm" style={{ color: '#d7dbe6' }}>More memories<br />to be made</p>
                        </div>
                        <div
                            className="absolute inset-0 border-4 transition-colors duration-300 rounded-xl" style={{ borderColor: 'rgba(30, 58, 138, 0.5)' }}>
                        </div>
                    </div>

                    <div
                        className="group relative overflow-hidden rounded-xl shadow-lg flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: '#0c225a' }}>
                        <div
                            className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")' }}>
                        </div>
                        <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
                            <h3
                                className="font-display font-bold text-xl mb-1 transition-colors" style={{ color: '#7f9cff' }}>
                                Join Us</h3>
                            <p className="text-sm font-serif transition-colors" style={{ color: '#d7dbe6' }}>Share
                                your moments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

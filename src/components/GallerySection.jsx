import { images } from '../data/images';
import instagramImage from "../assets/gallery/Instagram.jpg";

const GallerySection = () => {
    return (
        <section id="gallery" className="py-24 bg-sandal reveal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-maroon-900 mb-4">Temple Gallery</h2>
                    <p className="text-maroon-700 font-serif italic max-w-2xl mx-auto">"Architecture is a visual art, and the
                        buildings speak for themselves."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Large Item */}
                    <div
                        className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <img src={images.templeBg} alt="Temple Main"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <h3 className="font-display font-bold text-2xl">Main Gopuram</h3>
                                <p className="text-gold-300 text-sm mt-1">Evening View</p>
                            </div>
                        </div>
                    </div>

                    {/* Regular Items */}
                    <div
                        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <img src={images.deities.panduranga} alt="Deity"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <h3 className="font-display font-bold text-lg">Sanctum Sanctorum</h3>
                            </div>
                        </div>
                    </div>

                    {/* Instagram Item */}
                    {/* <a
                        href="https://www.instagram.com/rukmini.panduranga.devalayam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300 block"
                    >
                        <img src={instagramImage} alt="Panduranga Instagram"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </a> */}
                    <a
                        href="https://www.instagram.com/rukmini.panduranga.devalayam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="bg-white flex items-center justify-center p-6 h-64">
                            <img
                                src={instagramImage}
                                alt="Panduranga Instagram"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </a>

                    <div
                        className="lg:row-span-2 group relative overflow-hidden rounded-xl shadow-lg bg-maroon-100 flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <div
                            className="text-maroon-300 text-center p-8 transition-transform duration-500 group-hover:scale-110">
                            <span
                                className="block text-4xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">📷</span>
                            <p className="font-display uppercase tracking-wider text-sm">More memories<br />to be made</p>
                        </div>
                        <div
                            className="absolute inset-0 border-4 border-maroon-900/5 group-hover:border-gold-500/50 transition-colors duration-300 rounded-xl">
                        </div>
                    </div>

                    <div
                        className="group relative overflow-hidden rounded-xl shadow-lg bg-maroon-800 flex items-center justify-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                        <div
                            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 transition-opacity group-hover:opacity-50">
                        </div>
                        <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
                            <h3
                                className="text-gold-400 font-display font-bold text-xl mb-1 group-hover:text-white transition-colors">
                                Join Us</h3>
                            <p className="text-maroon-200 text-sm font-serif group-hover:text-gold-200 transition-colors">Share
                                your moments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

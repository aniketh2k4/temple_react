import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { GALLERY_DATA } from '../data/gallery'

const GalleryGrid = () => {
    // Use the reveal hook on the section container
    const revealRef = useRevealOnScroll({ threshold: 0.15 }, true)

    return (
        <section
            ref={revealRef}
            className="py-20 bg-white opacity-0 transition-opacity duration-1000 ease-out transform translate-y-10 [.active&]:opacity-100 [.active&]:translate-y-0"
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-maroon uppercase mb-2">Divine Glimpses</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Temple Gallery</h3>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                </div>

                {/* Masonry Layout Container using Tailwind columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {GALLERY_DATA.map((item) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-xl font-display font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-offwhite font-serif opacity-90">{item.subtitle}</p>
                                </div>
                            </div>

                            {/* Decorative border that appears on hover */}
                            <div className="absolute inset-3 border-2 border-gold/0 group-hover:border-gold/50 rounded-lg transition-colors duration-500 pointer-events-none mix-blend-overlay"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-maroon text-maroon hover:bg-maroon hover:text-white px-8 py-3 rounded uppercase tracking-wider font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-opacity-50 inline-block font-sans">
                        View All Photos
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GalleryGrid

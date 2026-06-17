const Gallery = () => {
    const images = [1, 2, 3, 4, 5, 6];

    return (
        <section id="gallery" className="py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f2e4cf' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: '#6b2f08' }}>
                        Divine <span style={{ color: '#d4a017' }}>Gallery</span>
                    </h2>
                    <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#d4a017' }}></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((item) => (
                        <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square" style={{ border: `2px solid #d4a017` }}>
                            <img src={`/placeholder-gallery-${item}.jpg`} alt={`Gallery images ${item}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(107, 47, 8, 0.6)' }}>
                                <span className="font-serif font-bold tracking-widest uppercase text-lg" style={{ color: '#f3e9dc' }}>
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

const Map = () => {
    return (
        <section id="map"
            className="h-[400px] w-full relative transition-all duration-1000" style={{ backgroundColor: '#0a0a0a' }}>
            <iframe
                title="Temple Location Map"
                src="https://www.google.com/maps?q=17.6849035,78.1169695&z=17&output=embed"
                width="100%" height="100%" style={{ border: 0, opacity: 0.7 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="absolute top-0 w-full h-full pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
        </section>
    );
};

export default Map;

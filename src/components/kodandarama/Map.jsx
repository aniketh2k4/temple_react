const Map = () => {
    return (
        <section className="w-full relative overflow-hidden" style={{ height: '400px' }}>
            <div className="absolute inset-0 bg-yellow-900/20 z-10 pointer-events-none mix-blend-color sepia-[.3]"></div>
            <iframe
                title="Temple Location Map"
                src="https://www.google.com/maps?q=17.7670453,78.0088357&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(40%) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale-[20%]"
            ></iframe>
        </section>
    );
};

export default Map;

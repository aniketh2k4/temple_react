const MapSection = () => {
    return (
        <section
            id="map"
            className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-1000"
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2657143568517!2d78.1169695!3d17.684903499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf7a8ffeaec41%3A0x7117c96532d1fde7!2sSri%20Rukmini%20Panduranga%20Swamy%20Devasthanam%2C%20Angadipet!5e0!3m2!1sen!2sin!4v1773331431566!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-0 w-full h-full pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
        </section>
    );
};

export default MapSection;
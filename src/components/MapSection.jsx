const MapSection = () => {
    return (
        <section id="map"
            className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.99268878849!2d78.486671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae18059089b0d6a0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1628156642139!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
            <div className="absolute top-0 w-full h-full pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
        </section>
    );
};

export default MapSection;

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#6b2f08] via-[#8a3b0f] to-[#4a1f06] border-t border-[#d4a017]/30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                <div className="md:col-span-2">
                    <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3" style={{ color: '#d4a017' }}>
                        <span className="text-4xl">ॐ</span> SRI KODANDA RAMA
                    </h3>
                    <p className="font-serif leading-relaxed mb-6 max-w-md" style={{ color: '#f3e9dc' }}>
                        A haven of peace and spirituality. Join us in our daily prayers and sevas to receive the divine blessings of Lord Sri Rama and Sita Devi.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-serif font-bold mb-6" style={{ color: '#d4a017' }}>Quick Links</h4>
                    <ul className="space-y-3 font-serif" style={{ color: '#f3e9dc' }}>
                        <li><a href="#home" className="hover:text-[#d4a017] transition-colors">Home</a></li>
                        <li><a href="#deity" className="hover:text-[#d4a017] transition-colors">About Deity</a></li>
                        <li><a href="#info" className="hover:text-[#d4a017] transition-colors">Temple Schedule</a></li>
                        <li><a href="#gallery" className="hover:text-[#d4a017] transition-colors">Gallery</a></li>
                        <li><a href="#donate" className="hover:text-[#d4a017] transition-colors">Donate</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-serif font-bold mb-6" style={{ color: '#d4a017' }}>Contact Us</h4>
                    <address className="not-italic font-serif space-y-3" style={{ color: '#f3e9dc' }}>
                        <p>123 Temple Road, </p>
                        <p>Spiritual District, </p>
                        <p>City, State 123456</p>
                        <p className="pt-2">Phone: +91 98765 43210</p>
                        <p>Email: info@kodandaramatemple.org</p>
                    </address>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t pt-8 text-center font-serif text-sm" style={{ borderColor: 'rgba(212, 160, 23, 0.3)', color: '#f3e9dc' }}>
                <p>&copy; {new Date().getFullYear()} Sri Kodanda Rama Swamy Temple. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

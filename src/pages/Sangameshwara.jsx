import React from 'react';
import Navbar from '../components/sangameshwara/Navbar';
import Hero from '../components/sangameshwara/Hero';
import DeitySection from '../components/DeitySection';
import { images } from '../data/images';

export const sangameshwaraDeities = [
    {
        id: 1,
        name: 'Sri Panduranga',
        subtitle: 'The Supreme Lord of Pandharpur',
        title: 'Lord of Compassion',
        description: 'The supreme deity worshipped at Pandharpur, known for standing on a brick to test his devotee Pundalik.',
        image: images.deities.panduranga,
    },
    {
        id: 2,
        name: 'Sri Rukmini',
        subtitle: 'Divine Consort',
        title: 'Goddess of Fortune',
        description: 'The principal queen and loving consort of Lord Krishna, embodying devotion, beauty and grace.',
        image: images.deities.rukmini,
    }
];
import Schedule from '../components/sangameshwara/Schedule';
import Gallery from '../components/sangameshwara/Gallery';
import Gurus from '../components/sangameshwara/Gurus';
import TempleExplorer from '../components/shared/TempleExplorer';
import Testimonials from '../components/sangameshwara/Testimonials';
import Donation from '../components/sangameshwara/Donation';
import Map from '../components/sangameshwara/Map';
import Footer from '../components/sangameshwara/Footer';

const Sangameshwara = () => {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: '#020c2b' }}>
            <Navbar />
            <Hero />
            <DeitySection deities={sangameshwaraDeities} templeName="sangameshwara" />
            <Schedule />
            <Gallery />
            <Gurus />
            <TempleExplorer
                currentTemple="sangameshwara"
                accentColor="#7f9cff"
                backgroundColor="#071a4d"
                cardBackground="#0c225a"
                textColor="#d7dbe6"
                borderColor="#1e3a8a"
            />
            <Testimonials />
            <Donation />
            <Map />
            <Footer />
        </div>
    );
};

export default Sangameshwara;

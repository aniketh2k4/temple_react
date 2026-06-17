import React from 'react';
import Navbar from '../components/kodandarama/Navbar';
import Hero from '../components/kodandarama/Hero';
import DeitySection from '../components/DeitySection';
import { images } from '../data/images';

export const kodandaramaDeities = [
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
    },
    {
        id: 3,
        name: 'Sri Krishna',
        subtitle: 'The Supreme Personality',
        title: 'Lord of Compassion',
        description: 'The eighth avatar of Vishnu. He is the god of protection, compassion, tenderness, and love, revered universally across the spiritual realms.',
        image: images.deities.krishna,
    },
    {
        id: 4,
        name: 'Sri Shiva',
        subtitle: 'The Destroyer',
        title: 'Lord of Cosmic Dance',
        description: 'One of the principal deities of Hinduism. He is the Supreme Being in Shaivism, meditating upon Mount Kailash and protecting the universe.',
        image: images.deities.shiva,
    },
    {
        id: 5,
        name: 'Sri Panduranga',
        subtitle: 'The Supreme Lord of Pandharpur',
        title: 'Lord of Compassion',
        description: 'The supreme deity worshipped at Pandharpur, known for standing on a brick to test his devotee Pundalik.',
        image: images.deities.panduranga,
    }
];
import Schedule from '../components/kodandarama/Schedule';
import Gallery from '../components/kodandarama/Gallery';
import Gurus from '../components/kodandarama/Gurus';
import TempleExplorer from '../components/shared/TempleExplorer';
import Testimonials from '../components/kodandarama/Testimonials';
import Donation from '../components/kodandarama/Donation';
import Map from '../components/kodandarama/Map';
import Footer from '../components/kodandarama/Footer';

const Kodandarama = () => {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: '#f3e9dc' }}>
            <Navbar />
            <Hero />
            <DeitySection deities={kodandaramaDeities} templeName="kodandarama" />
            <Schedule />
            <Gallery />
            <Gurus />
            <TempleExplorer
                currentTemple="kodandarama"
                accentColor="#d4a017"
                backgroundColor="#f2e4cf"
                cardBackground="#fff6e8"
                textColor="#6b2f08"
                borderColor="#d4a017"
            />
            <Testimonials />
            <Donation />
            <Map />
            <Footer />
        </div>
    );
};

export default Kodandarama;

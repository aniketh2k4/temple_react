import React from 'react';
import Navbar from '../components/kalabhairava/Navbar';
import Hero from '../components/kalabhairava/Hero';
import DeitySection from '../components/DeitySection';
import { images } from '../data/images';

export const kalabhairavaDeities = [
    {
        id: 1,
        name: 'Sri Panduranga',
        subtitle: 'The Supreme Lord of Pandharpur',
        title: 'Lord of Compassion',
        description: 'The supreme deity worshipped at Pandharpur, known for standing on a brick to test his devotee Pundalik.',
        image: images.deities.panduranga,
    }
];
import Schedule from '../components/kalabhairava/Schedule';
import Gallery from '../components/kalabhairava/Gallery';
import Gurus from '../components/kalabhairava/Gurus';
import TempleExplorer from '../components/shared/TempleExplorer';
import Testimonials from '../components/kalabhairava/Testimonials';
import Donation from '../components/kalabhairava/Donation';
import Map from '../components/kalabhairava/Map';
import Footer from '../components/kalabhairava/Footer';

const Kalabhairava = () => {
    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: '#0a0a0a', color: '#cfcfcf' }}>
            <Navbar />
            <Hero />
            <DeitySection deities={kalabhairavaDeities} templeName="kalabhairava" />
            <Schedule />
            <Gallery />
            <Gurus />
            <TempleExplorer
                currentTemple="kalabhairava"
                accentColor="#e5e5e5"
                backgroundColor="#111111"
                cardBackground="#1a1a1a"
                textColor="#cfcfcf"
                borderColor="#2a2a2a"
            />
            <Testimonials />
            <Donation />
            <Map />
            <Footer />
        </div>
    );
};

export default Kalabhairava;

import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import DeitySection from '../components/DeitySection'
import ScheduleSection from '../components/ScheduleSection'
import GallerySection from '../components/GallerySection'
import GurusSection from '../components/GurusSection'
import TempleExplorer from '../components/shared/TempleExplorer'
import DonationSection from '../components/DonationSection'
import TestimonialsSection from '../components/TestimonialsSection'
import MapSection from '../components/MapSection'
import { images } from '../data/images'

export const pandurangaDeities = [
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
    },
    {
        id: 6,
        name: 'Sri Panduranga',
        subtitle: 'The Supreme Lord of Pandharpur',
        title: 'Lord of Compassion',
        description: 'The supreme deity worshipped at Pandharpur, known for standing on a brick to test his devotee Pundalik.',
        image: images.deities.panduranga,
    },
    {
        id: 7,
        name: 'Sri Panduranga',
        subtitle: 'The Supreme Lord of Pandharpur',
        title: 'Lord of Compassion',
        description: 'The supreme deity worshipped at Pandharpur, known for standing on a brick to test his devotee Pundalik.',
        image: images.deities.panduranga,
    }
];

const Home = () => {
    return (
        <MainLayout>
            <div id="home">
                <HeroSection />
            </div>
            <div id="deities" className="scroll-mt-20">
                <DeitySection deities={pandurangaDeities} templeName="panduranga" />
            </div>
            <div id="schedule" className="scroll-mt-20">
                <ScheduleSection />
            </div>
            <div id="gallery" className="scroll-mt-20">
                <GallerySection />
            </div>
            <div id="gurus" className="scroll-mt-20">
                <GurusSection />
            </div>
            <TempleExplorer
                currentTemple="panduranga"
                accentColor="#d4a017"
                backgroundColor="#f5e6d3"
                cardBackground="#fffaf3"
                textColor="#5a1e1e"
                borderColor="#e2c48d"
            />
            <div id="donate" className="scroll-mt-20">
                <DonationSection />
            </div>
            <div id="testimonials" className="scroll-mt-20">
                <TestimonialsSection />
            </div>
            <div id="location" className="scroll-mt-20">
                <MapSection />
            </div>
        </MainLayout>
    )
}

export default Home

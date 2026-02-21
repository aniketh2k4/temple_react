import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import DeitySection from '../components/DeitySection'
import ScheduleSection from '../components/ScheduleSection'
import GallerySection from '../components/GallerySection'
import GurusSection from '../components/GurusSection'
import DonationSection from '../components/DonationSection'
import TestimonialsSection from '../components/TestimonialsSection'
import MapSection from '../components/MapSection'

const Home = () => {
    return (
        <MainLayout>
            <div id="home">
                <HeroSection />
            </div>
            <div id="deities" className="scroll-mt-20">
                <DeitySection />
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

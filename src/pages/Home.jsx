import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import DeitySlider from '../components/DeitySlider'
import TempleSchedule from '../components/TempleSchedule'
import GalleryGrid from '../components/GalleryGrid'
import GurusSection from '../components/GurusSection'
import DonationSection from '../components/DonationSection'

const Home = () => {
    return (
        <MainLayout>
            <div id="home">
                <HeroSection />
            </div>
            <div id="deities" className="scroll-mt-20">
                <DeitySlider />
            </div>
            <div id="schedule" className="scroll-mt-20">
                <TempleSchedule />
            </div>
            <div id="gallery" className="scroll-mt-20">
                <GalleryGrid />
            </div>
            <div id="gurus" className="scroll-mt-20">
                <GurusSection />
            </div>
            <div id="donate" className="scroll-mt-20">
                <DonationSection />
            </div>
        </MainLayout>
    )
}

export default Home

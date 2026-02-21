import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col relative">
            <Navbar />
            {/* The pt-20 (padding-top: 5rem) offsets the content so it doesn't hide behind the fixed 5rem (h-20) Navbar */}
            <main className="flex-1 pt-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout

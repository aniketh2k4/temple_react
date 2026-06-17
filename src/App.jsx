import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kodandarama from './pages/Kodandarama'
import Sangameshwara from './pages/Sangameshwara'
import Kalabhairava from './pages/Kalabhairava'
import DeityDetail from './pages/DeityDetail'
import GuruDetail from './pages/GuruDetail'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/temple/panduranga" element={<Home />} />
                <Route path="/temple/kodandarama" element={<Kodandarama />} />
                <Route path="/temple/sangameshwara" element={<Sangameshwara />} />
                <Route path="/temple/kalabhairava" element={<Kalabhairava />} />
                <Route path="/temple/:templeName/deity/:deityId" element={<DeityDetail />} />
                <Route path="/guru/:guruId" element={<GuruDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

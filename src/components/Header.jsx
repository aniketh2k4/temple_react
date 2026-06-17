import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Temple Website</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/">Home</Link></li>
                        {/* Additional navigation links will go here */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

import PropTypes from 'prop-types'
import { GURUS_DATA } from '../data/gurus'

const GuruCard = ({ guru }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer text-center">
            {/* Container with Halo glow on hover */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full p-1 transition-all duration-500 ease-in-out">
                {/* Glow effect layer */}
                <div className="absolute inset-0 rounded-full bg-gold opacity-0 group-hover:opacity-40 group-hover:blur-md transition-all duration-500 scale-90 group-hover:scale-105"></div>

                {/* Golden border wrapper */}
                <div className="relative w-full h-full rounded-full border-4 border-gold bg-cream overflow-hidden shadow-xl z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <img
                        src={guru.image}
                        alt={guru.name}
                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <h4 className="text-2xl font-display font-bold text-maroon mb-1">{guru.name}</h4>
                <p className="text-gold-dark font-serif font-medium mb-3">{guru.title}</p>

                <div className="flex justify-center mb-3">
                    <div className="w-8 h-[2px] bg-maroon/30 group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
                </div>

                <p className="text-gray-600 font-serif italic text-sm px-4 max-w-xs transition-opacity duration-300 opacity-80 group-hover:opacity-100">
                    "{guru.quote}"
                </p>
            </div>
        </div>
    )
}

GuruCard.propTypes = {
    guru: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
    }).isRequired,
}


const GurusSection = () => {
    return (
        <section className="py-24 bg-offwhite/50 relative overflow-hidden">
            {/* Decorative background mandala element (placeholder) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cream/30 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-maroon uppercase mb-2">Spiritual Lineage</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Our Guiding Lights</h3>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                    <p className="mt-6 text-gray-600 font-serif max-w-2xl mx-auto text-lg">
                        The enlightened masters whose teachings illuminate our spiritual path and guide our temple's traditions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 lg:gap-24">
                    {GURUS_DATA.map((guru) => (
                        <GuruCard key={guru.id} guru={guru} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GurusSection

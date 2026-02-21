import PropTypes from 'prop-types'

const ScheduleCard = ({ title, icon, items, theme = 'maroon' }) => {
    const themeClasses = {
        maroon: 'bg-white border-t-4 border-maroon',
        gold: 'bg-white border-t-4 border-gold',
        dark: 'bg-gray-900 border-t-4 border-maroon text-white',
    }

    const textClasses = {
        maroon: 'text-gray-800',
        gold: 'text-gray-800',
        dark: 'text-gray-300',
    }

    const titleClasses = {
        maroon: 'text-maroon',
        gold: 'text-gold-dark',
        dark: 'text-gold',
    }

    return (
        <div className={`rounded-lg shadow-xl p-6 md:p-8 h-full transition-transform hover:-translate-y-1 duration-300 ${themeClasses[theme]}`}>
            <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${theme === 'dark' ? 'bg-maroon/20 text-gold' : 'bg-cream text-maroon'}`}>
                    {icon}
                </div>
                <h3 className={`text-2xl font-display font-bold ${titleClasses[theme]}`}>{title}</h3>
            </div>

            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className={`flex justify-between items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0 ${textClasses[theme]}`}>
                        <div className="font-serif pr-4">
                            <span className="block font-medium">{item.name}</span>
                            {item.description && <span className="text-sm opacity-80 mt-1 block">{item.description}</span>}
                        </div>
                        {item.time && (
                            <div className="font-sans font-semibold text-right whitespace-nowrap bg-black/5 px-3 py-1 rounded">
                                {item.time}
                            </div>
                        )}
                        {item.date && (
                            <div className="font-sans font-semibold text-right whitespace-nowrap bg-black/5 px-3 py-1 rounded text-sm">
                                {item.date}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ScheduleCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            time: PropTypes.string,
            date: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
    theme: PropTypes.oneOf(['maroon', 'gold', 'dark']),
}

export default ScheduleCard

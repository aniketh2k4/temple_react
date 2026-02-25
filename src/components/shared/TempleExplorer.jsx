import React from 'react';
import { Link } from 'react-router-dom';

const ALL_TEMPLES = [
    {
        id: 'panduranga',
        name: 'Panduranga',
        tagline: 'Abode of Devotion',
        path: '/temple/panduranga'
    },
    {
        id: 'kodandarama',
        name: 'Kodandarama',
        tagline: 'Embodiment of Dharma',
        path: '/temple/kodandarama'
    },
    {
        id: 'sangameshwara',
        name: 'Sangameshwara',
        tagline: 'Silence of the Cosmos',
        path: '/temple/sangameshwara'
    },
    {
        id: 'kalabhairava',
        name: 'Kalabhairava',
        tagline: 'Guardian of Time',
        path: '/temple/kalabhairava'
    }
];

const TempleExplorer = ({
    currentTemple,
    accentColor,
    backgroundColor,
    cardBackground,
    textColor,
    borderColor
}) => {

    const templesToRender = ALL_TEMPLES.filter(
        temple => temple.id !== currentTemple
    );

    return (
        <section
            id="temples"
            className="py-24"
            style={{ backgroundColor }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-5xl font-display font-bold mb-4"
                        style={{ color: textColor }}
                    >
                        Explore Other Sacred Abodes
                    </h2>
                    <div
                        className="w-24 h-px mx-auto"
                        style={{ backgroundColor: accentColor }}
                    ></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {templesToRender.map((temple) => (
                        <div
                            key={temple.id}
                            className="group rounded-xl p-8 border transition-all duration-500 relative flex flex-col items-center text-center transform hover:-translate-y-5"
                            style={{
                                backgroundColor: cardBackground,
                                borderColor: borderColor,
                                boxShadow:
                                    `0 4px 6px -1px rgba(0, 0, 0, 0.1),
                                     0 2px 4px -1px rgba(0, 0, 0, 0.06)`
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = accentColor;
                                e.currentTarget.style.boxShadow =
                                    `0 20px 25px -5px rgba(0, 0, 0, 0.1),
                                     0 10px 10px -5px rgba(0, 0, 0, 0.04),
                                     0 0 15px ${accentColor}40`;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = borderColor;
                                e.currentTarget.style.boxShadow =
                                    `0 4px 6px -1px rgba(0, 0, 0, 0.1),
                                     0 2px 4px -1px rgba(0, 0, 0, 0.06)`;
                            }}
                        >
                            <h3
                                className="font-display font-bold text-2xl mb-2 transition-colors duration-300"
                                style={{ color: textColor }}
                            >
                                {temple.name}
                            </h3>

                            <p
                                className="font-serif italic text-sm mb-8 opacity-80"
                                style={{ color: textColor }}
                            >
                                "{temple.tagline}"
                            </p>

                            <div className="mt-auto">
                                <Link
                                    to={temple.path}
                                    className="inline-block px-6 py-2 rounded-full border text-sm tracking-wider uppercase transition-all duration-300 font-display"
                                    style={{
                                        borderColor: accentColor,
                                        color: accentColor,
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = accentColor;
                                        e.currentTarget.style.color = cardBackground;
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = accentColor;
                                    }}
                                >
                                    Visit Temple
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TempleExplorer;
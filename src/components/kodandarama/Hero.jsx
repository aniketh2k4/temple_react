// 

import ramaImage from "../../assets/deities/rama.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 bg-gradient-to-b from-[#6b2f08] via-[#8a3b0f] to-[#4a1f06]"
        >
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-opacity duration-1000 delay-300">

                {/* Centered Deity Image inside arch */}
                <div className="mb-8 relative group inline-block">

                    {/* Subtle gold glow behind image */}
                    <div
                        className="absolute inset-0 blur-2xl opacity-40 rounded-t-full animate-pulse transition-opacity duration-500 group-hover:opacity-60"
                        style={{ backgroundColor: '#d4a017' }}
                    />

                    {/* Arch shaped image */}
                    <div
                        className="relative w-64 h-80 md:w-72 md:h-96 rounded-t-full border-4 shadow-2xl overflow-hidden mx-auto"
                        style={{ borderColor: '#d4a017' }}
                    >
                        <img
                            src={ramaImage}
                            alt="Sri Kodanda Rama Swamy"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 brightness-105 contrast-105"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <span
                        className="font-serif tracking-[0.2em] uppercase text-sm md:text-base"
                        style={{ color: '#f3e9dc' }}
                    >
                        Welcome to the Divine Abode
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-2 leading-tight tracking-tight flex flex-col items-center">
                    <span style={{ color: '#d4a017' }}>SRI KODANDA RAMA</span>
                    <span style={{ color: '#f3e9dc' }}>SWAMY TEMPLE</span>
                </h1>

                <p
                    className="text-xl md:text-2xl mb-12 font-serif italic drop-shadow-md max-w-3xl mx-auto opacity-90"
                    style={{ color: '#f3e9dc' }}
                >
                    "Embodiment of Dharma and Divine Virtue."
                </p>

                <div className="flex justify-center items-center">
                    <a
                        href="#deity"
                        className="group relative px-8 py-4 font-serif tracking-widest text-sm uppercase transition-all duration-500 border overflow-hidden rounded-sm"
                        style={{
                            borderColor: '#d4a017',
                            color: '#d4a017',
                            backgroundColor: 'transparent'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#d4a017';
                            e.currentTarget.style.color = '#4a1f06';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#d4a017';
                        }}
                    >
                        <span className="relative z-10 font-bold flex items-center transition-colors">
                            Discover More
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
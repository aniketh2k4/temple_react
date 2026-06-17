import { useParams, Link } from 'react-router-dom';
import { pandurangaDeities } from './Home';
import { kodandaramaDeities } from './Kodandarama';
import { sangameshwaraDeities } from './Sangameshwara';
import { kalabhairavaDeities } from './Kalabhairava';

const templeDataMap = {
    panduranga: pandurangaDeities,
    kodandarama: kodandaramaDeities,
    sangameshwara: sangameshwaraDeities,
    kalabhairava: kalabhairavaDeities,
};

const DeityDetail = () => {
    const { templeName, deityId } = useParams();
    const isKalabhairava = templeName === "kalabhairava";
    const isSangameshwara = templeName === "sangameshwara";
    const deities = templeDataMap[templeName] || [];
    const deity = deities.find(d => String(d.id) === deityId);

    if (!deity) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center">
                    <h2 className="text-3xl font-display text-maroon-900 mb-4">Deity not found</h2>
                    <Link to={`/temple/${templeName}`} className="text-gold-500 hover:text-gold-600">Return to Temple</Link>
                </div>
            </div>
        );
    }

    const getBgGradient = (temple) => {
        switch (temple) {
            case 'panduranga':
                return 'bg-gradient-to-b from-[#f3e4d7] via-[#f9efe6] to-[#efe0d3]';
            case 'kodandarama':
                return 'bg-gradient-to-b from-[#f5e1cc] via-[#fdebd7] to-[#edd3ba]';
            case 'sangameshwara':
                return 'bg-gradient-to-b from-[#0f1e3a] via-[#142a4f] to-[#0d1a33]';
            case 'kalabhairava':
                return 'bg-gradient-to-b from-red-950 via-red-900 to-red-800';
            default:
                return 'bg-cream';
        }
    };

    const getBorderAccent = (temple) => {
        switch (temple) {
            case 'panduranga':
            case 'kodandarama':
                return 'border-gold-300';
            case 'sangameshwara':
                return 'border-[#7f9cff]';
            case 'kalabhairava':
                return 'border-[#e5e5e5]';
            default:
                return 'border-gold-300';
        }
    };

    const isDark = templeName === 'sangameshwara' || isKalabhairava;
    const textColor = isKalabhairava ? "text-[#f5d26a]" : isDark ? 'text-white' : 'text-maroon-900';
    const descColor = isKalabhairava ? "text-yellow-200/90" : isDark ? 'text-gray-300' : 'text-gray-700';
    const quoteBg = isDark ? 'bg-black/20' : 'bg-maroon-50';
    const quoteBorder = isDark ? 'border-white/10' : 'border-maroon-100';

    return (
        <div className={`min-h-screen font-sans ${getBgGradient(templeName)}`}>
            {/* Light themed hero section */}
            <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center shadow-sm">
                <div className={`absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-white' : 'from-maroon-900'} via-transparent to-transparent`}></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Centered deity image */}
                    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-10 relative group perspective-1000">
                        <div className={`absolute inset-0 rounded-full border-4 ${getBorderAccent(templeName)} transform scale-105 opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700`}></div>
                        <img
                            src={deity.image}
                            alt={deity.name}
                            className={`w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-2xl border-4 ${isDark ? 'border-[#1a1a1a]' : 'border-white'} hover:scale-105 transition-transform duration-500`}
                        />
                    </div>

                    {/* Deity name */}
                    <h1 className={`text-5xl md:text-7xl font-display font-bold ${textColor} mb-4`}>
                        {deity.name}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gold-500 font-script tracking-wider uppercase mb-8">
                        {deity.subtitle}
                    </p>

                    {/* Decorative divider */}
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4a017] to-transparent mx-auto mt-8 mb-12"></div>

                    {/* Full description */}
                    <div className={`prose prose-lg mx-auto ${descColor} font-serif leading-loose mb-16 text-left`}>
                        <div className="mb-10">
                            <h2 className={`text-3xl font-display font-bold ${textColor} mb-4 text-center border-b pb-2 ${isDark ? 'border-white/10' : 'border-maroon-100'}`}>Origin</h2>
                            <p>{deity.description}</p>
                        </div>
                        <div className="mb-10">
                            <h2 className={`text-3xl font-display font-bold ${textColor} mb-4 text-center border-b pb-2 ${isDark ? 'border-white/10' : 'border-maroon-100'}`}>Divine Significance</h2>
                            <p>{deity.description}</p>
                        </div>
                        <div className="mb-10">
                            <h2 className={`text-3xl font-display font-bold ${textColor} mb-4 text-center border-b pb-2 ${isDark ? 'border-white/10' : 'border-maroon-100'}`}>Worship & Rituals</h2>
                            <p>{deity.description}</p>
                        </div>
                    </div>

                    {/* Sacred quote box */}
                    <div className={`max-w-2xl mx-auto ${quoteBg} rounded-2xl p-10 mb-16 border ${quoteBorder} relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 text-gold-500 ${isDark ? 'bg-[#111111]' : 'bg-cream'}`}>
                            <span className="text-4xl text-gold-500">✦</span>
                        </div>
                        <h3 className={`text-3xl font-display ${textColor} mb-6 tracking-wide`}>{deity.title}</h3>
                        <p className={`text-xl ${descColor} italic leading-relaxed`}>"May the divine grace of {deity.name} bring peace and prosperity to all who seek refuge in its divine presence."</p>
                    </div>

                    <Link
                        to={`/temple/${templeName}`}
                        className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-lg transform hover:-translate-y-1 ${isKalabhairava
                                ? "bg-[#d4a017] text-red-950 hover:bg-yellow-400 hover:text-red-900"
                                : isSangameshwara
                                    ? "bg-teal-700 text-yellow-200 border border-yellow-300 hover:bg-teal-600 hover:text-white"
                                    : templeName === 'panduranga'
                                        ? "bg-[#7a0c0c] text-[#f9e6c5] hover:bg-[#600909]"
                                        : templeName === 'kodandarama'
                                            ? "bg-[#8a3b0f] text-[#ffe5c3] hover:bg-[#6b2f08]"
                                            : "bg-maroon-900 text-gold-100 hover:bg-maroon-800"
                            }`}
                    >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Temple
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DeityDetail;

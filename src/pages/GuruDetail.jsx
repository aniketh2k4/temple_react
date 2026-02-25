import { useParams, Link, useNavigate } from 'react-router-dom';
import { gurus } from '../data/gurus';

const GuruDetail = () => {
    const { guruId } = useParams();
    const navigate = useNavigate();
    const guru = gurus.find(g => g.id === guruId);

    if (!guru) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream font-sans">
                <div className="text-center">
                    <h2 className="text-3xl font-display text-maroon-900 mb-4">Guru not found</h2>
                    <Link to="/" className="text-gold-500 hover:text-gold-600 font-bold tracking-widest">Return to Home</Link>
                </div>
            </div>
        );
    }

    return (
        // <div className="min-h-screen bg-cream font-sans">
        //     <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-white shadow-sm border-b border-gold-100">
        //         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-maroon-900 via-transparent to-transparent"></div>

        //         <div className="relative z-10 max-w-4xl mx-auto">
        //             {/* Centered guru image */}
        //             <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-10 relative group perspective-1000">
        //                 <div className="absolute inset-0 rounded-full border-4 border-gold-300 transform scale-105 opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"></div>
        //                 <img
        //                     src={guru.image}
        //                     alt={guru.name}
        //                     className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
        //                 />
        //             </div>

        //             {/* Guru name */}
        //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-maroon-900 mb-4">
        //                 {guru.name}
        //             </h1>

        //             {/* Subtitle */}
        //             <p className="text-lg md:text-xl text-gold-500 font-script tracking-wider uppercase mb-8">
        //                 {guru.subtitle}
        //             </p>

        //             {/* Decorative divider */}
        //             <div className="flex items-center justify-center gap-4 mb-12">
        //                 <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-300"></div>
        //                 <span className="text-maroon-600 text-2xl">ॐ</span>
        //                 <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-300"></div>
        //             </div>

        //             {/* Biography */}
        //             <div className="prose prose-lg mx-auto text-gray-700 font-serif leading-loose mb-16 text-left">
        //                 <div className="mb-10">
        //                     <h2 className="text-3xl font-display font-bold text-maroon-900 mb-4 text-center border-b pb-2 border-maroon-100">Biography & Teachings</h2>
        //                     <p>{guru.description}</p>
        //                 </div>
        //             </div>

        //             {/* Quote box */}
        //             <div className="max-w-2xl mx-auto bg-maroon-50 rounded-2xl p-10 mb-16 border border-maroon-100 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        //                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        //                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream px-4 text-gold-500">
        //                     <span className="text-4xl text-gold-500">✦</span>
        //                 </div>
        //                 <p className="text-2xl text-maroon-900 italic leading-relaxed font-serif tracking-wide pt-4 pb-2">"{guru.quote}"</p>
        //             </div>

        //             {/* Back to Home button */}
        //             <button
        //                 onClick={() => navigate(-1)}
        //                 className="inline-flex items-center justify-center px-8 py-4 bg-maroon-900 text-gold-100 rounded-full font-bold uppercase tracking-widest hover:bg-maroon-800 transition-colors shadow-lg border border-gold-500/30 transform hover:-translate-y-1 cursor-pointer"
        //             >
        //                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        //                 </svg>
        //                 Go Back
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className="min-h-screen font-sans relative overflow-hidden
                  bg-gradient-to-br from-[#f8f5f0] via-[#f1ebe3] to-[#e8dfd4]">

            {/* subtle background aura */}
            <div className="absolute inset-0 opacity-10 pointer-events-none
                    bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                    from-maroon-900 via-transparent to-transparent">
            </div>

            <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center">

                <div className="max-w-4xl mx-auto">

                    {/* GURU IMAGE WITH GOLD HALO */}
                    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 relative group">

                        {/* gold halo glow */}
                        <div className="absolute inset-0 rounded-full blur-3xl opacity-40
                          bg-gradient-to-r from-[#d4a017] via-[#f5d26a] to-[#d4a017]
                          group-hover:opacity-60 transition duration-700">
                        </div>

                        <img
                            src={guru.image}
                            alt={guru.name}
                            className="relative w-full h-full object-cover rounded-full
                       border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                       transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* NAME */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold
                       text-maroon-900 mb-4 leading-tight">
                        {guru.name}
                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-lg md:text-xl text-[#b88917]
                      tracking-widest uppercase mb-10 font-semibold">
                        {guru.subtitle}
                    </p>

                    {/* DIVIDER */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4a017]"></div>
                        <span className="text-maroon-600 text-2xl">ॐ</span>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4a017]"></div>
                    </div>

                    {/* BIOGRAPHY SECTION */}
                    <div className="max-w-3xl mx-auto mb-20 text-gray-700
                        font-serif leading-loose text-lg text-left">
                        <h2 className="text-3xl font-display text-maroon-900 mb-6 text-center">
                            Biography & Teachings
                        </h2>
                        <p>{guru.description}</p>
                    </div>

                    {/* QUOTE BOX – ENHANCED */}
                    <div className="max-w-2xl mx-auto
                        bg-gradient-to-br from-[#fff8ef] to-[#f3e8db]
                        rounded-3xl p-12 mb-20
                        border border-[#e6d4b8]
                        shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                        relative">

                        <div className="absolute -top-5 left-1/2 -translate-x-1/2
                          bg-[#d4a017] text-white px-4 py-1 rounded-full text-sm tracking-widest">
                            ✦ Sacred Teaching ✦
                        </div>

                        <p className="text-2xl text-maroon-900 italic leading-relaxed
                        font-serif tracking-wide">
                            "{guru.quote}"
                        </p>
                    </div>

                    {/* PREMIUM BACK BUTTON */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center justify-center
             px-10 py-4 rounded-full font-bold uppercase tracking-widest
             text-sm transition-all duration-300
             bg-maroon-900
             text-[#f5d26a]
             border-2 border-[#d4a017]
             shadow-[0_10px_25px_rgba(0,0,0,0.25)]
             hover:bg-[#d4a017]
             hover:text-maroon-900
             hover:shadow-[0_15px_40px_rgba(212,160,23,0.4)]
             hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        GO BACK
                    </button>

                </div>
            </div>
        </div>

    );
};

export default GuruDetail;

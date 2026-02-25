const Schedule = () => {
    return (
        <section id="temple-info"
            className="py-24 relative reveal" style={{ backgroundColor: '#020c2b', backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")' }}>
            {/* Decorative Top Border */}
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7f9cff] to-transparent opacity-50">
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span
                        className="font-display tracking-widest text-sm uppercase block mb-3 animate-pulse" style={{ color: '#7f9cff' }}>Sacred
                        Timings</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6" style={{ color: '#d7dbe6' }}>Temple Schedule</h2>
                    <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#7f9cff' }}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Darshan */}
                    <div
                        className="group backdrop-blur-sm p-10 border transition-all duration-500 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl"
                        style={{ backgroundColor: '#0c225a', borderColor: '#1e3a8a' }}>
                        <div
                            className="absolute top-0 right-0 w-16 h-16 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-[2.5] duration-700 ease-in-out" style={{ backgroundColor: 'rgba(127, 156, 255, 0.1)' }}>
                        </div>
                        <div
                            className="mb-6 inline-block p-3 rounded-full border transition-transform group-hover:rotate-12 duration-500"
                            style={{ backgroundColor: '#020c2b', borderColor: '#1e3a8a', color: '#7f9cff' }}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-display font-bold mb-4 transition-colors" style={{ color: '#d7dbe6' }}>
                            Darshan</h3>
                        <div className="space-y-3 font-serif" style={{ color: '#d7dbe6', opacity: 0.8 }}>
                            <div
                                className="flex justify-between border-b pb-2 transition-colors" style={{ borderColor: '#1e3a8a' }}>
                                <span>Morning</span> <span>6:00 AM - 12:00 PM</span>
                            </div>
                            <div
                                className="flex justify-between border-b pb-2 transition-colors" style={{ borderColor: '#1e3a8a' }}>
                                <span>Evening</span> <span>4:00 PM - 8:30 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Pooja */}
                    <div
                        className="group backdrop-blur-sm p-10 border transition-all duration-500 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl"
                        style={{ backgroundColor: '#0c225a', borderColor: '#1e3a8a' }}>
                        <div
                            className="absolute top-0 right-0 w-16 h-16 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-[2.5] duration-700 ease-in-out" style={{ backgroundColor: 'rgba(127, 156, 255, 0.1)' }}>
                        </div>
                        <div
                            className="mb-6 inline-block p-3 rounded-full border transition-transform group-hover:rotate-12 duration-500"
                            style={{ backgroundColor: '#020c2b', borderColor: '#1e3a8a', color: '#7f9cff' }}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                </path>
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-display font-bold mb-4 transition-colors" style={{ color: '#d7dbe6' }}>
                            Daily Sewa</h3>
                        <div className="space-y-3 font-script text-lg" style={{ color: '#d7dbe6', opacity: 0.8 }}>
                            <div className="flex justify-between items-center group/item transition-colors">
                                <span
                                    className="transition-colors" style={{ color: '#7f9cff' }}>Suprabhatham</span>
                                <span>5:30 AM</span>
                            </div>
                            <div className="flex justify-between items-center group/item transition-colors">
                                <span className="transition-colors" style={{ color: '#7f9cff' }}>Maha
                                    Aarti</span> <span>7:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center group/item transition-colors">
                                <span className="transition-colors" style={{ color: '#7f9cff' }}>Shej
                                    Aarti</span> <span>8:30 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Festivals */}
                    <div
                        className="group backdrop-blur-sm p-10 border transition-all duration-500 relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl"
                        style={{ backgroundColor: '#0c225a', borderColor: '#1e3a8a' }}>
                        <div
                            className="absolute top-0 right-0 w-16 h-16 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-[2.5] duration-700 ease-in-out" style={{ backgroundColor: 'rgba(127, 156, 255, 0.1)' }}>
                        </div>
                        <div
                            className="mb-6 inline-block p-3 rounded-full border transition-transform group-hover:rotate-12 duration-500"
                            style={{ backgroundColor: '#020c2b', borderColor: '#1e3a8a', color: '#7f9cff' }}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                </path>
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-display font-bold mb-4 transition-colors" style={{ color: '#d7dbe6' }}>
                            Festivals</h3>
                        <ul
                            className="space-y-2 font-serif list-disc list-inside marker:transition-colors" style={{ color: '#d7dbe6', opacity: 0.8 }}>
                            <li
                                className="transition-colors transform hover:translate-x-1 duration-300 cursor-default">
                                Ashadhi Ekadashi</li>
                            <li
                                className="transition-colors transform hover:translate-x-1 duration-300 cursor-default">
                                Kartiki Ekadashi</li>
                            <li
                                className="transition-colors transform hover:translate-x-1 duration-300 cursor-default">
                                Gokulashtami</li>
                            <li
                                className="transition-colors transform hover:translate-x-1 duration-300 cursor-default">
                                Vaikuntha Ekadashi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;

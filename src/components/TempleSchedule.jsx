import ScheduleCard from './ScheduleCard'

const DARSHAN_TIMINGS = [
    { name: 'Mangala Aarti', time: '04:30 AM', description: 'Early morning awakening of the deities' },
    { name: 'Darshan Aarti', time: '07:30 AM', description: 'Greeting the deities after dressing' },
    { name: 'Raj Bhog Aarti', time: '12:30 PM', description: 'Midday offering and aarti' },
    { name: 'Temple Closed', time: '01:00 PM - 04:00 PM', description: 'Rest period for the deities' },
    { name: 'Sandhya Aarti', time: '07:00 PM', description: 'Evening sunset aarti' },
    { name: 'Shayan Aarti', time: '08:45 PM', description: 'Final aarti before night rest' },
]

const DAILY_SEWA = [
    { name: 'Abhishekam', time: '05:30 AM', description: 'Sacred bathing of the deities' },
    { name: 'Tulasi Puja', time: '06:30 AM', description: 'Worship of the sacred Tulasi plant' },
    { name: 'Srimad Bhagavatam Class', time: '08:00 AM', description: 'Scriptural discourse' },
    { name: 'Bhagavad Gita Class', time: '06:00 PM', description: 'Evening philosophical discourse' },
]

const UPCOMING_FESTIVALS = [
    { name: 'Maha Shivaratri', date: 'March 8, 2026', description: 'The great night of Shiva' },
    { name: 'Rama Navami', date: 'April 17, 2026', description: 'Appearance day of Lord Rama' },
    { name: 'Krishna Janmashtami', date: 'August 26, 2026', description: 'Appearance day of Lord Krishna' },
    { name: 'Diwali', date: 'November 1, 2026', description: 'Festival of lights' },
]

const TempleSchedule = () => {
    return (
        <section className="py-20 bg-offwhite relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-maroon uppercase mb-2">Temple Timings</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Schedule & Sewa</h3>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                    <p className="mt-6 text-gray-600 font-serif max-w-2xl mx-auto text-lg">
                        Join us in our daily spiritual practices. The temple remains open for devotees throughout the year.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Darshan Timings Card */}
                    <ScheduleCard
                        title="Darshan Timings"
                        theme="maroon"
                        items={DARSHAN_TIMINGS}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />

                    {/* Daily Sewa Card */}
                    <ScheduleCard
                        title="Daily Sewa"
                        theme="dark"
                        items={DAILY_SEWA}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        }
                    />

                    {/* Upcoming Festivals Card */}
                    <ScheduleCard
                        title="Festivals 2026"
                        theme="gold"
                        items={UPCOMING_FESTIVALS}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    )
}

export default TempleSchedule

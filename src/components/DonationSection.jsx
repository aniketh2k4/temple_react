import { useState, useEffect } from 'react'

const DonationSection = () => {
    const [copiedText, setCopiedText] = useState('')

    useEffect(() => {
        if (copiedText) {
            const timer = setTimeout(() => setCopiedText(''), 2000)
            return () => clearTimeout(timer)
        }
    }, [copiedText])

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text)
        setCopiedText(type)
    }

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 bg-maroon-dark"></div>

            {/* Moving Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-maroon-light rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-[blob_7s_infinite]"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-[blob_7s_infinite_2s]"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-[blob_7s_infinite_4s]"></div>

            {/* Overlay pattern to add texture (optional) */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-2">Support The Temple</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Online Offerings & Donations</h3>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6 shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
                    <p className="mt-6 text-gray-300 font-serif max-w-2xl mx-auto text-lg leading-relaxed">
                        Your generous contributions help us maintain the temple premises, conduct daily rituals, and support our charitable community activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Bank Details Card (Glassmorphism) */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col h-full transform transition-transform hover:scale-[1.01] duration-500">
                        <div className="flex items-center mb-8 pb-4 border-b border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-4 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-display font-bold text-white">Bank Transfer</h4>
                        </div>

                        <div className="space-y-6 flex-grow flex flex-col justify-center">
                            <div className="group">
                                <p className="text-sm text-gray-400 font-serif mb-1">Account Name</p>
                                <div className="flex justify-between items-center text-white">
                                    <p className="text-lg font-medium font-sans">Sri Spiritual Trust</p>
                                </div>
                            </div>

                            <div className="group">
                                <p className="text-sm text-gray-400 font-serif mb-1">Account Number</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-xl font-mono text-white tracking-widest">1234 5678 9012 3456</p>
                                    <button
                                        onClick={() => copyToClipboard('1234567890123456', 'account')}
                                        className="text-gold hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                                        title="Copy Account Number"
                                    >
                                        {copiedText === 'account' ? (
                                            <span className="text-xs font-bold text-green-400">Copied!</span>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="group">
                                    <p className="text-sm text-gray-400 font-serif mb-1">IFSC Code</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-mono text-white">BANK0001234</p>
                                        <button
                                            onClick={() => copyToClipboard('BANK0001234', 'ifsc')}
                                            className="text-gold hover:text-white transition-colors p-2"
                                            title="Copy IFSC Code"
                                        >
                                            {copiedText === 'ifsc' ? <span className="text-xs font-bold text-green-400">Copied!</span> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg>}
                                        </button>
                                    </div>
                                </div>

                                <div className="group">
                                    <p className="text-sm text-gray-400 font-serif mb-1">Branch</p>
                                    <p className="text-lg font-sans text-white">Main Street, City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Card (Glassmorphism) */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col justify-between items-center h-full transform transition-transform hover:scale-[1.01] duration-500 text-center relative overflow-hidden">
                        {/* Subtle glow behind QR */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="w-full mb-6">
                            <h4 className="text-2xl font-display font-bold text-white mb-2">Scan & Donate</h4>
                            <p className="text-gray-300 font-serif text-sm">Supports all major UPI apps</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-inner mb-8 relative z-10 mx-auto group">
                            {/* QR Code Placeholder with smooth hover scale */}
                            <div className="w-48 h-48 border-4 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 bg-gray-50 transition-transform duration-300 group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mb-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                                </svg>
                                <span className="text-sm font-semibold uppercase tracking-widest">QR CODE</span>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center space-x-4">
                            <span className="text-white/60 font-sans text-xs uppercase tracking-widest">GPay</span>
                            <span className="w-1 h-1 rounded-full bg-gold"></span>
                            <span className="text-white/60 font-sans text-xs uppercase tracking-widest">PhonePe</span>
                            <span className="w-1 h-1 rounded-full bg-gold"></span>
                            <span className="text-white/60 font-sans text-xs uppercase tracking-widest">Paytm</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationSection

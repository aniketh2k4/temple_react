import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="bg-cream text-maroon-900 font-serif antialiased selection:bg-gold-500 selection:text-maroon-900 overflow-x-hidden min-h-screen">
            <App />
        </div>
    </React.StrictMode>,
)

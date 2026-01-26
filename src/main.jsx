import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextoGlobalProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
    
    <ContextoGlobalProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextoGlobalProvider>

)

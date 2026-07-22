import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Header'
import ramenLogo from '/icon.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header logo={ramenLogo}/>
    <App />
  </StrictMode>,
)

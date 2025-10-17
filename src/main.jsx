import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import faviconUrl from './assets/vishakha-logo.png?url'

// Set favicon at runtime using imported asset URL
const iconLink = document.querySelector('link[rel="icon"]')
if (iconLink) iconLink.href = faviconUrl

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

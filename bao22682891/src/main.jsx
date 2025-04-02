import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard_chat from './Dashboard_chat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard_chat/>
  </StrictMode>,
)

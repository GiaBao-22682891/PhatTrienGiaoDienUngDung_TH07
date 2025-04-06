import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Dashboard_chat from './Dashboard_chat.jsx'
// import Dashboard from './Page/Dashboard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard_chat/> */}
    <App></App>
  </StrictMode>,
)

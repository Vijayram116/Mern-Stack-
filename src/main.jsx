import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './login.jsx'
// import Login from './login.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

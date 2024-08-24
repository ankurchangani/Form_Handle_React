import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import FromHandle from './Component/FromHanding/handle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FromHandle />
  </StrictMode>,
)

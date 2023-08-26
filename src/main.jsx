import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/app.scss"

export const backendServer="http://127.0.0.1:5000/api/v1"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

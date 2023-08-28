import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/app.scss"
import { createContext } from 'react'

export const backendServer="https://nodejs-todoapp-backend-1p07.onrender.com/api/v1"

export const Context= createContext({isAuthenticated:false})
// Context will be used anywhere in app 
// register isauth true kar dunga
const AppWrapper= ()=>{
  const [isAuthenticated, setIsAuthenticated]= useState(false);
  const [loading, setLoading]= useState(false);
  const [user, setUser]= useState({});
 return (<Context.Provider value={{isAuthenticated,
                            setIsAuthenticated,
                            loading,
                            setLoading,
                            user, 
                            setUser}} >
    <App/>
  </Context.Provider>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)

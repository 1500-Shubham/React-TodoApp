import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import  Header  from "./components/Header"
import { Profile } from "./pages/Profile"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
// import Toaster from "react-hot-toast"
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { useContext, useEffect } from "react"
import { backendServer,Context } from "./main"

function App() {
const {setIsAuthenticated,setUser, setLoading} = useContext(Context);
// pehle refresh hone pe isauth=false ho raha tha but cookie backend mein hai
// calling this api cookie hoga toh user mil jayega 
// auto load hoga aur user set using COOKIES and API GETMYPROFILES
useEffect(()=>{
  setLoading(true)
  axios.get(`${backendServer}/users/me`,{
    withCredential:true,
  })
  .then((res)=>{
    // toast.success(res.data.user)
    console.log(res);
    setUser(res.data.user) // ******* data.user response se le raha
    setIsAuthenticated(true)
    setLoading(false)
  })
  .catch((error)=>{
    console.log(error.response);
    toast.error(error.response.data.message)
    setUser({})
    setIsAuthenticated(false)
    setLoading(false)
  })
  
},[])

return (<BrowserRouter>
<Header />
{/* <Toaster/> */}
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
</Routes>
{/* <ToastContainer /> */}
<Toaster/>
</BrowserRouter>)

}
export default App

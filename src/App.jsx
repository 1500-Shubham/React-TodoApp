import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import  Header  from "./components/Header"
import { Profile } from "./pages/Profile"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
// import Toaster from "react-hot-toast"
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

function App() {
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

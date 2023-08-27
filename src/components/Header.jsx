import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main';
import axios from "axios"
import { backendServer } from '../main'
// import {toast} from "react-toastify"
import toast, { Toaster } from 'react-hot-toast';
 const Header = () => {

  const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(Context);

  const logoutHandler= async ()=>{
    setLoading(true)
    try {
      const {data} = await axios.get(`${backendServer}/users/logout`,{
          withCredentials:true,
      }
      )
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message)
      setIsAuthenticated(true);
    }
    setLoading(false)
  }

  return (
    <nav className="header">
        <div>
            <h2>Task Scheduler</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
            isAuthenticated ?
            <button onClick={logoutHandler} disabled={loading} className='btn'>Logout</button>
            :
            <Link to={"/login"}>Login</Link>
            }
        </article>
    </nav>
   
  );
}
export default Header;
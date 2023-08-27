import React, { useContext,useState } from 'react'
import { Link ,Navigate } from 'react-router-dom'
// import {toast} from "react-toastify"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { backendServer } from '../main'
import { Context } from '../main';

export const Login = () => {

  const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(Context);
  const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  if(isAuthenticated) return <Navigate to={"/"}/>
  const submitFunction= async (e)=>{
    setLoading(true)
    //e aaya form se
    e.preventDefault();
    try {
      console.log(email,password);
      // jo postman mein pass karta tha
      const {data} = await axios.post(`${backendServer}/users/login`,{
          email:email,
          password:password,
      },{
          headers:{
              "Content-Type":"application/json"
          },
          withCredentials:true,
      }
      )
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      // error bhi res hai jo milega backend se
      toast.error(error.response.data.message)
      setIsAuthenticated(false);
    }
    setLoading(false)
}
  return (
    <div className="login">
      <section>
        <form onSubmit={submitFunction}>
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
           type='email' placeholder='Email' />
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
          type='password' placeholder='Password' />
          <button disabled={loading} type='submit'>Login</button>
          <h4>OR</h4>
          <Link to="/register">SignUp</Link>
        </form>
      </section>
    </div>
  )
}

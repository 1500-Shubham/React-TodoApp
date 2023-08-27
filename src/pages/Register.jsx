import React, { useContext,useState } from 'react'
import { Link ,Navigate } from 'react-router-dom'
// import {toast} from "react-toastify"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { backendServer } from '../main'
import { Context } from '../main';

export const Register = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(Context);

    const submitFunction= async (e)=>{
        setLoading(true)
        //e aaya form se
        e.preventDefault();
        try {
          console.log(name,email,password);
          // jo postman mein pass karta tha
          const {data} = await axios.post(`${backendServer}/users/new`,{
              name:name,
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
          setIsAuthenticated(true)
        } catch (error) {
          // path of error and our message send from backend
          toast.error(error.response.data.message)
          setIsAuthenticated(false);
        }
        setLoading(false)
    }
    //Navigate actually hit that url while Link pe pehle click karoge then hit hoga
    if(isAuthenticated) return <Navigate to={"/"}/>

  return (
    <div className="login">
      <section>
        <form onSubmit={submitFunction}>
          <input 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          required
          type='name' placeholder='Name' />
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
          <button disabled={loading} type='submit'>Sign Up</button>
          <h4>OR</h4>
          <Link to="/login">Login</Link>
        </form>
      </section>
    </div>
  )
}

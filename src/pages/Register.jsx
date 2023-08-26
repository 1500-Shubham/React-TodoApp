import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios"
import { backendServer } from '../main'

export const Register = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const submitFunction= async (e)=>{
        //e aaya form se
        e.preventDefault();
        // console.log(name,email,password);

        const {data} = await axios.post(`${backendServer}/users/new`,{
            name,email,password
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        }
        )
        toast.success(data.message)
    }
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
          <button type='submit'>Sign Up</button>
          <h4>OR</h4>
          <Link to="/login">Login</Link>
        </form>
      </section>
    </div>
  )
}

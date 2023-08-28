import React, { useContext,useState } from 'react'
import { Link ,Navigate } from 'react-router-dom'
// import {toast} from "react-toastify"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { backendServer,Context } from '../main';

import { Loading } from '../components/Loading';

export const Profile = () => {
// const {isAuthenticated,setLoading,loading,user,setUser}=useContext(Context);
// const userObj= async ()=>{
//   setLoading(true)
//   try {
//     const {data} = axios.get(`${backendServer}/users/me`,{
//       withCredential:true,
//     })
//     setUser(data.user)
//     toast.success(data.user);
//   } catch (error) {
//     toast.error(error.response.data.message)
//   }
//   setLoading(false)
// }
   // called the function getting user
  return loading?
  <Loading/>
  : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <h2>Profile</h2>
    </div>
  )
}

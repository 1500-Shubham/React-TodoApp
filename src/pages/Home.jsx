import React, { useContext,useEffect,useState } from 'react'
import { Link ,Navigate } from 'react-router-dom'
// import {toast} from "react-toastify"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { backendServer } from '../main'
import { Context } from '../main';
import { TodoItem } from '../components/TodoItem';

export const Home = () => {
  const[title,setTitle]=useState("");
  const[description,setDecription]=useState("");
  const[loading,setLoading]=useState(false);
  const [tasks,setTasks]=useState([]);
  const [refesh,setRefresh]=useState(false);

  const {isAuthenticated} = useContext(Context);

  const updateHandler=async (id)=>{
    try {
      const {data}= await axios.put(`${backendServer}/tasks/${id}`,{
        withCredentials:true,
      })
      toast.success(data.message);
      setRefresh((prev)=>!prev);
    } catch (e) {
      toast.error(e.response.data.message)
    }

    }
  const deleteHandler=async (id)=>{
    try {
      const {data}= await axios.delete(`${backendServer}/tasks/${id}`,{
        withCredentials:true,
      })
      toast.success(data.message);
      setRefresh((prev)=>!prev);
    } catch (e) {
      toast.error(e.response.data.message)
    }

    }
  // yeh loading for tasks hai context wala for user kyuki 
  // loading help se button ADD TASK disabled karunga
  const submitFunction= async (e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      //originally hame axios se response milta hai response.data.message
    const {data}=  await axios.post(`${backendServer}/tasks/new`,{
      title,
      description,
    },{
      withCredentials:true,
      headers:{
        "Content-Type":"application/json"
      },
    })
    toast.success(data.message)
    setTitle("")
    setDecription("")
    setLoading(false)
    setRefresh((prev)=>!prev);
    } catch (error) {
      toast.success(error.response.data.message)
      setLoading(false)
    }

  }
  useEffect(()=>{
    axios.get(`${backendServer}/tasks/myTasks`,{
      withCredentials:true,
    }).then((res)=>{
      setTasks(res.data.tasks) // since data.tasks gives complete array of tasks
    }).catch((e)=>{
      toast.error(e.response.data.message)
    })
  },[refesh])

  if(!isAuthenticated) return <Navigate to={"/login"}/>

  return (
    <div className="container">

      <div className="login">
      <section>
        <form onSubmit={submitFunction}>
          <input
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          required
           type='text' placeholder='Title' />
          <input 
          value={description}
          onChange={(e)=>{setDecription(e.target.value)}}
          required
          type='text' placeholder='Description' />
          <button disabled={loading} type='submit'>Add Task</button>
         
        </form>
      </section>
    </div>

  <section className="todosContainer">
   { tasks.map(i=>(<TodoItem title={i.title} description={i.description} 
   isCompleted={i.isCompleted} id={i._id} updateHandler={updateHandler} 
   deleteHandler={deleteHandler}
   key={i._id}/>))
   }
  </section>
    </div>

    

  );
}

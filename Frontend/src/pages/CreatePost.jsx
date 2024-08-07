import { useContext, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Navigate, useNavigate } from "react-router-dom"


const CreatePost = () => {

const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
const {user}=useContext(UserContext)
const [cats,setCats]=useState([])

const navigate=useNavigate()

const handleCreate=async (e)=>{
    e.preventDefault()
    const post={
      title,
      desc,
      
      
      categories:cats
    }

    //post upload
    try{
      const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
      navigate("/posts/post/"+res.data._id)
      //console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
}


  return (
    <div>
        <Navbar/>
        <div className="px-6 md:px-[200px]  ">
        <h1 className="font-bold md:text-2xl text-xl mt-8 ">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4 ">
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" className="px-4 py-2 outline-none "/>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className="px-4  "/>
        </form>
        </div>
        <textarea onChange={(e)=>setDesc(e.target.value)}  rows={15} cols={30} className="px-4 py-2 outline-none mt-2  " placeholder="Enter post description"/>
        <button onClick={handleCreate} className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg ">Create</button>
        <Footer/>
    </div>
  )
}

export default CreatePost
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Roots from '../assets/Roots.jpg'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"



const PostDetails = () => {

    const postId=useParams().id
    const [post,setPost]=useState({})
    const {user}=useContext(UserContext)
    const [loader,setLoader]=useState(false)
    const navigate=useNavigate()
    

    const fetchPosts=async()=>{
        

        try{
            const res= await axios.get(URL+"/api/posts/" + postId)
            //console.log(res.data)
            setPost(res.data)
            
        }
        catch(err){
            console.log(err)
            
        }

    } 

    const handleDeletePost=async ()=>{
        try{
            const res=await axios.delete(URL+"/api/posts/"+postId)
            console.log(res.data)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchPosts()
    }, [postId])
  
    return (
        <>
    <div className="bg-yellow-600 h-dvh">
        <Navbar/>
        {loader?<div className="h-[80vh flex justify-center items-center  w-full]"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8  py-1  bg-yellow-600 ">
            <div className="flex   justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl"> 
                    {post.title}
                </h1>
                {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)}><BiEdit/></p>
                    <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
                </div>       }
                          
            </div>
            <div className="flex items-center justify-between md:mt-4">
            <p>@{post.username}</p>
               <div className="flex space-x-2">
               <p> {new Date(post.updatedAt).toString().slice(0,15)} </p>
               <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
                </div>
            </div>  
                
            <p className="mx-auto mt-8">{post.desc}</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    {post.categories?.map((c,i)=>(
                        <>
                         <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
                       
                        </>
                       
                    ))}
                   
                </div>
            </div>
            <div className="w-full flex flex-col mt-4 md:flex-row">
                <input type="text" placeholder="write your comment.." className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0 "/>
                <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
            </div>
        </div>}
        
    </div>
    <Footer/>
    </>
  )
}

export default PostDetails
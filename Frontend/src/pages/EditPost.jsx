import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {ImCross} from 'react-icons/im'
import axios from "axios"
import { URL } from "../url"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const EditPost = () => {

    const postId=useParams().id
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [file,setFile]=useState(null)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

    const fetchPost=async()=>{
      try{
        const res=await axios.get(URL+"/api/posts/"+postId)
        console.log(res.data)
        setTitle(res.data.title)
        setContent(res.data.content)

      }
      catch(err){
        console.log(err)
      }
    }

    const handleUpdate = async (e) => {
      e.preventDefault();
    
      const post = {
        title,
        content,
      };
    
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.log("No token found");
          return;
        }
    
        const config = {
          headers: { 'Authorization': `${token}` },
          withCredentials: true, 
        };
    
        const res = await axios.put(URL + "/api/posts/" + postId, post, config);
        navigate("/posts/post/" + res.data._id);
        console.log("Post updated successfully:", res.data);
      } catch (err) {
        console.error("Error updating post:", err);
      }
    };
    useEffect(()=>{
      fetchPost()
    },[postId])

    const deleteCategory=(i)=>{
       let updatedCats=[...cats]
       updatedCats.splice(i)
       setCats(updatedCats)
    }

    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }
  return (
    <div className="bg-yellow-600">
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Update a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-2 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none bg-black text-white rounded'/>
            <div className='flex px-4 mt-3'>
            {cats?.map((c,i)=>(
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
            </div>
            ))}
           
          </div>
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} rows={15} cols={30} className='px-4 py-2 outline-none bg-black text-white rounded ' placeholder='Enter post description'/>
          <div className="grid align-middle ">
          <button onClick={handleUpdate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 mb-20 md:text-xl text-lg rounded'>Update</button>
          </div>
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default EditPost
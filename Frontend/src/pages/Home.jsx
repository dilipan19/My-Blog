import axios from "axios"
import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"
import { URL } from "../url"
import { useEffect, useState } from "react"


const Home = () => {

  const [posts, setPosts]=useState([])

  const fetchPosts=async()=>{
    try{
      const res=await axios.get(URL+"/api/posts/")
      //console.log(res.data)
      setPosts(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[])


  return (
    <>
    <Navbar/>
     <div className="px-8 md:px-[200px]  bg-yellow-600 py-4   ">
        <HomePost/>
        <HomePost/>
        <HomePost/>
        
    </div>
    <Footer/>
    </>
   
  )
}

export default Home
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Login = () => {
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState(false)
  const navigate=useNavigate()

const handleLogin=async () => {
  try{
    const res=await axios.post(URL+"/api/login",{username,password})
    //console.log(res.data)
    navigate("/")
  }
  catch(err){
    setError(true)
    console.log(err)

  }
}

  return (
    <>
    <div  className="flex items-center justify-between px-6 md:px-[200px] py-4 font-bold bg-yellow-600 " >
    <h1 className="margin-top: 5 font-bold"><Link to="/">My Blog</Link></h1>
    <h3><Link to="/register">Register</Link></h3>
     </div>
     <div className="w-full flex justify-center items-center h-[70vh] bg-yellow-600  ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] bg-black p-6 rounded-lg shadow-lg ">
            <h1 className="text-xl font-bold text-left text-white ">Login</h1>
            <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your Username"/>
            <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password"/>
            <button onClick={handleLogin} className="w-full px-2 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Login</button>
            {error && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}
            <div className="flex justify-center items-center space-x-3 font-semibold text-white">
                <p>New User? </p>
                <p className="text-gray-500 hover:text-white"><Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
    <div className="w-full py-20 bg-yellow-600 ">
        

    </div>
    <Footer/>
</>
   
  )
}

export default Login
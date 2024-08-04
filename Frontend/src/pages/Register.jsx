import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
     <div className="flex items-center justify-between px-6 md:px-[200px] py-4 font-bold">
    <h1 className="margin-top: 5 font-bold"><Link to="/">My Blog</Link></h1>
    <h3><Link to="/login">Login</Link></h3>
     </div>
     <div className="w-full flex justify-center items-center h-[80vh] ">
    <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left ">Create an account</h1>
        <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Create  your username"/>
        <input className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Create your password"/>
        <button className="w-full px-2 py-2 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Register</button>
        <div className="flex justify-center items-center space-x-3 font-semibold">
            <p>Already Registered? </p>
            <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    </>
   
  )
}

export default Register
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
import{FaBars} from 'react-icons/fa'; 
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";



const Navbar = () => {
  const [menu,setMenu] = useState(false)

  const showMenu=()=>{
    setMenu(!menu)
  }

    const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-5 bg-black ">
    <h1 className="flex items-center font-bold  "><Link to="/" className="flex items-center">
      <span className="px-2 py-1 text-white bg-black ">My </span>   
      <span className="px-2 py-1 text-black font-bold bg-yellow-600">Blog </span></Link></h1>
    <div className="flex justify-center items-center space-x-0  ">
          <p><BsSearch/></p>
        <input className="outline-none px-3 py-1  " placeholder="Search..." type="text"/>

    </div>
    
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 font-semibold text-white">
        {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
        {user? <div onClick={showMenu}>
          <p className="cursor-pointer relative"><FaBars/></p>
          {menu && <Menu/>}
        </div> :<h3><Link to="/register">Register</Link></h3>}
   </div>
   <div onClick={showMenu} className="md:hidden text-white text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
   </div>
   
  </div>

    
  )
}

export default Navbar
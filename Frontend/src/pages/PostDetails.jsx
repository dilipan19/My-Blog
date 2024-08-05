
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Roots from '../assets/Roots.jpg'



const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl"> 
                    The Roots: A Journey of the Origins
                </h1>
                <div className="flex items-center justify-center space-x-2">
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>
                </div>                
            </div>
            <div className="flex items-center justify-between md:mt-4">
            <p>@dilipan19</p>
               <div className="flex space-x-2">
                   <p> 02-08-2024 </p>
                   <p>07:29</p>
                </div>
            </div>  
            <img src="{Roots}" className="w-full mx-auto mt-8" alt=""/>      
            <p className="mx-auto mt-8"> It tells the story of Kunta Kinte, an 18th-century Mandinka, captured as an adolescent, sold into slavery in Africa, and transported to North America , how the life of the peoples went and how they succeeded.</p>
            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Book</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">History</div>
                </div>
            </div>
            <div className="w-full flex flex-col mt-4 md:flex-row">
                <input type="text" placeholder="write your comment.." className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0 "/>
                <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add comment</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails
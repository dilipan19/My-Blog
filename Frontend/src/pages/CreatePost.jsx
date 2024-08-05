import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const CreatePost = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-6 md:px-[200px]  ">
        <h1 className="font-bold md:text-2xl text-xl mt-8 ">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4 ">
            <input type="text" placeholder="Enter title" className="px-4 py-2 outline-none "/>
            <input type="file"  className="px-4  "/>
        </form>
        </div>
        <textarea rows={15} cols={30} className="px-4 py-2 outline-none mt-2  " placeholder="Enter post description"/>
        <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg ">Create</button>
        <Footer/>
    </div>
  )
}

export default CreatePost
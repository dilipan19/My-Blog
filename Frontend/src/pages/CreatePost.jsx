import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();

 
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log("Token in CreatePost useEffect:", token);
  }, []);

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("");
    setCats(updatedCats);
  };

  const handleCreate = async (e) => {
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

      console.log("Retrieved Token:", token);

      const config = {
        headers: { 'Authorization': `${token}` },
        
      };
      console.log(post)

      const res = await axios.post(URL + "/api/posts", post, config);
      navigate("/posts/post/" + res.data._id);
      console.log("Post created successfully:", res.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-yellow-600 h-svh">
      <Navbar />
      <div className="px-6 md:px-[200px]">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
            className="px-2 py-2 outline-none bg-black rounded text-white"
          />
        </form>
      </div>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={60}
        className="px-4 py-2 outline-none mt-5 mx-48 bg-black text-white rounded"
        placeholder="Enter post description"
      />
      
      <button
        onClick={handleCreate}
        className="bg-black w-full md:w-[15%] mx-16 text-white font-semibold px-8 py-2 md:text-xl text-lg"
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;

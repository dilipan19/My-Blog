import axios from "axios";
import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(true);
  const { user } = useContext(UserContext);
  
  console.log(user);
  console.log(posts, 'sd');
  
  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts");
      console.log(res.data);
      setPosts(res.data);
      if (res.data.length) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="bg-yellow-600">
        <Navbar/>
        <div className="px-8 md:px-[200px] bg-yellow-600 py-4 min-h-[100vh]">
          {posts.map((post) => (
            <Link to={`/posts/post/${post._id}`} key={post._id}>
              <HomePost post={post} />
            </Link>
          ))}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home;

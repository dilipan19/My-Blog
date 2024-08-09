

const HomePost = ({post}) => {
  return (
   
 <div className="w-full flex mt-8 space-x-4">
       
        <div className="flex flex-col w-[65%] ">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            {post.title}
            </h1>
            
            <p className="text-sm md:text-lg"> {post.content}</p>

        </div>
        

    </div>
  )
}

export default HomePost


const Footer = () => {
  return (
    <>
    <div className="mt-8  w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start  md:justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support </p>
          <p>Recent post</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy </p>
          <p>Know about us</p>
          <p>Terms of services</p>
        </div>
    </div>
    </>
    
  )
}

export default Footer
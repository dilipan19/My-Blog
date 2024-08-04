import Roots from '../assets/Roots.jpg'

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
        {/* left */}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src={Roots} alt="" className="h-full w-full object-cover" />

        </div>
        {/* right */}
        <div className="flex flex-col w-[65%] ">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            The Roots: A Journey of the Origins
            </h1>
            <div className="flex mb-2 text-sm  font-semibold text-gray-500 items-center justify-between md:mb-4">
               <p>@dilipan19</p>
               <div className="flex space-x-2">
                   <p> 02-08-2024 </p>
                   <p>07:29</p>
                </div>
            </div>
            <p className="text-sm md:text-lg"> It tells the story of Kunta Kinte, an 18th-century Mandinka, captured as an adolescent, sold into slavery in Africa, and transported to North America , how the life of the peoples went and how they succeeded. </p>

        </div>

        

    </div>
  )
}

export default HomePost
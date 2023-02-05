import { BsGoogle } from "react-icons/bs"

const Home = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center text-center px-10">
      <h1 className="text-gray-800 text-5xl font-bold">Please Sign In to use this webapp</h1>

      <p className="py-3">authenticate yourself using your <span className="underline">google</span> account</p>

      <div className='text-center text-white flex items-center justify-center space-x-2 bg-gray-800 mt-3 cursor-pointer hover:text-gray-300 hover:underline decoration-yellow-100 py-3 px-4'>
        <BsGoogle />
        <p>Continue with Google</p>
      </div>
    </div>
  )
}

export default Home

import { useRouter } from "next/router"
import { useEffect, useContext } from "react"
import { BsGoogle } from "react-icons/bs"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, Provider } from "../firebase"
import UserContext from "../context/UserContext";

const Home = () => {

  const router = useRouter()

  const userEmail = typeof window !== "undefined" && window.localStorage.getItem('userEmail')

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        router.push('/calender')
      }
    })
  }, [])

  const context = useContext(UserContext)
  const { setUserData } = context

  const handleAuth = async () => {
    signInWithPopup(auth, Provider).then(async (result) => {
      const user = result.user;
      await setUserData({
        "name": user.displayName,
        "avatar": user.photoURL,
        "email": user.email,
        "phone": user.phoneNumber
      })

      localStorage.setItem('userEmail', user.email)
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ": " + errorMessage)

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center text-center px-10">
      <h1 className="text-gray-800 text-5xl font-bold">Please Sign In to use this webapp</h1>

      <p className="py-3">authenticate yourself using your <span className="underline">google</span> account</p>

      <div onClick={handleAuth} className='text-center text-white flex items-center justify-center space-x-2 bg-gray-800 mt-3 cursor-pointer hover:text-gray-300 hover:underline decoration-yellow-100 py-3 px-4'>
        <BsGoogle />
        <p>Continue with Google</p>
      </div>
    </div>
  )
}

export default Home

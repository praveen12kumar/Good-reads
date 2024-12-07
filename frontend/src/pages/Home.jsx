import Button from "@/components/atoms/button/Button"
import { useNavigate } from "react-router-dom"
function Home () {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-dvh relative">
      
      <div className="w-full h-full relative">
          <div className="bg-hero bg-cover bg-center w-full h-full"></div>
          <div className="absolute top-28 left-1/2 -translate-x-1/2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-sky-900 font-carlo uppercase ">BookShelf</h1>
          </div>
          <div className="absolute top-44 md:top-52 lg:top-60 left-1/2">
            <p className="text-3xl font-subheading font-medium text-stone-600">Your personal library and <br /> social network for <br /> bookworms</p>
          </div>
          <div className="absolute bottom-16 md:bottom-40 lg:bottom-60 right-10 lg:right-40 flex items-center gap-10">
            <Button text="register" classes="bg-sky-900 text-white hover:bg-sky-800 transition-colors duration-300 ease-in" onClickHandler={() => navigate('/signup')} />
            <Button text="login" classes="bg-stone-700 text-white hover:bg-stone-600 transition-colors duration-300 ease-in" onClickHandler={() => navigate('/login')} />
          </div>
      </div>

    </div>
  )
}

export default Home
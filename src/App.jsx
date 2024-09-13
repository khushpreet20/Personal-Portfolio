import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Techstack from "./components/Techstack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { ThemeProvider} from "./contexts/theme"
import { useEffect, useState } from "react"
function App() {
  // const {themeMode} = useTheme
  const [themeMode, setThemeMode] = useState('dark')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
    // console.log(themeMode)
    
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black h-screen">
      {themeMode==='dark' ? <div className="absolute h-full w-full bg-black -z-10"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div> 
      :
      <div className="absolute h-full w-full bg-white -z-10"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>}

      <div className="container mx-auto px-8">
        <Navbar/>
        <Home/>
        <About/>
        <Techstack />
        <Projects />
        <Contact />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App

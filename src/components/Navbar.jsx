import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaRegMoon, FaRegLightbulb } from "react-icons/fa"
import useTheme from '../contexts/theme'
function Navbar() {
  const hoveranimation = {
    hidden:{
      scale: 1
    },
    visible:{
      scale: 1.5
    }
  }

  const {themeMode, lightTheme, darkTheme} = useTheme()

  const toggle = () => {
    console.log(themeMode)
    if(themeMode === 'dark'){
      lightTheme()
    }else{
      darkTheme()
    }
  }
  return (
    <>
        <nav className='mb-20 flex justify-between items-center py-6'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <span>LOGO</span> Here Logo ayega */}
                {/* <span className='text-2xl'>KS</span>  */}
                <motion.img 
                variants={hoveranimation}
                initial='hidden'
                whileHover='visible'
                className='w-12 rounded-full hover:cursor-pointer' src="https://img.freepik.com/premium-vector/punjabi-man-face-mascot-vector-illustration_851674-91175.jpg?w=740" alt="temppic" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl text-neutral-900 dark:text-neutral-300 hover:cursor-pointer'>
                <motion.div
                variants={hoveranimation}
                initial='hidden'
                whileHover='visible'
                >
                  <FaLinkedin/>
                </motion.div>
                <motion.div
                variants={hoveranimation}
                initial='hidden'
                whileHover='visible'
                >
                <FaGithub/>
                </motion.div>
                {themeMode === 'dark' ? <FaRegMoon onClick={toggle}/> : <FaRegLightbulb onClick={toggle}/> }
                
            </div>
        </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { DiJavascript } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import {motion} from 'framer-motion'
function Techstack() {
    const animationvariant = (delay) => ({
        hidden: {
          z: -500,  // Starts far away on the Z-axis
          scale: 2,  // Smaller size to give a "distant" effect
          opacity: 0,  // Fully transparent
        },
        visible: {
          z: 0,  // Moves to the normal position
          scale: 1,  // Normal size
          opacity: 1,  // Fully visible
          transition: {
            duration: 1,  // Animation duration
            delay: delay,  // Start after a short delay
            ease: "easeInOut"  // Smooth in and out effect
          }
        }
    })
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        variants={animationvariant(0)}
        initial="hidden"
        whileInView="visible"
        className='my-20 text-center text-4xl text-neutral-900 dark:text-neutral-300'>TechStack</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={animationvariant(0.2)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <RiReactjsFill className='text-5xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={animationvariant(0.4)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <DiJavascript className='text-5xl text-yellow-400'/>
            </motion.div>
            <motion.div
            variants={animationvariant(0.6)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <SiMongodb className='text-5xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={animationvariant(0.8)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <SiExpress className='text-5xl text-neutral-400'/>
            </motion.div>
            <motion.div
            variants={animationvariant(1)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <FaNodeJs className='text-5xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={animationvariant(1.2)}
            initial="hidden"
            whileInView='visible' 
            className='rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-4'>
                <FaPython className='text-5xl text-sky-700'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Techstack
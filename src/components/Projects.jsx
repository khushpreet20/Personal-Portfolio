import React from 'react'
import {motion} from 'framer-motion'
function Projects() {
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
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h1 
        variants={animationvariant(0)}
        initial="hidden"
        whileInView='visible'
        className='my-20 text-center text-4xl text-neutral-900 dark:text-neutral-300'> Projects </motion.h1>
        <div className='mb-8 flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={animationvariant(0.2)}
            initial="hidden"
            whileInView='visible'
            className='rounded-2xl border-4 dark:border-neutral-800 border-neutral-500 p-4 max-w-xs'>
                <div className='p-2'>
                    <img className='rounded-2xl w-full' src='https://via.placeholder.com/150' alt="photo" />
                </div>
                <p className='px-2 dark:text-neutral-300 text-neutral-900'>RentIt</p>
                <div className='px-2 py-2 dark:text-neutral-300 text-neutral-900'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <span className='ml-1 mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>ReactJs</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>MongoDB</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>Express</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>NodeJs</span>
                {/* <span className='mr-1 rounded bg-neutral-900 px-1.5 py-1 text-sm font-medium text-purple-900'>TailwindCSS</span> */}
            </motion.div>
            <motion.div 
            variants={animationvariant(0.4)}
            initial="hidden"
            whileInView='visible'
            className='rounded-2xl border-4 dark:border-neutral-800 border-neutral-500 p-4 max-w-xs'>
                <div className='p-2'>
                    <img className='rounded-2xl w-full' src='https://via.placeholder.com/150' alt="photo" />
                </div>
                <p className='px-2 dark:text-neutral-300 text-neutral-900'>RentIt</p>
                <div className='px-2 py-2 dark:text-neutral-300 text-neutral-900'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <span className='ml-1 mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>ReactJs</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>MongoDB</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>Express</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>NodeJs</span>
                {/* <span className='mr-1 rounded bg-neutral-900 px-1.5 py-1 text-sm font-medium text-purple-900'>TailwindCSS</span> */}
            </motion.div>
            <motion.div 
            variants={animationvariant(0.6)}
            initial="hidden"
            whileInView='visible'
            className='rounded-2xl border-4 dark:border-neutral-800 border-neutral-500 p-4 max-w-xs'>
                <div className='p-2'>
                    <img className='rounded-2xl w-full' src='https://via.placeholder.com/150' alt="photo" />
                </div>
                <p className='px-2 dark:text-neutral-300 text-neutral-900'>RentIt</p>
                <div className='px-2 py-2 dark:text-neutral-300 text-neutral-900'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <span className='ml-1 mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>ReactJs</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium  text-pink-400 dark:text-purple-900'>MongoDB</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium  text-pink-400 dark:text-purple-900'>Express</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>NodeJs</span>
                {/* <span className='mr-1 rounded bg-neutral-900 px-1.5 py-1 text-sm font-medium text-purple-900'>TailwindCSS</span> */}
            </motion.div>
            <motion.div 
            variants={animationvariant(0.8)}
            initial="hidden"
            whileInView='visible'
            className='rounded-2xl border-4 dark:border-neutral-800 border-neutral-500 p-4 max-w-xs'>
                <div className='p-2'>
                    <img className='rounded-2xl w-full' src='https://via.placeholder.com/150' alt="photo" />
                </div>
                <p className='px-2 dark:text-neutral-300 text-neutral-900'>RentIt</p>
                <div className='px-2 py-2 dark:text-neutral-300 text-neutral-900'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <span className='ml-1 mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>ReactJs</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>MongoDB</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>Express</span>
                <span className='mr-1 rounded bg-neutral-300 dark:bg-neutral-900 px-1.5 py-1 text-sm font-medium text-pink-400 dark:text-purple-900'>NodeJs</span>
                {/* <span className='mr-1 rounded bg-neutral-900 px-1.5 py-1 text-sm font-medium text-purple-900'>TailwindCSS</span> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Projects
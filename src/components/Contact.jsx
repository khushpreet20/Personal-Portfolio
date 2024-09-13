import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
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
    const pathvariant = {
        hidden:{
            opacity:0,
            pathLength: 0
        },
        visible:{
            opacity: 1,
            pathLength: 1.2,
            transition:{
                duration: 2,
                ease: 'easeInOut'
            }
        }
    }
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h1
                variants={animationvariant(0)}
                initial='hidden'
                whileInView='visible'
                className='my-20 text-center text-4xl text-neutral-900 dark:text-neutral-300'>
                Get In Touch
            </motion.h1>
            <div className='flex flex-wrap text-neutral-900 dark:text-neutral-300 '>
                <motion.div
                variants={animationvariant(0.2)}
                initial='hidden'
                whileInView='visible' 
                className='w-full lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-1/5">
                        <motion.path 
                        variants={pathvariant}
                        strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    </div>
                </motion.div>
                <div 
                className='w-full flex items-center justify-center lg:w-1/2'>
                    <form className='flex flex-col justify-center items-center gap-4 w-4/5'
                    action="">
                        <motion.label 
                        variants={animationvariant(0.2)}
                        initial='hidden'
                        whileInView='visible'className='w-full flex flex-wrap justify-between items-center'>
                           <span className='pr-6'>Your Name</span>
                            <input className='text-black border-4
                            border-neutral-500 dark:border-neutral-800 rounded px-2 w-full md:w-3/4'
                            type="text" name="" id="" placeholder='Your Name'/>
                        </motion.label>
                        <motion.label 
                        variants={animationvariant(0.4)}
                        initial='hidden'
                        whileInView='visible'
                        className='w-full flex flex-wrap justify-between items-center'>
                            <span className='pr-7'>Your email</span>
                            <input className='text-black border-4
                            border-neutral-500 dark:border-neutral-800 rounded px-2 w-full md:w-3/4'
                            type="email" name="" id="" placeholder='Your Email'/>
                        </motion.label>
                        <motion.label
                        variants={animationvariant(0.6)}
                        initial='hidden'
                        whileInView='visible'
                        className='w-full flex flex-wrap justify-between items-center'>
                            <span className='pr-0.5'>Your Message</span>
                            <textarea placeholder='Message'
                            name="" id="" rows="5" className='text-black border-4
                            border-neutral-500 dark:border-neutral-800 rounded px-2 w-full md:w-3/4'></textarea>
                        </motion.label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
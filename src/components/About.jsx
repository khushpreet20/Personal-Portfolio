import React from 'react'
import {motion} from 'framer-motion'
function About() {
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
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        variants={animationvariant(0)}
        initial="hidden"
        whileInView="visible"
        className='my-20 text-center text-4xl text-neutral-900 dark:text-neutral-300'>About
          <span 
          className='text-neutral-500'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
          <motion.div
          variants={animationvariant(0.35)}
          initial="hidden"
          whileInView="visible"
           className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className = "w-3/5 rounded-2xl" src="https://media.licdn.com/dms/image/v2/D4E03AQEPC3MgSb61Lg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665158536393?e=1731542400&v=beta&t=4us4PYTTzlLLTI0psySL8-QEVOL4D2boYA13w33PFRE" alt="about" />
            </div>
          </motion.div>
          <motion.div 
          variants={animationvariant(0.5)}
          initial="hidden"
          whileInView="visible"
          className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start text-neutral-900 dark:text-neutral-300'>
                  <p className='my-2 max-w-xl py-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, Kafka, Django and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
              </div>
              <a href = 'https://drive.google.com/file/d/1Xe0gMTeELdRALcLHseK6lTG5n0HlaGPA/view?usp=drive_link' className='px-2 py-1 rounded font-semibold cursor-pointer bg-slate-900 text-neutral-300 dark:bg-neutral-300 dark:text-neutral-900 '>Resume</a>
          </motion.div>
        </div>
    </div>
  )
}

export default About
import React, { useEffect, useState } from 'react'
import { delay, easeInOut, motion } from 'framer-motion'
function Home() {
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

    const [loopnum, setLoopNum] = useState(0);
    const [isDeletion, setIsDeletion] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 50);
    const [glowup, setGlowup] = useState(false)
    const period = 3000;
    const toRotate = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'DSA Enthusiast', 'Competitive Coder'];

    const tick = () => {
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeletion ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeletion) {
            setGlowup(false); 
            setDelta(100); 
        } else {
            setGlowup(true);  // Enable blinking during typing
        }
        if (!isDeletion && updatedText === fullText) {
            setIsDeletion(true);
            setDelta(period);
        } else if (isDeletion && updatedText === '') {
            setIsDeletion(false);
            setLoopNum(loopnum + 1);
            setDelta(500);
        }
    };
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, delta, isDeletion, loopnum]); // Add the necessary dependencies

    const typevariant = {
        hidden: {
            opacity: 0,
            scale: 1
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    }
    // console.log(glowup, isDeletion);
    return (
        <>
            <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col items-center lg:items-start text-neutral-900 dark:text-neutral-300'>
                            <motion.h1
                                variants={animationvariant(0)}
                                initial="hidden"
                                whileInView="visible"
                                className='pb-16 text-6xl font-thin tracking-tight lg: mt-16 lg:text-8xl'>Hi there, I am Khushpreet Singh</motion.h1>
                            {/* <motion.h1 
                        variants={animationvariant(0.2)}
                        initial = "hidden"
                        whileInView = "visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg: mt-16 lg:text-8xl'>I am Khushpreet Singh</motion.h1> */}
                            <motion.div
                                variants={animationvariant(0.35)}
                                initial="hidden"
                                whileInView="visible">
                                <motion.span variants={animationvariant(0.35)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className='text-4xl'>I am a </motion.span>
                                <motion.span variants={animationvariant(0.35)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className='bg-gradient-to-r from-pink-600 via-emerald-500 to-cyan-800
                        dark:bg-gradient-to-r dark:from-pink-300 dark:via-slate-500 dark:to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>{text}
                                    {glowup && isDeletion ?
                                        <motion.span
                                            variants={typevariant}
                                            initial='hidden'
                                            animate='visible'
                                            className='text-neutral-900 dark:text-neutral-300'>| </motion.span>
                                        :
                                        <span className='text-neutral-900 dark:text-neutral-300'>| </span>

                                    }
                                </motion.span>
                            </motion.div>
                            <motion.p
                                variants={animationvariant(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                className='my-2 max-w-xl py-6 dark:font-light tracking-tighter text-neutral-900 dark:text-neutral-300'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Within a short span, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
                        </div>
                    </div>
                    <motion.div
                        variants={animationvariant(0)}
                        initial="hidden"
                        whileInView="visible"
                        className='w-full lg:w-1/2 lg:p-8'>
                        <div className='flex justify-center'>
                            <img className='w-4/5 rounded-2xl' src="https://img.freepik.com/premium-vector/punjabi-man-face-mascot-vector-illustration_851674-91175.jpg?w=740" alt="temppic" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home
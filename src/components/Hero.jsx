import React, { use } from 'react'
import profilePic from '../assets/homenew2.png'
import { delay, motion } from "framer-motion"
import { useTypewriter } from 'react-simple-typewriter'

const container = (delay) => ({
  hidden : {x : -100, opacity : 0},
  visible : {
    x : 0,
    opacity : 1,
    transition : {
      delay : delay,
      duration : 0.6
    }
  }
})

const Hero = () => {
  const [text] = useTypewriter({
    words : ['Fullstack Developer' , 'Competitive Programmer' , 'Software Developer' , 'Electronics & Communication' ],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 50,
  })
  return (
    <div className='border-b border-neutral-800 pb-6 mt-20 lg:mt-32 lg:mb-40' id='hero'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
          
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-2xl lg:text-3xl max-w-xl pt-8 font-thin tracking-tight'>Hello Everyone👋,</motion.p>
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-2xl lg:text-3xl max-w-xl pb-4 font-thin tracking-tight'>I hope you are doing well.</motion.p>
          
          <motion.p 
            variants={container(0.2)}
            initial='hidden'
            animate='visible' className='text-3xl lg:text-4xl max-w-xl pt-4 font-thin tracking-tight'>This is,</motion.p>

            <motion.h1 
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
             className='pb-14 text-5xl font-light tracking-tight lg:mt-2 lg:text-7xl'>Adnan Qureshi</motion.h1>
            <motion.span 
            variants={container(0.8)}
            initial='hidden'
            animate='visible'
             className='bg-gradient-to-r from-pink-400 via-slate-600 to-purple-600
            bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent h-16 mb-6'>{text}</motion.span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img className='rounded-full border-4 border-gray-200 shadow-lg lg:h-[25rem] lg:w-[26rem]'
            initial={{x : 100 , opacity : 0}}
            animate={{x : 0 , opacity : 1}}
            transition={{duration : 1 , delay : 1.2}}
            src={profilePic} alt="Adnan Qureshi" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react';
import { motion } from "framer-motion";
// import Mimoji from "../public/images/mimogi.png"

type Props = {}

export default function About({}: Props) {
  return (
<>

    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}    
    className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">About</h3>

        <div className="lg:flex lg:flex-row justify-items-center items-center mt-32 md:mt-24 sm:mt-12 md:flex md:flex-col sm:flex sm:flex-col">
            
        <motion.img
        initial={{
            x: -200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{once:true}}
        // src ="https://i.pinimg.com/originals/3e/fd/1f/3efd1fc9f53bfd126bb4363d09ba3a44.jpg"
        src="https://i.pinimg.com/originals/3e/fd/1f/3efd1fc9f53bfd126bb4363d09ba3a44.jpg"
        className="mb-4 flex-shrink-0 w-32 h-32 rounded-full object-cover"
        />


        <div className="space-y-6 px-0 md:px-10">
            <h4 className="text-xl font-semibold">A Little Background</h4>
            <p className="text-base tracking-widest leading-8">I'm Aditya Kasralkar. Currently Pursuing my "Bachelor of Engineering" in Computer Engineering at Aditya Silver Oak Institute of Technology - Ahmedabad , India. An Enthusiast MERN Stack Developer with hands-on experience in developing projects by self . Have a good konwledge about the different technologies & developing the Websites and WebApps.</p>
        </div>

        </div>
    </motion.div>
    </>
  )
}
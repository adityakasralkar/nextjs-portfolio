import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"; 
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <>
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0, 
            scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration:1.5,
        }}

        className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
                url="https://www.github.com/adityakasralkar" 
                target="_blank"
                fgColor="gray"
                bgColor="transparent" 
            />

            <SocialIcon 
                url="https://www.linkedin.com/in/aditya-kasralkar-b85b1b203" 
                target="_blank"
                fgColor="gray"
                bgColor="transparent" 
            />

        </motion.div>


        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration:1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
            
            <SocialIcon 
                network="email"
                className="cursor-pointer"
                fgColor="gray"
                bgColor="transparent"
                url="#contact"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </motion.div>
       
    </header>
    </>
  )
}
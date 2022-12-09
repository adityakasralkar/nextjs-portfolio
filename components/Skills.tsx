import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
    </h3>

    <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
        Hover over a Skill for Proficiency
    </h3>

    <div className="grid grid-cols-4 gap-5 top-8">
        <Skill />
        
    </div>
    </motion.div>
  )
}

export default Skills
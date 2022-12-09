import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
   <>
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[550px] xl:w-[650px] snap-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-600 via-cyan-400 to-stone-200 p-10 mt-6 hover:opacity-80 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
         initial={{
          y:-100,
          opacity:0,
         }}
         transition={{duration:1.2}}
         whileInView={{opacity:1 , y:0}}
         viewport={{once:true}}
        className="bg-purple-700 rounded-full w-16 h-16 object-cover object-center" 
        src="https://global-uploads.webflow.com/6077f96cf4fa19216396daaf/6257f162e384e60d17c7290e_LOGO%20ICON%20white%201.png" 
        alt="devtown"/>

         <div className="text-[#292929] font-semibold">
          <h4>Full Stack Web Development Training & Internship</h4>
          <p>DevTown</p>
          
          {/* <div className="flex space-x-2 my-2 "> */}
            {/* Tech Used */}
            {/* Tech Used */}
            {/* Tech Used */}
          {/* </div> */}

          <p className="uppercase py-2 text-gray-400"> JULY 2022 - NOV 2022 </p>
          
          <ul className="list-disc ml-5">
            <li>Full Stack Web Development</li>
            <li>MERN Stack Technologies</li>
            <li>Industrial Training </li>
            <li>Internship</li>
          </ul>

         </div>

    </article>

   <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[550px] xl:w-[650px] snap-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-600 via-cyan-400 to-stone-200 p-10 mt-6 hover:opacity-80 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img 
            initial={{
              y:-100,
              opacity:0,
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1 , y:0}}
            viewport={{once:true}}
            className= "w-64 h-16 object-cover object-center p-1 bg-white" 
            src="https://www.vnurture.in/wp-content/uploads/2020/09/vn-logo-full-2.png" 
            alt="vnurture"/>

            <div className="text-[#292929] font-semibold">
              <h4>GTU Internship</h4>
              <p>Vnurture Technologies</p>

              <p className="uppercase py-2 text-gray-500 ">20JUNE - 8JULY </p>
              
              <ul className="list-disc ml-5">
                <li>GTU Summer Internship</li>
                <li>ReactJs Internship</li>
                <li>Web Development</li>
              </ul>

            </div>

   </article>


   
   </>
  )
}


// linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))

// bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500


// bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-600 via-cyan-400 to-stone-200
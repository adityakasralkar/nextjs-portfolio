import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <>
    {/* HTML */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373669/html.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">100%</p>
          </div>
        </div>
    </div>

    {/* CSS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373535/css.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">90%</p>
          </div>
        </div>
    </div>
          
    {/* JS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373705/js-official.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">85%</p>
          </div>
        </div>
    </div>

    {/* REACTJS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/374032/reactjs.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">85%</p>
          </div>
        </div>
    </div>

    {/* NODEJS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373929/node.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">75%</p>
          </div>
        </div>
    </div>

    {/* EXPRESSJS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/353724/express.svg"
            className="bg-slate-100 rounded-full border border-gray-500 object-cover p-1 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">75%</p>
          </div>
        </div>
    </div>

    {/* MONGODB */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373845/mongo.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">75%</p>
          </div>
        </div>
    </div>
    
    {/* NEXTJS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373770/light-next.svg"
            className="bg-white rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">60%</p>
          </div>
        </div>
    </div>
    
    {/* GIT */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373623/git.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">70%</p>
          </div>
        </div>
    </div>
    
    {/* TAILWINDCSS */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">90%</p>
          </div>
        </div>
    </div>

    {/* C */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/353528/c.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">70%</p>
          </div>
        </div>
    </div>

    {/* JAVA */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373504/class.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">70%</p>
          </div>
        </div>
    </div>

    {/* DOCKER */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/373553/docker.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">45%</p>
          </div>
        </div>
    </div>

    {/* PYTHON */}
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0,
            }}
            transition={{ duration:1 }}
            whileInView={{opacity:1,x:0}}
            src="https://www.svgrepo.com/show/374016/python.svg"
            className="rounded-full border border-gray-500 object-cover p-2 w-14 h-14 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-18 xl:h-18 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-md font-bold text-black opacity-100">65%</p>
          </div>
        </div>
    </div>
    </>

  )
}
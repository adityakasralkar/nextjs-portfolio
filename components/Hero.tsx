import React from 'react';
import { Cursor , useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import ProfilePic from "../public/images/profile.jpg";
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {

    const [text , count ] = useTypewriter({
        words: [
            "Hi,The Name is Aditya Kasralkar",
            "<Let's Build The Website />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  
    return (
    <>
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image src={ProfilePic} alt="Profile Pic" className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
            
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 font-bold tracking-[12px]">Software Engineer</h2>
            <h1 className="text-3xl lg:text-4xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor= "#00FFFF"/>
            </h1>

            <div>
                <Link href="#about"><button className="px-6 py-6 uppercase text-xs font-semibold tracking-widest text-gray-400 hover:text-white">About</button></Link>
                <Link href="#experience"><button className="px-6 py-6 uppercase text-xs font-semibold tracking-widest text-gray-400 hover:text-white">Experience</button></Link>
                <Link href="#skills"><button className="px-6 py-6 uppercase text-xs font-semibold tracking-widest text-gray-400 hover:text-white">Skills</button></Link>
                <Link href="#projects"><button className="px-6 py-6 uppercase text-xs font-semibold tracking-widest text-gray-400 hover:text-white">Projects</button></Link>
            </div>

            </div>
        </div>
    </>
  )
}
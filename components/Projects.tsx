import React from 'react';
import {motion} from "framer-motion";

type Props = {}

function Projects({}: Props) {

    const projects = [
        {
            id: 1,
            name: "NEXT - WEATHER",
            about: "NEXTJS WEATHER APP using the OpenWeather API",
            src: "https://user-images.githubusercontent.com/78255411/204322143-796f070e-dbba-4879-8d04-abf6b3718e57.png",
            hosted: "https://weather-app-nextjs-project.vercel.app/",
            githubLink: "https://github.com/adityakasralkar/next-weather",

        },

        {
            id: 2,
            name: "BookMyShow - Clone",
            about:"ReactJs Clone of BookMyShow Website with Tailwind CSS , TMDB-API & Razorpay Payment Gateway",
            src: "https://images.indianexpress.com/2021/02/BookMyShow-Stream-.jpg",
            hosted: "https://book-my-show-reactjs-clone.vercel.app/",
            githubLink: "https://github.com/adityakasralkar/BookMyShow-Clone",

        },

        {
            id: 3,
            name: "NEXT-INVOICE-APP",
            about:"A NEXTJS Invoice App With CRUD Operations Using MongoDB Database",
            src: "https://user-images.githubusercontent.com/78255411/206659650-92bf43b4-3af9-40e8-abc2-0320a6da4ed1.png",
            hosted: "https://invoice-next-app.vercel.app/",
            githubLink: "https://github.com/adityakasralkar/invoice-app",

        },

        {
            id: 4,
            name: "Guess the Random Number",
            about:"A Basic JavaScript Game to Guess the Random Number between 1 to 100 with Hard & Easy Attempts",
            src: "https://adityakasralkar-portfolio.netlify.app/static/media/guessrandomnumber.c7f017b0e289e7f03ea8.png",
            hosted: "https://guess-the-random-number.vercel.app/",
            githubLink: "https://github.com/adityakasralkar/guess-the-number.github.io",

        },
        
        {
            id: 5,
            name: "Starbucks UI",
            about:"A Basic Starbucks Responsive Landing Page ",
            src: "https://adityakasralkar-portfolio.netlify.app/static/media/basicstarbucksui.45f32c24fac86df2cc1c.png",
            hosted: "https://adityakasralkar.github.io/starbucks-ui/",
            githubLink: "https://github.com/adityakasralkar/starbucks-ui",

        },

        
        {
            id: 6,
            name: "Basic React Game",
            about: "Basic React Game to find Number is Greater Than 10 or Not . Numbers are hidden , You Need to Click Button",
            src: "https://adityakasralkar-portfolio.netlify.app/static/media/basicreactgame.e58ed21da423b99d1c53.png",
            hosted: "https://basic-react-game.netlify.app/",
            githubLink: "https://github.com/adityakasralkar/basic-react-game",

        },

    ]

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden top-2 z-20 snap-x snap-mandatory scrollbar scrollbar-track-gary-400/20 scrollbar-thumb-cyan-400/50">
            {/* projects */}
            {
        projects.map(({id,src , hosted , githubLink , name , about}) =>(

            <div key={id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center pb-0 md:p-44 h-screen ">
                <motion.img 
                initial={{
                    x:-300,
                    opacity:0,
                }}
                transition={{duration:1.2}}
                whileInView={{opacity:1 , x:0}}
                viewport={{once: true}}
                src={src} alt="" className="rounded-md duration-200 hover:scale-105 xl:h-[30vh] xl:w-[30vw] "/>
                
                <div className="space-y-8 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-2xl font-semibold text-center">Project {id} : {name} </h4>

                    <p className="text-base text-center md:text-left">
                       {about}
                    </p>
                </div>
            
                <div className="flex items-center justify-center mb-0">
                    <button className="bg-transparent border border-cyan-400 hover:border-none hover:bg-cyan-400 px-6 py-2 m-2 duration-200 hover:tracking-wider hover:scale-105"><a href={hosted} target="_blank"  rel="noreferrer">HOSTED LINK</a></button>
                    <button className="bg-transparent border border-cyan-400 hover:border-none hover:bg-cyan-400 px-6 py-2 m-2 duration-200 hover:tracking-wider hover:scale-105"><a href={githubLink} target="_blank"  rel="noreferrer">GITHUB CODE</a></button>
                </div>

            </div>

        ))
    }
        </div>

        <div className="w-full absolute top-[30%] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-600 via-cyan-400 to-stone-200/20 left-0 h-[250px]"></div>


    </motion.div>
  )
}

export default Projects
import React from 'react';
import {motion} from "framer-motion";
import { PhoneIcon , MapPinIcon , EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm  , SubmitHandler } from  "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {};

export default function ContactMe({}: Props) {

    const { register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:adityakkasralkar@gmail.com?subject=${formData.subject}&body=Hi , My name is ${formData.name} , ${formData.message}  (${formData.email})`
    };

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
    
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        contact  
    </h3>

    <div className="relative flex flex-col mt-4 space-y-5">
        <h4 className="text-xl font-semibold text-center">
            I have got just what you need. {" "}
            <span className="decoration-[#00FFFF]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
            <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00FFFF] h-5 w-5 animate-pulse"/>
            <p>+91 9558520167</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00FFFF] h-5 w-5 animate-pulse"/>
            <p>adityakasralkar@gmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00FFFF] h-5 w-5 animate-pulse"/>
            <p>Ahmedabad , Gujarat</p>
            </div>
        </div>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
            </div>

            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

            <textarea {...register('message')} placeholder="Message" className="contactInput" />
            <button type="submit" className="bg-[#00FFFF]/60  uppercase py-5 px-10 rounded-md text-white tracking-[4px] font-semibold text-lg">Submit</button>
        </form>

    </div>
    </motion.div>

    
  )
}
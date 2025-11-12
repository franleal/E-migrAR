"use client"
import { useEffect,useState } from "react"
import Image from "next/image";
import Navbar from "@/components/navbarLanding";

import { SliderType } from "@/types";

const images = [
    "/images/slider/img1.jpg",
    "/images/slider/img2.jpg",
    "/images/slider/img3.jpg",
    "/images/slider/img4.jpg",
    "/images/slider/img5.jpg"

] 

export default function Slider({title,subtitle,buttons,children}:SliderType){

    const [current,setCurrent]= useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev => (prev + 1) % images.length))
        },5000)
        return() => clearInterval(interval)
    },[])

    return(
        <div className="relative h-120 w-full z-10 m-0 p-0 ">
            
            {images.map((src,index) =>(
                <Image
                    key = {index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className={`object-cover object-center transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="w-full h-120 bg-black/60 z-20 absolute">
                {children && <div className="absolute inset-x-0 top-0 z-20">{children}</div>}
                <div className=" w-full h-full m-auto flex flex-col  items-center text-white pt-30">
                    <h1 className="text-6xl mb-10">{title}</h1>
                    <h2 className="text-3xl mb-10">{subtitle}</h2>
                    {buttons && (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {buttons.map((b, i) => (
                                <button
                                    key={i}
                                    className="w-40 py-2 px-3 text-lg rounded-xl bg-[#3366CC] hover:bg-[#5d8dee] hover:shadow-lg hover:shadow-blue-500/50"
                                >
                                    {b.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
    
}
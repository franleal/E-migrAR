"use client"
import { useEffect,useState } from "react"
import Image from "next/image";
import Navbar from "@/components/navbarLanding";
import Link from "next/link";

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
        <div className="relative h-[700px] w-full z-10 m-0 p-0 ">
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
            <div className="w-full h-[700px] bg-black/60 z-20 absolute">
                {children && <div className="absolute inset-x-0 top-0 z-20">{children}</div>}
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center text-white pt-30">
                    <div className="relative">
                        <Image
                            src="/images/logo/logo2.png"
                            alt="MailImage"
                            fill
                            className="object-cover z-10"
                            priority
                        />
                    </div>
                    <h1 className="text-6xl mb-10">{title}</h1>
                    <h2 className="text-3xl mb-10 md:text-left text-center">{subtitle}</h2>
                    {buttons && (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {buttons.map((b, i) => (
                                <button
                                    key={i}
                                    className="w-40 py-2 px-3 text-lg rounded-xl bg-[#3366CC] hover:bg-[#5d8dee] hover:shadow-lg hover:shadow-blue-500/50"
                                >
                                    <Link href={b.href || "#"}>{b.label}</Link>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
    
}
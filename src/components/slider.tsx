"use client"
import { useEffect,useState } from "react"
import Image from "next/image";
import Navbar from "@/components/navbarLanding";

const images = [
    "/images/slider/img1.jpg",
    "/images/slider/img2.jpg",
    "/images/slider/img3.jpg",
    "/images/slider/img4.jpg",
    "/images/slider/img5.jpg"

] 

export default function Slider(){

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
                    className={`object-cover transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="w-full h-120 bg-black/50 z-20 absolute">
                <Navbar/>
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center text-white">
                    <h1 className="text-6xl">E-migrAr</h1>
                    <h2 className="text-3xl">Asesoría migratoria para una llegada segura y sin errores a Argentina</h2>
                    <div className="flex flex-row w-150 justify-center">
                        <button className="mr-10 text-xl">Mas info</button>
                        <button className="text-xl">Suscribbirse</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
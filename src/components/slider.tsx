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
                    className={`object-cover object-center transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="w-full h-120 bg-black/60 z-20 absolute">
                <Navbar/>
                <div className=" w-full h-full m-auto flex flex-col  items-center text-white">
                    <h1 className="text-6xl mb-10">E-migrAr</h1>
                    <h2 className="text-3xl mb-10">Asesoría migratoria para una llegada segura y sin errores a Argentina</h2>
                    <div className="flex flex-row w-150 justify-center">
                        <button className="w-50 mr-10 text-xl bg-white/10 rounded-xl border-2 border-[#3366CC] hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/50">Mas info →</button>
                        <button className="w-50 text-xl rounded-xl bg-[#3366CC] hover:bg-[#5d8dee] hover:shadow-lg hover:shadow-blue-500/50">Suscribbirse</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <>
            <nav className="w-full h-30 flex flex-row justify-between items-center p-5 z-30">
                <Image src="/images/logo/logo.jpeg" alt="logo e-migrar" width={100} height={100} className="rounded-full mt-2"/>
                <div className="text-lg">
                    
                </div>

                <div>
                    <button className=" relative md:w-[30px] md:h-[15px] w-[15px] h-[10px] mr-5 md:hover:w-[40px] hover:w-[20px] md:hover:h-[25px] hover:h-[15px] transition-all duration-400 ease-in-out"><img className="w-full h-full mr-2" src="/images/lenguages/es.jpg" alt="" /></button>
                    <button className=" relative md:w-[30px] md:h-[15px] w-[15px] h-[10px] mr-5 hover:w-[40px] hover:h-[25px] transition-all duration-400 ease-in-out"><img className="w-full h-full mr-2" src="/images/lenguages/eng.jpg" alt="" /></button>
                    <button className=" relative md:w-[30px] md:h-[15px] w-[15px] h-[10px] mr-5 hover:w-[40px] hover:h-[25px] transition-all duration-400 ease-in-out"><img className="w-full h-full mr-2" src="/images/lenguages/pt.jpg" alt="" /></button>
                    <Link href="/premium/appPaid" className="p-2 text-white relative after:content-[''] after:absolute after:bg-[#5d8dee] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full">Login</Link>
                </div>
            </nav>
        </>  
    )
}
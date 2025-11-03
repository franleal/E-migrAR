import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <>
            <nav className="w-full  h-30 flex flex-row justify-between items-center p-5 z-30">
            
                <Image src="/images/logo/logo.jpeg" alt="logo e-migrar" width={100} height={100} className="rounded-full mt-2"/>
                <div className="m-5">
                    <Link href="/marketing" className="p-2 text-white">Home</Link>
                    <Link href="/login" className="p-2 text-white">Login</Link>
                    <Link href="/register" className="p-2 text-white">register</Link>
                </div>

            </nav>
        </>
              
    )
}
"use client";
import Navbar from "@/components/navbarLanding";

export default function AuthLayout({children,}: {children: React.ReactNode}) {
    return(
        <>
            
            <div className="w-full h-screen bg-blue-100">
                <Navbar/>
                
                {children}
        
            </div>
        </>
  );
}
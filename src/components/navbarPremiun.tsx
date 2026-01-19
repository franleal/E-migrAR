"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";


export default function NavbarPremium(){
    return(
        <>
            <nav className="w-full h-30 flex flex-row justify-between items-center p-5 z-30 text-white">
                <Image src="/images/logo/logo.jpeg" alt="logo e-migrar" width={100} height={100} className="rounded-full mt-2"/>
                <div className="m-5">
                    <Link href="/premium/appPaid" className="relative p-2 after:content-[''] after:absolute after:bg-[#5d8dee] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full">Home</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="text-white"
                            >
                                Consultoria ▾
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="min-w-56 bg-white/10 backdrop-blur-lg border border-white/20 text-white">
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/residencia" className="w-full">
                                    Residencia
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/ciudadania" className="w-full">
                                    Ciudadania
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/licConducir" className="w-full">
                                    Licencia de Conducir
                                </Link>
                            </DropdownMenuItem>
                           
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/inscTributaria" className="w-full">
                                    Inscripcion Tributaria
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/inscLaboral" className="w-full">
                                    Inscripcion Laboral
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/salud" className="w-full">
                                    Salud
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/premium/appPaid/gestoria" className="w-full">
                                    Gestoria
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/marketing" className="relative p-2 after:content-[''] after:absolute after:bg-[#5d8dee] after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full" onClick={() => signOut({ callbackUrl: "/marketing" })}>Logout</Link>
                    
                </div>
            </nav>
        </>
              
    )
}
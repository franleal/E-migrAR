"use client"
import { signOut } from "next-auth/react";

export default function PremiumHome(){
    return(
        <>
            <h1>Pagina Premium</h1>

            <button onClick={() => signOut({ callbackUrl: "/" })}>
                Cerrar sesión
            </button>
        </>
        

    )
}
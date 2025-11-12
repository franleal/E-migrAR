"use client"
import { useState } from "react";
import Button from "@/components/button";
import { getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbarLanding";
import Image from "next/image";


function mapNextAuthError(code?: string) {
  // NextAuth con credentials suele devolver "CredentialsSignin"
  if (code === "CredentialsSignin") return "Credenciales inválidas.";
  // fallback genérico (no reveles si el email existe o no)
  return "No pudimos iniciar sesión. Intentá nuevamente en unos segundos.";
}


export default function Login(){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router  = useRouter()

    const onsubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErr(null);
        setLoading(true);
        
        try{
            const res = await signIn("credentials",{
                email,
                password,
                redirect: false
            });
            
            if (res?.error) {
                setErr("Credenciales inválidas");
                return;
            }else{
                const sess = await getSession();
                console.log("Usuario:", sess?.user);
                router.replace("/premium/appPaid")
            }

        }catch(e){
            setErr("Error de conexión. Verificá tu internet e intentá otra vez.")
        }finally {
            setLoading(false);
        }
        
    };

    return( 
        <div className="w-[100%] h-screen bg-gradient-to-br from-blue-300 via-blue-250 to-blue-100">
            <Navbar/>
            <div className="w-[80%] h-200 bg-[#F9FAFB] flex p-5 rounded-xl m-auto shadow-xl shadow-black-500">
                <div className="w-[50%] relative h-[380px] md:h-auto min-h-[420px]">
                    <Image
                        src="/images/general/img6.jpg"
                        alt="loginImage"
                        fill
                        className="rounded-xl object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/35 rounded-xl"/>
                    <div className="absolute inset-0 text-white flex flex-col  items-center">
                        <h1 className="text-6xl mb-30 mt-20">Bienvenido de nuevo</h1>
                        <h3 className="text-2xl md:text-3xl font-bold drop-shadow">
                            Asesoría migratoria confiable
                        </h3>
                        <p className="mt-2 text-white/90 max-w-sm">
                            Acompañamos tu llegada a Argentina paso a paso.
                        </p>
                    </div>
                </div>
                <form action="" onSubmit={onsubmit} className="w-[50%] flex flex-col justify-center items-center bg-[#F9FAFB]">
                    
                    <h2 className="text-5xl mb-10">Login</h2>
                    {err && (<p style={{ color: "crimson" }}>{err}</p>)}
                    <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"></input>
                    <input type="password" required placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} minLength={6} className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"></input> 
                    <Button label={loading ? "Entrando..." : "Login"} type="submit" className="bg-green-200 w-50 h-10 rounded-xl"></Button>
                </form>
            </div>

        </div>
   
    )
}
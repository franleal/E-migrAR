"use client"
import { useState } from "react";
import Button from "@/components/button";
import { getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";




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
        <>
            <div className="w-[95%] md:w-[80%] md:h-200 h-auto bg-[#F9FAFB] flex flex-col md:flex-row p-5 rounded-xl m-auto shadow-xl shadow-black-500">
                <div className="relative w-full md:w-[50%] h-[380px] md:h-auto min-h-[420px] mb-[20px] md:m-0">
                    <Image
                        src="/images/general/img6.jpg"
                        alt="loginImage"
                        fill
                        className="rounded-xl object-cover object-center"
                        priority
                    />
                    
                    <div className="relative text-white flex flex-col items-center z-20">
                        <h1 className="text-4xl md:text-6xl mb-30 mt-20">Bienvenido de nuevo</h1>
                        <h3 className="text-2xl md:text-3xl font-bold drop-shadow">
                            Asesoría migratoria confiable
                        </h3>
                        <p className="mt-2 text-white/90 max-w-sm">
                            Acompañamos tu llegada a Argentina paso a paso.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black/35 rounded-xl z-10" ></div>
                </div>

                <div className="h-full flex flex-col justify-center items-center md:w-[50%]">
                    <form action="" onSubmit={onsubmit} className="w-full h-auto flex flex-col justify-center items-center bg-[#F9FAFB]">
                        <h2 className="text-5xl mb-10">Login</h2>
                        {err && (<p style={{ color: "crimson" }}>{err}</p>)}
                        <input type="email" required placeholder="Email" onChange={(e)=> setEmail(e.currentTarget.value)}className="mb-10 h-10 w-[80%] md:w-[70%] border-b-2 border-b-black focus:outline-none"></input>
                        <input type="password" required placeholder="Password"onChange={(e) => setPassword(e.currentTarget.value)}minLength={6}className="mb-10 h-10 w-[80%] md:w-[70%] border-b-2 border-b-black focus:outline-none"></input> 
                        <Button label={loading ? "Entrando..." : "Login"}type="submit"className="bg-green-200 w-50 h-10 rounded-xl"></Button>
                    </form>
                    <hr className="w-full border-0.5 border-solid border-black mt-[30px] ml-[15px]"/>

                    <div className="flex flex-col justify-center items-center">
                        <p>¿no tienes cuenta?</p>
                        <Link href="/auth/register" className="mt-[20px]"><Button label={"Register"} className="border border-2 w-50 h-10 rounded-xl"></Button></Link>
                        

                    </div>
                </div>
 
                
            </div>
        </>    
        
    )
}
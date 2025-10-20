"use client"
import { useState } from "react";
import Button from "@/components/button";
import { getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login(){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router  =useRouter()

    const onsubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErr(null);
        setLoading(true);
        
        const res = await signIn("credentials",{
           email,
           password,
           redirect: false
        });
        setLoading(false)
        if (res?.error) {
            setErr("Credenciales inválidas");
            return;
        }else{
            const sess = await getSession();
            console.log("Usuario:", sess?.user);
            router.replace("/premium/appPaid/main")
        }
    };

    return(
        <form action="" onSubmit={onsubmit}>
            <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}></input>
            <input type="password" required placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} minLength={6}></input> 
            <Button label="Login" type="submit"></Button>
        </form>
    )
}
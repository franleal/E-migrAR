"use client"
import Button from "@/components/button"
import {useForm,SubmitHandler,SubmitErrorHandler} from "react-hook-form"
import { RegisterInput } from "@/lib/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/lib/validator"
import Image from "next/image";



export default function Register(){

    const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        mode: "onSubmit"
    })

    const onsubmit: SubmitHandler<RegisterInput> = async (data) => {
        const res = await fetch('/api/register',{
            method: 'POST',
            body:JSON.stringify({
                name: data.name,
                password: data.password,
                email: data.email
            }),
            headers: { "Content-Type": "application/json" }
        })

        const resJson = await res.json()
        console.log(resJson)
    }

    const onError: SubmitErrorHandler<RegisterInput> = (err) => {
        console.log("❌ ERRORES:", err); // <— así ves qué no pasó el schema
    };

    return(
        <>  
            <div className="w-[80%] h-200 bg-[#F9FAFB] flex flex-row p-5 rounded-xl m-auto shadow-xl shadow-black-500">
                <div className="relative w-[50%] h-[380px] md:h-auto min-h-[420px]">
                    <Image
                        src="/images/general/img6.jpg"
                        alt="loginImage"
                        fill
                        className="rounded-xl object-cover object-center"
                        priority
                    />

                    <div className="relative text-white flex flex-col items-center z-20">
                        <h1 className="text-6xl mb-30 mt-20">Bienvenido a E-migrar</h1>
                        <h3 className="text-2xl md:text-3xl font-bold drop-shadow">
                            Asesoría migratoria confiable
                        </h3>
                        <p className="mt-2 text-white/90 max-w-sm">
                            Acompañamos tu llegada a Argentina paso a paso.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black/35 rounded-xl z-10"/>
                </div>
                        
                <form action=""  onSubmit={handleSubmit(onsubmit, onError)} className="w-[50%] h-full flex flex-col justify-center items-center bg-[#F9FAFB]">
                    <h2 className="text-5xl mb-10">Register</h2>
                        {errors.name && <p style={{ color: "crimson" }}>{errors.name.message}</p>}
                    <input type="text" {...register("name", {required:true})} placeholder="Nombre"className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                        {errors.email && <p style={{ color: "crimson" }}>{errors.email.message}</p>}
                    <input type="email" {...register("email", {required:true})} placeholder="Email" className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                        {errors.password && <p style={{ color: "crimson" }}>{errors.password.message}</p>}
                    <input type="password" {...register("password", {required:true})} placeholder="Password"className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                        {errors.confirmPassword && <p style={{ color:"crimson" }}>{errors.confirmPassword.message}</p>}
                    <input type="password" {...register("confirmPassword", {required:true})} placeholder="Confirm Password"className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                    <Button label="Registrarse" type="submit"className="bg-green-200 w-50 h-10 rounded-xl"/>
                </form>
            </div>   
        </>
    )
}
"use client"
import Button from "@/components/button"
import {useForm,SubmitHandler,SubmitErrorHandler} from "react-hook-form"
import { RegisterInput } from "@/lib/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/lib/validator"

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
        <div>
            <form action=""  onSubmit={handleSubmit(onsubmit, onError)}>
                {errors.name && <p style={{ color: "crimson" }}>{errors.name.message}</p>}
                <input type="text" {...register("name", {required:true})} placeholder="Nombre"/>
                {errors.email && <p style={{ color: "crimson" }}>{errors.email.message}</p>}
                <input type="email" {...register("email", {required:true})} placeholder="Email"/>
                {errors.password && <p style={{ color: "crimson" }}>{errors.password.message}</p>}
                <input type="password" {...register("password", {required:true})} placeholder="Password"/>
                {errors.confirmPassword && <p style={{ color: "crimson" }}>{errors.confirmPassword.message}</p>}
                <input type="password" {...register("confirmPassword", {required:true})} placeholder="Confirm Password"/>
                <Button label="Registrarse" type="submit"/>
            </form>

        </div>
    )
}
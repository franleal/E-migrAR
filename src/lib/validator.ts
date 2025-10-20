import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().min(1).max(100).trim(),
    email: z.email().max(200).trim().toLowerCase(),
    password: z.string().min(6).max(72).trim(),
    confirmPassword: z.string().min(6).max(72).trim(),
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword){
        ctx.addIssue({
            code: "custom",
            path: ["confirmPassword"],
            message:"Las contraseñas no coinciden"
        })
    }
})


export const loginSchema = z.object({
    email: z.email().trim().toLowerCase(),
    password: z.string().min(6).max(72).trim(),
})

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
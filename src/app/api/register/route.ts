import {prisma} from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/mail';
import { registerSchema } from '@/lib/validator';
import bcrypt from "bcrypt";


export async function POST(req:Request){
    try {
        const data = await req.json()
        const serverSchema = registerSchema.omit({ confirmPassword: true });
        const parsed = serverSchema.safeParse(data);
        if (!parsed.success) {
            return Response.json(
                { ok: false, errors: parsed.error.flatten() },
                { status: 400 }
            );
        }
        console.log(parsed)

        const { name, email, password } = parsed.data;

        const exist = await prisma.user.findUnique({where:{email}})
        if(exist){
            return Response.json(
                { ok: false, message:"El email ya esta registrado" },
                { status: 409 }
            );
        }
        
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data:{
                email, name, passwordHash
            }
        })

        void sendWelcomeEmail(user.email,user.name ?? undefined)
        return Response.json({ ok: true }, { status: 201 });
    }catch(e){
        console.error(e);
        return Response.json({ ok: false, message: "Error de servidor" }, { status: 500 });
    }
    

}
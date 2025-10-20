import {prisma} from '@/lib/db'
import { loginSchema } from '@/lib/validator';
import bcrypt from "bcrypt";


export async function POST(req:Request){
    try{
        const data = await req.json()
        const parsed = loginSchema.safeParse(data);
        if (!parsed.success) {
            return Response.json(
                { ok: false, errors: parsed.error.flatten() },
                { status: 400 }
            );
        }
        console.log(parsed)

        const { email, password } = parsed.data;
        const user = await prisma.user.findUnique({where: {email}})
        if (!user){
            return Response.json(
                { ok: false, message:"Mail invalido" },
                { status: 400 }
            );
        }

        const ok = await bcrypt.compare(password, user.passwordHash);
        if(!ok){
            return Response.json(
                { ok: false, message:"Contraseña incorrecta" },
                { status: 400 }
            );
        }

        const publicUser = {
            id:user.id,
            email:user.email,
            name:user.name
        }

        console.log(publicUser)

    }catch(e){
        console.error(e);
        return Response.json({ ok: false, message: "Error de servidor" }, { status: 500 });
    }
}
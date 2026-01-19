import { NextResponse } from 'next/server';
import {prisma} from '@/lib/db'
import { resend } from '@/lib/mail';
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth'

const fromEnv = process.env.EMAIL_FROM;
const toEnv = process.env.EMAIL_TO;

if (!fromEnv) throw new Error("❌ Falta EMAIL_FROM en .env");
if (!toEnv) throw new Error("❌ Falta EMAIL_FROM en .env")

const FROM: string = fromEnv;
const TO: string = toEnv;


export async function POST(req:Request){

    try{
        const sess = await getServerSession(authOptions);

        if (!sess?.user?.id) {
        return NextResponse.json(
            { error: 'Debe iniciar sesion para enviar un correo' },
            { status: 401 },
        );
        }

        const userId = sess.user.id;
        const res = await req.json()
        const{name,email,message} = res
        

        if (!name || !email || !message) {
        return NextResponse.json(
            { error: 'Faltan campos obligatorios.' },
            { status: 400 },
        );
        }

        const saved = await prisma.message.create({
            data:{
                name,
                email,
                message,
                userId,
            }
        })
  
        const{data,error} = await resend.emails.send({
            from:FROM,
            to:TO,
            subject:`Nuevo mensaje de ${name}`,
            replyTo:email,
            html:`
                <h1>Nuevo mensaje privado</h1>
                <p><strong>Usuario ID:</strong> ${userId}</p>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                
            `,
        });

        return NextResponse.json(
            { ok: true, message: 'Mensaje enviado correctamente' },
            { status: 200 },
        );
    }catch(err){
        console.error(err);
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: 500 },
        );
    }
}
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEnv = process.env.EMAIL_FROM;
if (!fromEnv) throw new Error("❌ Falta EMAIL_FROM en .env");
const FROM: string = fromEnv;

export async function sendWelcomeEmail(to: string, name?: string){
    try{
        resend.emails.send({
            from:FROM,
            to,
            subject:"Bienvenido a E-migrAR",
            html: `<div style="font-family: system-ui, sans-serif">
            <h2>Hola ${name ?? ""} 👋</h2>
            <p>Gracias por registrarte. Ya podés acceder a tu cuenta.</p>
            <p style="color:gray;font-size:12px;">© ${new Date().getFullYear()} e-migrar</p>
            </div>`
        });
        console.log(`✅ Email enviado a ${to}`)
    }catch(err){
        console.error("❌ Error enviando correo:", err);
    }
}
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { loginSchema } from "./validator";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string | null;
      name: string | null;
      isPremium: boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    isPremium: boolean;
  }
}
export const authOptions: NextAuthOptions = {
    session:{strategy:"jwt"},
    providers:[
        Credentials({
            name:"Email y contraseña",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const parsed = loginSchema.safeParse(credentials)
                if(!parsed.success) return null

                const {email,password} = parsed.data

                const user = await prisma.user.findUnique({ where: { email } });
                if(!user) return null

                const ok = await bcrypt.compare(password, user.passwordHash)
                if(!ok) return null

                return {
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    isPremium:user.isPremium
                } as any
            }
        }),
    ],
    callbacks:{
        async jwt({ token, user }) {
        if (user) {
            token.id = (user as any).id;
            token.isPremium = (user as any).isPremium;
        }
        return token;
        },
        async session({ session, token }) {
        if (session.user) {
            session.user.id = token.id as number;
            session.user.isPremium = Boolean(token.isPremium);
        }
        return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
}

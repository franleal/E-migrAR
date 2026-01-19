
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = { matcher: ["/premium/:path*"] };
export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log("Token: ",token)
    if (!token) {
        const url = new URL("/auth/login", req.url); // redirigimos al login
        url.searchParams.set("from", req.nextUrl.pathname); // opcional: recordar a dónde quería ir
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}



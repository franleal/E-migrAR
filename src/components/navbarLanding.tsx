import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <Link href="/marketing">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">register</Link>
        </div>
              
    )
}
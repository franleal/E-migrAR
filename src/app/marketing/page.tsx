"use client"
import type {User} from "@/types" ;
import LandingPage from "./landingPage";

function Users(u:User){
    return(
        <div>
            <p>Usuario: {u.name}</p>
            <p>Id: {u.id}</p>
            <p>Email: {u.email}</p>
            <p>Password: {u.password}</p>
            <p>Estado: {u.active ? "Activo" : "Inactivo"}</p>
        </div>

    )
    
    
};

export default function Page(){
    const users: User = {
        id :"1",
        name:"fran",
        email:"fran@gmail.com",
        password:"fran123",
        active:false
    }


    return(
        <>
            <LandingPage/>
            <h1>Usuarios</h1>
            <Users{...users}/>
        </>
    )
}

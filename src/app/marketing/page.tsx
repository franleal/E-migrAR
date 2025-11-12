"use client"

import LandingPage from "./landingPage";
import Navbar from "@/components/navbarLanding";
import Slider from "@/components/slider";

export default function Page(){

    return(
        <>
            <Slider
                title="E-migrAR"
                subtitle="Asesoría migratoria para una llegada segura y sin errores a Argentina"
                buttons={[
                    { label: "Más info" },
                    { label: "Suscribirse" },
                ]}>
                
                <Navbar/>
            </Slider>
            <LandingPage/>  
        </>
    )
}

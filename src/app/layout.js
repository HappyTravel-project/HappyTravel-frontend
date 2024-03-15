"use client"
import { useState, useEffect } from 'react';
import { Jaldi } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import NavBarMobile from "./components/NavBar/NavBarMobile/NavBarMobile";
import NavBarLoggedMob from "./components/NavBar/NavBarLoggedMob/NavBarLoggedMob";
import NavBarLogged from "./components/NavBar/NavBarLogged/NavBarLogged.";
import  AuthContextProvider from "../contexts/authContext";
/*import LoggedDestinationCard from "./components/LoggedDestinationCard/LoggedDestinationCard";*/


const jaldi = Jaldi({
  subsets: ["latin"],
  weight: ["700", "400"],
});

/*export const metadata = {
  title: "Happy Travel",
  description:
    "Descubre destinos soñados de viajeros de todo el mundo con la aplicación web de HappyTravel. Explora lugares nuevos y comparte tus propias aventuras. Usuarios autenticados pueden crear, editar y eliminar sus sueños viajeros, mientras que los visitantes pueden inspirarse con las experiencias de otros. ¡Viaja con nosotros hacia nuevos horizontes!",
};*/
export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia el tamaño según tus necesidades
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar tamaño inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
   
    <html lang="es">
      <body className={`${jaldi.className} bg-white text-text-color font-bold text-[4rem] rounded-full border-primary`}>
      <AuthContextProvider>
        <div className={` ${isMobile ? 'hidden md:block' : ''}`}>
          {/* Versión Desktop */}
          <NavBar />
        </div>
        {/* Versión Desktop logged */}
        <div className={` ${isMobile ? ' hidden md:block' : ''}`}>
          <NavBarLogged />
        </div>
        {/* Versión móvil */}
        <div className={`block ${isMobile ? '' : 'md:hidden'}`} >
          <NavBarMobile />
        </div>

        {/* Versión móvil logged */}
        <div className={`block ${isMobile ? '' : 'md:hidden'}`} >
          <NavBarLoggedMob />
        </div>

        {children}
        </AuthContextProvider>
        
      </body>
    </html>
    
  );
}

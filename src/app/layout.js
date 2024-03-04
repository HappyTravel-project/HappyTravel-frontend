import { Jaldi } from "next/font/google";
import "./globals.css";
import Header from './components/Header/Header';
<<<<<<< HEAD

=======
import PlaceHolder from './components/PlaceHolder/PlaceHolder';
import PaginationButton from './components/PaginationButton/PaginationButton'
>>>>>>> ca84ac510ee047ef403b548863e6b077c1baadff

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: ['700', '400']
});

export const metadata = {
  title: "Happy Travel",
  description: "Descubre destinos soñados de viajeros de todo el mundo con la aplicación web de HappyTravel. Explora lugares nuevos y comparte tus propias aventuras. Usuarios autenticados pueden crear, editar y eliminar sus sueños viajeros, mientras que los visitantes pueden inspirarse con las experiencias de otros. ¡Viaja con nosotros hacia nuevos horizontes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaldi.className}  bg-white text-text-color font-bold text-[4rem] rounded-full border-primary`}>
<<<<<<< HEAD
      <Header />     
      {children}
      
=======
        <Header />
        <PlaceHolder />
        <PaginationButton />
        {children}

>>>>>>> ca84ac510ee047ef403b548863e6b077c1baadff
      </body>
    </html>

  );
}

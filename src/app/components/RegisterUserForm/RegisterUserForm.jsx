"use client";

import { useState } from "react";
import axios from 'axios';
import { registerUser } from "../../services/axios";
import { useAuthContext } from '../../../contexts/authContext';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Button from "../Button/Button.jsx";

const Form = () => {
  /* CSS styles */
  const registerWrapper = `border-4 rounded-3xl border-bg-color px-8 py-4 mx-auto my-20 max-w-sm`;
  const titleRegister = `text-2xl text-center text-secondary border-b border-secondary pb-2 mb-8`;
  const formWrapper = `flex flex-col gap-1`;
  const labelStyle = `text-text-color text-xl text-left`;
  const buttonsWrapper = `flex flex-row place-content-evenly items-center mb-4`;
  const textStyle = `text-text-color text-xl text-center`;
  const linkStyle = `text-primary text-xl`;
  const inputStyle = `placeholder-text-color px-6 py-2 rounded-full text-xl shadow-[inset_0px_4px_4px_#00000040] transition-colors duration-300 bg-bg-color font-normal focus:outline-none focus:ring focus:ring-text-color w-72 text-text-color`;
  /* END CSS styles */

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const {login} = useAuthContext()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.get('/sanctum/csrf-cookie').then(response => {
      registerUser(data)
        .then((res) => {

          login(res.token)
          router.push("/");
          router.refresh()
        })
        .catch ((error) =>{
          console.error('Login failed:', error);
          setErrorMessage("Failed to log in. Please try again later.");
        })
    })
    
  };

  return (
    <section className={registerWrapper}>
      <h3 className={titleRegister}>Registro de usuario</h3>
      <form className={formWrapper} onSubmit={handleSubmit}>
        <label className={labelStyle}>Nombre</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          placeholder="Escribe tu nombre ..."
          pattern="[A-Za-z ]+"
          // validationMessage="Nombre requerido"
          className={inputStyle}
        />
        <label className={labelStyle}>E-mail</label>
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Escribe tu e-mail ..."
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          onChange={handleChange}
          className={inputStyle}
        />
        <label className={labelStyle}>Contraseña</label>
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Escribe tu contraseña ..."
          required
          onChange={handleChange}
          className={inputStyle}
        />
        <div className={buttonsWrapper}>
          <Button type="submit" text="Aceptar" isPrimary={true} />
          <Link href='/'>
            <button className='bg-secondary text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex'>Cancelar</button>
            </Link>
        </div>
      </form>
      <p className={textStyle}>
        ¿Ya tienes cuenta? Accede{" "}
        <Link 
        href="/login" className={linkStyle}>
          aquí
        </Link>
      </p>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </section>
  );
};

export default Form;

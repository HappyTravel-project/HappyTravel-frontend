"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import { Jaldi } from "next/font/google";

const jaldi = Jaldi({
    subsets: ["latin"],
    weight: ["700", "400"],
});

const NewDestinationForm = ({title}) => {
    return (
        <div className="w-full sm:w-72 sm:h-9/11 lg:w-96 lg:h-9/11 xl:w-full xl:h-9/11 bg-white border-4 rounded-3xl border-yellow-100 p-5">
            <h1 className="text-2xl text-center text-pink-500 font-jaldi">
                {title}
            </h1>
            <div className="flex flex-row items-center justify-center bg-white h-full rounded-b-xl pr-1 border-t-2 border-pink-500">
                <div className="bg-white h-full w-1/2 pt-4">
                    <div className="mr-7">
                        <label
                            htmlFor="small-input"
                            className="block mb-2 text-xl text-blue-500 dark:text-white font-semibold font-jaldi mt-2"
                        >
                            Título
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            className="block w-full p-3 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040]"
                        />

                        <label
                            htmlFor="small-input-2"
                            className="block mb-2 text-xl font-semibold text-blue-500 dark:text-white mt-2 font-jaldi"
                        >
                            Ubicación
                        </label>
                        <input
                            type="text"
                            id="small-input-2"
                            className="block w-full p-3 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040]"
                        />
                        <label
                            htmlFor="small-input-2"
                            className="block pt-3 text-xl font-semibold text-blue-500 dark:text-white font-jaldi">
                            Imagen
                        </label>
                        <div className="relative inline-block h-auto w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 left-0 transform translate-y-[-0.2rem] fill-current text-white text-center text-xl bg-blue-600 rounded-l-full pl-2.5 pt-2 h-10 shadow-r-lg"
                                width="22%"
                                height="98%"
                                viewBox="auto"
                                stroke-width="1.6"
                                stroke="#fff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path transform="scale(1.3) translate(5, -2)" d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                            </svg>
                            <input
                                id="input-file"
                                type="file"
                                className="bg-yellow-200 w-full h-10 rounded-full text-transparent p-0 shadow-inner"
                            />
                        </div>

                        <div className="flex flex-row mt-8 gap-1">
                            <Button type="submit" text="Aceptar" isPrimary={true} />
                            <Button text="Cancelar" isPrimary={false} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-white h-96 p-2 rounded-xl">
                    <label
                        htmlFor="message"
                        className="block my-2 text-xl font-semibold font-jaldi text-blue-500 dark:text-white m-1.5 mt-3.5"
                    >
                        ¿Por qué quieres viajar allí?
                    </label>
                    <textarea
                        id="message"
                        rows="3"
                        className=" p-4 my-6 mt-1 h-80 w-full text-sm text-gray-900 bg-yellow-100 rounded-3xl shadow-[inset_0px_4px_4px_#00000040] textarea-height text-transparent font-jaldi"
                        placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default NewDestinationForm;

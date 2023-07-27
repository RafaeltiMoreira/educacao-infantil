import React from "react";
import educa from '../assets/images/educacao-infantil-lapis.webp';
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

export default function HomeSection() {
    return (
        <div id="home" className="min-h-screen flex md:flex-row flex-col items-center lg:gap-x-8 md:gap-x-8">
            <div className="flex-1 flex items-center mt-10 justify-center h-full">
                <img src={educa} alt="Imagem de crianças na escola e lápis." className="md:w11/12 h-full object-cover rounded-md" />
            </div>
            <div className="flex-1 lg:mt-10">
                <div>
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold dark:text-white text-gray-800">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Educação
                            <br />
                        </span>
                        Infantil no <span>DF.</span>
                    </h1>
                    <h4 className="md:text-1xl text-lg md:leading-normal leading-5 mt-2 text-gray-600 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus quis! Facere quod quo laudantium, nulla et sint esse vitae.
                    </h4>

                    <div className="mt-4 text-3xl flex items-center md:justify-start justify-center gap-5">

                        <div className="cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-white">
                            <IoLogoInstagram />
                        </div>
                        <div className="cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-white">
                            <IoLogoFacebook />
                        </div>
                        <div className="cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-white">
                            <IoLogoYoutube />
                        </div>
                        <div className="cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-white">
                            <IoLogoWhatsapp />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { faCheck, faGraduationCap, faHouse, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
        <div className="animate__animated animate__fadeInDown m-auto w-full mt-3 ">
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-11/12 md:w-full xl:w-4/5 dark:bg-slate-800 fondo-nav rounded-xl">
            <div className="flex items-center h-16">
                <div className="flex w-full justify-between items-center">
                <a href="#inicio " className="flex-shrink-0">
                    <h2 className=" sm:pt-0 pt-1 text-lg font-bold dark:text-white text-black">vicen.<span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 p-0.5 rounded-md text-white">DEV</span></h2>
                </a>
                <div className="hidden md:block ">
                    <div className=" flex items-center space-x-4">
                            <a href="https://vicenweb.es" target="_blank" rel="noopener noreferrer" className=" hover:scale-105 transition font-semibold hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-black dark:text-white hover:text-white px-3 py-2 rounded-md text-sm "><FontAwesomeIcon icon={faHouse} /> Inicio</a>
                            <a href="https://vicenweb.es/#tech" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white px-3 py-2 rounded-md text-sm "><FontAwesomeIcon icon={faCheck} /> Habilidades</a>
                            <a href="https://vicenweb.es/trayectoria" target="_blank" rel="noopener noreferrer"  className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white px-3 py-2 rounded-md text-sm " >   <FontAwesomeIcon icon={faGraduationCap} /> Trayectoria</a>
                            <a href="https://vicenweb.es/proyectos" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white px-3 py-2 rounded-md text-sm "       ><FontAwesomeIcon icon={faRectangleList}/> Proyectos</a>
                    </div>
                </div>
                    <div >
                    <a href="#contacto " type="button" className="glow-on-hover text-white font-extrabold space-x-4 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Hablemos</a>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-black inline-flex transition ml-4 sm:ml-0 items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-4 pt-4 pb-3 mt-2 sm:px-3 backdrop-blur-md border-2 rounded-3xl mx-3">
                        <a href="https://vicenweb.es" target="_blank" rel="noopener noreferrer"
                        className="dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faHouse} /> Inicio
                        </a>
                        <a href="https://vicenweb.es/#tech" target="_blank" rel="noopener noreferrer"
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faCheck} /> Habilidades
                        </a>
                        <a href="https://vicenweb.es/trayectoria" target="_blank" rel="noopener noreferrer"
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faGraduationCap} /> Trayectoria
                        </a>
                        <a href="https://vicenweb.es/proyectos" target="_blank" rel="noopener noreferrer"
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faRectangleList} /> Proyectos
                        </a>
                </div>
                </div>
            )}
            </Transition>
        </nav>
        </div>
        </>
    );
}

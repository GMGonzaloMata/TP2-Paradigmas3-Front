import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent top-0 left-0 w-full z-50"> {/* Navbar fijo en la parte superior con `left-0` */}
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-3xl font-bold text-blue-600 w-full text-center">Arquitectura Clean</h1>

                {/* Links para pantallas grandes */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="block px-4 py-2 text-blue-600 hover:text-blue-800 transition text-lg font-medium">Inicio</Link>
                </div>

                {/* Botón de menú para pantallas medianas y chicas */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-transparent shadow-md">
                    <Link to="/" className="block px-4 py-2 text-white hover:text-blue-600 transition text-lg font-medium">Inicio</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

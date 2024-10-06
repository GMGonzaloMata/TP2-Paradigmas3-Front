import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="w-full flex justify-between items-center p-4">
                {/* Título o información sobre la gestión */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Arquitectura Clean</h1>
                </div>

                {/* Links para pantallas grandes */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition text-lg font-medium">Inicio</Link>
                </div>

                {/* Botón de menú para pantallas medianas y chicas */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú desplegable para pantallas medianas y chicas */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition text-lg font-medium">Inicio</Link>
                    <Link to="/events" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition text-lg font-medium">Eventos</Link>
                    <Link to="/sculptors" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition text-lg font-medium">Escultores</Link>
                    <Link to="/reports" className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition text-lg font-medium">Reportes</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

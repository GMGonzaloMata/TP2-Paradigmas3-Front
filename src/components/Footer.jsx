import React from 'react';
import cabra from '../assets/cabra.jpeg';
import mata from '../assets/mata.jpeg';
import curry from '../assets/curry.jpeg';
import bronny from '../assets/bronny.jpeg';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">

                {/* Columna 1 */}
                <div>
                    <img src={curry} alt="Sebastiano Corradi" className="mx-auto mt-2 w-16 h-16 rounded-full" />
                    <h3 className="font-bold text-lg">Sebastiano Corradi</h3>
                    <p className="text-sm">sebastianocorradi11@gmail.com</p>
                </div>

                {/* Columna 2 */}
                <div>
                    <img src={mata} alt="Gonzalo Mata" className="mx-auto mt-2 w-16 h-16 rounded-full" />
                    <h3 className="font-bold text-lg">Gonzalo Mata</h3>
                    <p className="text-sm">gonza.mata2003@gmail.com</p>
                </div>

                {/* Columna 3 */}
                <div>
                    <img src={bronny} alt="Santiago Guglielmone" className="mx-auto mt-2 w-16 h-16 rounded-full" />
                    <h3 className="font-bold text-lg">Santiago Guglielmone</h3>
                    <p className="text-sm">guglielmonesantiago69@gmail.com</p>
                </div>

                {/* Columna 4 con la imagen */}
                <div>
                    <img src={cabra} alt="Ignacio Parra" className="mx-auto mt-2 w-16 h-16 rounded-full" />
                    <h3 className="font-bold text-lg">Ignacio Parra</h3>
                    <p className="text-sm">lacabra@gmail.com</p>
                    {/* Añadiendo la imagen debajo del nombre */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

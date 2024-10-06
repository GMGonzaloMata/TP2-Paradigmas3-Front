import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">

                {/* Columna 1 */}
                <div>
                    <h3 className="font-bold text-lg">Sebastiano Corradi</h3>
                    <p className="text-sm">sebastianocorradi11@gmail.com</p>
                </div>

                {/* Columna 2 */}
                <div>
                    <h3 className="font-bold text-lg">Gonzalo Mata</h3>
                    <p className="text-sm">...</p>
                </div>

                {/* Columna 3 */}
                <div>
                    <h3 className="font-bold text-lg">Santiago Guglielmone</h3>
                    <p className="text-sm">...</p>
                </div>

                {/* Columna 4 */}
                <div>
                    <h3 className="font-bold text-lg">Ignacio Parra</h3>
                    <p className="text-sm">...</p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;

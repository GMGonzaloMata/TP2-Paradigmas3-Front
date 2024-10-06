import React from 'react';

const Header = () => {
    return (
        <header className="bg-white text-gray-800 py-12">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold">
                    <span className="text-blue-500">Gestor</span> de Eventos y Escultores
                </h1>
                <p className="text-lg mt-4 text-gray-600">
                    Administra tus eventos y escultores de manera eficiente y profesional
                </p>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <section className="container mx-auto text-center  pb-16"> {/* Reducido el padding superior */}
                {/* Sección de Sobre nosotros */}
                <h2 className="text-3xl font-bold mb-4">Sobre nosotros</h2>
                <p className="text-lg text-gray-700 mb-12">
                    Creamos esta plataforma para brindar una gestión de eventos y escultores.
                </p>

                {/* Sección de gestión */}
                <h1 className="text-3xl font-bold pt-16 mb-6">¿Qué te gustaría gestionar?</h1>
                <div className="flex justify-center space-x-4">
                    <a href="/events" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                        Gestionar Eventos
                    </a>
                    <a href="/sculptors" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                        Gestionar Escultores
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;

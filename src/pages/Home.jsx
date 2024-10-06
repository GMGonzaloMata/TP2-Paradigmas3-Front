import React from 'react';
import Navbar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="min-h-screen bg-white-100">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <Header />




            {/* Contenido principal */}
            <section className="container mx-auto text-center py-16">
                <h1 className="text-3xl font-bold mb-6">¿Que te gustaria gestionar?</h1>
                <p className="text-lg text-white-600 mb-8">

                </p>

                <div className="flex justify-center space-x-4">
                    <a href="/events" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Gestionar Eventos</a>
                    <a href="/sculptors" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">Gestionar Escultores</a>
                </div>
            </section>
            {/* Footer para pagina inico */}
            <Footer />
        </div>

    );
};

export default Home;

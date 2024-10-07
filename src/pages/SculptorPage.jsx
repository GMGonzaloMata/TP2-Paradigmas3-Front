import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fondo from '../assets/fondoo.webp';


function SculptorPage() {
    return (
        <div
            className="min-h-screen flex flex-col justify-between"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="flex flex-col min-h-screen bg-white-100">
                {/* Navbar */}
                <Navbar />

                <section className="container mx-auto text-center py-16 flex-grow">
                    <h1 className="text-4xl font-bold mb-6">Gestión de escultores</h1>

                    {/* Botones para gestionar escultores */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/add-sculptor">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Agregar Nuevo Escultor
                            </button>
                        </Link>
                        <Link to="/modify-sculptor">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Modificar escultor
                            </button>
                        </Link>
                        <Link to="/delete-sculptor">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Eliminar escultor
                            </button>
                        </Link>
                        <Link to="/sculptor-list">
                            <button className="bg-green-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Registro de Escultores
                            </button>
                        </Link>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default SculptorPage;

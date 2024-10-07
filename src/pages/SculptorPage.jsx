import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function SculptorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white-100">
            {/* Navbar */}
            <Navbar />

            <section className="container mx-auto text-center py-16 flex-grow">
                <h1 className="text-4xl font-bold mb-6">Gestión de escultores</h1>

                {/* Botones para gestionar escultores */}
                <div className="flex justify-center space-x-4">
                    <Link to="/add-sculptor">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
                            Agregar Nuevo Escultor
                        </button>
                    </Link>
                    <Link to="/modify-sculptor">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Modificar escultor
                    </button>
                    </Link>
                    <Link to="/delete-sculptor">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Eliminar escultor
                    </button>
                    </Link>
                    <Link to="/sculptor-list">
                    <button className="bg-green-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Registro de Escultores
                    </button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SculptorPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import fondo from '../assets/fondoo.webp';

function EventPage() {
    return (
        <div
            className="min-h-screen flex flex-col justify-between"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col min-h-screen bg-white-100">
                {/* Navbar */}
                <Navbar />

                {/* Contenido principal */}
                <section className="container mx-auto text-center py-16 flex-grow">
                    <h1 className="text-4xl font-bold mb-6">Gestión de Eventos</h1>

                    {/* Botones para gestionar eventos */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Redirigir a la página AddEventPage */}
                        <Link to="/add-event">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Agregar Nuevo Evento
                            </button>
                        </Link>
                        <Link to="/modify-event">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Modificar evento
                            </button>
                        </Link>
                        <Link to="/delete-event">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Eliminar evento
                            </button>
                        </Link>
                        <Link to="/event-list">
                            <button className="bg-green-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto">
                                Historial de eventos
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default EventPage;

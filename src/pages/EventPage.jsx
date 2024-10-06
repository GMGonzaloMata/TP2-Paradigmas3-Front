import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function EventPage() {
    return (
        <div className="min-h-screen bg-white-100">
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <section className="container mx-auto text-center py-16">
                <h1 className="text-4xl font-bold mb-6">Gestión de Eventos</h1>

                {/* Botones para gestionar eventos */}
                <div className="flex justify-center space-x-4">
                    {/* Redirigir a la página AddEventPage */}
                    <Link to="/add-event">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
                            Agregar Nuevo Evento
                        </button>
                    </Link>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Modificar evento
                    </button>
                    <Link to="/delete-event">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Eliminar evento
                    </button>
                    </Link>
                    <Link to="/event-list">
                        <button className="bg-green-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                            Historial de eventos
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default EventPage;

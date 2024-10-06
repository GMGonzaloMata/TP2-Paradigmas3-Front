import React from 'react';
import Header from '../components/Header';

function EventPage() {
    return (
        <div className="min-h-screen bg-white-100">

            <section className="container mx-auto text-center py-16">
                <h1 className="text-4xl font-bold mb-6">Gestión de Eventos</h1>

                {/* Botones para gestionar eventos */}
                <div className="flex justify-center space-x-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Agregar Nuevo Evento
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Modificar evento
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Eliminar evento
                    </button>
                </div>
            </section>
        </div>
    );
}

export default EventPage;

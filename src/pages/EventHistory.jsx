import React from 'react';
import Navbar from '../components/NavBar'; // Asegúrate de que la ruta sea correcta

function EventHistoryPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <section className="container mx-auto text-center py-16">
                <h1 className="text-4xl font-bold mb-6">Historial de Eventos</h1>

                {/* Botones para cargar eventos */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Cargar Eventos Futuros
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">
                        Cargar Eventos Pasados
                    </button>
                </div>
            </section>
        </div>
    );
}

export default EventHistoryPage;

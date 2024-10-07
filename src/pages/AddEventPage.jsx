import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormAddEvent from '../components/FormAddEvent'; // Importamos el formulario
import fondo from '../assets/fondoo.webp';

const AddEventPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <section className="container mx-auto text-center py-16">
          <h1 className="text-3xl font-bold mb-6">Agregar Nuevo Evento</h1>
          {/* Componente del formulario para agregar eventos */}
          <FormAddEvent />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AddEventPage;

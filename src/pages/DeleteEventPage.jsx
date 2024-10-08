import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeleteEvent from '../components/DeleteEvent'; // Importamos el componente DeleteEvent
import fondo from '../assets/fondoo.webp';

const DeleteEventPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-h-screen  flex flex-col justify-between">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <section className="container mx-auto text-center py-16">
          <DeleteEvent />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default DeleteEventPage;

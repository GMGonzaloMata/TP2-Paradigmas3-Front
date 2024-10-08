import React from 'react';
import Navbar from '../components/Navbar';
import DeleteSculptor from '../components/DeleteSculptor'; // Importa el componente
import fondo from '../assets/fondoo.webp';

const DeleteSculptorPage = () => {
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
          <DeleteSculptor />
        </section>
      </div>
    </div>
  );
};

export default DeleteSculptorPage;

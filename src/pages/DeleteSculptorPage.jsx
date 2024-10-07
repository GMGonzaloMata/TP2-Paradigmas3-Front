import React from 'react';
import Navbar from '../components/Navbar';
import DeleteSculptor from '../components/DeleteSculptor'; // Importa el componente

const DeleteSculptorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <DeleteSculptor />
      </section>
    </div>
  );
};

export default DeleteSculptorPage;

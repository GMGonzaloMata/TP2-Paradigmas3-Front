import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeleteEvent from '../components/DeleteEvent'; // Importamos el componente DeleteEvent

const DeleteEventPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <DeleteEvent />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeleteEventPage;

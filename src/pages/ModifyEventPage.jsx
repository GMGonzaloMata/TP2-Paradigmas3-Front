import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModifyEvent from '../components/ModifyEvent'; // Importamos el componente ModifyEvent

const ModifyEventPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <ModifyEvent />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ModifyEventPage;

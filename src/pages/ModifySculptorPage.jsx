import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModifySculptor from '../components/ModifySculptor'; // Importamos el componente ModifySculptor

const ModifySculptorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <ModifySculptor /> {/* Aplicamos el componente ModifySculptor */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ModifySculptorPage;

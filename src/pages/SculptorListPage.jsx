import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SculptorList from '../components/SculptorList'; // Importamos el componente de escultores

const SculptorListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <SculptorList />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SculptorListPage;

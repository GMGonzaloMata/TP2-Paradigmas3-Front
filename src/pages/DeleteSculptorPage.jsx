import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeleteScultor from '../components/DeleteScultor';

const DeleteSculptorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <DeleteScultor />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeleteSculptorPage;
import React, { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fondo from '../assets/fondoo.webp';
import miVideo from '../assets/arquitecturaclean.mp4';

const Home = () => {
    const videoRef = useRef(null); // Crear una referencia para el video

    // Restaurar el tiempo guardado del video al cargar la página
    useEffect(() => {
        const savedTime = localStorage.getItem('videoTime');
        if (savedTime && videoRef.current) {
            videoRef.current.currentTime = parseFloat(savedTime); // Restaurar el tiempo
        }

        // Guardar el tiempo actual del video en localStorage antes de cerrar o recargar la página
        const handleBeforeUnload = () => {
            if (videoRef.current) {
                localStorage.setItem('videoTime', videoRef.current.currentTime);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload); // Agregar evento para guardar antes de recargar

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload); // Limpiar evento cuando se desmonte el componente
        };
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col justify-between"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-16">
                {/* Sección de gestión (Texto a la izquierda) */}
                <div className="text-left text-white lg:w-1/2 px-4">
                    <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        Te ofrecemos que puedas gestionar tus eventos y escultores.
                    </h1>
                    <p className="text-lg font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        Creamos esta plataforma basándonos en la Arquitectura Clean.
                    </p>
                    <div className="flex space-x-4">
                        <a href="/events" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                            Gestionar Eventos
                        </a>
                        <a href="/sculptors" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300">
                            Gestionar Escultores
                        </a>
                    </div>
                </div>

                {/* Sección del video (A la derecha) */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 px-4">
                    <video ref={videoRef} width="600" controls>
                        <source src={miVideo} type="video/mp4" />
                        Tu navegador no soporta el video.
                    </video>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;

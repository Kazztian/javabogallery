import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SignUp from './SignUp'; // Importar SignUp.js desde la misma carpeta

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    
      <Footer />
    </>
  );
}

export default Home;

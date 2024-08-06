import React from 'react';
import './Home.css';
import marImage from '../../assets/mar.jpg'; 
function Home() {
  return (
    <>
      <h1 className="titulo">Home</h1>
      <img src={marImage} alt="Imagem Tela Inicial" className="img" />
    </>
  );
}

export default Home;

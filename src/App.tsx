import React from "react";
import Home from "./paginas/home/Home";
import Postagens from "./paginas/postagens/Postagens";
import Feed from "./paginas/feed/Feed";
import Sobre from "./paginas/sobre/Sobre";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Minhas Postagens" element={<Postagens />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/Sobre" element={<Sobre />} />
          
        </Routes>
        </ div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
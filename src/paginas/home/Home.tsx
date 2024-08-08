import React from "react";
import "./Home.css";
import Blog from '../../assets/blog.jpg'

function Home() {
  return (
    <div className="flex justify-center bg-beige-800 min-h-[83vh]">
      <div className="flex 1 flex-col gap-4 items-center justify-center py-4">
        <h1 className="text-5xl color-texts ">Blog Pessoal</h1>
        <h2 className="color-texts">Seu espaço para Criatividade!</h2>
        <img src={Blog} alt="Imagem do blog" className="w-full h-auto"/>
      </div>
    </div>
    
  );
}

export default Home;
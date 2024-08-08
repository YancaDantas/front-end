import Home from './paginas/home/Home';
import './App.css';
import React, { useState } from 'react';


/*
//Hook useState
function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
    //  <Home  title="Blog Pessoal"
    //         description="Seu espaço para Criatividade."/>
    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}*/

//Hook useEffect

function App() {
 
  return (
    <>
      <Home/>
    </>
  );
}

export default App;

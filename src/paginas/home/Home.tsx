import './Home.css';
import React, { useState, useEffect } from 'react';

/*
interface minhaProps {
    title: string;
    description: string;
  }
  
function Home(props:minhaProps){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}*/

function Home() {
  const [completed, setCompleted] = useState(false);
  const [termo, setTermo] = useState('');

  useEffect(() => {
    if (completed) {
      setTermo('Parabéns! Agora você é um escritor!');
    }
  }, [completed]);

  return (
    <div>
      {!completed ? (
        <>
          <h1>Você está quase lá...</h1>
          <p>Você aceita os termos para se tornar um escritor no Espaço Blog?</p>
          <button onClick={() => setCompleted(true)}>Clique para aceitar</button>
        </>
      ) : (
        <>
          <h3>{termo}</h3>
        </>
      )}
    </div>
  );
}

export default Home;
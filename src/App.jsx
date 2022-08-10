import { useState, useEffect } from 'react';
import Entrada from './components/Entrada';
import Test from './components/Test';

function App() {
  
  const [entrada, setEntrada] = useState(true);

  // *Cambiar la pantalla entrada a las preguntas despues de 8s
  useEffect(()=>{
    setTimeout(()=>{
      setEntrada(false);
    }, 8000);
  }, []);

  return (
    <div>
      {entrada ? 
        (
          <Entrada/>
        ):

        (
          <Test/>
        )

      }
    </div>
  )
}

export default App

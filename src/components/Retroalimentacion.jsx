import { useState, useEffect } from 'react';

import analitico from '../img/Análitico.png';
import practico from '../img/Práctico.png';
import tranquilo from '../img/Tranquilo.png';
import social from '../img/Social.png';

const Retroalimentacion = ({retroUsuario, puntos}) => {

    const {tipo, mensaje, rasgos} = retroUsuario;

    const [imagen, setImagen] = useState('');

    useEffect(()=>{
        const seleccionarImagen = ()=>{
            switch(tipo){
                case 'Analítico':
                    setImagen(analitico);
                    break;
                case 'Práctico':
                    setImagen(practico);
                    break;
                case 'Tranquilo':
                    setImagen(tranquilo);
                    break;
                case 'Social':
                    setImagen(social);
                    break;
                default: 
                    break;
            }
        }

        seleccionarImagen();
    }, []);

    return (
        <div className="cont retroalimentacion">
            <div className="cont-retro">
                <div className="resultado">
                    <p>Tipo de cliente: <span>{tipo}</span></p>
                    <p>Puntuación: <span>{puntos}/44</span></p>
                </div>
                <div className="mensaje">
                    <p>{mensaje}</p>
                    <p>Tus rasgos potenciales son:</p>
                    <ul className='rasgos'>
                        {rasgos.map(rasgo => (
                            <li
                                key={rasgo}
                            >
                                {rasgo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <figure className="imagen-retro">
                <img src={imagen} alt="tipo" />
            </figure>
        </div>
    )
}

export default Retroalimentacion
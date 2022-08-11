import { useState, useEffect } from "react";
import logoDidi from "../img/bds.png";

const Entrada = () => {

    const [salida, setSalida] = useState(false);

    // *Al instanciar el componente despueste de 7s opacity a 0
    useEffect(()=>{
        setTimeout(()=>{
            setSalida(true);
        }, 7000);
    }, []);

    return (
        <section className={`inicio ${salida && 'salida'}`}>
            <div className="entrada-A">
                <figure className="didi">
                    <img className="img-didi" src={logoDidi} alt=""/>
                </figure>
                <div className="barra"></div>
                <div className="titulos">
                    <h1 className="frase1">Bussiness</h1>
                    <h1 className="frase2">School</h1>
                    <h1 className="frase3">Didi</h1>
                </div>
            </div>
        </section>
    )
}

export default Entrada
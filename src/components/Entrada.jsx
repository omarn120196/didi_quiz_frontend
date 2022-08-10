import styled from "@emotion/styled";
import logoDidi from "../img/didi.png";

const Entrada = () => {

    return (
        <section className="inicio">
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
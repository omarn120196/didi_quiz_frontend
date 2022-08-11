const Retroalimentacion = ({retroUsuario, puntos}) => {

    const {tipo, mensaje, rasgos} = retroUsuario;

    return (
        <div className="cont retroalimentacion">
            <div className="cont-retro">
                <div className="resultado">
                    <p>Tipo de cliente: <span>{tipo}</span></p>
                    <p>Puntuación: <span>{puntos}/44</span></p>
                </div>
                <div className="mensaje">
                    <p>{mensaje}</p>
                    <p>{rasgos}</p>
                </div>
            </div>
            <figure className="imagen-retro">
                <img src={`./src/img/${tipo}.png`} alt="tipo" />
            </figure>
        </div>
    )
}

export default Retroalimentacion
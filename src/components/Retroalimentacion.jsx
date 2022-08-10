const Retroalimentacion = ({retroUsuario, puntos}) => {

    const {tipo, mensaje, rasgos} = retroUsuario;

    return (
        <div className="cont">
            <div className="resultado">
                <p>Tipo de cliente: <span>{tipo}</span></p>
                <p>Puntuación: <span>{puntos}/44</span></p>
            </div>
            <div className="mensaje">
                <p>{mensaje}</p>
                <p>{rasgos}</p>
            </div>
        </div>
    )
}

export default Retroalimentacion
const Pregunta = ({pregunta, handleCheck}) => {

    const {insisoA, insisoB, insisoC, insisoD, noPregunta} = pregunta;


    return (
        <div className="cont-pregunta">
            <p>{noPregunta}. {pregunta.pregunta}</p>
            <div className="respuestas">
                <div className="cont-respuestas">
                    <input 
                        type="radio" 
                        name={`p${noPregunta}`} 
                        id={`r${noPregunta}_1`} 
                        value="1"
                        onChange={handleCheck}
                    />
                    <label htmlFor={`r${noPregunta}_1`}>{insisoA}</label>
                </div>
                <div className="cont-respuestas">
                    <input 
                        type="radio" 
                        name={`p${noPregunta}`} 
                        id={`r${noPregunta}_2`} 
                        value="2"
                        onChange={handleCheck}
                    />
                    <label htmlFor={`r${noPregunta}_2`}>{insisoB}</label>
                </div>
                <div className="cont-respuestas">
                    <input 
                        type="radio" 
                        name={`p${noPregunta}`} 
                        id={`r${noPregunta}_3`} 
                        value="3"
                        onChange={handleCheck}
                    />
                    <label htmlFor={`r${noPregunta}_3`}>{insisoC}</label>
                </div>
                <div className="cont-respuestas">
                    <input 
                        type="radio" 
                        name={`p${noPregunta}`} 
                        id={`r${noPregunta}_4`} 
                        value="4"
                        onChange={handleCheck}
                    />
                    <label htmlFor={`r${noPregunta}_4`}>{insisoD}</label>
                </div>
            </div>
        </div>
    )
}

export default Pregunta
import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import Mensaje from "./Mensaje";
import Retroalimentacion from "./Retroalimentacion";
import Pregunta from "./Pregunta";
import preguntas from "../data/preguntas";
import rangos from "../data/rangos";
import logo from '../img/logo.png';

const Test = () => {

    // *Animar entrada
    const [entrada, setEntrada] = useState(false);

    // *Guardar nombre y id de empleado
    const [nombre, setNombre] = useState('');
    const [id, setId] = useState('');

    // *Variables que escuchan el valor del radioButton
    const [respuesta1, setRespuesta1] = useState('');
    const [respuesta2, setRespuesta2] = useState('');
    const [respuesta3, setRespuesta3] = useState('');
    const [respuesta4, setRespuesta4] = useState('');
    const [respuesta5, setRespuesta5] = useState('');
    const [respuesta6, setRespuesta6] = useState('');
    const [respuesta7, setRespuesta7] = useState('');
    const [respuesta8, setRespuesta8] = useState('');
    const [respuesta9, setRespuesta9] = useState('');
    const [respuesta10, setRespuesta10] = useState('');
    const [respuesta11, setRespuesta11] = useState('');

    // *Variable para visualizar retroalimentación
    const [retroalimentacion, setRetroalimentacion] = useState(false);

    // *Estado donde se guardan los puntos obtenidos
    const [puntos, setPuntos] = useState(0);

    // *Variable que indica si una pregunta no es contestada
    const [error, setError] = useState(false);
    
    // *Objeto para visualizar retroalimentacion del usuario
    const [retroUsuario, setRetroUsuario] = useState({});

    // *Cambiar estado para animación entrada
    useEffect(()=>{
        setEntrada(true);
    }, []);
    
    // *Función que asigna el valor del input checked
    const handleCheck = e=>{


        switch(e.target.name){
            case 'p1':
                setRespuesta1(parseInt(e.target.value));
                break;
            case 'p2':
                setRespuesta2(parseInt(e.target.value));
                break;
            case 'p3':
                setRespuesta3(parseInt(e.target.value));
                break;
            case 'p4':
                setRespuesta4(parseInt(e.target.value));
                break;
            case 'p5':
                setRespuesta5(parseInt(e.target.value));
                break;
            case 'p6':
                setRespuesta6(parseInt(e.target.value));
                break;
            case 'p7':
                setRespuesta7(parseInt(e.target.value));
                break;
            case 'p8':
                setRespuesta8(parseInt(e.target.value));
                break;
            case 'p9':
                setRespuesta9(parseInt(e.target.value));
                break;
            case 'p10':
                setRespuesta10(parseInt(e.target.value));
                break;
            case 'p11':
                setRespuesta11(parseInt(e.target.value));
                break;
            default:
                break;
        }
    }

    // *Función del botón submit
    const handleSubmit = async e=>{
        e.preventDefault();

        // *Crear array para verificar respuestas
        const arrayRespuestas =[
            nombre,
            id,
            respuesta1,
            respuesta2,
            respuesta3,
            respuesta4,
            respuesta5,
            respuesta6,
            respuesta7,
            respuesta8,
            respuesta9,
            respuesta10,
            respuesta11,
        ]

        // *Arreglo con los puntos que respondierón
        const arrayPuntos = [
            respuesta1,
            respuesta2,
            respuesta3,
            respuesta4,
            respuesta5,
            respuesta6,
            respuesta7,
            respuesta8,
            respuesta9,
            respuesta10,
            respuesta11,
        ]

        // *Verificar que esten todas las respuestas
        if(arrayRespuestas.includes('')){
            setError(true);
            return;
        }

        // *Ocultar Error
        setError(false);

        // *Sumar puntos
        const totalPuntos = arrayPuntos.reduce((total, punto)=>total + punto, 0);

        // *Asignar las respuestas en el arreglo y puntos
        setPuntos(totalPuntos);

        // *Asignar Retroalimentación
        let infoAsignada;

        if(totalPuntos>=11 && totalPuntos<=18){
            infoAsignada = {
                tipo: rangos[0].tipo,
                mensaje: rangos[0].mensaje,
                rasgos: rangos[0].rasgos
            }

            setRetroUsuario(infoAsignada);
        }
        else if(totalPuntos>=19 && totalPuntos<=26){
            infoAsignada = {
                tipo: rangos[1].tipo,
                mensaje: rangos[1].mensaje,
                rasgos: rangos[1].rasgos
            }

            setRetroUsuario(infoAsignada);
        }
        else if(totalPuntos>=27 && totalPuntos<=35){
            infoAsignada = {
                tipo: rangos[2].tipo,
                mensaje: rangos[2].mensaje,
                rasgos: rangos[2].rasgos
            }

            setRetroUsuario(infoAsignada);
        }
        else if(totalPuntos>=36 && totalPuntos<=44){
            infoAsignada = {
                tipo: rangos[3].tipo,
                mensaje: rangos[3].mensaje,
                rasgos: rangos[3].rasgos
            }

            setRetroUsuario(infoAsignada);
        }

        // *Guardar Datos en la base
        try {
            const datos = {
                empleado: nombre,
                idEmpleado: id,
                puntos: totalPuntos,
                tipo: infoAsignada.tipo
            }

            await clienteAxios.post('/test', datos);

        } catch (error) {
            console.log(error.response.data.msg);
        }

        // *Visualizar RetroALimentación
        setRetroalimentacion(true);


    }

    return (
        <div className={`cont-encuesta ${entrada && 'ver-encuesta'}`}>
            <div className="header">
                {!retroalimentacion ? 
                    (
                        <>
                            <div className="encabezado">
                                <h2>Tipos de cliente</h2>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="cont contenedor">
                                <p>Instrucciones: <span>A continuación leerás una serie de situaciones, elige la respuesta que describa lo que harías. </span></p>
                            </div>
                        </>
                    ) 
                    
                    :
                    
                    <>
                        <div className="encabezado">
                            <h2>Resultado</h2>
                            <img src={logo} alt="logo" />
                        </div>
                    </>
                }
            </div>

            {retroalimentacion ? 
                (
                    <Retroalimentacion
                        retroUsuario={retroUsuario}
                        puntos={puntos}
                    />
                ) :

                (
                    <form 
                        onSubmit={handleSubmit}    
                        className="cont contenedor" 
                        action=""
                    >
                        <div className="res-texto">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                id="nombre" 
                                type="text"
                                placeholder="Ingresa tu nombre"
                                onChange={e=>setNombre(e.target.value)} 
                            />
                        </div>
                        
                        <div className="res-texto">
                            <label htmlFor="id">Generación:</label>
                            <input 
                                id="id"
                                type="text"
                                placeholder="Ingresa tu generación"
                                onChange={e=>setId(e.target.value)} 
                            />
                        </div>
                        
                        {preguntas.map(pregunta=>(
                            <Pregunta
                                key={pregunta.noPregunta}
                                pregunta={pregunta}
                                handleCheck={handleCheck}
                            />
                        ))}

                        {error && 
                            <Mensaje
                                tipo='error'
                            >
                                <p>Todas las respuestas son necesarias</p>
                            </Mensaje>
                        }  

                        <input type="submit" value="Enviar" />
                    </form>
                )
            }
        </div>
    )
}

export default Test
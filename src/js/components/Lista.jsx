import React, { useState } from "react";

const Lista = () => {
    const [inputValue, setInputValue] = useState('');
    const [tareas, setTareas] = useState([]);

    const lapiz = () =>{ //Solo uso esto dos veces pero por ir acostumbrandome
        return (
            <i className="bi bi-pencil m-3" style={{color: '#0c4a5b' }}></i>
        )
    }
    //Funcion para la introducir la tarea escribiendo en el input sin que se pueda dejar en blanco y enviar una tarea vacia
    const taskAdd = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setTareas([...tareas, inputValue]); //concatena en la variable tareas las nuevas 
            setInputValue(''); //Resetea el input de texto cuando ya hayamos enviado la tarea anterior
        }
    }
    function quitarTarea(index) {
        setTareas(tareas.filter((_, i) => i !== index)); //Funcion asociada al boton de cada tarea para eliminarla con el metodo filter
                                // El _ hace referencia al elemento actual y i su indice, luego pasamos los demas indices de las tareas que queremos que se queden
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header pb-3">
                    {lapiz()}
                    <label className="me-2">Que tareas tenemos hoy?</label>
                    {lapiz()}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={taskAdd}
                        placeholder="Escribe tu tarea" 
                        className="form-control"/>
                </div>
                <div className="card-body">
                    <div className="row mt-3 justify-content-center">
                        <ul className="list-group list-group-flush col-12 col-sm-10 col-md8 p-2">
                            {tareas.map((tarea, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" key={index}>
                                    {tarea}
                                    <i class="bi bi-trash" onClick={() => quitarTarea(index)}></i></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lista;
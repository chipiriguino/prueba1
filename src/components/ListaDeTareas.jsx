import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea"

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea= tarea =>{
    if(tarea.texto.trim()){
        tarea.text = tarea.texto.trim(); //trim es un metodo que quita espacios del principio y del final de un string
        const tareasActualizadas =[tarea, ...tareas] // para añadir la nueva tarea al PRINCIPIO de todo
        setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea =id=>{
    const tareasActualizadas = tareas.filter(tarea=>tarea.id !==id);
    setTareas(tareasActualizadas)
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />  {/* 1.2 recibimos la tarea por por props */}
      <div className="tarea-lista-container">
        {
            tareas.map((tarea)=>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                />
            )
        }
      </div>
    </>
  );
}

import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"

export default function Tarea({ id,texto,completada,completarTarea,eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
      <div className="tarea-texto" onClick={()=> completarTarea(id)}>{texto}</div>
      <div className="tarea-icon-container" onClick={()=>eliminarTarea(id)}><AiOutlineCloseCircle className="tarea-icon"/></div>
    </div>
  );
}

import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
export default function TareaFormulario(props) {

  const[input,setInput]=useState('');

// COMO SACAR EL VALOR DE INPUT  con el hook use state (e.target.value)
  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(e.target.value)
  }

  const manejarEnvio = e =>{
  e.preventDefault();   // para que no se vuelva a cargar la app cuando se envía
 

    const tareaNueva={
      id:uuidv4(),
      texto:input ,//este valor viene del use state
      completada:false
    }
    props.onSubmit(tareaNueva); //1.1 envíamos la tarea por props( el prop dse llama onSubmit) al componente ListadeTareas
  }
  return (
    <form className='tarea-form' onSubmit={manejarEnvio}>
        <input className='tarea-input' type='password' placeholder='escribe mi pana' onChange={manejarCambio} name='texto'/>
        <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  )
}

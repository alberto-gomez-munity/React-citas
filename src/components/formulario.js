import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({addCita}) => {

  //state citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  }) 

  const [ error, setError ] = useState(false);

  //función que se ejecuta al escribir en el input

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]:e.target.value
    })
    
  }

  const { mascota, propietario, fecha, hora, sintomas } = cita;


  const submitCita = (e) => {
    e.preventDefault()

    //validar
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
      setError(true)
      return
    }
    setError(false)
    
    //asignar ID
    cita.id = uuidv4()
    
    // crear cita
    addCita(cita)

    // reiniciar el form
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    })

  }

  return ( 
    <Fragment>
      <h2>Crear cita</h2>

      {error ? <p className="alerta-error">Todos los cambios son obligartorios</p> : null }

      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input 
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          value={mascota}
          onChange={handleChange}
        />

        <label>Nombre dueño</label>
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño"
          value={propietario}
          onChange={handleChange} />
        
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={handleChange}/>

        <label>Hora</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={handleChange}/>

        <label>Síntomas</label>
        <textarea 
          type="time"
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={handleChange}></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar cita</button>
      </form>
    </Fragment>

  
   );
}

Formulario.propTypes = {
  addCita : PropTypes.func.isRequired
}
 
export default Formulario;
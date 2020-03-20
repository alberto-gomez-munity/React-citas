import React, { Fragment, useState } from 'react';

const Formulario = () => {

  //state citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  }) 

  //función que se ejecuta al escribir en el input

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]:e.target.value
    })
    
  }

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return ( 
    <Fragment>
      <h2>Crear cita</h2>

      <form>
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
 
export default Formulario;
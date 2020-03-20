import React, {Fragment, useState} from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita';

function App() {

  const [citas, setCitas] = useState([])

  const addCita = cita => {
    setCitas([...citas,cita])
  }

  const removeCita = (id) => {
    console.log(id)

    const newCitas = citas.filter( cita => cita.id != id)
    setCitas(newCitas)
  }

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              addCita={addCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map( cita => (
              <Cita cita={cita} key={cita.id} removeCita={removeCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

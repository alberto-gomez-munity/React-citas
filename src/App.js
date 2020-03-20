import React, {Fragment, useState} from 'react';
import Formulario from './components/formulario';

function App() {

  const [citas, setCitas] = useState([])

  const addCita = cita => {
    setCitas([...citas,cita])
    console.log(citas);
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
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

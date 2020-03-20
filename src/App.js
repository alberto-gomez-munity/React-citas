import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita';

function App() {

  let citasInit = JSON.parse(localStorage.getItem('citas'));
  if(!citasInit){
    citasInit = []
  }

  const [citas, setCitas] = useState(citasInit)

  useEffect( () => {
    console.log('Dom listo o algo pasó con las citas');
      if(citasInit) {
        localStorage.setItem('citas', JSON.stringify(citas))
      }else{
        localStorage.setItem('citas', JSON.stringify([]))
      }
  }, [citas, citasInit])

  //añade una cita al listado
  const addCita = cita => {
    setCitas([...citas,cita])
  }

  //borra la cita de la lista
  const removeCita = (id) => {
    console.log(id)

    const newCitas = citas.filter( cita => cita.id !== id)
    setCitas(newCitas)
  }


  const titulo = (citas.length > 0 ? 'Administra tus citas' : 'No hay citas')

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

            <h2>{titulo}</h2>
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

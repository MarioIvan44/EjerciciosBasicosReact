import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';

//Botones
import BotonAzul from './components/Botones/BotonAzul.jsx';
import BotonGris from './components/Botones/BotonGris.jsx';

//Inputs de texto
import InputNombre from './components/Inputs-texto/InputNombre.jsx';
import InputApellido from './components/Inputs-texto/InputApellido.jsx';

//Select (lista desplegables)
import SplitButtonWithThreeOptions from './components/Lista-desplegable/SplitButton.jsx';
import SingleButtonTwo from './components/Lista-desplegable/SingleButtonTwo.jsx';

//Checkboxes
import CheckBoxSimple from './components/Checkboxes/CheckBoxSimple.jsx';
import CheckBoxSuccess from './components/Checkboxes/CheckBoxSucces.jsx';

//Radio buttons
import RadioOption1 from './components/RadioButtons/RadioButton1.jsx';
import RadioOption2 from './components/RadioButtons/RadioOption2.jsx';

function App() {
  //Estados para los inputs de texto
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  //Estados para los checkboxes
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [recibirPromociones, setRecibirPromociones] = useState(false);

  //Estados para los radio buttons
  const [genero, setGenero] = useState("");


  return (
    <>
      {/* Botones */}
      <h1 style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Botones</h1>
      <BotonAzul titulo="Botón 1" accion={() => alert("Hola soy el botón 1")} />
      <br />
      <BotonGris titulo="Botón 2" accion={() => alert("Hola soy el botón 2")} />
      <br />

      {/* Inputs de texto */}

      <h1 style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Inputs de texto</h1>
      <InputNombre placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <InputApellido placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

      {/*Select (lista desplegables) */}
      <h1 style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Select (lista desplegables)</h1>
      <SingleButtonTwo titulo="Opciones" option1="Opción 1" option2="Opción 2" />
      <br />
      <SplitButtonWithThreeOptions titulo="Más opciones" option1="Opción 1" option2="Opción 2" option3="Opción 3" />

      {/* Checkboxes */}
      <h1 style={{ fontSize: 18, fontWeight: 'bold', color: 'Red' }}>Checkboxes</h1>
      <CheckBoxSimple label="Aceptar términos" checked={aceptaTerminos} onChange={(e) => setAceptaTerminos(e.target.checked)} />
      <CheckBoxSuccess label="Recibir promociones" checked={recibirPromociones} onChange={(e) => setRecibirPromociones(e.target.checked)} />

      {/* Radio buttons */}
      <h1 style={{ fontSize: 18, fontWeight: 'bold', color: 'Red' }}>Seleccione su genero (Radio Buttons)</h1>
      <RadioOption1
        label="Masculino"
        name="genero"
        checked={genero === "masculino"}
        onChange={() => setGenero("masculino")}
      />

      <RadioOption2
        label="Femenino"
        name="genero"
        checked={genero === "femenino"}
        onChange={() => setGenero("femenino")}
      />
    </>
  )
}

export default App

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from "react";

//Botones
import BotonAzul from "./components/Botones/BotonAzul.jsx";
import BotonGris from "./components/Botones/BotonGris.jsx";

//Inputs de texto
import InputNombre from "./components/Inputs-texto/InputNombre.jsx";
import InputApellido from "./components/Inputs-texto/InputApellido.jsx";

//Select (lista desplegables)
import SplitButtonWithThreeOptions from "./components/Lista-desplegable/SplitButton.jsx";
import SingleButtonTwo from "./components/Lista-desplegable/SingleButtonTwo.jsx";

//Checkboxes
import CheckBoxSimple from "./components/CheckBoxes/CheckBoxSimple.jsx";
import CheckBoxSuccess from "./components/CheckBoxes/CheckBoxSucces.jsx";

//Radio buttons
import RadioOption1 from "./components/RadioButtons/RadioButton1.jsx";
import RadioOption2 from "./components/RadioButtons/RadioOption2.jsx";

//Alertas
import AlertDanger from "./components/Alertas/AlertDanger.jsx";
import AlertWithIcon from "./components/Alertas/AlertWithIcon.jsx";
//Imagen de icono
import exclamationIcon from "./assets/exclamation-mark.svg";

//Cards
import CardHeader from "./components/Cards/CardHeader.jsx";
import CardImage from "./components/Cards/CardImage.jsx";
//Imagen tarjeta
import imagenChuchito from "./assets/Chuchito.jpg";

//Progress bars
import ProgressBarBasic from "./components/ProgressBars/ProgressBarBasic.jsx";
import ProgressBarAnimated from "./components/ProgressBars/ProgressBarAnimated.jsx";

//Badges
import BadgeRedondo from "./components/Badges/BagdeRedondo.jsx";
import BadgeStatus from "./components/Badges/BadgeStatus.jsx";

//Formularios
import UserForm from "./components/Formularios/UserForm.jsx";
import ContactForm from "./components/Formularios/ContactForm.jsx";

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
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">UI Kit Personalizado</h1>
        <p className="text-muted">Laboratorio de Componentes</p>
      </header>

      <div className="row g-4">
        {/* Columna Izquierda: Controles */}
        <div className="col-md-6">
          <section className="p-4 border rounded bg-light mb-4 shadow-sm">
            <h5 className="text-success fw-bold mb-3 border-bottom pb-2">
              Botones
            </h5>
            <div className="d-flex gap-2 flex-wrap">
              <BotonAzul titulo="Botón 1" accion={() => alert("Hola 1")} />
              <BotonGris titulo="Botón 2" accion={() => alert("Hola 2")} />
            </div>
          </section>

          <section className="p-4 border rounded bg-light mb-4 shadow-sm">
            <h5 className="text-success fw-bold mb-3 border-bottom pb-2">
              Inputs de Texto
            </h5>
            <div className="row g-3">
              <div className="col-sm-6">
                <InputNombre
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <InputApellido
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>
          </section>
          <section className="p-4 border rounded bg-light shadow-sm">
            <h5 className="text-danger fw-bold mb-3 border-bottom pb-2">
              Selección y Checkboxes
            </h5>
            <div className="mb-4">
              <SingleButtonTwo
                titulo="Opciones"
                option1="Opción 1"
                option2="Opción 2"
              />
              <div className="mt-2">
                <SplitButtonWithThreeOptions
                  titulo="Más opciones"
                  option1="A"
                  option2="B"
                  option3="C"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <CheckBoxSimple
                  label="Términos"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                />
                <CheckBoxSuccess
                  label="Promo"
                  checked={recibirPromociones}
                  onChange={(e) => setRecibirPromociones(e.target.checked)}
                />
              </div>
              <div className="col-6">
                <RadioOption1
                  label="Masculino"
                  name="g"
                  checked={genero === "m"}
                  onChange={() => setGenero("m")}
                />
                <RadioOption2
                  label="Femenino"
                  name="g"
                  checked={genero === "f"}
                  onChange={() => setGenero("f")}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Columna Derecha: Feedback y Cards */}
        <div className="col-md-6">
          <section className="p-4 border rounded bg-light mb-4 shadow-sm">
            <h5 className="text-primary fw-bold mb-3 border-bottom pb-2">
              Alertas
            </h5>
            <div className="vstack gap-2">
              <AlertDanger titulo="Error crítico detectado" />
              <AlertWithIcon
                titulo="Notificación importante"
                icono={exclamationIcon}
              />
            </div>
          </section>

          <section className="p-4 border rounded bg-light shadow-sm">
            <h5 className="text-primary fw-bold mb-3 border-bottom pb-2">
              Visualización (Cards)
            </h5>
            <div className="row g-3">
              <div className="col-12">
                <CardImage
                  texto="Mascota del proyecto"
                  imagen={imagenChuchito}
                />
              </div>
              <div className="col-12">
                <CardHeader
                  encabezado="Destacado"
                  titulo="Card de Acción"
                  texto="Esta tarjeta permite realizar acciones directas."
                  textoBoton="Ejecutar"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="row g-4 mt-2">
          {/* Sección de Badges y Progress */}
          <div className="col-md-7">
            <section className="p-4 border rounded bg-white shadow-sm h-100">
              <h5 className="text-primary fw-bold mb-4">Estado del Sistema</h5>

              <div className="mb-4">
                <h6 className="small text-muted mb-2">Categorías</h6>
                <BadgeRedondo texto="React" color="info" />
                <BadgeRedondo texto="Bootstrap" color="primary" />
                <BadgeStatus texto="Vite" status="secondary" />
                <BadgeStatus texto="Node" status="warning" />
              </div>

            
              <ProgressBarBasic
                label="Carga de Servidor"
                ahora={75}
                color="danger"
              />
              <ProgressBarBasic
                label="Espacio en Disco"
                ahora={40}
                color="primary"
              />

              <ProgressBarAnimated
                ahora={90}
                color="success"/>
            </section>
          </div>

          {/* Sección de Formulario */}
          <div className="col-md-5">
            <section className="p-4 border rounded bg-white shadow-sm h-100">
              <h5 className="text-primary fw-bold mb-4">Acceso de Usuario</h5>
              <UserForm onSubmit={() => alert("Formulario enviado, bro!")} />
            </section>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-8">
              <section className="p-5 border-0 rounded-4 bg-white shadow-lg">
                <div className="text-center mb-4">
                  <h2 className="text-primary fw-bold">📬 Contáctanos</h2>
                  <p className="text-muted">
                    Si tienes dudas, escribenos
                  </p>
                </div>

                <ContactForm
                  titulo="Contestamos lo antes posible"
                  descripcion="Cuéntanos sobre tu proyecto."
                  textoBoton="Ir al sitio"
                  alEnviar={(datos) =>
                    alert(
                      `Hola ${datos.nombre}, recibimos tu mensaje sobre ${datos.asunto}`,
                    )
                  }
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

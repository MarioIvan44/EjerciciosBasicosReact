import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ProfileCard from './components/Card/ProfileCard.jsx'
import imagen from "./assets/Hombre.jpg"

function App() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Ejercicio 2, Card con información</h2>
      
      <div className="d-flex flex-wrap justify-content-center gap-4">
         <ProfileCard nombre={"Mario Iván Vásquez Cruz"} 
         edad={18} 
         profesion={"Desarrollador de software"} 
         ciudad={"San Salvador"}
         fotoUrl={imagen}/> 
      </div>
    </div>
  );
}

export default App

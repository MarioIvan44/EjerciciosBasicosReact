import { useState } from 'react'
import ProfileCard from './components/Card'

import './App.css'

function App() {

  // Array de datos
  const perfiles = [
    {
      nombre: "Mario Vásquez",
      edad: 18,
      profesion: "Desarrollador Web",
      ciudad: "Madrid",
      fotoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      nombre: "Frida Navarro",
      edad: 18,
      profesion: "Diseñadora Gráfica",
      ciudad: "San Salvador",
      fotoUrl: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      nombre: "Juan Portillo",
      edad: 18,
      profesion: "Analista de Datos",
      ciudad: "Valencia",
      fotoUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]

  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4">

        {perfiles.map((perfil, index) => (
          <div key={index} className="col-md-6 col-lg-4 d-flex justify-content-center">
            <ProfileCard 
              nombre={perfil.nombre}
              edad={perfil.edad}
              profesion={perfil.profesion}
              ciudad={perfil.ciudad}
              fotoUrl={perfil.fotoUrl}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

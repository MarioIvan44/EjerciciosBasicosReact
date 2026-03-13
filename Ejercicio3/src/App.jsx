import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Inputs
import InputValor1 from './components/Inputs/InputValor1.jsx'
import InputValor2 from './components/Inputs/InputValor2.jsx'

//Botones
import BtnCalcular from './components/Boton/btnCalcular.jsx'

//Apartado de resultado
import Resultado from './components/Resultado/Resultado.jsx';
import { use, useState } from 'react';

function App() {
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [resultado, setResultado] = useState(null)

  const calcularMultiplicacion = () => {
    const resultado = Number(valor1) * Number(valor2);
    setResultado(resultado);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          {/* Card Principal */}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
              <h4 className="mb-0 fw-bold">Calculadora</h4>
            </div>
            
            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Primer Valor</label>
                <InputValor1 
                  placeholder="0"
                  value={valor1}
                  onChange={(e) => setValor1(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-muted">Segundo Valor</label>
                <InputValor2 
                  placeholder="0"
                  value={valor2}
                  onChange={(e) => setValor2(e.target.value)}
                />
              </div>

              <BtnCalcular 
                titulo="Hacer multiplicación" 
                accion={calcularMultiplicacion} 
              />

              {/* Apartado de Resultado */}
              <Resultado texto={"EL RESULTADO ES: "} valor={resultado}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App

import React from 'react';

const Resultado = ({ texto, valor, }) => {
  // Si no hay valor, el componente no renderiza nada
  if (valor === null || valor === undefined) return null;

  return (
    <div className="mt-4 p-3 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 text-center">
      <span className="text-muted small d-block">{texto}</span>
      <h2 className="text-success fw-bold mb-0">{valor}</h2>
    </div>
  );
};

export default Resultado;
import React from "react";

const CardHeader = ({encabezado, titulo, texto, linkBoton, textoBoton}) => {
  return (
    <div className="card">
      <div className="card-header">{encabezado}</div>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {texto}
        </p>
        <a href={linkBoton} className="btn btn-primary">
          {textoBoton}
        </a>
      </div>
    </div>
  );
};

export default CardHeader;

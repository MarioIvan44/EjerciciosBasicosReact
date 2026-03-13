import React from "react";

const AlertWithIcon = ({ titulo, icono }) => {
  return (
    <div className="alert alert-primary d-flex align-items-center" role="alert">
      
      {icono && (
        <img
          src={icono}
          alt="icono alerta"
          width="24"
          height="24"
          className="me-2"
        />
      )}

      <div>{titulo}</div>
    </div>
  );
};

export default AlertWithIcon;
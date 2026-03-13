import React from "react";

const ProfileCard = ({ nombre, edad, profesion, ciudad, fotoUrl }) => {
  // Imagen por defecto si no pasan una
  const defaultFoto = "https://via.placeholder.com/150";

  return (
    <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: "15px", maxWidth: "300px" }}>
      {/* Header de color sólido */}
      <div className="bg-primary" style={{ height: "80px" }}></div>
      
      <div className="card-body text-center pt-0">
        {/* Foto de perfil*/}
        <img 
          src={fotoUrl || defaultFoto} 
          alt={nombre}
          className="rounded-circle border border-4 border-white shadow-sm mb-3"
          style={{ width: "100px", height: "100px", marginTop: "-50px", objectFit: "cover" }}
        />
        
        <h5 className="fw-bold mb-0">{nombre}</h5>
        <p className="text-muted small mb-3">{profesion}</p>

        <hr className="my-3 opacity-10" />

        <div className="row text-center">
          <div className="col-6 border-end">
            <p className="small text-muted mb-0">Edad</p>
            <p className="fw-bold mb-0">{edad} años</p>
          </div>
          <div className="col-6">
            <p className="small text-muted mb-0">Ciudad</p>
            <p className="fw-bold mb-0">{ciudad}</p>
          </div>
        </div>
      </div>

      <div className="card-footer bg-light border-0 py-3 text-center">
        <button className="btn btn-outline-primary btn-sm px-4 rounded-pill fw-bold">
          Ver Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
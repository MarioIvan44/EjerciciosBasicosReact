import React from "react";

const UserForm = ({ onSubmit }) =>{
  return (
    <form className="row g-3" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <div className="col-12">
        <label className="form-label fw-bold small">Correo Electrónico</label>
        <input type="email" className="form-control form-control-sm" placeholder="ejemplo@correo.com" />
      </div>
      <div className="col-12">
        <label className="form-label fw-bold small">Contraseña</label>
        <input type="password" className="form-control form-control-sm" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-dark btn-sm w-100">Iniciar Sesión</button>
      </div>
    </form>
  );
}

export default UserForm
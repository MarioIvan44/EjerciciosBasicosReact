import React, { useState } from "react";

const ContactForm = ({ 
  titulo = "Contáctanos", 
  descripcion = "Envíanos un mensaje", 
  textoBoton = "Enviar Mensaje", 
  alEnviar 
}) => {
  // Estado local para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alEnviar) {
      alEnviar(formData); // Pasamos los datos al componente padre
    } else {
      console.log("Datos del form:", formData);
    }
  };

  return (
    <div className="p-2">
      <div className="mb-4">
        <h3 className="fw-bold">{titulo}</h3>
        <p className="text-muted small">{descripcion}</p>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label small fw-bold text-muted">Nombre Completo</label>
          <input 
            type="text" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control border-0 bg-light" 
            placeholder="Ej: Juan Pérez" 
            required
          />
        </div>
        
        <div className="col-md-6">
          <label className="form-label small fw-bold text-muted">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control border-0 bg-light" 
            placeholder="juan@correo.com" 
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Asunto</label>
          <select 
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className="form-select border-0 bg-light text-muted"
            required
          >
            <option value="">Selecciona una opción...</option>
            <option value="Soporte">Soporte Técnico</option>
            <option value="Ventas">Ventas / Cotización</option>
            <option value="Sugerencias">Sugerencias</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Mensaje</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="form-control border-0 bg-light" 
            rows="4" 
            placeholder="¿En qué podemos ayudarte, bro?"
            required
          ></textarea>
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary px-4 shadow-sm fw-bold">
            {textoBoton}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
import React from "react";

const CardImage = ({ texto, imagen }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img src={imagen} className="card-img-top" alt="ImagenEjemplo" />
      <div className="card-body">
        <p className="card-text">{texto}</p>
      </div>
    </div>
  );
};

export default CardImage;
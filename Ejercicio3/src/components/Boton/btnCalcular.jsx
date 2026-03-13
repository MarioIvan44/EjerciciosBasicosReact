import React from "react";

const BtnCalcular = ({titulo, accion}) => {
    return (
        <button className="btn btn-secondary w-100 fw-bold shadow-sm" onClick={accion}>{titulo}</button>
    )
}

export default BtnCalcular
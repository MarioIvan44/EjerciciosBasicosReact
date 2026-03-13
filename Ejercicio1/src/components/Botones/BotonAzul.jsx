import React from "react";

const BotonAzul = ({titulo, accion}) => {
    return (
        <button className="btn btn-primary" onClick={accion}>
            {titulo}
        </button>
    )
}

export default BotonAzul;
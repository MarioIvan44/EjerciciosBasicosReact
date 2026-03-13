import React from 'react'

const BotonGris = ({titulo, accion}) => {
    return (
        <button className="btn btn-secondary" onClick={accion}>
            {titulo}
        </button>
    )
}

export default BotonGris;
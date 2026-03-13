import React from "react";

const InputApellido = ({placeholder, valor, onChange}) => {
    return (
        <input
            type="text"
            className="form-control mb-4"
            placeholder={placeholder}
            value={valor}
            onChange={onChange} 
        />
    )
}

export default InputApellido;
import React from "react";

const InputNombre = ({placeholder, valor, onChange}) => {
    return (
        <input
            type="text"
            className="form-control mb-2"
            placeholder={placeholder}
            value={valor}
            onChange={onChange}
        />
    )
}

export default InputNombre;
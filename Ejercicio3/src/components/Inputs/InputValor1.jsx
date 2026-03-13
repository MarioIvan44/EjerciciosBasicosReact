import React from "react";

const InputValor1 = ({placeHolder, valor, onChange}) => {
    return (
        <input 
            type="number"
            className="form-control form-control-lg bg-light border-0"
            placeholder={placeHolder}
            value={valor}
            onChange={onChange}/>
    )
}

export default InputValor1
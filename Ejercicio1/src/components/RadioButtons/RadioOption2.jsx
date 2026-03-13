import React from "react";

const RadioOption2 = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default RadioOption2;
import React from "react";

const CheckBoxSimple = ({ label, checked, onChange }) => {
  return (
    <div className="form-check mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxSimple;
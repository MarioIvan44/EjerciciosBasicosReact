import React from "react";

const ProgressBarBasic = ({ label, ahora, color}) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="small fw-bold">{label}</span>
        <span className="small text-muted">{ahora}%</span>
      </div>
      <div className="progress" style={{ height: "10px" }}>
        <div 
          className={`progress-bar bg-${color}`} 
          role="progressbar" 
          style={{ width: `${ahora}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBarBasic
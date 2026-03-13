import React from "react"

const ProgressBarAnimated = ({ ahora, color}) =>{
  return (
    <div className="progress mb-3" style={{ height: "20px" }}>
      <div 
        className={`progress-bar progress-bar-striped progress-bar-animated bg-${color}`} 
        role="progressbar" 
        style={{ width: `${ahora}%` }}
      >
        {ahora}% Completo
      </div>
    </div>
  );
}

export default ProgressBarAnimated
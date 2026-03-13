import React from "react"

const AlertDanger = ({titulo}) => {
  return (
    <div className="alert alert-danger" role="alert">
      {titulo}
    </div>
  );
};

export default AlertDanger;

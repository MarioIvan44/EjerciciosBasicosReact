import React from "react";

const BadgeStatus =({ texto, status}) => {
  return (
    <span className="badge border text-dark fw-normal d-inline-flex align-items-center">
      <span className={`bg-${status} rounded-circle me-2`} style={{ width: '8px', height: '8px' }}></span>
      {texto}
    </span>
  );
}

export default BadgeStatus
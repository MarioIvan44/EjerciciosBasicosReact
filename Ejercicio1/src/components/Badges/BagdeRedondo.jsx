import React from "react";

const BadgeRedondo =({ texto, color }) =>{
  return <span className={`badge rounded-pill bg-${color} me-1`}>{texto}</span>;
}

export default BadgeRedondo
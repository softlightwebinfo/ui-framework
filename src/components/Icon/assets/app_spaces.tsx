import React from "react";

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <g>
      <rect width="6" height="2" x="4" y="4" className="euiIcon__fillSecondary"/>
      <rect width="6" height="2" x="22" y="4" className="euiIcon__fillSecondary"/>
      <rect width="6" height="2" x="4" y="22" className="euiIcon__fillSecondary"/>
      <path d="M0 14L14 14 14 0 0 0 0 14zM2 2L12 2 12 12 2 12 2 2zM18 0L18 14 32 14 32 0 18 0zM30 12L20 12 20 2 30 2 30 12zM0 32L14 32 14 18 0 18 0 32zM2 20L12 20 12 30 2 30 2 20zM18 32L32 32 32 18 18 18 18 32zM20 20L30 20 30 30 20 30 20 20z"/>
      <rect width="6" height="2" x="22" y="22" className="euiIcon__fillSecondary"/>
    </g>
  </svg>
);

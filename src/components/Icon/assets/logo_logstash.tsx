import React from 'react';

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <g transform="translate(3)">
      <polygon fill="#3EBEB0" points="16 32 27 32 27 20 16 20"/>
      <path fill="#FEC514" d="M1,0 L0,0 L0,20 L13,20 L13,12 C13,5.373 7.627,0 1,0"/>
      <path className="euiIcon__fillNegative" d="M0,20 L0,20 C0,26.627 5.373,32 12,32 L13,32 L13,20 L0,20 Z"/>
    </g>
  </svg>
);

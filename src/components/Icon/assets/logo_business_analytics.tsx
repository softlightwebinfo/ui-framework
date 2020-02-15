import React from 'react';

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd">
      <path fill="#00BFB3" d="M0,22 C0,27.522 4.478,32 10,32 L10,12 C4.478,12 0,16.478 0,22"/>
      <path className="euiIcon__fillNegative" d="M10,12 L10,22 L20,22 C20,16.478 15.522,12 10,12"/>
      <path fill="#F04E98" d="M10,0 L10,9 C17.168,9 23,14.832 23,22 L32,22 C32,9.85 22.15,0 10,0"/>
    </g>
  </svg>
);

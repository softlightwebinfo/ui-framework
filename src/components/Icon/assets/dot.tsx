import React from "react";

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <circle id="dot-a" cx="8" cy="8" r="4"/>
    </defs>
    <g>
      <use xlinkHref="#dot-a"/>
    </g>
  </svg>
);

import React from "react";

export default ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path id="boxes_horizontal-a" d="M0,6 L4,6 L4,10 L0,10 L0,6 Z M1,7 L1,9 L3,9 L3,7 L1,7 Z M6,6 L10,6 L10,10 L6,10 L6,6 Z M7,7 L7,9 L9,9 L9,7 L7,7 Z M12,6 L16,6 L16,10 L12,10 L12,6 Z M13,9 L15,9 L15,7 L13,7 L13,9 Z"/>
    </defs>
    <g>
      <use fillRule="nonzero" xlinkHref="#boxes_horizontal-a"/>
    </g>
  </svg>
);

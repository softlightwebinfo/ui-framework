import React from "react";

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path id="boxes_vertical-a" d="M7,1 L7,3 L9,3 L9,1 L7,1 Z M6,0 L10,0 L10,4 L6,4 L6,0 Z M6,6 L10,6 L10,10 L6,10 L6,6 Z M7,7 L7,9 L9,9 L9,7 L7,7 Z M6,12 L10,12 L10,16 L6,16 L6,12 Z M7,13 L7,15 L9,15 L9,13 L7,13 Z"/>
    </defs>
    <g>
      <use xlinkHref="#boxes_vertical-a"/>
    </g>
  </svg>
);

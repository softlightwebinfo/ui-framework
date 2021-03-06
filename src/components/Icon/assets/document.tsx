import React from "react";

export default ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path id="document-a" d="M10.8,0 L2,0 C1.448,0 1,0.448 1,1 L1,15 C1,15.552 1.448,16 2,16 L14,16 C14.552,16 15,15.552 15,15 L15,4.429 C15,4.173 14.902,3.926 14.726,3.74 L11.526,0.312 C11.337,0.113 11.074,0 10.8,0 M14,5 L14,15 L2,15 L2,1 L10,1 L10,4.5 C10,4.776 10.224,5 10.5,5 L14,5 Z"/>
    </defs>
    <g>
      <use xlinkHref="#document-a"/>
    </g>
  </svg>
);

import React from "react";

export default ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path id="arrow_left-a"
            d="M13.0688508,5.15725038 L8.38423975,9.76827428 C8.17054415,9.97861308 7.82999214,9.97914095 7.61576025,9.76827428 L2.93114915,5.15725038 C2.7181359,4.94758321 2.37277319,4.94758321 2.15975994,5.15725038 C1.94674669,5.36691756 1.94674669,5.70685522 2.15975994,5.9165224 L6.84437104,10.5275463 C7.48517424,11.1582836 8.51644979,11.1566851 9.15562896,10.5275463 L13.8402401,5.9165224 C14.0532533,5.70685522 14.0532533,5.36691756 13.8402401,5.15725038 C13.6272268,4.94758321 13.2818641,4.94758321 13.0688508,5.15725038 Z"/>
    </defs>
    <g fillRule="evenodd">
      <use fillRule="nonzero" transform="rotate(90 8 8)" xlinkHref="#arrow_left-a"/>
    </g>
  </svg>
);

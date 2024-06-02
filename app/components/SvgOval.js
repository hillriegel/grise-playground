import React from 'react';

const SvgOval = (props) => {
  return (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs> 
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
    <path fill="url(#sw-gradient)" d="M19.9,-24.2C26.4,-18.3,32.6,-12.6,34.9,-5.3C37.2,2,35.6,10.8,31.6,18.7C27.6,26.6,21.2,33.6,12.7,38.2C4.2,42.8,-6.5,44.9,-15.4,41.8C-24.4,38.8,-31.7,30.6,-34.6,21.8C-37.6,12.9,-36.2,3.4,-32.8,-4.1C-29.5,-11.6,-24.1,-17,-18.3,-23C-12.5,-29.1,-6.3,-35.7,0.2,-36C6.7,-36.2,13.5,-30.2,19.9,-24.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path>
    </svg>
  );
};

export default SvgOval;

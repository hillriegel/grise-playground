import React from 'react';

const SvgBlob = (props) => {
  return (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs> 
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
            <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
        </linearGradient>
    </defs>
<path fill="url(#sw-gradient)" d="M25.5,0.1C25.5,13.2,12.8,26.4,-0.7,26.4C-14.1,26.4,-28.2,13.2,-28.2,0.1C-28.2,-13,-14.1,-25.9,-0.7,-25.9C12.8,-25.9,25.5,-13,25.5,0.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
</svg>
  );
};

export default SvgBlob;


import React from 'react';

function SpeedIcon({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30">
      <mask
        id="mask0_145_115"
        style={{ maskType: 'alpha' }}
        width="30"
        height="30"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill={fill || '#fff'} d="M0 0H30V30H0z" />
      </mask>
      <g mask="url(#mask0_145_115)">
        <path
          fill={fill || '#fff'}
          d="M13.063 19.375c.5.5 1.145.745 1.937.734.792-.01 1.375-.297 1.75-.859l7-10.5-10.5 7c-.563.375-.86.948-.89 1.719-.032.77.203 1.406.703 1.906zM6.375 25c-.438 0-.854-.104-1.25-.313a2.371 2.371 0 01-.938-.875A12.41 12.41 0 012.5 17.5c.001-1.728.33-3.348.986-4.859a12.724 12.724 0 012.688-3.969 12.686 12.686 0 013.983-2.687A12.102 12.102 0 0115 5c1.23 0 2.412.172 3.547.515 1.136.344 2.203.86 3.203 1.548l-2.375 1.5A9.55 9.55 0 0015 7.5c-2.77 0-5.13.974-7.077 2.921C5.974 12.37 5 14.73 5 17.5c0 .875.12 1.74.359 2.594.24.854.579 1.656 1.016 2.406h17.25a9.137 9.137 0 001.047-2.469c.219-.854.328-1.74.328-2.656 0-.75-.088-1.48-.265-2.188a9.098 9.098 0 00-.797-2.062l1.5-2.375c.625.98 1.12 2.02 1.485 3.125.364 1.104.556 2.25.577 3.438a12.216 12.216 0 01-.406 3.406 12.937 12.937 0 01-1.282 3.093c-.229.375-.541.667-.937.875a2.648 2.648 0 01-1.25.313H6.375z"
        />
      </g>
    </svg>
  );
}

export default SpeedIcon;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  number: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
};

const defaultProps = {
  width: null,
  height: null,
  number: null,
};

const numbers = {
  1: (
    <g>
      <path d="M12.7,9.2l-1.5,0.4l-0.3-1.2l2.3-0.7h1v8.5h-1.5V9.2z" />
    </g>
  ),
  2: (
    <g>
      <path
        d="M9.8,14.9l2.9-2.5c1.2-1,1.6-1.5,1.6-2.3c0-0.8-0.6-1.3-1.4-1.3c-0.8,0-1.3,0.4-1.9,1.3l-1-0.8c0.8-1.1,1.6-1.8,3.1-1.8
		c1.6,0,2.8,1,2.8,2.5v0c0,1.3-0.7,2-2.2,3.3l-1.7,1.4h4v1.3H9.8V14.9z"
      />
    </g>
  ),
  3: (
    <g>
      <path
        d="M9.7,14.8l1-1c0.6,0.7,1.3,1.1,2.2,1.1c0.8,0,1.5-0.5,1.5-1.3v0c0-0.8-0.8-1.3-1.9-1.3h-0.7l-0.2-0.9L13.8,9h-3.6V7.7h5.6
		v1.1l-2.3,2.4c1.3,0.2,2.5,0.8,2.5,2.4v0c0,1.5-1.2,2.7-2.9,2.7C11.5,16.3,10.4,15.6,9.7,14.8z"
      />
    </g>
  ),
  4: (
    <g>
      <path d="M13.8,14.2H9.5l-0.3-1.1l4.7-5.5h1.3V13h1.2v1.2h-1.2v1.9h-1.4V14.2z M13.8,13V9.7L11,13H13.8z" />
    </g>
  ),
  5: (
    <g>
      <path
        d="M9.8,15l0.9-1.1c0.7,0.6,1.4,1,2.2,1c1,0,1.7-0.6,1.7-1.5v0c0-0.9-0.7-1.4-1.7-1.4c-0.6,0-1.1,0.2-1.5,0.4l-0.9-0.6
		l0.2-4.1h5V9h-3.7l-0.1,2c0.4-0.1,0.8-0.2,1.3-0.2c1.6,0,2.9,0.9,2.9,2.6v0c0,1.7-1.2,2.8-3.1,2.8C11.6,16.3,10.5,15.7,9.8,15z"
      />
    </g>
  ),
  6: (
    <g>
      <path
        d="M10.7,15.4c-0.6-0.6-1-1.5-1-3.2v0c0-2.6,1.2-4.6,3.6-4.6c1.1,0,1.8,0.3,2.6,0.9L15,9.6c-0.6-0.5-1.1-0.7-1.8-0.7
		c-1.2,0-1.9,1.1-2,2.7c0.4-0.4,1-0.8,2-0.8c1.6,0,2.9,1,2.9,2.6v0c0,1.7-1.4,2.9-3.1,2.9C12,16.3,11.3,15.9,10.7,15.4z M14.7,13.5
		L14.7,13.5c0-0.9-0.7-1.5-1.7-1.5s-1.7,0.7-1.7,1.5v0c0,0.9,0.7,1.5,1.7,1.5C14,15,14.7,14.3,14.7,13.5z"
      />
    </g>
  ),
  7: (
    <g>
      <path d="M14.3,9h-4.2V7.7H16v1.1l-3.8,7.3h-1.7L14.3,9z" />
    </g>
  ),
  8: (
    <g>
      <path
        d="M9.7,13.8L9.7,13.8c0-1,0.6-1.7,1.5-2.1c-0.7-0.4-1.2-0.9-1.2-1.9v0c0-1.3,1.2-2.3,2.9-2.3c1.7,0,2.9,1,2.9,2.3v0
		c0,0.9-0.5,1.5-1.2,1.9c0.9,0.4,1.5,1,1.5,2v0c0,1.5-1.4,2.4-3.2,2.4S9.7,15.3,9.7,13.8z M14.7,13.7L14.7,13.7
		c0-0.8-0.8-1.3-1.8-1.3c-1,0-1.8,0.5-1.8,1.3v0c0,0.7,0.7,1.3,1.8,1.3C14,15,14.7,14.4,14.7,13.7z M14.4,10L14.4,10
		c0-0.7-0.6-1.2-1.5-1.2c-0.9,0-1.5,0.5-1.5,1.2v0c0,0.7,0.6,1.2,1.5,1.2C13.8,11.3,14.4,10.8,14.4,10z"
      />
    </g>
  ),
  9: (
    <g>
      <path
        d="M9.9,15.2l0.8-1.1c0.6,0.5,1.2,0.8,1.9,0.8c1.2,0,2-1.1,2-2.6c-0.4,0.5-1.1,0.9-2,0.9c-1.8,0-3-1-3-2.7v0
		c0-1.6,1.3-2.9,3.1-2.9c1.1,0,1.7,0.3,2.3,0.9c0.6,0.6,1,1.5,1,3.2v0c0,2.7-1.3,4.6-3.6,4.6C11.4,16.3,10.6,15.8,9.9,15.2z
		 M14.6,10.4L14.6,10.4c0-0.9-0.7-1.6-1.8-1.6c-1,0-1.7,0.7-1.7,1.6v0c0,0.9,0.7,1.5,1.7,1.5C14,11.9,14.6,11.2,14.6,10.4z"
      />
    </g>
  ),
  0: (
    <g>
      <path
        d="M9.3,11.9L9.3,11.9c0-2.4,1.5-4.4,3.7-4.4c2.2,0,3.6,1.9,3.6,4.3v0c0,2.4-1.5,4.3-3.7,4.3C10.7,16.3,9.3,14.3,9.3,11.9z
		 M15.1,11.9L15.1,11.9c0-1.7-0.9-3-2.1-3c-1.3,0-2.1,1.3-2.1,3v0c0,1.7,0.8,3,2.1,3C14.2,14.9,15.1,13.6,15.1,11.9z"
      />
    </g>
  ),
};

const getNumber = number => numbers[number] || null;

function badge({ height, width, number }) {
  return <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.8 32.2"
    // style="enable-background:new 0 0 25.8 32.2;"
    preserveAspectRatio="xMinYMid meet"
    style={{ width, height }}
  >
    <g id="first_3_" transform="translate(-50.71)">
      <g>
        <g id="Group_378_3_" transform="translate(54.711 3.142)">
          <g id="Group_377_3_" transform="translate(0)">
            <path
              id="Path_624_3_"
              d="M17.8,7.8c-0.7-4.9-5.2-8.4-10.1-7.7C3.7,0.6,0.6,3.8,0,7.8C0,8,0.2,8.3,0.4,8.3s0.5-0.1,0.5-0.4
            C1.5,3.5,5.6,0.4,10,1c3.6,0.5,6.4,3.3,6.9,6.9c0,0.2,0.2,0.4,0.5,0.4c0,0,0,0,0.1,0C17.7,8.3,17.9,8.1,17.8,7.8
            C17.8,7.8,17.8,7.8,17.8,7.8z"
            />
          </g>
        </g>
        <g id="Group_380_3_" transform="translate(54.699 12.719)">
          <g id="Group_379_3_">
            <path
              id="Path_625_3_"
              d="M17.5,0c-0.3,0-0.5,0.2-0.5,0.4c-0.6,4.4-4.6,7.5-9,7c-3.7-0.5-6.5-3.3-7-7C0.9,0.2,0.7,0,0.4,0
            S0,0.3,0,0.5C0.6,5.5,5.1,9,10.1,8.3c4.1-0.5,7.3-3.7,7.8-7.8C17.9,0.3,17.7,0,17.5,0z"
            />
          </g>
        </g>
      </g>
      <g id="Group_384_3_" transform="translate(50.71)">
        <g id="Group_383_3_" transform="translate(0)">
          <path
            id="Path_627_3_"
            d="M25.7,27l-4.3-6.7c1.1-0.2,1.8-1.3,1.6-2.4c-0.1-0.5,0.2-1,0.6-1.2c1-0.5,1.4-1.7,0.9-2.7
          c0-0.1-0.1-0.1-0.1-0.2c-0.3-0.4-0.2-0.9,0.1-1.3c0.8-0.8,0.7-2.1-0.1-2.9c0,0-0.1-0.1-0.1-0.1c-0.4-0.3-0.5-0.8-0.4-1.3
          c0.4-1-0.1-2.2-1.2-2.6c-0.1,0-0.1,0-0.2-0.1c-0.5-0.1-0.8-0.6-0.8-1c0-1.1-0.9-2-2-2c-0.1,0-0.1,0-0.2,0c-0.5,0-0.9-0.2-1.1-0.7
          c-0.4-1-1.6-1.6-2.6-1.2c-0.1,0-0.1,0-0.2,0.1c-0.4,0.2-1,0.1-1.3-0.2c-0.8-0.8-2-0.9-2.9-0.1c0,0-0.1,0.1-0.1,0.1
          c-0.3,0.4-0.8,0.5-1.3,0.2c-1-0.5-2.2-0.1-2.7,0.9c0,0.1-0.1,0.1-0.1,0.2C7.2,2.4,6.7,2.7,6.2,2.7C5.1,2.6,4.1,3.4,4,4.5
          c0,0.1,0,0.1,0,0.2c0,0.5-0.3,0.9-0.8,1C2.2,6,1.5,7.2,1.8,8.2c0,0.1,0,0.1,0.1,0.2c0.2,0.5,0,1-0.4,1.3
          c-0.9,0.7-1.1,1.9-0.4,2.8c0,0,0.1,0.1,0.1,0.1c0.3,0.4,0.4,0.9,0.1,1.3c-0.6,1-0.3,2.2,0.7,2.8c0.1,0,0.1,0.1,0.2,0.1
          C2.6,17,2.9,17.5,2.8,18c-0.2,1.1,0.5,2.1,1.6,2.4L0.1,27c-0.2,0.4-0.1,0.8,0.2,1c0.1,0.1,0.3,0.1,0.5,0.1L5,27.8l1.4,3.9
          C6.5,32,6.7,32.2,7,32.2c0,0,0.1,0,0.1,0c0.3,0,0.5-0.1,0.6-0.3l5.2-8.1l5.2,8.1c0.1,0.2,0.4,0.3,0.6,0.3c0,0,0.1,0,0.1,0
          c0.3,0,0.5-0.2,0.6-0.5l1.4-3.9l4.2,0.4c0.4,0,0.8-0.3,0.8-0.7C25.9,27.3,25.8,27.1,25.7,27z M1.1,27.2l4.1-6.5
          c0.2,0.2,0.3,0.3,0.3,0.6c0.1,0.4,0.3,0.8,0.6,1.1l-3,4.7L1.1,27.2z M6,27.9l-0.2-0.5C5.7,27,5.4,26.8,5,26.9l-0.7,0.1l2.6-4.1
          c0.4,0.1,0.8,0.1,1.2,0c0.3-0.1,0.7,0,0.9,0.2L6,27.9z M7.1,31.1L6.4,29l3.3-5.2c0.5,0.4,1.2,0.6,1.8,0.5L7.1,31.1z M13.2,22.7
          C13.2,22.7,13.2,22.7,13.2,22.7c-0.2,0-0.2,0-0.3,0s-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.3,0-0.7,0.2-0.9,0.4
          c-0.5,0.4-1.2,0.3-1.5-0.2c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2l0,0c-0.5-0.6-1.4-0.9-2.1-0.7c-0.6,0.2-1.2-0.2-1.3-0.7
          c0,0,0-0.1,0-0.1c-0.1-0.6-0.5-1.2-1.1-1.5c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.1-0.6-0.2c-0.6-0.1-1-0.6-1-1.2c0,0,0-0.1,0-0.1
          c0.2-0.9-0.3-1.8-1.1-2.2c-0.5-0.3-0.8-0.9-0.5-1.5c0,0,0-0.1,0-0.1C2.7,13.7,2.6,12.7,2,12c-0.4-0.4-0.4-1.1,0.1-1.5
          c0,0,0.1,0,0.1-0.1c0.7-0.5,1-1.5,0.7-2.4C2.6,7.5,2.8,6.9,3.4,6.7c0,0,0.1,0,0.1,0C4.4,6.4,5,5.6,5,4.7c0-0.6,0.5-1.1,1.1-1.1
          c0,0,0.1,0,0.1,0c0.9,0.1,1.7-0.4,2.1-1.3c0.2-0.6,0.8-0.8,1.4-0.6c0,0,0.1,0,0.1,0c0.8,0.4,1.8,0.2,2.4-0.4
          c0.4-0.4,1.1-0.5,1.5-0.1c0,0,0,0,0.1,0.1c0.6,0.7,1.6,0.8,2.4,0.4c0.5-0.3,1.2,0,1.5,0.5c0,0,0,0.1,0,0.1
          c0.3,0.8,1.2,1.4,2.1,1.3c0.6-0.1,1.1,0.4,1.2,1c0,0,0,0.1,0,0.1c0,0.9,0.6,1.7,1.5,1.9c0.6,0.2,0.9,0.8,0.7,1.3c0,0,0,0.1,0,0.1
          c-0.3,0.8-0.1,1.8,0.7,2.4c0.5,0.4,0.6,1,0.2,1.5c0,0,0,0.1-0.1,0.1c-0.6,0.7-0.7,1.7-0.2,2.4c0.3,0.5,0.2,1.2-0.4,1.5
          c0,0-0.1,0-0.1,0c-0.8,0.4-1.3,1.3-1.1,2.2c0.1,0.6-0.3,1.2-0.9,1.3c0,0-0.1,0-0.1,0c-0.2,0-0.4,0.1-0.6,0.2c0,0-0.1,0-0.1,0
          c-0.6,0.3-1,0.8-1.1,1.5c-0.1,0.6-0.7,1-1.3,0.9c0,0-0.1,0-0.1,0c-0.8-0.2-1.6,0.1-2.1,0.7l0,0c0,0.1-0.1,0.1-0.1,0.2
          c-0.3,0.5-1,0.7-1.5,0.4c0,0-0.1,0-0.1-0.1C13.9,22.9,13.6,22.8,13.2,22.7L13.2,22.7z M18.7,31.1l-4.4-6.8c0.6,0.2,1.3,0,1.8-0.5
          l3.3,5.2L18.7,31.1z M20.8,26.9c-0.3,0-0.7,0.2-0.8,0.5l-0.2,0.5l-3-4.8c0.3-0.2,0.6-0.3,0.9-0.2c0.4,0.1,0.8,0.1,1.2,0l2.6,4.1
          L20.8,26.9z M22.7,27l-3-4.7c0.3-0.3,0.5-0.7,0.6-1.1c0-0.2,0.1-0.4,0.3-0.6l4.1,6.5L22.7,27z"
          />
        </g>
      </g>
    </g>
    {getNumber(number)}
  </svg>
}

badge.defaultProps = defaultProps;
badge.propTypes = propTypes;

export default badge;

import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_727_4705)">
      <circle cx={19} cy={17} r={15} fill="white" />
    </g>
    <g opacity={0.6}>
      <path
        d="M23.0013 17.2674C23.0017 17.4427 22.9203 17.6125 22.7713 17.7474L17.7713 22.2474C17.6015 22.4006 17.3576 22.4969 17.0932 22.5152C16.8287 22.5335 16.5655 22.4722 16.3613 22.3449C16.157 22.2176 16.0286 22.0347 16.0042 21.8364C15.9799 21.6381 16.0615 21.4406 16.2313 21.2874L20.7113 17.2674L16.3913 13.2474C16.3082 13.1707 16.2462 13.0825 16.2087 12.9877C16.1713 12.8929 16.1592 12.7936 16.1731 12.6953C16.1871 12.597 16.2268 12.5018 16.2899 12.4151C16.3531 12.3283 16.4385 12.2518 16.5413 12.1899C16.6441 12.1213 16.7647 12.0692 16.8956 12.0371C17.0264 12.005 17.1647 11.9936 17.3018 12.0034C17.4389 12.0133 17.5717 12.0443 17.6921 12.0944C17.8125 12.1446 17.9177 12.2129 18.0013 12.2949L22.8313 16.7949C22.9568 16.9338 23.0166 17.1001 23.0013 17.2674Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_727_4705"
        x={0}
        y={0}
        width={38}
        height={38}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_727_4705"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_727_4705"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;

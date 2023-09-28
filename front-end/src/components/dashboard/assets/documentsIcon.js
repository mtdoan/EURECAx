import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 10.9375L13.4162 14C13.2269 14.142 12.9966 14.2188 12.76 14.2188H4.375V8.75C4.375 8.45992 4.49023 8.18172 4.69535 7.9766C4.90047 7.77148 5.17867 7.65625 5.46875 7.65625H12.76C12.9966 7.65625 13.2269 7.73301 13.4162 7.875L17.5 10.9375Z"
      fill="#1C1C1C"
      fillOpacity={0.1}
    />
    <path
      d="M29.5312 9.84375H17.865L14.0725 7C13.6933 6.71707 13.2331 6.56367 12.76 6.5625H5.46875C4.88859 6.5625 4.33219 6.79297 3.92195 7.2032C3.51172 7.61344 3.28125 8.16984 3.28125 8.75V27.3438C3.28125 27.9239 3.51172 28.4803 3.92195 28.8905C4.33219 29.3008 4.88859 29.5312 5.46875 29.5312H29.5312C30.1114 29.5312 30.6678 29.3008 31.078 28.8905C31.4883 28.4803 31.7188 27.9239 31.7188 27.3438V12.0312C31.7188 11.4511 31.4883 10.8947 31.078 10.4845C30.6678 10.0742 30.1114 9.84375 29.5312 9.84375ZM5.46875 8.75H12.76L15.6775 10.9375L12.76 13.125H5.46875V8.75ZM29.5312 27.3438H5.46875V15.3125H12.76C13.2331 15.3113 13.6933 15.1579 14.0725 14.875L17.865 12.0312H29.5312V27.3438Z"
      fill="#1C1C1C"
    />
  </svg>
);
export default SVGComponent;
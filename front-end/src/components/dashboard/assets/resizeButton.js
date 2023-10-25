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
        <g filter="url(#filter0_d_805_4963)">
            <circle cx={19} cy={17} r={15} fill="white" />
        </g>
        <g opacity={0.6}>
            <path
                d="M15 17C14.9995 16.8247 15.0809 16.6549 15.23 16.52L20.23 12.02C20.3997 11.8668 20.6436 11.7705 20.908 11.7522C21.1725 11.7339 21.4358 11.7952 21.64 11.9225C21.8442 12.0498 21.9726 12.2327 21.997 12.431C22.0214 12.6293 21.9397 12.8268 21.77 12.98L17.29 17L21.61 21.02C21.693 21.0967 21.7551 21.185 21.7925 21.2797C21.8299 21.3745 21.842 21.4738 21.8281 21.5721C21.8141 21.6704 21.7744 21.7656 21.7113 21.8523C21.6481 21.9391 21.5627 22.0156 21.46 22.0775C21.3571 22.1462 21.2365 22.1982 21.1056 22.2303C20.9748 22.2624 20.8365 22.2738 20.6994 22.264C20.5623 22.2541 20.4295 22.2231 20.3091 22.173C20.1888 22.1228 20.0835 22.0546 20 21.9725L15.17 17.4725C15.0445 17.3337 14.9846 17.1673 15 17Z"
                fill="black"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_805_4963"
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
                    result="effect1_dropShadow_805_4963"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_805_4963"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export default SVGComponent;

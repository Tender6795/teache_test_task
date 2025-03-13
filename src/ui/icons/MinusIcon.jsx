import React from "react";

export const MinusIcon = ({ color = "#FF827A", width = 25,height=3 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.29102 1.5H22.7077"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

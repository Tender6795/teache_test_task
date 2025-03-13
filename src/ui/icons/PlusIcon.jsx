import React from "react"

export const PlusIcon = ({ color = "#FF827A", size = 35 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 35 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.5 7.2915V27.7082'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.29102 17.5H27.7077'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

import * as React from "react"

export const CalendarIcon = ({ color = "#554DF1", ...props }) => (
  <svg
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <g opacity={0.3}>
      <path d='M6.61112 9H4.72223V11H6.61112V9Z' fill={color} />
      <path d='M10.3872 9H8.49829V11H10.3872V9Z' fill={color} />
      <path d='M14.1675 9H12.2786V11H14.1675V9Z' fill={color} />
      <path d='M6.61112 13H4.72223V15H6.61112V13Z' fill={color} />
      <path d='M10.3872 13H8.49829V15H10.3872V13Z' fill={color} />
      <path d='M14.1675 13H12.2786V15H14.1675V13Z' fill={color} />
      <path
        d='M17.9444 2H16.0556V1C16.0556 0.4 15.6778 0 15.1111 0C14.5444 0 14.1667 0.4 14.1667 1V2H4.72222V1C4.72222 0.4 4.34444 0 3.77778 0C3.21111 0 2.83333 0.4 2.83333 1V2H0.944444C0.377778 2 0 2.4 0 3V19C0 19.6 0.377778 20 0.944444 20H17.9444C18.4167 20 18.8889 19.6 18.8889 19V3C18.8889 2.4 18.4167 2 17.9444 2ZM17 18H1.88889V6H17V18Z'
        fill={color}
      />
    </g>
  </svg>
)

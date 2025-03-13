import React from "react"

export const QuestionMarkIcon = ({
  size = 30,
  color = "#E2E1F1",
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-circle-help'
      {...props}>
      <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01' />
    </svg>
  )
}

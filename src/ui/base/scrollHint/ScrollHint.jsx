import React from "react"
import styled from "styled-components"
import { themeColor } from "../../theme"
import { HelperText } from "../helperText/HelperText"

const ScrollHint = () => {
  return (
    <ScrollHintContainer>
      <div>
        <HelperText color='blue'>Scroll</HelperText>
        <ArrowDown />
      </div>
    </ScrollHintContainer>
  )
}

const ScrollHintContainer = styled.div`
  font-family: Montserrat, sans-serif;
  position: fixed;
  right: 10px;
  @media (min-width: 768px) {
    right: 20px;
  }
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  color: ${themeColor("blue")};
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20px;
    height: 80px;
    padding-top: 15px;
    border-radius: 2px;
    border: none;

    @media (min-width: 768px) {
      border: 1px solid ${themeColor("blue")};
    }

    gap: 1rem;
    & > label {
      transform: rotate(90deg);
      font-weight: 700;
    }
  }
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

const ArrowDown = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}>
    <path d='M12 5v14' />
    <path d='m19 12-7 7-7-7' />
  </svg>
)

export default ScrollHint

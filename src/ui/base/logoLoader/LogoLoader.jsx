import React from "react"
import styled from "styled-components"
import { LogoIcon } from "../../icons/LogoIcon"

export const LogoLoader = () => {
  return (
    <LogoContainer>
      <LogoIcon />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;

  & > svg {
    animation: ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    width: 250px;
    height: auto;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

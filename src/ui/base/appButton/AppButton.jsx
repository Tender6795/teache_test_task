import React from "react"
import styled from "styled-components"
import { themeColor } from "../../theme"
import { themeFontSize } from "../../theme/index"

export const AppButton = ({ children, ...props }) => {
  return <AppButtonStyle {...props}>{children}</AppButtonStyle>
}

export const AppButtonStyle = styled.button`
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  padding-inline: 1.5rem;
  border-radius: 8px;
  height: ${({ height }) => height ?? "51px"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) =>
    variant ? themeColor("border") : themeColor("pink")};
  color: ${({ variant }) =>
    variant ? themeColor("blue") : themeColor("white")};
  border-color: transparent;
  border-width: 0px;
  font-size: ${themeFontSize("regular")};
  font-weight: 500;
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  &:hover {
    opacity: 0.6;
  }
`

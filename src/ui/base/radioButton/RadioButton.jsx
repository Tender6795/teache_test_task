import React from "react"
import styled from "styled-components"
import { themeColor } from "../../theme"
import { themeFontSize } from "../../theme/index"

export const RadioButton = ({ selected, children, ...props }) => {
  return (
    <RadioButtonStyle selected={selected} {...props}>
      {children}
    </RadioButtonStyle>
  )
}

export const RadioButtonStyle = styled.button`
  cursor: pointer;
  padding-inline: 1.5rem;
  border-radius: 5px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) =>
    selected ? themeColor("border") : themeColor("white")};
  color: ${themeColor("blue")};
  border-color: ${({ selected }) =>
    selected ? themeColor("blue") : themeColor("border")};
  border-width: 1px;
  border-style: solid;
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

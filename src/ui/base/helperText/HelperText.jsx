import React from "react"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

export const HelperText = ({ children, ...props }) => {
  return <HelperTextStyled {...props}>{children}</HelperTextStyled>
}

const HelperTextStyled = styled.label`
  font-family: Montserrat, sans-serif;
  text-align: ${({ centerMobile }) => (centerMobile ? "center" : "left")};
  color: ${({ color = "txt" }) => themeColor(color)};
  font-size: ${({ sizeMobile = "small", customMobileSize }) =>
    customMobileSize ? customMobileSize : themeFontSize(sizeMobile)};
  font-weight: ${({ weight }) => weight || 500};
  @media (min-width: 768px) {
    font-size: ${({ size = "regular" }) => themeFontSize(size)};
    text-align: ${({ center }) => (center ? "center" : "left")};
  }
`

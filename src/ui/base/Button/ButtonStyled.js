import styled, { css } from "styled-components"
import {
  convertHexToRGBA,
  defaultThemeColors,
  fonts,
  themeColor,
  themeFontSize,
} from "ui/theme"

export const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes["regular"]};
  border-radius: 10px;
  background: ${({ theme, background, transparent }) =>
    background && !transparent
      ? theme.colors[background]
      : transparent
      ? "transparent"
      : theme.colors.primary};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 60px;
  border: 1px solid transparent;
  ${({ transparent, theme }) =>
    transparent && `border-color: ${theme.colors["blue"]}`};
  font-weight: 500;
  padding: 12px 20px;
  ${({ center }) => center && "margin: 0 auto;"};
  transition: box-shadow 0.2s;
  svg {
    margin-right: 10px;
    width: 31px;
    min-width: 31px;
  }
  &:hover {
    box-shadow: 0 0 20px 0 rgba(25, 29, 58, 0.17);
  }
  @media (max-width: 1200px) {
    svg {
      min-width: 20px;
      width: 20px;
    }
  }
`

export const ButtonNeutral = styled.button`
  all: unset;
  padding: 12px 35px;
  border-radius: 5px;
  background-color: ${({ bgColor = "buttonBgNeutral" }) => themeColor(bgColor)};
  color: ${({ color = "txt" }) => themeColor(color)};
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ hasBorder }) =>
    hasBorder
      ? `
        border-width: 2px;
        border-style: solid;
        border-color:rgba(25, 29, 58, 0.4);
      `
      : `
        border: none;
      `};
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

// Primary button styleVariant
const variantStyles = (variant = "primary") => {
  const blue = defaultThemeColors.blue
  const pink = defaultThemeColors.pink
  const white = defaultThemeColors.white

  return {
    primary: css`
      background-color: ${blue};
      color: ${white};
      border: none;
    `,
    outline: css`
      background-color: ${white};
      color: ${blue};
      border: 1px solid ${blue};
      &:hover {
        background-color: ${convertHexToRGBA(blue, 0.1)};
      }
    `,
    destructive_fade: css`
      background-color: ${convertHexToRGBA(pink, 0.1)};
      color: ${pink};
      border: none;
    `,
    primary_fade: css`
      background-color: ${convertHexToRGBA(blue, 0.1)};
      color: ${blue};
      border: none;
    `,
    icon_rounded: css`
      width: 43px;
      height: 43px;
      border-radius: 99px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${blue};
      color: ${white};
      border: none;
      padding: 0px;
    `,
  }[variant]
}

export const ButtonPrimary = styled.button`
  all: unset;
  padding: 12px 35px;
  border-radius: 5px;
  font-family: Montserrat, sans-serif;
  font-size: ${fonts.sizes.regular};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ variant }) => variantStyles(variant)}
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const ActionButton = styled(ButtonPrimary)`
  margin-left: auto;
  opacity: ${({ isSelected }) => (isSelected ? "0.5" : "1")};
`

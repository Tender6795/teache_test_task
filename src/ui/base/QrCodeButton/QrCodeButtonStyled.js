import styled from "styled-components"

export const QrCodeButtonStyled = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes["small"]};
  border-radius: 10px;
  background: ${({ theme, background, transparent }) =>
    background && !transparent
      ? theme.colors[background]
      : transparent
      ? "transparent"
      : theme.colors.primary};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 60px;
  ${({ transparent, theme }) =>
    transparent && `border-color: ${theme.colors["blue"]}`};
  font-weight: 700;
  padding: 12px 20px;
  ${({ center }) => center && "margin: 0 auto;"};
  transition: box-shadow 0.2s;
  svg {
    margin-right: 10px;
    width: 31px;
    min-width: 31px;
  }

  &:hover {
    overflow: visible;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 0 20px 0 rgba(25, 29, 58, 0.17);
    & > div {
      opacity: 100;
      grid-template-rows: 1fr;
    }
  }
  @media (max-width: 1200px) {
    &:hover {
      border-radius: 10px;
      box-shadow: 0 0 20px 0 rgba(25, 29, 58, 0.17);
    }
    svg {
      min-width: 20px;
      width: 20px;
    }
  }
`

export const QrCodeStyled = styled.div`
  position: absolute;
  bottom: 100%;
  z-index: 5;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes["small"]};
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme, background, transparent }) =>
    background && !transparent
      ? theme.colors[background]
      : transparent
      ? "transparent"
      : theme.colors.primary};
  width: 100%;
  ${({ transparent, theme }) =>
    transparent && `border-color: ${theme.colors["blue"]}`};
  font-weight: 700;
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 200ms, opacity 50ms;
  & > div {
    padding: 0.5rem;
    gap: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > img {
      width: 90%;
      height: auto;
    }
  }
  @media (max-width: 1200px) {
    display: none;
    svg {
      min-width: 20px;
      width: 20px;
    }
  }
`

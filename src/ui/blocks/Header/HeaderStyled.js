import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

export const Anchor = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: ${themeFontSize("medium")};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors["txt"]};
  transition: color 0.2s;

  &:hover {
    color: ${themeColor("blue")};
    & > div {
      grid-template-rows: 1fr;
    }
  }

  @media (max-width: 1200px) {
    font-size: ${themeFontSize("regular")};
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("small")};
  }
  overflow: visible;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${({ solid }) => (solid ? "0 4px 10px 2px #00000008" : "none")};
  background-color: ${({ solid, theme }) =>
    solid ? theme.colors["white"] : "transparent"};
  z-index: 99;
  padding: 0 40px;
  @media (max-width: 1200px) {
    box-shadow: none;
  }
  @media (max-width: 640px) {
    box-shadow: 0 4px 10px 2px #00000008;
    background-color: ${({ theme }) => theme.colors["white"]};
    padding: 0 20px;
  }
`

export const Logo = styled.div`
  width: 190px;
  height: 100%;
  svg {
    width: 100%;
    height: 47px;
  }
  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 147px;
    svg {
      height: 26px;
    }
  }
  @media (max-width: 640px) {
    width: 99px;
    svg {
      height: 17px;
    }
  }
`

export const Navigation = styled.div`
  display: flex;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 87px;
  @media (max-width: 1200px) {
    height: 70px;
  }
  @media (max-width: 640px) {
    height: 50px;
  }
`

export const DownloadButtonContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-top: 10px;
    width: 150px;
    position: absolute;
    top: 100%;
    right: -30%;
    gap: 0.5rem;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.5s ease-out;
    z-index: 50;
    & > div {
      gap: 0.5rem;
      display: grid;
      overflow: hidden;
    }
  }
`

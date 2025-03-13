import styled from "styled-components"

export const BadgeContainerDesktop = styled.div`
  position: fixed;
  bottom: 5dvh;
  left: 5dvw;
  margin-left: 0;
  display: none;
  z-index: 99;

  @media (min-width: 768px) {
    display: block;
    & .badge {
      width: 250px;
      height: auto;
    }
  }

  @media (min-width: 1200px) {
    & .badge {
      width: 250px;
      height: auto;
    }
  }
`

export const BadgeContainerMobile = styled.div`
  max-width: 250px;
  margin-inline: auto;
  & .badge {
    width: 250px;
    height: auto;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

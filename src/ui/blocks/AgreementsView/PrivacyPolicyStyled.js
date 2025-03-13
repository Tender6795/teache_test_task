import { HashLink } from "react-router-hash-link"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

const SIDEBAR_WIDTH = 280
const MARGIN_LEFT = {
  xl: 60,
  lg: 40,
  md: 0,
}

export const HashLinkStyled = styled(HashLink)`
  color: ${themeColor("blue")};
`

export const PrivacyPolicyWrapper = styled.div`
  margin-top: 214px;
  padding: 0 40px;
  width: 100%;
  @media (max-width: 1024px) {
    margin-top: 114px;
  }
  @media (max-width: 640px) {
    margin-top: ${(props) => (props.isAppMode ? 40 : 114)}px;
    padding: 0 20px;
  }
`

export const Body = styled.div`
  display: flex;
  padding-bottom: 160px;
  margin-top: 100px;
  @media (max-width: 1024px) {
    margin-top: 66px;
    padding-bottom: 72px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 22px;
    padding-bottom: 50px;
  }
`

export const Content = styled.div`
  margin-left: ${MARGIN_LEFT.xl}px;
  text-align: left;
  font-family: Montserrat, sans-serif;
  width: calc(
    100% -
      ${(props) => (props.isAppMode ? "0" : SIDEBAR_WIDTH - MARGIN_LEFT.xl)}px
  );
  strong {
    font-size: 17px !important;
  }

  ol {
    margin-top: 13px;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    margin-left: ${(props) => (props.isAppMode ? "0" : MARGIN_LEFT.lg)}px;
    width: calc(
      100% -
        ${(props) => (props.isAppMode ? "0" : SIDEBAR_WIDTH - MARGIN_LEFT.lg)}px
    );
  }
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
  table {
    margin-top: 30px;
    tr {
      text-align: left;
    }
    strong {
      font-size: 16px;
    }
  }
  table,
  th,
  td {
    padding: 5px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  p,
  li {
    font-size: ${themeFontSize("medium")};
    color: ${themeColor("black")};
    font-weight: 400;
    line-height: 27px;
    span {
      font-weight: 700;
    }
    @media (max-width: 1024px) {
      line-height: 23px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    margin-top: 10px;
  }

  a {
    color: ${themeColor("blue")};
    font-size: ${themeFontSize("medium")};

    @media (max-width: 1024px) {
      line-height: 23px;
    }
    @media (max-width: 768px) {
      font-size: ${themeFontSize("regular")};
    }
  }
  ul {
    padding-left: 36px;
    li {
      font-size: ${themeFontSize("medium")};
      color: ${themeColor("black")};
      font-weight: 400;
      line-height: 27px;
      span {
        font-weight: 600;
      }
      @media (max-width: 1024px) {
        line-height: 23px;
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
  h2 {
    font-size: ${themeFontSize("h3")};
  }
  strong {
    font-size: ${themeFontSize("h5")};
    line-height: 18px;
    font-weight: 600;
    &.indent {
      font-size: ${themeFontSize("large")};
      line-height: 28px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 34px;
      &.indent {
        font-size: ${themeFontSize("regular")};
      }
    }
  }
  .termsTableContainer {
    width: 100%;
    overflow: scroll;

    .table {
      table-layout: auto;
      thead {
        td {
          min-width: 10rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    & > ol {
      list-style-position: inside;
    }
  }
`

export const Title = styled.div`
  font-size: ${themeFontSize("h2")};
  color: ${themeColor("txt")};
  font-weight: 600;
  font-family: Poppins, sans-serif;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: -0.8px;
  }
`

export const SideBarItem = styled.div`
  cursor: pointer;
  height: 85px;
  width: ${SIDEBAR_WIDTH}px;
  position: relative;
  display: flex;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: ${themeColor("txt")};
  border-radius: 0 10px 10px 0;
  border-right: 15px solid transparent;
  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 0;
    height: 85px;
    width: 100vw;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 69px;
    font-size: 18px;
    margin-bottom: 20px;
    &:before {
      height: 69px;
    }
  }
  @media (max-width: 768px) {
    height: 49px;
    padding-left: 0;
    border-radius: 0 3px 3px 0;
    letter-spacing: -0.8px;
    margin-bottom: 5px;
    &:before {
      height: 49px;
    }
  }
`

export const SideBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  a {
    &:hover {
      ${SideBarItem} {
        color: ${themeColor("blue")};
      }
    }
  }
  .active {
    ${SideBarItem} {
      color: ${themeColor("blue")};
      border-right-color: ${themeColor("blue")};
      &:before {
        background-color: ${themeColor("lightBlue2")};
      }
      @media (max-width: 768px) {
        border-right: 10px solid ${themeColor("blue")};
      }
    }
  }
  @media (max-width: 1024px) {
    min-width: 282px;
  }
`

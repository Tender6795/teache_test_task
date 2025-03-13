import { routesPath } from "conts/routes";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoIcon } from "ui/icons";

export const HeaderLogo = ({ primary }) => {
  return (
    <Logo>
      <Link to={routesPath.main}>
        <LogoIcon color={primary ? "white" : "blue"} />
      </Link>
    </Logo>
  );
};

const Logo = styled.div`
  z-index: 1;
  width: 99px;
  height: 100%;

  svg {
    width: 100%;
    height: 17px;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 147px;
    svg {
      height: 26px;
    }
  }

  @media (min-width: 1200px) {
    width: 164px;
    svg {
      height: 40px;
    }
  }
`;

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "ui/base/Container";
import { defaultThemeColors } from "ui/theme";
import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderMenu } from "./components/HeaderMenu";
import { HeaderNavigation } from "./components/HeaderNavigation";

export const HeaderVariant = ({ primary }) => {
  const [isAppMode, setIsAppMode] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    if (mode !== "app") {
      setIsAppMode(false);
    }
  }, [pathname]);

  if (isAppMode) return null;

  return (
    <HeaderWrapper primary={primary}>
      <Container>
        <HeaderContent>
          <HeaderLogo primary={primary} />
          <HeaderNavigation primary={primary} />
          <HeaderMenu primary={primary} />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 99;
  padding-inline: 1rem;
  font-family: Montserrat, sans-serif;
  background-color: ${({ primary }) =>
    primary ? defaultThemeColors.blue : defaultThemeColors.white};
`;

const HeaderContent = styled.div`
  max-width: 1536px;
  padding-inline: 1rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  //flex-wrap: wrap;
  gap: 1rem;
  padding-block: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-block: 0;
    min-height: 70px;
    gap: 0;
  }
  @media (min-width: 1024px) {
    min-height: 87px;
  }
`;

import { routesPath } from "conts/routes"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Container } from "ui/base/Container"
import { SocFacebookIcon, SocInstIcon, SocTwitterIcon } from "ui/icons"
import { themeColor, themeFontSize } from "ui/theme"

import { useAuth } from "context/AuthContext"
import { userRoute } from "pages/user/user.routes"
import { pixelTrackEvent } from "utils/facebookPixel"

export const FooterVariant = () => {
  const { token } = useAuth()
  const { pathname } = useLocation()

  return (
    <FooterWrapper>
      <Container wide>
        <Row>
          <Col>
            <Social>
              <SocialItem
                target='_blank'
                href='https://www.instagram.com/teache.app/'>
                <SocInstIcon />
              </SocialItem>
              <SocialItem
                target='_blank'
                href='https://www.facebook.com/Teacheapp/'>
                <SocFacebookIcon />
              </SocialItem>
              <SocialItem target='_blank' href='https://twitter.com/teache_app'>
                <SocTwitterIcon />
              </SocialItem>
            </Social>
            <Links>
              {token ? (
                <Link
                  to={userRoute.myClasses}
                  onClick={() =>
                    pathname === routesPath.main
                      ? pixelTrackEvent("Home-footer: Clicked on My Classes")
                      : null
                  }>
                  My Classes
                </Link>
              ) : (
                <Link
                  to={routesPath.about}
                  onClick={() =>
                    pathname === routesPath.main
                      ? pixelTrackEvent("Home-footer: Clicked on About Us")
                      : null
                  }>
                  About Us
                </Link>
              )}

              <Link
                to={routesPath.faq}
                onClick={() =>
                  pathname === routesPath.main
                    ? pixelTrackEvent("Home-footer: Clicked on  faq")
                    : null
                }>
                FAQs
              </Link>

              <Link
                to={routesPath.privacy}
                onClick={() =>
                  pathname === routesPath.main
                    ? pixelTrackEvent("Home-footer: Clicked on Privacy")
                    : null
                }>
                Privacy
              </Link>
              <Link
                to={routesPath.terms}
                onClick={() =>
                  pathname === routesPath.main
                    ? pixelTrackEvent("Home-footer: Clicked on Terms")
                    : null
                }>
                Terms
              </Link>
            </Links>

            <ColText>
              <Text>Copyright © 2025 Teache. All rights reserved</Text>
            </ColText>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  background-color: ${themeColor("blue")};
  color: ${themeColor("white")};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1536px;
  margin-inline: auto;
  padding: 1rem;
  min-height: 86px;
`

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  @media (min-width: 1024px) {
    gap: 3rem;
    justify-content: space-between;
  }
`

const ColText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  font-size: ${themeFontSize("small")};
  text-align: left;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: 1200px) {
    font-size: ${themeFontSize("extraSmall")};
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const SocialItem = styled.a`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${themeColor("white")};
    transition: all 0.2s;
  }
  &:hover {
    svg {
      fill: ${themeColor("txt")};
    }
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
  gap: 1rem;
  a {
    font-size: ${themeFontSize("small")};
    text-align: left;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    line-height: 21px;
    &:hover {
      color: ${themeColor("txt")};
    }
  }

  @media (min-width: 1024px) {
    margin-left: 3rem;
  }
  @media (max-width: 1200px) {
    justify-content: flex-start;
    a {
      font-size: ${themeFontSize("extraSmall")};
    }
  }
  @media (max-width: 640px) {
  }
`

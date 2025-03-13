import { qrCodeButtonsData } from "conts/QrCodeButtonData"
import { routesPath } from "conts/routes"
import { appRoute } from "pages/app/app.routes"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Link, useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Container } from "ui/base/Container"
import { HelperText } from "ui/base/helperText/HelperText"
import { QrDownloadButton } from "ui/base/QrDownloadButton"
import { LogoIcon } from "ui/icons"
import { pixelTrackEvent } from "utils/facebookPixel"
import {
  Anchor,
  DownloadButtonContainer,
  HeaderContent,
  HeaderWrapper,
  Logo,
  Navigation,
} from "./HeaderStyled"

const Header = ({ solid, color }) => {
  const [isAppMode, setIsAppMode] = useState(true)
  const { pathname } = useLocation()

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const mode = params.get("mode")
    if (mode !== "app") {
      setIsAppMode(false)
    }
  }, [pathname])

  const showPromotion = !isMobile && pathname === routesPath.instructorPage

  if (isAppMode) return null
  return (
    <HeaderWrapper solid={solid}>
      <Container>
        <HeaderContent>
          <Logo>
            <Link to={routesPath.main}>
              <LogoIcon color={color !== "white" ? "blue" : "white"} />
            </Link>
          </Logo>
          {showPromotion ? (
            <Link
              to={appRoute.createAccount.fullPath}
              style={{ marginInline: "auto" }}>
              <Anchor color='blue'>
                <strong>
                  Special Offer: Instructors Who Sign-Up Will Receive $25 via
                  PayPal!
                </strong>
              </Anchor>
            </Link>
          ) : null}
          <Navigation>
            {isMobile ? (
              <>
                <Link to={appRoute.createAccount.fullPath}>
                  <Anchor color={color}>
                    <HelperText color='blue' weight={700}>
                      Sign-Up and Get $25!
                    </HelperText>
                  </Anchor>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={routesPath.faq}
                  onClick={() =>
                    pathname === routesPath.main
                      ? pixelTrackEvent("Home-header: Clicked on FAQ")
                      : null
                  }>
                  <Anchor color={color}>FAQ</Anchor>
                </Link>
                <Link
                  to={appRoute.createAccount.fullPath}
                  onClick={() =>
                    pathname === routesPath.main
                      ? pixelTrackEvent("Home-header: Clicked on Sign-up")
                      : null
                  }>
                  <Anchor color={color} style={{ whiteSpace: "nowrap" }}>
                    Sign-up
                  </Anchor>
                </Link>
                <HashLink
                  to={`${routesPath.main}#download`}
                  onClick={() =>
                    pathname === routesPath.main
                      ? pixelTrackEvent("Home-header: Clicked on Download")
                      : null
                  }>
                  <Anchor color={color}>
                    Download
                    <DownloadButtonContainer>
                      <div>
                        {qrCodeButtonsData?.map((item) => (
                          <QrDownloadButton
                            key={item.text}
                            qrcode={item.qrcode}
                            href={item.href}
                            icon={item.icon}
                            bg={item.bg}>
                            {item.text}
                          </QrDownloadButton>
                        ))}
                      </div>
                    </DownloadButtonContainer>
                  </Anchor>
                </HashLink>
              </>
            )}
          </Navigation>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

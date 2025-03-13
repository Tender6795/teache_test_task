import { useAuth } from "context/AuthContext";
import { qrCodeButtonsData } from "conts/QrCodeButtonData";
import { routesPath } from "conts/routes";
import { userRoute } from "pages/user/user.routes";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { QrDownloadButton } from "ui/base/QrDownloadButton";
import { FiltersSection } from "ui/blocks/filtersSection/FiltersSection";
import { defaultThemeColors, fonts } from "ui/theme";
import { pixelTrackEvent } from "utils/facebookPixel";
import { useState } from "react";
import { FiltersModal } from "../../../base/modal/FiltersModal";

export const HeaderNavigation = ({ primary }) => {
  const { token, userRole } = useAuth();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <Navigation primary={primary} open={open}>
      {userRole === 1 && pathname.startsWith("/user") ? (
        <>
          <div className="scale-down-filters" onClick={() => setOpen(true)}>
            <FiltersSection hasSeparator={false} />
          </div>
          <FiltersModal show={open} handleClose={() => setOpen(false)}>
            <FiltersSection
              hasSeparator={false}
              onSearch={() => setOpen(false)}
            />
          </FiltersModal>
        </>
      ) : (
        <>
          {token ? (
            <Link
              to={userRoute.myClasses}
              onClick={() =>
                pathname === routesPath.main
                  ? pixelTrackEvent("Home-header: Clicked on My Classes")
                  : null
              }
            >
              <Anchor>My Classes</Anchor>
            </Link>
          ) : (
            <Link
              to={routesPath.about}
              onClick={() =>
                pathname === routesPath.main
                  ? pixelTrackEvent("Home-header: Clicked on About Us")
                  : null
              }
            >
              <Anchor>About Us</Anchor>
            </Link>
          )}

          <Link
            to={routesPath.faq}
            onClick={() =>
              pathname === routesPath.main
                ? pixelTrackEvent("Home-header: Clicked on FAQ")
                : null
            }
          >
            <Anchor>FAQs</Anchor>
          </Link>

          <HashLink
            to={`${routesPath.main}#download`}
            onClick={() =>
              pathname === routesPath.main
                ? pixelTrackEvent("Home-header: Clicked on Download")
                : null
            }
          >
            <Anchor>
              Download the App
              <DownloadButtonContainer>
                <div>
                  {qrCodeButtonsData?.map((item) => (
                    <QrDownloadButton
                      key={item.text}
                      qrcode={item.qrcode}
                      href={item.href}
                      icon={item.icon}
                      bg={item.bg}
                    >
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
  );
};

const Navigation = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${fonts.sizes.small};
  color: ${({ primary }) =>
    primary ? defaultThemeColors.white : defaultThemeColors.txt};
  font-family: Poppins;
  font-weight: 400;
  transition: color 0.2s;

  & div {
    &:hover {
      color: ${({ primary }) =>
        primary ? defaultThemeColors.lightBlue : defaultThemeColors.blue};

      & > div {
        grid-template-rows: 1fr;
      }
    }
  }

  margin-left: calc(-8%);
  margin-right: calc(-8%);
  z-index: 0;

  & .scale-down-filters {
    opacity: ${({ open }) => (open ? 0 : 1)};
    visibility: ${({ open }) => (open ? "hidden" : "visible")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    scale: 0.7;
    cursor: pointer;

    & * {
      pointer-events: none;
    }
  }

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Anchor = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  overflow: visible;
`;

const DownloadButtonContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-top: 10px;
    width: 150px;
    position: absolute;
    top: 100%;
    right: -7%;
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

    filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12));
  }
`;

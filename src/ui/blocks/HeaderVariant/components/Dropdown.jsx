import { useSignupModal } from "context/SignupModalContext";
import { useOutsideClick } from "hooks/useOutsideClick";
import { appRoute } from "pages/app/app.routes";
import { instructorRoute } from "pages/instructor/instructor.routes";
import { userRoute } from "pages/user/user.routes";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuIcon } from "ui/icons";
import { UserIcon } from "ui/icons/UserIcon";
import { defaultThemeColors, themeColor } from "ui/theme";
import { getAvatarUrl } from "utils";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./singupModal/SignupModal";

export const Dropdown = ({ isLoggedIn, onLogout, userRole, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { showSignupModal, setShowSignupModal } = useSignupModal();
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useOutsideClick(menuRef, toggleDropdown);

  const menuItems = [
    {
      label: "Log in",
      action: () => {
        toggleDropdown();
        setShowModal(true);
      },
    },
    {
      label: "Sign up",
      action: () => {
        toggleDropdown();
        setShowSignupModal(true);
      },
    },
    { separator: true },
    { label: "Gift cards" },
    { label: "Legal" },
    {
      label: "Become an instructor",
      action: () => {
        navigate(appRoute.createAccount.fullPath);
      },
    },
    { label: "Help Center" },
  ];

  const userMenu = [
    {
      label: "Messages",
      action: () => navigate(userRoute.messages),
    },
    {
      label: "Notifications",
    },
    {
      label: "Classes",
      action: () => navigate(userRoute.myClasses),
    },
    { separator: true },
    { label: "Settings", action: () => navigate(userRoute.settings) },
    { label: "Legal" },
    {
      label: "Logout",
      action: onLogout,
    },
  ];

  const instructorMenu = [
    {
      label: "Notifications",
    },
    {
      label: "Classes listing",
      action: () => navigate(instructorRoute.classListing),
    },
    { separator: true },
    { label: "Help Center" },
    { label: "Legal" },
    {
      label: "Logout",
      action: onLogout,
    },
  ];

  const menus = isLoggedIn
    ? userRole === 1
      ? userMenu
      : instructorMenu
    : menuItems;

  const profilePic =
    userRole === 1 ? userData?.profile_pic : userData?.teacher?.profile_pic;

  return (
    <>
      {showSignupModal ? (
        <SignupModal
          show={showSignupModal}
          handleClose={() => setShowSignupModal(false)}
          setLoginModal={setShowModal}
        />
      ) : null}
      {showModal ? (
        <LoginModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          setSignupModal={setShowSignupModal}
        />
      ) : null}

      <DropdownContainer>
        <AvatarWrapper onClick={toggleDropdown}>
          <MenuIcon className="menu-icon" />
          <Avatar>
            {profilePic ? (
              <img src={getAvatarUrl(profilePic)} alt="profile picture" />
            ) : (
              <UserIcon color="placeholder" />
            )}
          </Avatar>
        </AvatarWrapper>

        {isOpen && (
          <DropdownMenu ref={menuRef}>
            {menus.map((item, index) =>
              item.separator ? (
                <Separator key={`separator-${index}`} />
              ) : (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    toggleDropdown();
                    item.action?.();
                  }}
                >
                  {item.label}
                </MenuItem>
              )
            )}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const AvatarWrapper = styled.button`
  outline: none;
  background-color: ${defaultThemeColors.white};
  height: 40px;
  padding-inline: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
  transition: all 300ms ease;

  &:hover {
    filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12));
  }

  border-radius: 99rem;

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${themeColor("inputBgNeutral")};
  border-radius: 99px;

  overflow: hidden;

  & > svg {
    height: 15px;
    width: 15px;
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Separator = styled.div`
  height: 0.5px;
  width: 100%;
  background-color: ${themeColor("txt")};
  opacity: 0.2;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid rgb(0 0 0 / 0.05);
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  margin-top: 8px;
  min-width: 220px;
  overflow: hidden;
  z-index: 10;
`;

const MenuItem = styled.a`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: ${themeColor("txt")};
  font-size: 14px;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${themeColor("bgNeutral")};
  }
`;

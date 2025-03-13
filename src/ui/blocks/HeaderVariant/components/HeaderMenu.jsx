import { useAuth } from "context/AuthContext";
import { useSignupModal } from "context/SignupModalContext";
import { instructorRoute } from "pages/instructor/instructor.routes";
import React from "react";
import styled from "styled-components";
import { defaultThemeColors, fonts } from "ui/theme";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";

export const HeaderMenu = ({ primary }) => {
  const navigate = useNavigate();
  const { token, userData, userRole, toggleRole, logout } = useAuth();

  const { setShowSignupModal } = useSignupModal();

  const onSwitch = (to) => {
    toggleRole();
    navigate(to);
  };

  return (
    <Menu>
      {token ? (
        userRole === 1 ? (
          userData?.teacher?.profile_completion === "100" ? (
            <SwitchRoleButton
              primary={primary}
              onClick={() => onSwitch(instructorRoute.homeInstructor)}
            >
              Switch to Teach
            </SwitchRoleButton>
          ) : (
            <BecomeInstructorButton
              primary={primary}
              onClick={() => setShowSignupModal(true)}
            >
              Become an Instructor
            </BecomeInstructorButton>
          )
        ) : (
          <SwitchRoleButton primary={primary} onClick={() => onSwitch("/")}>
            Switch to User
          </SwitchRoleButton>
        )
      ) : (
        <BecomeInstructorButton
          primary={primary}
          onClick={() => setShowSignupModal(true)}
        >
          Become an Instructor
        </BecomeInstructorButton>
      )}

      <Dropdown
        userRole={userRole}
        userData={userData}
        isLoggedIn={!!token}
        onLogout={() => {
          logout();
          navigate("/");
        }}
      />
    </Menu>
  );
};

const Menu = styled.div`
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 31px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const BecomeInstructorButton = styled.div`
  outline: none;
  color: ${({ primary }) =>
    primary ? defaultThemeColors.white : defaultThemeColors.blue};
  font-family: Montserrat, sans-serif;
  font-size: ${fonts.sizes.small};
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ primary }) =>
    primary ? defaultThemeColors.white : defaultThemeColors.blue};
  border-radius: 5px;
`;

const SwitchRoleButton = styled.button`
  background: none;
  border: none;
  color: ${({ primary }) =>
    primary ? defaultThemeColors.white : defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
  font-weight: 500;
  padding: 0;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

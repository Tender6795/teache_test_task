import React from "react";
import { LogoIcon } from "../../icons/LogoIcon";
import {
  Button,
  ButtonContainer,
  FullScreenContainer,
  HeaderLink,
  HeaderMenu,
  HeaderMenuWrapper,
  IconContainer,
  LogoIconWrapper,
  TextContainer,
  HeaderMenuCenterWrapper,
} from "./HeaderStyled";
import { UserIcon } from "../../icons/UserIcon";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";

export const Header = () => {
  return (
    <>
      <HeaderMenuWrapper>
        <LogoIconWrapper>
          <LogoIcon />
        </LogoIconWrapper>
        <HeaderMenuCenterWrapper>
          <HeaderMenu>
            <HeaderLink href="/">About Us</HeaderLink>
            <HeaderLink href="/">FAQs</HeaderLink>
            <HeaderLink href="/">Download the App</HeaderLink>
          </HeaderMenu>
        </HeaderMenuCenterWrapper>
        <ButtonContainer>
          <Button>Become an Instructor</Button>
          <IconContainer>
            <UserIcon />
            <ArrowDownIcon />
          </IconContainer>
        </ButtonContainer>
      </HeaderMenuWrapper>
      <FullScreenContainer>
        <TextContainer>Learn A New Thing Today!</TextContainer>
      </FullScreenContainer>
    </>
  );
};

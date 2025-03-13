import React from "react";
import { LogoIcon } from "../../icons/LogoIcon";
import { UserIcon } from "../../icons/UserIcon";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
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
  HeaderWrapper,
} from "./HeaderStyled2";

export const Header2 = () => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

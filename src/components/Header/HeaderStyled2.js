import styled from "styled-components";
import HeaderBackgroundImage from "./HeaderBackground.jpg"; 

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 453px;
  background-image: url('${HeaderBackgroundImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HeaderMenuWrapper = styled.div`
  width: 100%;
  height: 112px;
  padding: 45px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

export const LogoIconWrapper = styled.div`
  cursor: pointer;
`;

export const HeaderMenuCenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;

export const HeaderLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #b0aaff;
  }
`;

export const Button = styled.button`
  width: 251px;
  height: 52px;
  border-radius: 5px;
  border: 2px solid white;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: white;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const IconContainer = styled.div`
  width: 86px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const FullScreenContainer = styled.div`
  width: 100%;
  height: 341px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const TextContainer = styled.div`
  width: 708px;
  height: 166px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 68px;
  text-align: center;
  color: white;
`;

import styled from "styled-components";

export const HeaderMenuWrapper = styled.div`
  width: 100%;
  height: 112px;
  background-color: #554df1;
  padding: 45px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LogoIconWrapper = styled.div`
  cursor: pointer;
`;

export const HeaderMenuCenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;
`;

export const HeaderLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #b0aaff;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 251px;
  height: 52px;
  border-radius: 5px;
  border: 2px solid white;
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
  cursor: pointer;

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
  background-color: #554df1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  height: 341px;
`;

export const TextContainer = styled.div`
  width: 708px;
  height: 166px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 68px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: white;
`;

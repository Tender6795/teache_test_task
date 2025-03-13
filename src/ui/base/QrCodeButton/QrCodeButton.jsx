import React from "react";
import { QrCodeButtonStyled, QrCodeStyled } from "./QrCodeButtonStyled";

export const QrCodeButton = (props) => {
  const {
    color,
    bg,
    size,
    icon,
    transparent,
    center,
    width,
    children,
    onClick,
    qrcode,
    ...rest
  } = props;
  return (
    <QrCodeButtonStyled
      center={center}
      color={color}
      background={bg}
      size={size}
      transparent={transparent}
      width={width}
      onClick={onClick}
      {...rest}
    >
      {icon && icon}
      {children}
      
      {qrcode ? 
      <QrCodeStyled 
      color={color}
      background={bg}
      >
        <div>
        <p>SCAN ME</p>
        <img src={qrcode} alt="qrcode" loading="lazy" />
        </div>
      </QrCodeStyled>
      : null}
    </QrCodeButtonStyled>
  );
};

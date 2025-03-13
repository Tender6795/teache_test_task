import React from "react";
import { QrDownloadButtonStyled, QrDownloadStyled } from "./QrDownloadButtonStyled";

export const QrDownloadButton = (props) => {
  const { children, href, icon, bg, qrcode, ...rest } = props;
  const handleClick = () => {
    window.open(href, '_blank', 'noopener noreferrer');
  };
  return (
    <QrDownloadButtonStyled
      {...rest}
      onClick={handleClick}
      background={bg}
     
    >
      {qrcode ? 
      <QrDownloadStyled 
      background={bg}
      >
        <div>
        <p>SCAN ME</p>
        <img src={qrcode} alt="qrcode" loading="lazy" />
        </div>
      </QrDownloadStyled>
      : null}

      <div>
      {icon && icon}
      {children}
      </div>
     
   
    </QrDownloadButtonStyled>
  );
};
